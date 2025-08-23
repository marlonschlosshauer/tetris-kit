import { Block, Tetrimoni } from "@/types/game";

export const resolveBlock = (block: Block) => {
  const field = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  switch (block) {
    case 0:
      field[0][0] = 1;
      field[0][1] = 1;
      field[1][0] = 1;
      field[1][1] = 1;
      break;
    case 1:
      field[0][0] = 1;
      field[1][0] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      break;
    case 10:
      field[0][1] = 1;
      field[0][2] = 1;
      field[1][1] = 1;
      field[2][1] = 1;
      break;
    case 100:
      field[1][0] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      field[2][2] = 1;
      break;
    case 1000:
      field[0][1] = 1;
      field[1][1] = 1;
      field[2][0] = 1;
      field[2][1] = 1;
      break;
    case 2:
      field[0][2] = 1;
      field[1][0] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      break;
    case 20:
      field[0][1] = 1;
      field[1][1] = 1;
      field[2][1] = 1;
      field[2][2] = 1;
      break;
    case 200:
      field[1][0] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      field[2][0] = 1;
      break;
    case 2000:
      field[0][0] = 1;
      field[0][1] = 1;
      field[1][1] = 1;
      field[2][1] = 1;
      break;
    case 3:
    case 300:
      field[0][2] = 1;
      field[0][1] = 1;
      field[1][0] = 1;
      field[1][1] = 1;
      break;
    case 30:
    case 3000:
      field[0][1] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      field[2][2] = 1;
      break;
    case 4:
      field[0][1] = 1;
      field[1][0] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      break;
    case 40:
      field[0][1] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      field[2][1] = 1;
      break;
    case 400:
      field[1][0] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      field[2][1] = 1;
      break;
    case 4000:
      field[0][1] = 1;
      field[1][0] = 1;
      field[1][1] = 1;
      field[2][1] = 1;
      break;
    case 5:
    case 500:
      field[0][0] = 1;
      field[0][1] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      break;
    case 50:
    case 5000:
      field[0][2] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      field[2][1] = 1;
      break;
    case 6:
    case 600:
      field[1][0] = 1;
      field[1][1] = 1;
      field[1][2] = 1;
      field[1][3] = 1;
      break;
    case 60:
    case 6000:
      field[0][2] = 1;
      field[1][2] = 1;
      field[2][2] = 1;
      field[3][2] = 1;
      break;
  }

  return field;
};

export const blockToTetromino = (block: Block): Tetrimoni => {
  switch (block) {
    case 0:
      return "o";
    case 1:
    case 10:
    case 100:
    case 1000:
      return "j";
    case 2:
    case 20:
    case 200:
    case 2000:
      return "l";
    case 3:
    case 30:
    case 300:
    case 3000:
      return "s";
    case 4:
    case 40:
    case 400:
    case 4000:
      return "t";
    case 5:
    case 50:
    case 500:
    case 5000:
      return "z";
    case 6:
    case 60:
    case 600:
    case 6000:
      return "i";
  }
};
