import React, {useCallback} from 'react';
import Switch from 'react-switch';
import useTheme from '../../hooks/useTheme';
import { shade } from 'polished';
import { RiLightbulbFlashLine as Bulb} from 'react-icons/ri';

import { Container } from "./styles";

const ThemeSwitcher: React.FC = () => {
  const {theme, toggleTheme} = useTheme()

  const handleSwitched = useCallback(() => {
    toggleTheme();
  }, [toggleTheme])

  return (
    <Container title="Deslize para o modo dark ou light">
      <Switch
        onChange={handleSwitched}
        checked={theme.title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={shade(0.20, theme.colors.deactivate)}
        onColor={theme.colors.active}

      />
      <Bulb size={25} className={`icon ${theme.title === 'light' ? 'active' : ''}`}/>
    </Container>
  )
}

export default ThemeSwitcher;
