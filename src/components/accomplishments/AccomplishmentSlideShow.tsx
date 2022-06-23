import React from "react";
import Slider from "react-slick";
import { Paper, makeStyles } from "@material-ui/core";
import AccomplishmentItem from "./AccomplishmentItem";
import AccomplishmentInterface from "../../interfaces/AccomplishmentInterface";

const useStyles = makeStyles((theme) => {
  return {
    accomplishmentCardContainer: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: theme.spacing(3),
      width: "100%",
    },
  };
});

interface Props {
  accomplishments: AccomplishmentInterface[];
}

const AccomplishmentSlideShow = ({ accomplishments }: Props) => {
  const classes = useStyles();
  const slideSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Paper
        className={classes.accomplishmentCardContainer}
        elevation={10}
        square
      >
        <Slider {...slideSettings}>
          {accomplishments.map((accomplishment) => (
            <AccomplishmentItem data={accomplishment} />
          ))}
        </Slider>
        <br></br>
      </Paper>
    </>
  );
};

export default AccomplishmentSlideShow;
