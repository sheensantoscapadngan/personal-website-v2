import React, { useEffect, useState } from "react";
import AccomplishmentHeader from "./AccomplishmentHeader";
import AccomplishmentSlideShow from "./AccomplishmentSlideShow";
import { fetchAccomplishments } from "../../services/AccomplishmentService";
import AccomplishmentInterface from "../../interfaces/AccomplishmentInterface";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "100%",
      marginTop: theme.spacing(6),
      [theme.breakpoints.down("xs")]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: `calc(100% - ${theme.spacing(4)}px)`,
      },
    },
  };
});

const Accomplishments = () => {
  const classes = useStyles();
  const [accomplishments, setAccomplishments] = useState<
    AccomplishmentInterface[]
  >([]);
  useEffect(() => {
    fetchAccomplishments().then((data) => setAccomplishments(data));
  }, []);
  return (
    <div className={classes.container}>
      <AccomplishmentHeader />
      <AccomplishmentSlideShow accomplishments={accomplishments} />
    </div>
  );
};

export default Accomplishments;
