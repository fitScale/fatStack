"use client";

import Image from "next/image";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import ImageContainer, {
  ImageContainerProps,
} from "../ImageContainer/ImageContainer.componenet";
import style from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  const imageContainerConfig: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693082667/ProSupps/logos/ProSuppsLogo-dark_yelsda.webp",
    alt: "ProSupps Logo",
    aspectRatio: "776/97",
    height: "20px",
  };

  return (
    <footer className={style.footer}>
      <div className={style.mobileFooter}>
        <div className={style.aboutSection}>
          <p>About ProSupps</p>
          <p>
            ProSupps: Elevating workouts with cutting-edge nutrition, crafted
            for those who demand more from every rep.
          </p>
        </div>
        <div className={style.dislaimer}>
          <p>Disclaimer</p>
          <p>
            † These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure or prevent any disease.
          </p>
        </div>
      </div>
      <div className={style.desktopFooter}>
        <div className={style.aboutSection}>
          <p>About ProSupps</p>
          <p>
            ProSupps: Elevating workouts with cutting-edge nutrition, crafted
            for those who demand more from every rep.
          </p>
        </div>
        <div className={style.dislaimer}>
          <p>Disclaimer</p>
          <p>
            † These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure or prevent any disease.
          </p>
        </div>
        <div className={style.imageContainer}>
          <div className={style.smallImage}>
            <ImageContainer imageContainerConfig={imageContainerConfig} />
          </div>
        </div>
      </div>
      <p className={style.fitScale}>
        Website Powered By{" "}
        <span className={`underline ${style.brandName}`}>TVG</span>
      </p>
    </footer>
  );
};

export default Footer;
