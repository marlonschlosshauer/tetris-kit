import { Active } from "@/types/game";

// @ts-expect-error Surpress warning until blocks define rotation range
export const resolveBlock = (block: Pick<Active, "tetromino" | "rotation">): number[][] => {
    switch (block.tetromino) {
        case "o":
            return [
                [1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ];
        case "j":
            switch (block.rotation) {
                case 0:
                    return [
                        [0, 1, 0, 0],
                        [0, 1, 0, 0],
                        [1, 1, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 1:
                    return [
                        [1, 0, 0, 0],
                        [1, 1, 1, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 2:
                    return [
                        [1, 1, 0, 0],
                        [1, 0, 0, 0],
                        [1, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 3:
                    return [
                        [1, 1, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
            }
        case "l":
            switch (block.rotation) {
                case 0:
                    return [
                        [1, 0, 0, 0],
                        [1, 0, 0, 0],
                        [1, 1, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 1:
                    return [
                        [1, 1, 1, 0],
                        [1, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 2:
                    return [
                        [1, 1, 0, 0],
                        [0, 1, 0, 0],
                        [0, 1, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 3:
                    return [
                        [0, 0, 1, 0],
                        [1, 1, 1, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
            }
        case "s":
            switch (block.rotation) {
                case 0:
                case 2:
                    return [
                        [0, 1, 1, 0],
                        [1, 1, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 1:
                case 3:
                    return [
                        [1, 0, 0, 0],
                        [1, 1, 0, 0],
                        [0, 1, 0, 0],
                        [0, 0, 0, 0],
                    ];
            }
        case "t":
            switch (block.rotation) {
                case 0:
                    return [
                        [0, 1, 0, 0],
                        [1, 1, 1, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 1:
                    return [
                        [1, 0, 0, 0],
                        [1, 1, 0, 0],
                        [1, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 2:
                    return [
                        [0, 0, 0, 0],
                        [1, 1, 1, 0],
                        [0, 1, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 3:
                    return [
                        [0, 1, 0, 0],
                        [1, 1, 0, 0],
                        [0, 1, 0, 0],
                        [0, 0, 0, 0],
                    ];
            }
        case "z":
            switch (block.rotation) {
                case 0:
                case 2:
                    return [
                        [1, 1, 0, 0],
                        [0, 1, 1, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
                case 1:
                case 3:
                    return [
                        [0, 1, 0, 0],
                        [1, 1, 0, 0],
                        [1, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
            }
        case "i":
            switch (block.rotation) {
                case 0:
                case 2:
                    return [
                        [1, 0, 0, 0],
                        [1, 0, 0, 0],
                        [1, 0, 0, 0],
                        [1, 0, 0, 0],
                    ];
                case 1:
                case 3:
                    return [
                        [1, 1, 1, 1],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                    ];
            }
    }
};
