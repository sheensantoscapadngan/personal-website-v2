import { db } from "../firebase";
import TestimonyInterface from "../interfaces/TestimonyInterface";

const COLLECTION_NAME = "testimonies";
const testimoniesRef = db.collection(COLLECTION_NAME);

export const fetchTestimonies = async () => {
  const documents: TestimonyInterface[] = [];
  const snapshot = await testimoniesRef.get();
  snapshot.forEach((result) => {
    const document = result.data();
    documents.push({
      content: document.content,
      headline: document.headline,
      name: document.name,
      profilePicture: document.profilePicture,
    });
  });

  return documents;
};
