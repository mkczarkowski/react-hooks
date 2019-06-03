import React from "react";
import Switch from "react-switch";

const ThemeSwitch = ({ hasDarkMode, setDarkMode }) => (
  <label>
    <Switch
      onChange={(hasDarkMode) => setDarkMode(hasDarkMode)}
      checked={hasDarkMode}
      checkedIcon={false}
      uncheckedIcon={false}
      onColor='#000'
      offColor='#0288D1'
    />
  </label>
);

export default ThemeSwitch;
