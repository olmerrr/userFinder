import React from "react";
import styles from './Button.module.scss';

interface ButtonProps {
  children: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({children, onClick }: ButtonProps) => (
  <div className={styles.button} onClick={onClick}>
    { children }
  </div>
);
