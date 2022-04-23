import { Request, Response } from 'express';
import { getBlackJackStats, postBlackJackGame } from '../database/DatabaseQueries';

export default class BlackJackController {
  public static async getUserInfo(req: Request, res: Response): Promise<Response> {
    const { userId } = req.body;
    if (!userId) return res.sendStatus(400);
    const result = await getBlackJackStats(userId);

    if (!result) return res.sendStatus(400);

    const playedGames = (result.bj_wins ?? 0) + (result.bj_loses ?? 0);

    if (playedGames === 0) return res.status(200).send({ error: true });
    const lostGames = result.bj_loses;
    const winGames = result.bj_wins;
    const winMoney = result.bj_win_money;
    const lostMoney = result.bj_lose_money;
    const winPorcentage = ((winGames ?? 0 / playedGames) * 100).toFixed(2) || 0;
    const lostPorcentage = ((lostGames ?? 0 / playedGames) * 100).toFixed(2) || 0;
    const returnObject = {
      playedGames,
      lostGames,
      winGames,
      winMoney,
      lostMoney,
      winPorcentage,
      lostPorcentage,
    };

    return res.status(200).send(returnObject);
  }

  public static async postBlackJack(req: Request, res: Response): Promise<Response> {
    const { userId, betValue, didWin } = req.body;

    if (!userId || !betValue || didWin === undefined) return res.sendStatus(400);

    await postBlackJackGame(userId, didWin, betValue);

    return res.sendStatus(201);
  }
}