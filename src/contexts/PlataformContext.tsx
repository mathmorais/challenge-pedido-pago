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
    setIsMobile(currentWindow.screen.width <= maximumWidth);
  };

  const debounce = (callback: (params: any) => void, timeout: number = 250) => {
    let timer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback.apply(this, args);
      }, timeout);
    };
  };

  useLayoutEffect(() => {
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
