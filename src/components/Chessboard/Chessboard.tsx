import Square from "../Squares/Square";
import "./Chessboard.css";
import blackPawn from "../../assets/images/bp.png";
import whitePawn from "../../assets/images/wp.png";
import whiteKnight from "../../assets/images/wn.png";
import blackKnight from "../../assets/images/bn.png";
import whiteBishop from "../../assets/images/wb.png";
import blackBishop from "../../assets/images/bb.png";
import blackRook from "../../assets/images/br.png";
import whiteRook from "../../assets/images/wr.png";
import blackKing from "../../assets/images/bk.png";
import whiteKing from "../../assets/images/wk.png";
import whiteQueen from "../../assets/images/wq.png";
import blackQueen from "../../assets/images/bq.png";
import React from "react";
interface Piece {
  image: string;
  x: number;
  y: number;
}
const Chessboard = () => {
  //white squares : #7495af
  //dark squares : #4f80aa
  //background : #202020
  const horizontalCoordinates = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const verticalCoordinates = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const pieces: Piece[] = [];
  //Adding black pawns
  for (let i = 0; i < 8; i++) {
    pieces.push({
      image: blackPawn,
      x: i,
      y: 6,
    });
  }
  //Adding white pawns
  for (let i = 0; i < 8; i++) {
    pieces.push({
      image: whitePawn,
      x: i,
      y: 1,
    });
  }
  //Adding knights
  pieces.push(
    {
      image: whiteKnight,
      x: 1,
      y: 0,
    },
    {
      image: whiteKnight,
      x: 6,
      y: 0,
    },
    {
      image: blackKnight,
      x: 1,
      y: 7,
    },
    {
      image: blackKnight,
      x: 6,
      y: 7,
    }
  );
  //Adding bishops
  pieces.push(
    {
      image: whiteBishop,
      x: 2,
      y: 0,
    },
    {
      image: whiteBishop,
      x: 5,
      y: 0,
    },
    {
      image: blackBishop,
      x: 2,
      y: 7,
    },
    {
      image: blackBishop,
      x: 5,
      y: 7,
    }
  );
  //Adding rooks
  pieces.push(
    {
      image: whiteRook,
      x: 0,
      y: 0,
    },
    {
      image: whiteRook,
      x: 7,
      y: 0,
    },
    {
      image: blackRook,
      x: 0,
      y: 7,
    },
    {
      image: blackRook,
      x: 7,
      y: 7,
    }
  );
  //Adding queens
  pieces.push(
    {
      image: blackQueen,
      x: 3,
      y: 7,
    },
    {
      image: whiteQueen,
      x: 3,
      y: 0,
    }
  );
  //finally the kings
  pieces.push(
    {
      image: blackKing,
      x: 4,
      y: 7,
    },
    {
      image: whiteKing,
      x: 4,
      y: 0,
    }
  );
  let activePiece: HTMLElement | null = null;
  const grabPiece = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;
    if (element.classList.contains("image")) {
      const x = e.clientX - 40;
      const y = e.clientY - 40;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      activePiece = element;
    }
  };
  const movePiece = (e: React.MouseEvent) => {
    if (activePiece) {
      const x = e.clientX - 40;
      const y = e.clientY - 40;
      activePiece.style.position = "absolute";
      activePiece.style.left = `${x}px`;
      activePiece.style.top = `${y}px`;
    }
  };
  const dropPiece = (e: React.MouseEvent) => {
    activePiece = null;
  };
  let board = [];
  //Setting up the board with pieces
  for (let j = verticalCoordinates.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalCoordinates.length; i++) {
      let image = undefined;
      pieces.forEach((p) => {
        if (p.x === i && p.y === j) image = p.image;
      });
      board.push(
        <Square key={`${i},${j}`} image={image} coordinates={i + j} />
      );
    }
  }
  return (
    <div
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      id="chessboard"
    >
      {board}
    </div>
  );
};

export default Chessboard;
