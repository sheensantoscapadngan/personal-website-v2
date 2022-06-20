import React from "react";
import Slider from "react-slick";
import { Paper, makeStyles } from "@material-ui/core";
import FeedbackItem from "./FeedbackItem";
import FeedbackInterface from "../../interfaces/FeedbackInterface";

const useStyles = makeStyles((theme) => {
  return {
    feedbackCardContainer: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(2),
      width: "100%",
    },
  };
});

interface Props {
  feedbacks: FeedbackInterface[];
}

const FeedbackSlideShow = ({ feedbacks }: Props) => {
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
        className={classes.feedbackCardContainer}
        id="feedback-scrollpoint"
        elevation={3}
        square
      >
        <Slider {...slideSettings}>
          {feedbacks.map((feedback) => (
            <FeedbackItem data={feedback} />
          ))}
        </Slider>
        <br></br>
      </Paper>
    </>
  );
};

export default FeedbackSlideShow;
