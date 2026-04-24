const PIECES = {
  wp: "♙",
  wr: "♖",
  wn: "♘",
  wb: "♗",
  wq: "♕",
  wk: "♔",
  bp: "♟",
  br: "♜",
  bn: "♞",
  bb: "♝",
  bq: "♛",
  bk: "♚",
};

const OPENINGS = {
  white: [
    {
      family: "Ruy Lopez",
      variants: [
        {
          name: "Morphy Defense, Closed",
          description:
            "The textbook closed Ruy Lopez with ...a6, ...Nf6, and the main maneuvering structure after both sides castle.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "e7", to: "e5", notation: "... e5" },
            { from: "g1", to: "f3", notation: "2. Nf3" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "f1", to: "b5", notation: "3. Bb5" },
            { from: "a7", to: "a6", notation: "... a6" },
            { from: "b5", to: "a4", notation: "4. Ba4" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "e1", to: "g1", notation: "5. O-O" },
            { from: "f8", to: "e7", notation: "... Be7" },
            { from: "f1", to: "e1", notation: "6. Re1" },
            { from: "b7", to: "b5", notation: "... b5" },
            { from: "a4", to: "b3", notation: "7. Bb3" },
            { from: "d7", to: "d6", notation: "... d6" },
            { from: "c2", to: "c3", notation: "8. c3" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "h2", to: "h3", notation: "9. h3" },
            { from: "c6", to: "b8", notation: "... Nb8" },
            { from: "d2", to: "d4", notation: "10. d4" },
            { from: "b8", to: "d7", notation: "... Nbd7" },
          ],
        },
        {
          name: "Exchange Variation",
          description:
            "The direct exchange line where White gives up the bishop pair tension early for structural clarity.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "e7", to: "e5", notation: "... e5" },
            { from: "g1", to: "f3", notation: "2. Nf3" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "f1", to: "b5", notation: "3. Bb5" },
            { from: "a7", to: "a6", notation: "... a6" },
            { from: "b5", to: "c6", notation: "4. Bxc6" },
            { from: "d7", to: "c6", notation: "... dxc6" },
            { from: "e1", to: "g1", notation: "5. O-O" },
            { from: "d8", to: "d6", notation: "... Qd6" },
            { from: "d2", to: "d4", notation: "6. d4" },
            { from: "e5", to: "d4", notation: "... exd4" },
            { from: "f3", to: "d4", notation: "7. Nxd4" },
            { from: "c8", to: "d7", notation: "... Bd7" },
            { from: "b1", to: "c3", notation: "8. Nc3" },
            { from: "e8", to: "c8", notation: "... O-O-O" },
            { from: "c1", to: "e3", notation: "9. Be3" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "d1", to: "e1", notation: "10. Qe1" },
            { from: "h7", to: "h5", notation: "... h5" },
          ],
        },
      ],
    },
    {
      family: "Italian Game",
      variants: [
        {
          name: "Giuoco Pianissimo",
          description:
            "The quiet classical Italian with c3, d3, castling, and slow piece maneuvering.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "e7", to: "e5", notation: "... e5" },
            { from: "g1", to: "f3", notation: "2. Nf3" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "f1", to: "c4", notation: "3. Bc4" },
            { from: "f8", to: "c5", notation: "... Bc5" },
            { from: "c2", to: "c3", notation: "4. c3" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "d2", to: "d3", notation: "5. d3" },
            { from: "d7", to: "d6", notation: "... d6" },
            { from: "e1", to: "g1", notation: "6. O-O" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "f1", to: "e1", notation: "7. Re1" },
            { from: "a7", to: "a6", notation: "... a6" },
            { from: "c4", to: "b3", notation: "8. Bb3" },
            { from: "c5", to: "a7", notation: "... Ba7" },
            { from: "b1", to: "d2", notation: "9. Nbd2" },
            { from: "h7", to: "h6", notation: "... h6" },
            { from: "d2", to: "f1", notation: "10. Nf1" },
            { from: "f8", to: "e8", notation: "... Re8" },
          ],
        },
        {
          name: "Evans Gambit",
          description:
            "A famous attacking gambit where White sacrifices the b-pawn for lead in development.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "e7", to: "e5", notation: "... e5" },
            { from: "g1", to: "f3", notation: "2. Nf3" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "f1", to: "c4", notation: "3. Bc4" },
            { from: "f8", to: "c5", notation: "... Bc5" },
            { from: "b2", to: "b4", notation: "4. b4" },
            { from: "c5", to: "b4", notation: "... Bxb4" },
            { from: "c2", to: "c3", notation: "5. c3" },
            { from: "b4", to: "a5", notation: "... Ba5" },
            { from: "d2", to: "d4", notation: "6. d4" },
            { from: "e5", to: "d4", notation: "... exd4" },
            { from: "e1", to: "g1", notation: "7. O-O" },
            { from: "d4", to: "c3", notation: "... dxc3" },
            { from: "d1", to: "b3", notation: "8. Qb3" },
            { from: "d8", to: "f6", notation: "... Qf6" },
            { from: "e4", to: "e5", notation: "9. e5" },
            { from: "f6", to: "g6", notation: "... Qg6" },
            { from: "b1", to: "c3", notation: "10. Nc3" },
            { from: "g8", to: "e7", notation: "... Nge7" },
          ],
        },
      ],
    },
    {
      family: "Queen's Gambit",
      variants: [
        {
          name: "Declined, Orthodox",
          description:
            "The classical Queen's Gambit Declined with solid development and the orthodox center.",
          moves: [
            { from: "d2", to: "d4", notation: "1. d4" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "c2", to: "c4", notation: "2. c4" },
            { from: "e7", to: "e6", notation: "... e6" },
            { from: "b1", to: "c3", notation: "3. Nc3" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "c1", to: "g5", notation: "4. Bg5" },
            { from: "f8", to: "e7", notation: "... Be7" },
            { from: "e2", to: "e3", notation: "5. e3" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "g1", to: "f3", notation: "6. Nf3" },
            { from: "h7", to: "h6", notation: "... h6" },
            { from: "g5", to: "h4", notation: "7. Bh4" },
            { from: "b7", to: "b6", notation: "... b6" },
            { from: "c4", to: "d5", notation: "8. cxd5" },
            { from: "e6", to: "d5", notation: "... exd5" },
            { from: "f1", to: "d3", notation: "9. Bd3" },
            { from: "c8", to: "b7", notation: "... Bb7" },
            { from: "e1", to: "g1", notation: "10. O-O" },
            { from: "b8", to: "d7", notation: "... Nbd7" },
          ],
        },
        {
          name: "Accepted",
          description:
            "Black accepts the gambit pawn and White develops quickly to regain the center.",
          moves: [
            { from: "d2", to: "d4", notation: "1. d4" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "c2", to: "c4", notation: "2. c4" },
            { from: "d5", to: "c4", notation: "... dxc4" },
            { from: "g1", to: "f3", notation: "3. Nf3" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "e2", to: "e3", notation: "4. e3" },
            { from: "e7", to: "e6", notation: "... e6" },
            { from: "f1", to: "c4", notation: "5. Bxc4" },
            { from: "c7", to: "c5", notation: "... c5" },
            { from: "e1", to: "g1", notation: "6. O-O" },
            { from: "a7", to: "a6", notation: "... a6" },
            { from: "d1", to: "e2", notation: "7. Qe2" },
            { from: "b7", to: "b5", notation: "... b5" },
            { from: "c4", to: "b3", notation: "8. Bb3" },
            { from: "c8", to: "b7", notation: "... Bb7" },
            { from: "a1", to: "d1", notation: "9. Rd1" },
            { from: "b5", to: "b4", notation: "... b4" },
            { from: "b1", to: "d2", notation: "10. Nbd2" },
            { from: "b8", to: "d7", notation: "... Nbd7" },
          ],
        },
      ],
    },
    {
      family: "London System",
      variants: [
        {
          name: "Classical Setup",
          description:
            "The most recognizable London shape with Bf4, e3, c3, Nbd2, and the bishop retreat after ...Bd6.",
          moves: [
            { from: "d2", to: "d4", notation: "1. d4" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "g1", to: "f3", notation: "2. Nf3" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "c1", to: "f4", notation: "3. Bf4" },
            { from: "e7", to: "e6", notation: "... e6" },
            { from: "e2", to: "e3", notation: "4. e3" },
            { from: "f8", to: "d6", notation: "... Bd6" },
            { from: "f4", to: "g3", notation: "5. Bg3" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "b1", to: "d2", notation: "6. Nbd2" },
            { from: "c7", to: "c5", notation: "... c5" },
            { from: "c2", to: "c3", notation: "7. c3" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "f1", to: "d3", notation: "8. Bd3" },
            { from: "f8", to: "e8", notation: "... Re8" },
            { from: "e1", to: "g1", notation: "9. O-O" },
            { from: "e6", to: "e5", notation: "... e5" },
            { from: "f3", to: "e5", notation: "10. Nxe5" },
            { from: "c6", to: "e5", notation: "... Nxe5" },
          ],
        },
        {
          name: "Jobava London",
          description:
            "An aggressive London-related setup with Nc3 and Bf4 aimed at fast kingside activity.",
          moves: [
            { from: "d2", to: "d4", notation: "1. d4" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "b1", to: "c3", notation: "2. Nc3" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "c1", to: "f4", notation: "3. Bf4" },
            { from: "a7", to: "a6", notation: "... a6" },
            { from: "e2", to: "e3", notation: "4. e3" },
            { from: "c7", to: "c5", notation: "... c5" },
            { from: "g1", to: "f3", notation: "5. Nf3" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "d4", to: "c5", notation: "6. dxc5" },
            { from: "e7", to: "e6", notation: "... e6" },
            { from: "b2", to: "b4", notation: "7. b4" },
            { from: "f8", to: "c5", notation: "... Bxc5" },
            { from: "f1", to: "d3", notation: "8. Bd3" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "e1", to: "g1", notation: "9. O-O" },
            { from: "d8", to: "e7", notation: "... Qe7" },
            { from: "e3", to: "e4", notation: "10. e4" },
            { from: "d5", to: "e4", notation: "... dxe4" },
          ],
        },
      ],
    },
    {
      family: "English Opening",
      variants: [
        {
          name: "Reversed Sicilian",
          description:
            "A classical English with c4, Nc3, g3, and kingside fianchetto against ...e5.",
          moves: [
            { from: "c2", to: "c4", notation: "1. c4" },
            { from: "e7", to: "e5", notation: "... e5" },
            { from: "b1", to: "c3", notation: "2. Nc3" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "g2", to: "g3", notation: "3. g3" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "c4", to: "d5", notation: "4. cxd5" },
            { from: "f6", to: "d5", notation: "... Nxd5" },
            { from: "f1", to: "g2", notation: "5. Bg2" },
            { from: "d5", to: "b6", notation: "... Nb6" },
            { from: "g1", to: "f3", notation: "6. Nf3" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "e1", to: "g1", notation: "7. O-O" },
            { from: "f8", to: "e7", notation: "... Be7" },
            { from: "d2", to: "d3", notation: "8. d3" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "c1", to: "e3", notation: "9. Be3" },
            { from: "f8", to: "e8", notation: "... Re8" },
            { from: "a1", to: "c1", notation: "10. Rc1" },
            { from: "e7", to: "f8", notation: "... Bf8" },
          ],
        },
        {
          name: "Four Knights",
          description:
            "A symmetrical English setup where both sides develop naturally before choosing a pawn break.",
          moves: [
            { from: "c2", to: "c4", notation: "1. c4" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "b1", to: "c3", notation: "2. Nc3" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "g1", to: "f3", notation: "3. Nf3" },
            { from: "e7", to: "e5", notation: "... e5" },
            { from: "g2", to: "g3", notation: "4. g3" },
            { from: "f8", to: "b4", notation: "... Bb4" },
            { from: "f1", to: "g2", notation: "5. Bg2" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "e1", to: "g1", notation: "6. O-O" },
            { from: "d7", to: "d6", notation: "... d6" },
            { from: "d2", to: "d3", notation: "7. d3" },
            { from: "c8", to: "e6", notation: "... Be6" },
            { from: "c1", to: "d2", notation: "8. Bd2" },
            { from: "d8", to: "d7", notation: "... Qd7" },
            { from: "f1", to: "e1", notation: "9. Re1" },
            { from: "a7", to: "a5", notation: "... a5" },
            { from: "a2", to: "a3", notation: "10. a3" },
            { from: "b4", to: "c5", notation: "... Bc5" },
          ],
        },
      ],
    },
  ],
  black: [
    {
      family: "Sicilian Defense",
      variants: [
        {
          name: "Najdorf Variation",
          description:
            "The textbook Open Sicilian with ...a6 and queenside expansion against White's attacking setup.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "c7", to: "c5", notation: "... c5" },
            { from: "g1", to: "f3", notation: "2. Nf3" },
            { from: "d7", to: "d6", notation: "... d6" },
            { from: "d2", to: "d4", notation: "3. d4" },
            { from: "c5", to: "d4", notation: "... cxd4" },
            { from: "f3", to: "d4", notation: "4. Nxd4" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "b1", to: "c3", notation: "5. Nc3" },
            { from: "a7", to: "a6", notation: "... a6" },
            { from: "c1", to: "e3", notation: "6. Be3" },
            { from: "e7", to: "e6", notation: "... e6" },
            { from: "f2", to: "f3", notation: "7. f3" },
            { from: "b7", to: "b5", notation: "... b5" },
            { from: "d1", to: "d2", notation: "8. Qd2" },
            { from: "b8", to: "d7", notation: "... Nbd7" },
            { from: "g2", to: "g4", notation: "9. g4" },
            { from: "h7", to: "h6", notation: "... h6" },
            { from: "e1", to: "c1", notation: "10. O-O-O" },
            { from: "c8", to: "b7", notation: "... Bb7" },
          ],
        },
        {
          name: "Dragon Variation",
          description:
            "The dragon fianchetto where Black pressures the long diagonal and races attacks on opposite wings.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "c7", to: "c5", notation: "... c5" },
            { from: "g1", to: "f3", notation: "2. Nf3" },
            { from: "d7", to: "d6", notation: "... d6" },
            { from: "d2", to: "d4", notation: "3. d4" },
            { from: "c5", to: "d4", notation: "... cxd4" },
            { from: "f3", to: "d4", notation: "4. Nxd4" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "b1", to: "c3", notation: "5. Nc3" },
            { from: "g7", to: "g6", notation: "... g6" },
            { from: "c1", to: "e3", notation: "6. Be3" },
            { from: "f8", to: "g7", notation: "... Bg7" },
            { from: "f2", to: "f3", notation: "7. f3" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "d1", to: "d2", notation: "8. Qd2" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "e1", to: "c1", notation: "9. O-O-O" },
            { from: "d6", to: "d5", notation: "... d5" },
            { from: "e4", to: "d5", notation: "10. exd5" },
            { from: "f6", to: "d5", notation: "... Nxd5" },
          ],
        },
      ],
    },
    {
      family: "French Defense",
      variants: [
        {
          name: "Classical Variation",
          description:
            "A standard French Classical line with ...Nf6, ...Be7, and pressure against White's advanced e5 pawn.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "e7", to: "e6", notation: "... e6" },
            { from: "d2", to: "d4", notation: "2. d4" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "b1", to: "c3", notation: "3. Nc3" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "c1", to: "g5", notation: "4. Bg5" },
            { from: "f8", to: "e7", notation: "... Be7" },
            { from: "e4", to: "e5", notation: "5. e5" },
            { from: "f6", to: "d7", notation: "... Nfd7" },
            { from: "g5", to: "e7", notation: "6. Bxe7" },
            { from: "d8", to: "e7", notation: "... Qxe7" },
            { from: "f2", to: "f4", notation: "7. f4" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "g1", to: "f3", notation: "8. Nf3" },
            { from: "c7", to: "c5", notation: "... c5" },
            { from: "d1", to: "d2", notation: "9. Qd2" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "d4", to: "c5", notation: "10. dxc5" },
            { from: "d7", to: "c5", notation: "... Nxc5" },
          ],
        },
        {
          name: "Winawer Variation",
          description:
            "The sharp Winawer with ...Bb4, doubled c-pawns, and long-term imbalance on both sides.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "e7", to: "e6", notation: "... e6" },
            { from: "d2", to: "d4", notation: "2. d4" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "b1", to: "c3", notation: "3. Nc3" },
            { from: "f8", to: "b4", notation: "... Bb4" },
            { from: "e4", to: "e5", notation: "4. e5" },
            { from: "c7", to: "c5", notation: "... c5" },
            { from: "a2", to: "a3", notation: "5. a3" },
            { from: "b4", to: "c3", notation: "... Bxc3+" },
            { from: "b2", to: "c3", notation: "6. bxc3" },
            { from: "b8", to: "e7", notation: "... Ne7" },
            { from: "d1", to: "g4", notation: "7. Qg4" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "f1", to: "d3", notation: "8. Bd3" },
            { from: "b7", to: "b6", notation: "... b6" },
            { from: "g1", to: "e2", notation: "9. Ne2" },
            { from: "c8", to: "a6", notation: "... Qa6" },
            { from: "e1", to: "g1", notation: "10. O-O" },
            { from: "a6", to: "a4", notation: "... Qa4" },
          ],
        },
      ],
    },
    {
      family: "Caro-Kann Defense",
      variants: [
        {
          name: "Classical Variation",
          description:
            "The main classical Caro-Kann with ...Bf5, ...Bg6, and the standard h-pawn expansion from White.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "c7", to: "c6", notation: "... c6" },
            { from: "d2", to: "d4", notation: "2. d4" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "b1", to: "c3", notation: "3. Nc3" },
            { from: "d5", to: "e4", notation: "... dxe4" },
            { from: "c3", to: "e4", notation: "4. Nxe4" },
            { from: "c8", to: "f5", notation: "... Bf5" },
            { from: "e4", to: "g3", notation: "5. Ng3" },
            { from: "f5", to: "g6", notation: "... Bg6" },
            { from: "h2", to: "h4", notation: "6. h4" },
            { from: "h7", to: "h6", notation: "... h6" },
            { from: "g1", to: "f3", notation: "7. Nf3" },
            { from: "b8", to: "d7", notation: "... Nd7" },
            { from: "h4", to: "h5", notation: "8. h5" },
            { from: "g6", to: "h7", notation: "... Bh7" },
            { from: "f1", to: "d3", notation: "9. Bd3" },
            { from: "h7", to: "d3", notation: "... Bxd3" },
            { from: "d1", to: "d3", notation: "10. Qxd3" },
            { from: "e7", to: "e6", notation: "... e6" },
          ],
        },
        {
          name: "Advance Variation",
          description:
            "White grabs space early with e5 and Black develops around the fixed pawn chain.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "c7", to: "c6", notation: "... c6" },
            { from: "d2", to: "d4", notation: "2. d4" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "e4", to: "e5", notation: "3. e5" },
            { from: "c8", to: "f5", notation: "... Bf5" },
            { from: "g1", to: "f3", notation: "4. Nf3" },
            { from: "e7", to: "e6", notation: "... e6" },
            { from: "f1", to: "e2", notation: "5. Be2" },
            { from: "c6", to: "c5", notation: "... c5" },
            { from: "c2", to: "c3", notation: "6. c3" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "e1", to: "g1", notation: "7. O-O" },
            { from: "d8", to: "b6", notation: "... Qb6" },
            { from: "b1", to: "a3", notation: "8. Na3" },
            { from: "c5", to: "d4", notation: "... cxd4" },
            { from: "c3", to: "d4", notation: "9. cxd4" },
            { from: "f8", to: "a3", notation: "... Bxa3" },
            { from: "b2", to: "a3", notation: "10. bxa3" },
            { from: "g8", to: "e7", notation: "... Nge7" },
          ],
        },
      ],
    },
    {
      family: "Scandinavian Defense",
      variants: [
        {
          name: "Main Line",
          description:
            "The standard Scandinavian with 2...Qxd5 and the queen retreat to a5 before normal development.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "e4", to: "d5", notation: "2. exd5" },
            { from: "d8", to: "d5", notation: "... Qxd5" },
            { from: "b1", to: "c3", notation: "3. Nc3" },
            { from: "d5", to: "a5", notation: "... Qa5" },
            { from: "d2", to: "d4", notation: "4. d4" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "g1", to: "f3", notation: "5. Nf3" },
            { from: "c8", to: "g4", notation: "... Bg4" },
            { from: "f1", to: "c4", notation: "6. Bc4" },
            { from: "e7", to: "e6", notation: "... e6" },
            { from: "e1", to: "g1", notation: "7. O-O" },
            { from: "b8", to: "d7", notation: "... Nbd7" },
            { from: "f1", to: "e1", notation: "8. Re1" },
            { from: "f8", to: "e7", notation: "... Be7" },
            { from: "h2", to: "h3", notation: "9. h3" },
            { from: "g4", to: "h5", notation: "... Bh5" },
            { from: "c4", to: "b3", notation: "10. Bb3" },
            { from: "e8", to: "g8", notation: "... O-O" },
          ],
        },
        {
          name: "Portuguese Variation",
          description:
            "A sharper Scandinavian approach where Black develops actively and creates tactical pressure quickly.",
          moves: [
            { from: "e2", to: "e4", notation: "1. e4" },
            { from: "d7", to: "d5", notation: "... d5" },
            { from: "e4", to: "d5", notation: "2. exd5" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "d2", to: "d4", notation: "3. d4" },
            { from: "c8", to: "g4", notation: "... Bg4" },
            { from: "f2", to: "f3", notation: "4. f3" },
            { from: "g4", to: "f5", notation: "... Bf5" },
            { from: "c2", to: "c4", notation: "5. c4" },
            { from: "e7", to: "e6", notation: "... e6" },
            { from: "b1", to: "c3", notation: "6. Nc3" },
            { from: "f8", to: "b4", notation: "... Bb4" },
            { from: "c1", to: "d2", notation: "7. Bd2" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "a3", to: "b4", notation: "8. axb4" },
            { from: "e6", to: "d5", notation: "... exd5" },
            { from: "c4", to: "d5", notation: "9. cxd5" },
            { from: "f8", to: "e8", notation: "... Re8+" },
            { from: "f1", to: "e2", notation: "10. Be2" },
            { from: "f6", to: "d5", notation: "... Nxd5" },
          ],
        },
      ],
    },
    {
      family: "King's Indian Defense",
      variants: [
        {
          name: "Classical Variation",
          description:
            "The classical King's Indian with ...e5, White closing the center with d5, and Black preparing ...f5.",
          moves: [
            { from: "d2", to: "d4", notation: "1. d4" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "c2", to: "c4", notation: "2. c4" },
            { from: "g7", to: "g6", notation: "... g6" },
            { from: "b1", to: "c3", notation: "3. Nc3" },
            { from: "f8", to: "g7", notation: "... Bg7" },
            { from: "e2", to: "e4", notation: "4. e4" },
            { from: "d7", to: "d6", notation: "... d6" },
            { from: "g1", to: "f3", notation: "5. Nf3" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "f1", to: "e2", notation: "6. Be2" },
            { from: "e7", to: "e5", notation: "... e5" },
            { from: "e1", to: "g1", notation: "7. O-O" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "d4", to: "d5", notation: "8. d5" },
            { from: "c6", to: "e7", notation: "... Ne7" },
            { from: "f3", to: "e1", notation: "9. Ne1" },
            { from: "f6", to: "d7", notation: "... Nd7" },
            { from: "c1", to: "e3", notation: "10. Be3" },
            { from: "f7", to: "f5", notation: "... f5" },
          ],
        },
        {
          name: "Fianchetto Variation",
          description:
            "White fianchettos early and Black keeps the standard King's Indian setup with flexible central play.",
          moves: [
            { from: "d2", to: "d4", notation: "1. d4" },
            { from: "g8", to: "f6", notation: "... Nf6" },
            { from: "g2", to: "g3", notation: "2. g3" },
            { from: "g7", to: "g6", notation: "... g6" },
            { from: "f1", to: "g2", notation: "3. Bg2" },
            { from: "f8", to: "g7", notation: "... Bg7" },
            { from: "g1", to: "f3", notation: "4. Nf3" },
            { from: "e8", to: "g8", notation: "... O-O" },
            { from: "e1", to: "g1", notation: "5. O-O" },
            { from: "d7", to: "d6", notation: "... d6" },
            { from: "c2", to: "c4", notation: "6. c4" },
            { from: "b8", to: "c6", notation: "... Nc6" },
            { from: "b1", to: "c3", notation: "7. Nc3" },
            { from: "e7", to: "e5", notation: "... e5" },
            { from: "d4", to: "d5", notation: "8. d5" },
            { from: "c6", to: "e7", notation: "... Ne7" },
            { from: "e2", to: "e4", notation: "9. e4" },
            { from: "f6", to: "d7", notation: "... Nd7" },
            { from: "h2", to: "h3", notation: "10. h3" },
            { from: "f7", to: "f5", notation: "... f5" },
          ],
        },
      ],
    },
  ],
};

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];
const THEME_STORAGE_KEY = "opening-atlas-theme";

