import { Tetromino } from "@/types/game";

export const getQueue = () => {
    let blocks: Tetromino[] = ["o", "j", "l", "t", "s", "z", "i"];
    const queue: Tetromino[] = [];

    while (blocks.length) {
        const index = Math.floor(Math.random() * 10) % blocks.length;
        queue.push(blocks[index]);
        blocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)];
    }

    return queue;
};

export const checkQueue = (queue: Tetromino[]) => {
    // We generate a queue round-robin style, however if we only generate 7 blocks
    // we run into issues where the preview will always show 7-n, eventually
    // running out of blocks to show until we used up all 7 blocks

    // A simple solution is to always generate two full queues, i.e frontrunning
    // an entire queue as backup, so worse case is you have 1+7 blocks to preview

    // Handle edge-case where the queue is 0, so it gets double filled
    if (!queue.length) {
        return [...getQueue(), ...getQueue()];
    }

    if (queue.length <= 7) {
        return [...queue, ...getQueue()];
    }

    return queue;
};
