import express, { Request, Response } from 'express';
import { addNewCover, getAllCovers } from '../controllers/cover.controller';

const router = express.Router();
router.post('/', async (req: Request, res: Response) => {
  await addNewCover(req.body, res);
});

router.get('/list', async (req: Request, res: Response) => {
  await getAllCovers(res);
});
export default router;