const state = {
  side: "white",
  familyIndex: 0,
  variantIndex: 0,
  step: 0,
  flipped: false,
  playing: false,
  timer: null,
  theme: "system",
};

const sideSelect = document.querySelector("#side-select");
const openingSelect = document.querySelector("#opening-select");
const variantSelect = document.querySelector("#variant-select");
const openingFamily = document.querySelector("#opening-family");
const openingName = document.querySelector("#opening-name");
const openingDescription = document.querySelector("#opening-description");
const positionTitle = document.querySelector("#position-title");
const progressLabel = document.querySelector("#progress-label");
const boardElement = document.querySelector("#board");
const movesList = document.querySelector("#moves-list");
const prevButton = document.querySelector("#prev-button");
const resetButton = document.querySelector("#reset-button");
const nextButton = document.querySelector("#next-button");
const playButton = document.querySelector("#play-button");
const flipButton = document.querySelector("#flip-button");
const coordinatesTop = document.querySelector("#coordinates-top");
const coordinatesBottom = document.querySelector("#coordinates-bottom");
const coordinatesLeft = document.querySelector("#coordinates-left");
const coordinatesRight = document.querySelector("#coordinates-right");
const themeToggle = document.querySelector("#theme-toggle");

function createInitialBoard() {
  const board = {};

  files.forEach((file) => {
    board[`${file}2`] = "wp";
    board[`${file}7`] = "bp";
  });

  board.a1 = "wr";
  board.b1 = "wn";
  board.c1 = "wb";
  board.d1 = "wq";
  board.e1 = "wk";
  board.f1 = "wb";
  board.g1 = "wn";
  board.h1 = "wr";

  board.a8 = "br";
  board.b8 = "bn";
  board.c8 = "bb";
  board.d8 = "bq";
  board.e8 = "bk";
  board.f8 = "bb";
  board.g8 = "bn";
  board.h8 = "br";

  return board;
}

