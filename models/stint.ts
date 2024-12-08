import { StintConfig } from "./config";
import { GameResult } from "./game-result";
import { Player } from "./player";

export interface Stint {
  players: Array<Player>;
  config: StintConfig;
  gameResults: Array<GameResult>;
}
