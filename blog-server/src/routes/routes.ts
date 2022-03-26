import express from 'express';
import CoverRoute from './cover.route';
import PostRoute from './post.route';

const router = express.Router();
router.use('/covers', CoverRoute);
router.use('/post', PostRoute);

export default router;
