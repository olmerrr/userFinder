import {ReactComponent as SearchIcon} from "assets/icon-search.svg"
import styles from './Search.module.scss';
import React, {FormEventHandler, useRef} from "react";
import {Button} from "../Button";

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void
}

export const Search = ({hasError, onSubmit}: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = searchRef.current?.value || "";
    console.log(searchRef.current)
    if (text) {
      onSubmit(text);

      if (searchRef.current){
        searchRef.current.value = "";
      }
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
            ref={searchRef}
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
