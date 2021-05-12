import "../styles/global.scss";

import { Header } from "../components/header/index";
import { Player } from "../components/player/index";

import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />;
      </main>
      <Player />
    </div>
  );
}

export default MyApp;