function cloneBoard(board) {
  return JSON.parse(JSON.stringify(board));
}

function fileIndex(square) {
  return files.indexOf(square[0]);
}

function currentFamilies() {
  return OPENINGS[state.side];
}

function currentFamily() {
  return currentFamilies()[state.familyIndex];
}

function currentVariant() {
  return currentFamily().variants[state.variantIndex];
}

function applyMove(board, move) {
  const nextBoard = cloneBoard(board);
  const movingPiece = nextBoard[move.from];

  if (!movingPiece) {
    return nextBoard;
  }

  delete nextBoard[move.from];

  if (movingPiece[1] === "k" && Math.abs(fileIndex(move.from) - fileIndex(move.to)) === 2) {
    if (move.to === "g1") {
      nextBoard.f1 = nextBoard.h1;
      delete nextBoard.h1;
    } else if (move.to === "c1") {
      nextBoard.d1 = nextBoard.a1;
      delete nextBoard.a1;
    } else if (move.to === "g8") {
      nextBoard.f8 = nextBoard.h8;
      delete nextBoard.h8;
    } else if (move.to === "c8") {
      nextBoard.d8 = nextBoard.a8;
      delete nextBoard.a8;
    }
  }

  nextBoard[move.to] = move.promotion ?? movingPiece;
  return nextBoard;
}

