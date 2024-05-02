import {createContext} from 'react';

type GlobalInfoContextType = {
  appColor: string;
  setAppColor: (color: string) => void;
};

const DEFAULT_COLOR = '#f0f0f0';

export const GlobalInfoContext = createContext<GlobalInfoContextType>({
  appColor: DEFAULT_COLOR,
  setAppColor: () => {},
});
