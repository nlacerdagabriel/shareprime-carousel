import axios from "axios";
import { ICarouselItem } from "../components/CarouselItem/interface";

export const api = axios.create({
  baseURL: "https://65f5e65341d90c1c5e0a581a.mockapi.io/api/CarouselItem",
});

export const index = async () => {
  const items = await api.get("/");
  return items;
};

export const store = async (data: ICarouselItem) => {
  await api.post("/", {
    title: data.title,
    description: data.description,
    url_archive: data.url_archive,
    url_target: data.url_target,
    order: data.order,
  });
};


export const destroy = async(id: number) => {
  await api.delete(`/${id}`)
}

export const update = async(data: ICarouselItem, id: number)=> {
  await api.put(`/${id}`, {
    title: data.title,
    description: data.description,
    url_archive: data.url_archive,
    url_target: data.url_target,
    order: data.order,
  });
}