function getBoardAtStep(step) {
  let board = createInitialBoard();

  for (let index = 0; index < step; index += 1) {
    board = applyMove(board, currentVariant().moves[index]);
  }

  return board;
}

function orderedFiles() {
  return state.flipped ? [...files].reverse() : files;
}

function orderedRanks() {
  return state.flipped ? [...ranks].reverse() : ranks;
}

function squareColor(file, rank) {
  return (files.indexOf(file) + Number(rank)) % 2 === 0 ? "dark" : "light";
}

function renderCoordinates() {
  const horizontal = orderedFiles();
  const vertical = orderedRanks();

  coordinatesTop.innerHTML = "";
  coordinatesBottom.innerHTML = "";
  coordinatesLeft.innerHTML = "";
  coordinatesRight.innerHTML = "";

  horizontal.forEach((file) => {
    const topCell = document.createElement("span");
    const bottomCell = document.createElement("span");
    topCell.textContent = file;
    bottomCell.textContent = file;
    coordinatesTop.append(topCell);
    coordinatesBottom.append(bottomCell);
  });

  vertical.forEach((rank) => {
    const leftCell = document.createElement("span");
    const rightCell = document.createElement("span");
    leftCell.textContent = rank;
    rightCell.textContent = rank;
    coordinatesLeft.append(leftCell);
    coordinatesRight.append(rightCell);
  });
}

