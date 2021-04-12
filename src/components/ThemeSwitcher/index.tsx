import React, {useCallback, useContext, useMemo, useState} from 'react';
import Switch from 'react-switch';
import useTheme from '../../hooks/useTheme';
import { shade } from 'polished';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

const ThemeSwitcher: React.FC = () => {
  const [isChecked, setChecked] = useState(false);

  const {theme, toggleTheme} = useTheme()


  const handleSwitched = useCallback(() => {
    toggleTheme();
    setChecked((oldChecked: boolean) => !oldChecked)
  }, [toggleTheme])

  // const [theme, setTheme] = useState();

  // const

  // const { colors } = useContext(ThemeContext);




  return (
    <Switch
          onChange={handleSwitched}
          checked={isChecked}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          handleDiameter={20}
          offColor={shade(0.20, theme.colors.secundary)}
          onColor={theme.colors.primary}
        />
  )
}

export default ThemeSwitcher;
