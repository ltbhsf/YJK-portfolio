import style from "./Contact.module.css";
import Toast from "../asset/Toast";
import { useEffect, useState } from "react";

import Container from "../asset/Container";

const Contact = (prop) => {
  const [mailCopied, setMailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  useEffect(() => {
    if (mailCopied) {
      navigator.clipboard.writeText("kmukyj21@kookmin.ac.kr");
      const timeoutId = setTimeout(() => {
        setMailCopied(false);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [mailCopied]);

  useEffect(() => {
    if (phoneCopied) {
      navigator.clipboard.writeText("+8210-3037-9720");
      const timeoutId = setTimeout(() => {
        setPhoneCopied(false);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [phoneCopied]);

  return (
    <Container id={prop.id} className='last'>
      <div className={style["contact-container"]}>
        <p>Click to copy or navigate</p>

        <h1
          onClick={() => {
            setMailCopied(true);
          }}
        >
          EMAIL{" "}
          <span>
            kmukyj21@kookmin.ac.kr<Toast baked={mailCopied}>copied</Toast>
          </span>
        </h1>

        <h1 onClick={() => setPhoneCopied(true)}>
          PHONE{" "}
          <span>
            +8210-3037-9720<Toast baked={phoneCopied}>copied</Toast>
          </span>
        </h1>
        <a href="https://github.com/ltbhsf" target="_blank">
          <h1>
            GITHUB <span>https://github.com/ltbhsf</span>
          </h1>
        </a>
        <a href="https://ltbhsf.tistory.com" target="_blank">
          <h1>
            BLOG <span>https://ltbhsf.tistory.com</span>
          </h1>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