function renderBoard() {
  const board = getBoardAtStep(state.step);
  const currentMove = currentVariant().moves[state.step - 1];
  const horizontal = orderedFiles();
  const vertical = orderedRanks();

  boardElement.innerHTML = "";

  vertical.forEach((rank) => {
    horizontal.forEach((file) => {
      const square = `${file}${rank}`;
      const piece = board[square];
      const squareNode = document.createElement("div");
      squareNode.className = `square ${squareColor(file, rank)}`;

      if (currentMove?.to === square) {
        squareNode.classList.add("active");
      }

      if (currentMove?.from === square) {
        squareNode.classList.add("origin");
      }

      squareNode.textContent = piece ? PIECES[piece] : "";
      boardElement.append(squareNode);
    });
  });

  renderCoordinates();
}

function renderMoves() {
  movesList.innerHTML = "";

  currentVariant().moves.forEach((move, index) => {
    const item = document.createElement("li");
    item.className = "move-item";

    if (index + 1 === state.step) {
      item.classList.add("active");
    }

    const badge = document.createElement("span");
    badge.className = "move-index";
    badge.textContent = `${index + 1}`;

    const text = document.createElement("span");
    text.textContent = move.notation;

    item.append(badge, text);
    movesList.append(item);
  });
}

function renderOpeningMeta() {
  const family = currentFamily();
  const variant = currentVariant();

  openingFamily.textContent = family.family;
  openingName.textContent = variant.name;
  openingDescription.textContent = variant.description;
  progressLabel.textContent = `${state.step}/${variant.moves.length} steps`;
  positionTitle.textContent =
    state.step === 0 ? "Starting position" : variant.moves[state.step - 1].notation;
}

