import React from "react";
import * as S from "./styles.ts";
import {NextArrow} from "../NextArrow/index.tsx";
import {PrevArrow} from "../PrevArrow/index.tsx";

interface ICarouselProps {
  children: React.ReactNode;
}


export const Carousel = ({ children }: ICarouselProps) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow className="" style={{}} onClick={() => {}}/>,
        prevArrow: <PrevArrow className="" style={{}} onClick={() => {}}/>,
 
      };
    


  return <S.Container {...settings}>{children}</S.Container>;
};


