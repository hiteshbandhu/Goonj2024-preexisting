import Image from "next/image";
import styles from "./eventPopup.module.scss";

export default function EventPopup({
  src,
  alt,
  width,
  height,
  desc,
  contact,
  link,
  registerDesc,
  registerLink,
  setpopup,
}: eventCardProp) {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.imgSection}>
        <Image
          className={styles.img}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <div className={styles.desc}>
        <h3>{alt}</h3>
        <div className={styles.line} />
        {desc && (
          <div className={styles.container}>
            <p>
              {desc.map((des, indx) => {
                return <p key={indx}>{des}</p>;
              })}
            </p>
            <p>
              {registerDesc?.map((des, indx) => {
                return <p key={indx}>{des}</p>;
              })}
            </p>
            {link && (
              <p>
                For more Details: <a href={link}>Click Here</a>{" "}
              </p>
            )}
            {contact && (
              <p>
                For any queries contact :{" "}
                {contact.map((cnt, indx) => {
                  return (
                    <p style={{ marginTop: ".5rem" }} key={indx}>
                      {" "}
                      {cnt}
                    </p>
                  );
                })}
              </p>
            )}
            {registerLink && (
              <a
                className={styles.register}
                href={registerLink}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <p>Register Now</p>{" "}
              </a>
            )}
          </div>
        )}
        {!desc && <h2>Comming Soon</h2>}
      </div>
      <div
        className={styles.cross}
        onClick={() => {
          setpopup(false);
        }}
      >
        <p>X</p>
      </div>
    </div>
  );
}
