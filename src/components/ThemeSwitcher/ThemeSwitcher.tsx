import React, {useEffect, useState} from "react";
import {ReactComponent as MoonIcon} from "assets/icon-moon.svg";
import {ReactComponent as SunIcon} from "assets/icon-sun.svg";
import styles from './ThemeSwitcher.module.scss';
export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText: "Light" | "Dark" = isDark ? "Light" : "Dark";

  // с большой буквы потому что это компонент
  const ThemeIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string | undefined}> = isDark ?
    SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light")
  }, [isDark])
  return (
  <div
    className={styles.switcher} data-testid="ThemeSwitcher"

    onClick={() =>  setDark(!isDark)}
  >
    <span>{themeText}</span>
    <ThemeIcon className={styles.icon}/>
  </div>
  );
}
