import { useContext } from 'react';
import { ThemeCustomContext } from '../context/themeContext'

function useTheme () {
  const context = useContext(ThemeCustomContext);
  if (!context) {
    throw new Error('useAuth deve ser usado com um AuthProvider');
  }
  return context;
}

export default useTheme;
