import { Response } from 'express';
import { addCoverDTO } from 'src/dtos/cover/cover.dto';
import { Cover } from '../entities/Cover';

export const addNewCover = async (
  data: addCoverDTO,
  res: Response
): Promise<any> => {
  try {
    const result = Cover.create(data);
    await Cover.save(result);
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

export const getAllCovers = async (res: Response): Promise<any> => {
  try {
    const result = await Cover.find({});
    if (result) {
      res.send(result);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send({
      success: false,
    });
  }
};
