import { db } from "../firebase";
import AccomplishmentInterface from "../interfaces/AccomplishmentInterface";

const COLLECTION_NAME = "accomplishments";
const accomplishmentsRef = db.collection(COLLECTION_NAME);

export const fetchAccomplishments = async () => {
  const documents: AccomplishmentInterface[] = [];
  const snapshot = await accomplishmentsRef.get();
  snapshot.forEach((result) => {
    const document = result.data();
    documents.push({
      description: document.description,
      headline: document.headline,
      image: document.image,
    });
  });

  return documents;
};
