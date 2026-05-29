import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  description: string;
  company: string;
  postedBy: string;
}

const jobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  postedBy: { type: String, required: true },
});

export default mongoose.model<IJob>("Job", jobSchema);
