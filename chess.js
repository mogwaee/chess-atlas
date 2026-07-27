const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

function squareDelta(from, to) {
  return {
    file: FILES.indexOf(to[0]) - FILES.indexOf(from[0]),
    rank: Number(to[1]) - Number(from[1]),
  };
}

function isPathClear(board, from, to) {
  const { file, rank } = squareDelta(from, to);
  const fileStep = Math.sign(file);
  const rankStep = Math.sign(rank);
  let fileIndex = FILES.indexOf(from[0]) + fileStep;
  let rankIndex = Number(from[1]) + rankStep;

  while (`${FILES[fileIndex]}${rankIndex}` !== to) {
    if (board[`${FILES[fileIndex]}${rankIndex}`]) {
      return false;
    }
    fileIndex += fileStep;
    rankIndex += rankStep;
  }

  return true;
}

function assertMoveGeometry(board, move, movingPiece) {
  const targetPiece = board[move.to];
  const { file, rank } = squareDelta(move.from, move.to);
  const absFile = Math.abs(file);
  const absRank = Math.abs(rank);
  const type = movingPiece[1];

  if (targetPiece?.[0] === movingPiece[0]) {
    throw new Error(`Invalid move ${move.notation}: ${move.to} has a friendly piece`);
  }

  let valid = false;

  if (type === "p") {
    const direction = movingPiece[0] === "w" ? 1 : -1;
    const startingRank = movingPiece[0] === "w" ? 2 : 7;
    const singlePush = file === 0 && rank === direction && !targetPiece;
    const doublePush =
      file === 0 &&
      rank === direction * 2 &&
      Number(move.from[1]) === startingRank &&
      !targetPiece &&
      !board[`${move.from[0]}${Number(move.from[1]) + direction}`];
    const capture = absFile === 1 && rank === direction && Boolean(targetPiece);
    valid = singlePush || doublePush || capture;
  } else if (type === "n") {
    valid = (absFile === 1 && absRank === 2) || (absFile === 2 && absRank === 1);
  } else if (type === "b") {
    valid = absFile === absRank && absFile > 0 && isPathClear(board, move.from, move.to);
  } else if (type === "r") {
    valid =
      ((file === 0 && absRank > 0) || (rank === 0 && absFile > 0)) &&
      isPathClear(board, move.from, move.to);
  } else if (type === "q") {
    valid =
      ((absFile === absRank && absFile > 0) ||
        (file === 0 && absRank > 0) ||
        (rank === 0 && absFile > 0)) &&
      isPathClear(board, move.from, move.to);
  } else if (type === "k") {
    valid =
      (absFile <= 1 && absRank <= 1 && absFile + absRank > 0) ||
      (absFile === 2 && rank === 0 && isPathClear(board, move.from, move.to));
  }

  if (!valid) {
    throw new Error(
      `Invalid move ${move.notation}: ${movingPiece} cannot move from ${move.from} to ${move.to}`,
    );
  }
}

export function createInitialBoard() {
  const board = {};

  FILES.forEach((file) => {
    board[`${file}2`] = "wp";
    board[`${file}7`] = "bp";
  });

  Object.assign(board, {
    a1: "wr", b1: "wn", c1: "wb", d1: "wq",
    e1: "wk", f1: "wb", g1: "wn", h1: "wr",
    a8: "br", b8: "bn", c8: "bb", d8: "bq",
    e8: "bk", f8: "bb", g8: "bn", h8: "br",
  });

  return board;
}

export function applyMove(board, move) {
  const nextBoard = { ...board };
  const movingPiece = nextBoard[move.from];

  if (!movingPiece) {
    throw new Error(`Invalid move ${move.notation}: ${move.from} is empty`);
  }

  assertMoveGeometry(board, move, movingPiece);
  delete nextBoard[move.from];

  const fileDistance = Math.abs(
    FILES.indexOf(move.from[0]) - FILES.indexOf(move.to[0]),
  );

  if (movingPiece[1] === "k" && fileDistance === 2) {
    const rookMoves = {
      g1: ["h1", "f1"],
      c1: ["a1", "d1"],
      g8: ["h8", "f8"],
      c8: ["a8", "d8"],
    };
    const [rookFrom, rookTo] = rookMoves[move.to];
    const rook = nextBoard[rookFrom];

    if (!rook || rook[1] !== "r") {
      throw new Error(`Invalid castle ${move.notation}: rook is missing`);
    }

    nextBoard[rookTo] = rook;
    delete nextBoard[rookFrom];
  }

  nextBoard[move.to] = move.promotion ?? movingPiece;
  return nextBoard;
}

export function validateOpenings(openings) {
  Object.entries(openings).forEach(([side, families]) => {
    families.forEach((family) => {
      family.variants.forEach((variant) => {
        let board = createInitialBoard();

        variant.moves.forEach((move, index) => {
          try {
            const expectedColor = index % 2 === 0 ? "w" : "b";
            if (board[move.from]?.[0] !== expectedColor) {
              throw new Error(
                `Invalid move ${move.notation}: expected ${expectedColor === "w" ? "White" : "Black"} to move`,
              );
            }
            board = applyMove(board, move);
          } catch (error) {
            throw new Error(
              `${side} / ${family.family} / ${variant.name}: ${error.message}`,
            );
          }
        });
      });
    });
  });
}
