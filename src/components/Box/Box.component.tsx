"use client";

import { useEffect, useState } from "react";
import style from "./Box.module.css";

export interface BoxProps {
  red: boolean;
  blink: boolean;
}

const Box = ({ config }: { config: BoxProps }) => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    if (config.blink) {
      setTimeout(() => {
        setBlink(!blink);
      }, 500);
    }
  }, [blink]);

  return (
    <div
      className={style.boxes}
      style={{
        backgroundColor: config.red ? "red" : "lime",
        opacity: blink ? "50%" : "100%",
      }}
    >{`${config.red ? "X" : ""}`}</div>
  );
};

export default Box;
