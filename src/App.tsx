import { GlobalStyle } from "./styles/GlobalStyle.ts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes } from "./routes/index.tsx";
import { Header } from "./components/Header/index.tsx";
import { useLocation } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext.tsx";

export const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Header location={location.pathname} />
        <Routes />
      </AppProvider>
    </>
  );
};