function renderSideSelect() {
  sideSelect.innerHTML = "";

  [
    { value: "white", label: "White openings" },
    { value: "black", label: "Black openings" },
  ].forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.value;
    option.textContent = entry.label;
    sideSelect.append(option);
  });

  sideSelect.value = state.side;
}

function renderFamilySelect() {
  openingSelect.innerHTML = "";

  currentFamilies().forEach((family, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = family.family;
    openingSelect.append(option);
  });

  openingSelect.value = String(state.familyIndex);
}

function renderVariantSelect() {
  variantSelect.innerHTML = "";

  currentFamily().variants.forEach((variant, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = variant.name;
    variantSelect.append(option);
  });

  variantSelect.value = String(state.variantIndex);
}

function stopPlayback() {
  state.playing = false;
  playButton.textContent = "Play";

  if (state.timer) {
    window.clearInterval(state.timer);
    state.timer = null;
  }
}

function nextStep() {
  const limit = currentVariant().moves.length;

  if (state.step < limit) {
    state.step += 1;
    render();
    return;
  }

  stopPlayback();
}

function previousStep() {
  if (state.step > 0) {
    state.step -= 1;
    render();
  }
}

function togglePlayback() {
  if (state.playing) {
    stopPlayback();
    return;
  }

  if (state.step === currentVariant().moves.length) {
    state.step = 0;
    render();
  }

  state.playing = true;
  playButton.textContent = "Pause";
  state.timer = window.setInterval(nextStep, 1100);
}

