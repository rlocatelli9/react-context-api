import React, {useCallback, useEffect, useState} from 'react';
import Switch from 'react-switch';
import useTheme from '../../hooks/useTheme';
import { shade } from 'polished';
import { IoMdMoon as Moon, IoMdSunny as Sun, IoMdBulb as Bulb } from 'react-icons/io';
import { RiLightbulbFlashLine as BulbActive} from 'react-icons/ri';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import { Container } from "./styles";

const ThemeSwitcher: React.FC = () => {
  const [isChecked, setChecked] = useState(false);

  const {theme, toggleTheme} = useTheme()

  useEffect(() => {

  },[])
  const handleSwitched = useCallback(() => {
    toggleTheme();
    // setChecked((oldChecked: boolean) => !oldChecked)
  }, [toggleTheme])

  // const [theme, setTheme] = useState();

  // const

  // const { colors } = useContext(ThemeContext);




  return (
    <Container title="Deslize para o modo dark ou light">
      <BulbActive size={25} className={`icon ${theme.title === 'light' ? 'active' : ''}`}/>
      <Switch
        onChange={handleSwitched}
        checked={theme.title === 'dark' ? true : false}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={shade(0.20, theme.colors.deactivate)}
        onColor={theme.colors.active}

      />
      {/* <Bulb className={`icon ${theme.title === 'dark' ? 'active' : ''}`}/> */}
    </Container>
  )
}

export default ThemeSwitcher;
