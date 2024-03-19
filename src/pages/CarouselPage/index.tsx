import {useContext, useEffect} from 'react'
import { Carousel } from "../../components/Carousel/index.tsx";
import { CarouselItem } from "../../components/CarouselItem/index.tsx";
import * as S from "./styles.ts";
import { ICarouselItem } from "../../components/CarouselItem/interface.ts";
import { AppContext } from "../../contexts/AppContext.tsx";

export const CarouselPage = () => {

  const {items} = useContext(AppContext)

  return (
    <S.Container>

      {
          items.length > 1 && items[0].url_target && (
            <Carousel>
            {items.map((item: ICarouselItem) => {
              return <CarouselItem key={item.id} url_target={item.url_target} title={item.title} description={item.description}/>;
            })}
          </Carousel>
          )
      }

      {
        items.length == 1  && items[0].url_target && (
           <CarouselItem key={items[0].id} url_target={items[0].url_target} title={items[0].title} description={items[0].description}/>
        )
      }

      {
        items.length == 0 && (
          <p>Carregando...</p>
        )
      }

    </S.Container>
  );
};
