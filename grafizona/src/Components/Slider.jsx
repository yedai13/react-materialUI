import React from "react";
import Carousel from "react-material-ui-carousel";
import slide from "../img/slide.jpg";
import ofertas from "../img/ofertas.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  carrusel: {
    marginTop: 20,
    marginBottom: 40,
  },
}));

const Slider = () => {
  const { carrusel } = useStyles();
  return (
    <Carousel interval="6000" className={carrusel}>
      <img src={slide} alt="" />
      <img src={ofertas} alt="" />
    </Carousel>
  );
};

export default Slider;
