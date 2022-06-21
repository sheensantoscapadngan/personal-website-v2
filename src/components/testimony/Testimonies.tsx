import React, { useEffect, useState } from "react";
import TestimonySlideShow from "./TestimonySlideShow";
import TestimonyInterface from "../../interfaces/TestimonyInterface";
import { fetchTestimonies } from "../../services/TestimonyService";

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState<TestimonyInterface[]>([]);
  useEffect(() => {
    fetchTestimonies().then((data) => setTestimonies(data));
  }, []);
  return (
    <>
      <TestimonySlideShow testimonies={testimonies} />
    </>
  );
};

export default Testimonies;
