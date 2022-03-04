import { debounce } from "@utils/helpers/debounce";
import { createContext, useEffect, useLayoutEffect, useState } from "react";

type PlaformContextProps = {
  isMobile: boolean;
};

export const PlataformContext = createContext({} as PlaformContextProps);

export const PlataformContextProvider: React.FC = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleCheckPlataform = (window?: Window | null) => {
    const maximumWidth = 960;
    const currentWindow = window || global.window;
    setIsMobile(currentWindow.innerWidth <= maximumWidth);
  };

  useEffect(() => {
    handleCheckPlataform();

    window.onresize = debounce((event: UIEvent) => {
      handleCheckPlataform(event.view);
    });
  }, []);

  return (
    <PlataformContext.Provider value={{ isMobile }}>
      {children}
    </PlataformContext.Provider>
  );
};
