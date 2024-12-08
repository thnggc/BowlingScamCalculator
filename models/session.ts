import { Stint } from "./stint";

export interface Session {
  date: Date;
  stints: Array<Stint>;
}
