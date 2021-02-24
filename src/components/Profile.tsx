import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const contexData = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://cdn.discordapp.com/avatars/563106455025352726/c0fd3465de28c1d48f2e1f821e7ae445.png?size=128"
        alt="Jonatas Souza Soares"
      />

      <div>
        <strong>Jônatas Souza Soares</strong>
        
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {contexData.level}
        </p>
      </div>
    </div>
  )
}