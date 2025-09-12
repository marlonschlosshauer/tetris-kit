import { Game } from "@/types/game";
import { collision, drop, nudge, rotate } from "./collision";
import { castActive, clearCells, hasLost, startGame } from "./logic";

export type EventMoveDown = { type: "DOWN" };

export type EventMoveLeft = { type: "LEFT" };

export type EventMoveRight = { type: "RIGHT" };

export type EventRotate = { type: "ROTATE" };

export type EventDrop = { type: "DROP" };
export type EventTick = { type: "TICK" };
export type EventStore = { type: "STORE" };

export type EventRestart = { type: "RESTART"; props: Partial<Game> };

export type Event =
    | EventMoveDown
    | EventMoveLeft
    | EventMoveRight
    | EventRotate
    | EventDrop
    | EventTick
    | EventRestart;

export const reduce = (game: Game, event: Event) => {
    const { active } = game;
    switch (event.type) {
        case "ROTATE": {
            const newGame = {
                ...game,
                active: rotate(active),
            };

            return !collision(newGame) ? newGame : nudge(newGame);
        }
        case "DOWN": {
            const newGame = {
                ...game,
                active: { ...active, y: active.y + 1 },
            };

            return !collision(newGame) ? newGame : game;
        }
        case "LEFT": {
            const newGame = {
                ...game,
                active: { ...active, x: active.x - 1 },
            };
            return !collision(newGame) ? newGame : game;
        }
        case "RIGHT": {
            const newGame = {
                ...game,
                active: { ...active, x: active.x + 1 },
            };
            return !collision(newGame) ? newGame : game;
        }
        case "DROP": {
            return hasLost(clearCells(castActive(drop(game))));
        }
        case "TICK": {
            const newGame = {
                ...game,
                active: { ...active, y: active.y + 1 },
            };

            return !collision(newGame) ? newGame : hasLost(castActive(game));
        }
        case "RESTART": {
            return startGame(event.props);
        }
        default:
            return game;
    }
};
