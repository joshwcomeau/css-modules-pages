import styles from './about.module.css';

import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <h1 className={styles.About}>About Page</h1>
      <Button>Example component</Button>
    </>
  );
}
