import { Routes as RouteLib, Route } from 'react-router-dom';
import {CarouselPage} from '../pages/CarouselPage';
import { RegisterPage } from '../pages/RegisterPage';

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<CarouselPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </RouteLib>
  );
};
