"use client";

import ImageContainer, {
  ImageContainerProps,
} from "@/components/ImageContainer/ImageContainer.componenet";
import style from "./page.module.css";
import { log } from "console";
import { useEffect, useState } from "react";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import Footer from "@/components/Footer/Footer.component";

export default function Checkout() {
  const [carnitine, setCarntine] = useState<string | undefined>();
  const [hyde, setHyde] = useState<string | undefined>();

  const logo: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693082667/ProSupps/logos/ProSuppsLogo-dark_yelsda.webp",
    alt: "",
    aspectRatio: "776/97",
  };

  interface flavors {
    name: string;
    color: string;
    checkout: string;
  }

  // "gid://shopify/ProductVariant/40517965840569"
  // "gid://shopify/ProductVariant/40517965873337"

  const geneateHyde = (flavors: flavors[]) => {
    const gen = [];
    for (let i = 0; i < flavors.length; i++) {
      gen.push(
        <div
          className={style.colorBox}
          style={{
            backgroundColor: flavors[i].color,
            filter: hyde
              ? hyde === flavors[i].checkout
                ? "brightness(120%)"
                : "brightness(40%)"
              : "none",
          }}
          onClick={() => {
            setHyde(flavors[i].checkout);
          }}
        >
          <p>{flavors[i].name}</p>
        </div>
      );
    }
    return gen;
  };

  const generateCarnitine = (flavors: flavors[]) => {
    const gen = [];
    for (let i = 0; i < flavors.length; i++) {
      gen.push(
        <div
          className={style.colorBox}
          style={{
            backgroundColor: flavors[i].color,
            filter: carnitine
              ? carnitine === flavors[i].checkout
                ? "none"
                : "brightness(40%)"
              : "none",
          }}
          onClick={() => {
            setCarntine(flavors[i].checkout);
          }}
        >
          <p>{flavors[i].name}</p>
        </div>
      );
    }
    return gen;
  };

  const hydeFlavors: flavors[] = [
    {
      name: "MOLTEN MANGO",
      color: "rgb(226, 151, 0)",
      checkout: "gid://shopify/ProductVariant/40517965840569",
    },
    {
      name: "FIRE MELON",
      color: "#a9006e",
      checkout: "gid://shopify/ProductVariant/40517965873337",
    },
  ];

  const carntineFlavors: flavors[] = [
    {
      name: "BERRY",
      color: "#8500ad",
      checkout: "gid://shopify/ProductVariant/40776238432441",
    },
    {
      name: "BLUR RAZZ",
      color: "#0078c2",
      checkout: "gid://shopify/ProductVariant/40776238465209",
    },
    {
      name: "GREEN APPLE",
      color: "#00ad3d",
      checkout: "gid://shopify/ProductVariant/40776238497977",
    },
    {
      name: "DRAGON FRUIT",
      color: "#89005b",
      checkout: "gid://shopify/ProductVariant/43325224812729",
    },
  ];

  const hydeImage: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693621742/ProSupps/banners/Testssfasf-min_kkk5df.png",
    alt: "",
    aspectRatio: "1/1",
  };

  const carnitineImage: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694206779/ProSupps/banners/l-carnitine-3000-blue-razz-1-min_t2rbzn.png",
    alt: "",
    aspectRatio: "1/1",
  };

  useEffect(() => {
    const element = document.getElementById("carnitne");

    if (element && hyde) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [hyde]);

  useEffect(() => {
    const element = document.getElementById("review");

    if (element && hyde && carnitine) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [carnitine]);

  return (
    <>
      <main className={style.main}>
        <div className={style.header}>
          <ImageContainer imageContainerConfig={logo} />
        </div>
        <div className={style.red}>
          <Svg icon="DangerIcon" color="red" />
          <p>
            WARNING:{" "}
            <span style={{ fontWeight: "700" }}>THIS OFFER ENDS SOON!</span>
          </p>
        </div>
        <p className={style.heading}>
          FOLLOW THE INSTRUCTIONS BELOW TO CLAIM YOUR STACK:
        </p>
        <div className={style.flavorBox}>
          <p className={style.one}>1: SELECT YOUR HYDE FLAVOR</p>
          <ImageContainer imageContainerConfig={hydeImage} />
          <p className={style.select}>( TAP TO SELECT )</p>
          {geneateHyde(hydeFlavors)}
        </div>
        <div id="carnitne" className={style.flavorBox}>
          <p className={style.one}>2: SELECT YOUR L-CARNITINE FLAVOR</p>
          <ImageContainer imageContainerConfig={carnitineImage} />
          <p className={style.select}>( TAP TO SELECT )</p>
          {generateCarnitine(carntineFlavors)}
        </div>
        {hyde && carnitine && (
          <div id="review" className={style.reviewContainer}>
            <p className={style.one}>3: REVIEW YOUR ORDER</p>
            <div className={style.value}>
              <p>HYDE THERMO ( 1 ) ~ Value: $31.99</p>
              <p>L-CARNITINE 3000 ( 1 ) ~ Value: $29.99</p>
              <p>
                <span style={{ fontWeight: "800" }}>FREE</span> EXPRESS
                SHIPPING: ~ Value: $8.67
              </p>
              <p style={{ fontWeight: "700" }} className={style.total}>
                TOTAL STACK VALUE: $70.65
              </p>
              <hr />
              <p
                style={{ fontWeight: "800", color: "white" }}
                className={style.today}
              >
                TODAY'S SPECIAL PRICE: $39.99
              </p>
              <div className={style.saved}>YOUR JUST SAVED $30.66!</div>
            </div>
            <div className={style.review}>
              <div className={style.info}>
                <ImageContainer imageContainerConfig={hydeImage} />
                <p>HYPE THERMO</p>
                <p
                  style={{
                    backgroundColor: hydeFlavors.filter((e) => {
                      return e.checkout === hyde;
                    })[0].color,
                  }}
                >
                  {
                    hydeFlavors.filter((e) => {
                      return e.checkout === hyde;
                    })[0].name
                  }
                </p>
              </div>
              <div className={style.info}>
                <ImageContainer imageContainerConfig={carnitineImage} />
                <p>HYPE THERMO</p>
                <p
                  style={{
                    backgroundColor: carntineFlavors.filter((e) => {
                      return e.checkout === carnitine;
                    })[0].color,
                  }}
                >
                  {
                    carntineFlavors.filter((e) => {
                      return e.checkout === carnitine;
                    })[0].name
                  }
                </p>
              </div>
            </div>
            <div className={style.checkout}>
              <p>CHECKOUT NOW!</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <main></main>
    </>
  );
}
