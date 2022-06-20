import { db } from "../firebase";
import FeedbackInterface from "../interfaces/FeedbackInterface";

const COLLECTION_NAME = "feedbacks";
const feedbacksRef = db.collection(COLLECTION_NAME);

export const fetchFeedbacks = async () => {
  const documents: FeedbackInterface[] = [];
  const snapshot = await feedbacksRef.where("isVisible", "==", true).get();
  snapshot.forEach((result) => {
    const document = result.data();
    documents.push({
      feedback: document.feedback,
      headline: document.headline,
      name: document.name,
      profilePicture: document.profilePicture,
    });
  });

  return documents;
};