function resetLine() {
  stopPlayback();
  state.step = 0;
  render();
}

function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  if (theme === "system") {
    delete document.documentElement.dataset.theme;
  } else {
    document.documentElement.dataset.theme = theme;
  }
  themeToggle.value = theme;
}

function loadTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) ?? "system";
  applyTheme(storedTheme);
}

function render() {
  renderOpeningMeta();
  renderBoard();
  renderMoves();

  resetButton.disabled = state.step === 0;
  prevButton.disabled = state.step === 0;
  nextButton.disabled = state.step === currentVariant().moves.length;
}

function handleKeyboard(event) {
  if (event.target instanceof HTMLSelectElement) {
    return;
  }

  if (event.code === "ArrowRight") {
    nextStep();
  } else if (event.code === "ArrowLeft") {
    previousStep();
  } else if (event.code === "Space") {
    event.preventDefault();
    togglePlayback();
  } else if (event.key.toLowerCase() === "f") {
    state.flipped = !state.flipped;
    render();
  }
}

sideSelect.addEventListener("change", (event) => {
  state.side = event.target.value;
  state.familyIndex = 0;
  state.variantIndex = 0;
  state.flipped = state.side === "black";
  renderFamilySelect();
  renderVariantSelect();
  resetLine();
});

openingSelect.addEventListener("change", (event) => {
  state.familyIndex = Number(event.target.value);
  state.variantIndex = 0;
  renderVariantSelect();
  resetLine();
});

variantSelect.addEventListener("change", (event) => {
  state.variantIndex = Number(event.target.value);
  resetLine();
});

prevButton.addEventListener("click", previousStep);
resetButton.addEventListener("click", resetLine);
nextButton.addEventListener("click", nextStep);
playButton.addEventListener("click", togglePlayback);
flipButton.addEventListener("click", () => {
  state.flipped = !state.flipped;
  render();
});
themeToggle.addEventListener("change", (event) => {
  applyTheme(event.target.value);
});
document.addEventListener("keydown", handleKeyboard);

loadTheme();
renderSideSelect();
renderFamilySelect();
renderVariantSelect();
state.flipped = state.side === "black";
render();
