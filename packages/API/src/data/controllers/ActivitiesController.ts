import { Request, Response } from 'express';
import { ActivityType } from '../util/types';
import APIError from '../util/APIError';
import MenheraActivity from '../util/Activities';

export default class ActivityController {
  public static all(_req: Request, res: Response): Response {
    return res.json(MenheraActivity.getInstance().getAllActivities());
  }

  public static clear(_req: Request, res: Response): Response {
    MenheraActivity.getInstance().clearActivities();
    return res.status(200).json({ ok: true });
  }

  public static reset(_req: Request, res: Response): Response {
    return res.status(200).json(MenheraActivity.getInstance().resetActivities());
  }

  public static add(req: Request, res: Response): Response {
    const ACTIVITY_TYPES: ActivityType[] = ['WATCHING', 'PLAYING', 'LISTENING', 'STREAMING'];
    const { type, name, url } = req.body;

    if (!type || !name) {
      throw new APIError('O conteúdo do request é inválido!', 400);
    }

    if (!ACTIVITY_TYPES.includes(type)) {
      throw new APIError(`Este tipo é invalido! tipos: ${ACTIVITY_TYPES}`, 400);
    }

    MenheraActivity.getInstance().addActivity(name, type, url);
    return res.status(201).send({ type, name, url });
  }
}
