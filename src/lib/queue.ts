import { Block } from "@/types/game";

export const getQueue = () => {
  let blocks: Block[] = [0, 1, 2, 3, 4, 5, 6];
  const queue: Block[] = [];

  while (blocks.length) {
    const index = Math.floor(Math.random() * 10) % blocks.length;
    queue.push(blocks[index]);
    blocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)];
  }

  return queue;
};
