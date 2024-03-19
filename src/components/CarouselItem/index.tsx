import React from "react";
import * as S from "./styles";

interface ICarouselItemProps {
  title: string;
  description: string;
  url_target: string;
}

export const CarouselItem = ({title, description, url_target} : ICarouselItemProps) => {
  return (
    <S.Container target="__blank" href={url_target}>
      <div>
        <h1>{title}</h1>

        <p>
        {description}
        </p>
      </div>
      <div style={{backgroundImage: `url(${url_target})`}}></div>
    </S.Container>
  );
};

