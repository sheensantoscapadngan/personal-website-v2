import React from "react";
import Slider from "react-slick";
import { Paper, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import TestimonyItem from "./TestimonyItem";
import TestimonyInterface from "../../interfaces/TestimonyInterface";

const useStyles = makeStyles((theme) => {
  return {
    testimonyCardContainer: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(2),
      width: `calc(100% - ${theme.spacing(4)}px)`,
    },
  };
});

interface Props {
  testimonies: TestimonyInterface[];
}

const TestimonySlideShow = ({ testimonies }: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const slidesToShow = useMediaQuery(theme.breakpoints.down("xs")) ? 1 : 3;
  const slideSettings = {
    slidesToShow,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };

  return (
    <>
      <Paper
        className={classes.testimonyCardContainer}
        id="testimonies-scrollpoint"
        elevation={8}
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
