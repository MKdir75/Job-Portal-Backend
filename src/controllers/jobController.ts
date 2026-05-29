import { Request, Response } from "express";
import Job from "../models/Job";

export const createJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.create({ ...req.body, postedBy: (req as any).user.id });
    res.json(job);
  } catch (error) {
    res.status(400).json({ message: "Job creation failed", error });
  }
};

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(400).json({ message: "Fetching jobs failed", error });
  }
};
