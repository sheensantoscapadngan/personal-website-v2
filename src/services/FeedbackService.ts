import { db } from "../firebase";

const COLLECTION_NAME = "feedback";
const feedbackRef = db.collection(COLLECTION_NAME);

export const publishFeedback = async (feedback: string) =>
  feedbackRef.add({
    feedback,
  });
