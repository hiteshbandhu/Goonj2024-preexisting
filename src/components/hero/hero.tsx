import styles from "./hero.module.scss";

export default function Hero() {
  const tagSize = 200;
  return (
    <div className={styles.container}>
      <img
        id="tagLine"
        className={styles.tagLine}
        src="https://firebasestorage.googleapis.com/v0/b/goonj-2k24.appspot.com/o/scaled_asset_text_front.svg?alt=media&token=d4da0ae4-ccfb-49b1-b1fb-3d694bf50fba"
        alt="TagLine"
      />
      <a
        className={styles.marketingBrochure}
        href="https://firebasestorage.googleapis.com/v0/b/goonj-2k24.appspot.com/o/MARKETING%20BROCHURE%20GOONJ2024_compressed.pdf?alt=media&token=6a13ff41-21e1-4c52-83e7-28835eff4220"
      >
        Download Marketing Brochure
      </a>

      {/* <Dancers /> */}
      <p className={styles.scrollDown} id="scrollDown">
        &#8595;&#8595;&#8595;&#8595;&#8595;&#8595;
        <br />
        Scroll down
      </p>
    </div>
  );
}
