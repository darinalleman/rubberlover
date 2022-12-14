import express, { Request, Response } from 'express';
import { adminAuth, userAuth } from '../middlewares';
import WAMModel from '../mongo/models/wam.model';

const router = express.Router();

/**
 * Get all WAM records for this tire 
 */
router.get('/:id', async (req: Request, res: Response) => {
  try {
    if (req.params.id) {
      const wamRecords = await WAMModel.find({ tireId: req.params.id });
      res.send(wamRecords);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', userAuth, async (req: Request, res: Response) => {
  const wam = new WAMModel(req.body);
  wam.createdBy = res.locals.id;
  wam.createdByName = res.locals.name;
  try {
    await wam.save();
    res.send(wam);
  } catch (error: any) {
    res.status(500).send(error);
  }
});

router.delete('/:id', adminAuth, async (req: Request, res: Response) => {
  try {
    await WAMModel.deleteOne({ _id: req.params.id });
    res.sendStatus(200);
  } catch (error: any) {
    res.status(500).send(error);
  }
});

export default router;
