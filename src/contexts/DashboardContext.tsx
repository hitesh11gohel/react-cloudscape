import React, { ReactNode, createContext, useState } from "react";

interface IDashboardContext {
  theme: string;
  setThemeData: (value: string) => void;
}

interface IDashboardContextProps {
  children: ReactNode;
}

export const DashboardContext = createContext<IDashboardContext | null>(null);

const DashboardContextProvider: React.FC<IDashboardContextProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");

  const setThemeData = (data: string) => {
    setTheme(data);
  };

  const data = {
    theme,
    setThemeData,
  };

  return (
    <DashboardContext.Provider value={data}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
