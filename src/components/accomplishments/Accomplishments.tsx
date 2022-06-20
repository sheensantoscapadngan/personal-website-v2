import React, { useEffect, useState } from "react";
import AccomplishmentHeader from "./AccomplishmentHeader";
import AccomplishmentSlideShow from "./AccomplishmentSlideShow";
import { fetchAccomplishments } from "../../services/AccomplishmentService";
import AccomplishmentInterface from "../../interfaces/AccomplishmentInterface";

const Accomplishments = () => {
  const [accomplishments, setAccomplishments] = useState<
    AccomplishmentInterface[]
  >([]);
  useEffect(() => {
    fetchAccomplishments().then((data) => setAccomplishments(data));
  }, []);
  return (
    <>
      <AccomplishmentHeader />
      <AccomplishmentSlideShow accomplishments={accomplishments} />
    </>
  );
};

export default Accomplishments;
