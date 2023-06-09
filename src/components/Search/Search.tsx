import React from "react";
import {Button} from "../Button";

import {ReactComponent as SearchIcon} from "assets/icon-search.svg"
import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void
}

type FormFields = {
  userName: HTMLInputElement
}
export const Search = ({hasError, onSubmit}: SearchProps) => {
  // form'a всегда знает о своих инпутах если у них есть атрибут name
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();

    const text = event.currentTarget.userName.value || "";
    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
      }
    }

  return (
    <form onSubmit={ handleSubmit } autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon/>
        </label>

          <input
            type="text"
            className={styles.textField}
            id="search"
            name="userName"
            placeholder="Search user on GitHub"
          />
        {hasError && (
          <div className={styles.error}>No result</div>
        )}
        <Button>
          Search
        </Button>
      </div>
    </form>
  );
}
