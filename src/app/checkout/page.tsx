"use client";

import ImageContainer, {
  ImageContainerProps,
} from "@/components/ImageContainer/ImageContainer.componenet";
import style from "./page.module.css";
import { log } from "console";
import { useEffect, useState } from "react";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import Footer from "@/components/Footer/Footer.component";
import { useMutation } from "@apollo/client";
import {
  addCartItemMutation,
  applyDiscountMutation,
  createCartMutation,
} from "@/shopify/graphql/mutations/cart.mutations";
import { CartClientServices } from "@/shopify/services/client/cart.services.client";
import { useRouter } from "next/navigation";
import CssLoader from "@/components/CssLoader/CssLoader.component";
import va from "@vercel/analytics";

export default function Checkout() {
  const router = useRouter();
  const [carnitine, setCarntine] = useState<string | undefined>();
  const [hyde, setHyde] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

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
      name: "Molten Mango",
      color: "rgb(226, 151, 0)",
      checkout: "gid://shopify/ProductVariant/40517965873337",
    },
    {
      name: "Fire Melon",
      color: "#a9006e",
      checkout: "gid://shopify/ProductVariant/40517965840569",
    },
  ];

  const carntineFlavors: flavors[] = [
    {
      name: "Berry Blast",
      color: "#8500ad",
      checkout: "gid://shopify/ProductVariant/40776238432441",
    },
    {
      name: "Blue Razz",
      color: "#0078c2",
      checkout: "gid://shopify/ProductVariant/40776238465209",
    },
    {
      name: "Green Apple",
      color: "#00ad3d",
      checkout: "gid://shopify/ProductVariant/40776238497977",
    },
    {
      name: "Dragon Fruit",
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

  const [createCart] = useMutation(createCartMutation);
  const [addCart] = useMutation(addCartItemMutation);
  const [discountCode] = useMutation(applyDiscountMutation);

  const checkout = async () => {
    setLoading(true);

    const cart = await CartClientServices.createCart(createCart, {
      merchandiseId: hyde!,
      quantity: 1,
    });

    console.log(cart);

    const finalCart = await CartClientServices.addCartItem(
      addCart,
      createCart,
      {
        cartId: cart.cart.id,
        merchandiseId: carnitine!,
        quantity: 1,
      }
    );

    const discount = await CartClientServices.applyDiscount(discountCode, {
      cartId: finalCart.cart.id!,
      codes: ["fat-loss-stack-discount"],
    });

    router.push(finalCart.cart.checkoutUrl!);
  };

  return (
    <>
      <main className={style.main}>
        {loading && (
          <div className={style.spinner}>
            <CssLoader />
          </div>
        )}
        <div className={style.header}>
          <ImageContainer imageContainerConfig={logo} />
        </div>

        <p className={style.heading}>
          <span style={{ fontWeight: "600" }}>
            FOLLOW THESE STEPS TO CLAIM YOUR BIG SAVINGS &
          </span>{" "}
          <span style={{ fontWeight: "900", textDecoration: "underline" }}>
            FAST-TRACK YOUR FAT-LOSS JOURNEY TODAY!
          </span>
        </p>
        <div className={style.arrows}>
          <Svg icon="ArrowSkinnyIcon" color="white" />
          <Svg icon="ArrowSkinnyIcon" color="white" />
          <Svg icon="ArrowSkinnyIcon" color="white" />
        </div>
        <div className={style.flavorBox}>
          <p className={style.one}>1: SELECT YOUR HYDE FLAVOR</p>

          <p className={style.select}>( TAP TO SELECT )</p>
          {geneateHyde(hydeFlavors)}
        </div>
        <div id="carnitne" className={style.flavorBox}>
          <p className={style.one}>2: SELECT YOUR L-CARNITINE FLAVOR</p>

          <p className={style.select}>( TAP TO SELECT )</p>
          {generateCarnitine(carntineFlavors)}
        </div>
        <div id="review"></div>
        {hyde && carnitine && (
          <div className={style.reviewContainer}>
            <div className={style.red}>
              <Svg icon="DangerIcon" color="red" size="15px" />
              <p>
                WARNING:{" "}
                <span style={{ fontWeight: "700" }}>THIS OFFER ENDS SOON!</span>
              </p>
            </div>
            <p className={style.one}>3: REVIEW YOUR ORDER</p>
            <div className={style.value}>
              <p>HYDE THERMO ( 1 ) ~ Value: $31.99</p>
              <p>L-CARNITINE 3000 ( 1 ) ~ Value: $29.99</p>

              <p style={{ fontWeight: "700" }} className={style.total}>
                TOTAL STACK VALUE: $62.00
              </p>
              <hr />
              <p
                style={{ fontWeight: "800", color: "white" }}
                className={style.today}
              >
                TODAY'S SPECIAL PRICE: $39.99
              </p>
              <div className={style.saved}>YOUR JUST SAVED $22.01!</div>
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
                <p>L-CARNITINE</p>
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
            <div
              className={style.checkout}
              onClick={() => {
                va.track("Checkout");
                checkout();
              }}
            >
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
