import React, { useEffect, useState } from "react";
import FeedbackSlideShow from "./FeedbackSlideShow";
import FeedbackInterface from "../../interfaces/FeedbackInterface";
import { fetchFeedbacks } from "../../services/FeedbackService";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackInterface[]>([]);
  useEffect(() => {
    fetchFeedbacks().then((data) => setFeedbacks(data));
  }, []);
  return (
    <>
      <FeedbackSlideShow feedbacks={feedbacks} />
    </>
  );
};

export default Feedbacks;
