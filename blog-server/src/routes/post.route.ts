import express, { Request, Response } from 'express';
import {
  addNewPost,
  viewCoverContents,
  viewPost,
} from '../controllers/post.controller';
const router = express.Router();
router.post('/', async (req: Request, res: Response) => {
  return await addNewPost(req.body, res);
});
router.get('/list/:coverId', async (req: Request, res: Response) => {
  const coverId = req.params.coverId;
  if (!coverId) {
    return res.status(401).send({
      message: 'Invalid cover id',
    });
  }
  return await viewCoverContents(coverId, res);
});
router.get('/:postId', async (req: Request, res: Response) => {
  const postId = req.params.postId;
  if (!postId) {
    return res.status(401).send({
      message: 'Invalid post id',
    });
  }
  return await viewPost(postId, res);
});
export default router;
