import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import useTheme from './hooks/useTheme';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import light from './styles/themes/light';
import dark from './styles/themes/dark';


const App: React.FC = () => {

  const {theme} = useTheme();

  const user = {
    avatar: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    name: "João da Silva",
    age: 28,
    followers: 3000
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="structure">
        <GlobalStyles />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;
