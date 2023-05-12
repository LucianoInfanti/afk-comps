import Head from 'next/head'
import styles from './page.module.css'
import Header from './components/header/header';
import Dropdown from './components/shared/dropdown/dropdown';

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>AFK Comps</title>
      </Head>
      
      <Dropdown
      label={"Faction"}
      placeholder={"Select faction"}/>
    
    </main>
  )
}
