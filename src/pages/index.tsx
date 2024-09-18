import styles from './index.module.css';

import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <h1 className={styles.Home}>Homepage</h1>
      <Button>Example component</Button>
    </>
  );
}
