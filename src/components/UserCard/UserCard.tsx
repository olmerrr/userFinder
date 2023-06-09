import {UserStat} from "../UserStat";
import {UserTitle} from "../UserTitle";
import {LocalGithubUser} from "../../types";

import styles from './UserCard.module.scss';
import {UserInfo} from "../UserInfo";

interface UserCardProps extends LocalGithubUser {

}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img
        src={props.avatar}
        alt={props.avatar}
        className={styles.avatar}
      />
    <UserTitle
      created = {props.created}
      login={props.login}
      name={props.name}
    />
      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
      />

      <UserInfo
        company={props.company}
        blog={props.blog}
        location={props.location}
        twitter={props.twitter}
      />
  </div>
);
}
