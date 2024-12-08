import { Player } from "@/models/player";
import { Session } from "@/models/session";

export const MOCK_ROUTE_DATA: Session = {
  date: new Date(),
  stints: [
    {
      players: [getPlayer("test"), getPlayer("second")],
      config: {
        gamePrice: 4.8,
        betAmount: 5,
      },
      gameResults: [
        {
          winner: getPlayer("test"),
        },
      ],
    },
  ],
};

function getPlayer(name: string): Player {
  return { name };
}
