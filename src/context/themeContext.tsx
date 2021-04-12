import React, {createContext, useCallback} from 'react'
import { DefaultTheme } from 'styled-components'
import usePersistedState from '../hooks/usePersistedState'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

interface ThemeContextProps{
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeCustomContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeCustomContextProvider: React.FC = ({children}) => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light )
  }, [setTheme, theme.title]);

  return (
    <ThemeCustomContext.Provider value={{toggleTheme, theme}}>
      {children}
    </ThemeCustomContext.Provider>
  )

}

export { ThemeCustomContext, ThemeCustomContextProvider}
