import { Tetrimoni } from "@/types/game";

export const getQueue = () => {
  let blocks: Tetrimoni[] = ["o", "j", "l", "t", "s", "z", "i"];
  const queue: Tetrimoni[] = [];

  while (blocks.length) {
    const index = Math.floor(Math.random() * 10) % blocks.length;
    queue.push(blocks[index]);
    blocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)];
  }

  return queue;
};
