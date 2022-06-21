import React from "react";
import Slider from "react-slick";
import { Paper, makeStyles } from "@material-ui/core";
import TestimonyItem from "./TestimonyItem";
import TestimonyInterface from "../../interfaces/TestimonyInterface";

const useStyles = makeStyles((theme) => {
  return {
    testimonyCardContainer: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(2),
      width: "100%",
    },
  };
});

interface Props {
  testimonies: TestimonyInterface[];
}

const TestimonySlideShow = ({ testimonies }: Props) => {
  const classes = useStyles();
  const slideSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Paper
        className={classes.testimonyCardContainer}
        id="testimonies-scrollpoint"
        elevation={3}
        square
      >
        <Slider {...slideSettings}>
          {testimonies.map((testimony) => (
            <TestimonyItem data={testimony} />
          ))}
        </Slider>
        <br></br>
      </Paper>
    </>
  );
};

export default TestimonySlideShow;
