import { Response } from 'express';
import { Post } from '..//entities/Post';
import { CreateArticleDTO } from '../dtos/post/post.dto';

export const addNewPost = async (
  data: CreateArticleDTO,
  res: Response
): Promise<any> => {
  try {
    const result = Post.create(data);
    await Post.save(result);
    return res.send({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      success: false,
      error,
    });
  }
};

export const viewCoverContents = async (
  coverId: string,
  res: Response
): Promise<any> => {
  try {
    const results = await Post.find({
      where: {
        coverId,
      },
      select: ['summary', 'title', 'coverId', 'postId'],
    });
    return res.send({
      status: true,
      results,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      success: false,
      error,
    });
  }
};

export const viewPost = async (postId: string, res: Response): Promise<any> => {
  try {
    const post = await Post.findOne({
      where: {
        postId,
      },
    });
    return res.send({
      success: true,
      post,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      success: false,
      error,
    });
  }
};
