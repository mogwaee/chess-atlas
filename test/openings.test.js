import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

import {
  applyMove,
  createInitialBoard,
  validateOpenings,
} from "../chess.js";

async function loadOpeningData() {
  const source = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const start = source.indexOf("const OPENINGS =");
  const end = source.indexOf("\nconst files =");
  const context = {};

  assert.notEqual(start, -1, "OPENINGS declaration should exist");
  assert.notEqual(end, -1, "OPENINGS declaration should have a known boundary");

  vm.createContext(context);
  vm.runInContext(
    `${source.slice(start, end)}\nthis.openings = OPENINGS;`,
    context,
  );
  return context.openings;
}

test("every opening move has a piece on its source square", async () => {
  const openings = await loadOpeningData();
  assert.doesNotThrow(() => validateOpenings(openings));
});

test("invalid source squares fail loudly", () => {
  assert.throws(
    () =>
      applyMove(createInitialBoard(), {
        from: "a3",
        to: "b4",
        notation: "axb4",
      }),
    /a3 is empty/,
  );
});

test("castling moves both king and rook", () => {
  let board = createInitialBoard();
  delete board.f1;
  delete board.g1;
  board = applyMove(board, { from: "e1", to: "g1", notation: "O-O" });

  assert.equal(board.g1, "wk");
  assert.equal(board.f1, "wr");
  assert.equal(board.e1, undefined);
  assert.equal(board.h1, undefined);
});
