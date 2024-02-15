"use client";

import ImageContainer, {
  ImageContainerProps,
} from "@/components/ImageContainer/ImageContainer.componenet";
import style from "./page.module.css";
import Box from "@/components/Box/Box.component";
import Svg from "../../public/svgs/svgComponent/svg.component";
import UserReviewSlider from "@/components/UserReviewSlider/UserReviewSlider.component";
import reviews from "../../public/data/userReviews";
import ValuesGrid, {
  ValuesGridProps,
} from "@/components/ValuesGrid/ValuesGrid.component";
import CtaButton from "@/components/CtaButton/CtaButton.component";
import Footer from "@/components/Footer/Footer.component";
import UserReview, {
  UserReviewProps,
} from "@/components/UserReview/UserReview.component";
import Link from "next/link";
import va from "@vercel/analytics";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const logo: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693082667/ProSupps/logos/ProSuppsLogo-dark_yelsda.webp",
    alt: "",
    aspectRatio: "776/97",
  };

  const mobileBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1707881567/FInalone_fahh3r.jpg",
    alt: "",
    aspectRatio: "1637/2238",
  };

  const productBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1707882024/fjhasd_flhjasdfd_np8b1k.png",
    alt: "",
    aspectRatio: "1080/2814",
  };

  const desktopBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1707881567/FinalDesktop_arwyg8.jpg",
    alt: "",
    aspectRatio: "2414/1357",
  };
  const hydeBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693703566/ProSupps/productImages/Thelast_in3ylq.jpg",
    alt: "",
    aspectRatio: "2/1.75",
  };

  const hydroBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1707882704/cla_lrvqp8.png",
    alt: "",
    aspectRatio: "2/1.75",
  };

  const proteinBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693516116/ProSupps/banners/ProteinTest2_uthjr8.jpg",
    alt: "",
    aspectRatio: "2/1.75",
  };

  const productBackground: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693103548/ProSupps/Misc%20Assets/Backaground1_suh27q.png",
    alt: "",
    aspectRatio: "4/5",
  };

  const generateBoxes = (num: number) => {
    const gen = [];
    for (let i = 0; i < num; i++) {
      gen.push(<Box config={{ red: i < num - 3, blink: num - 3 === i }} />);
    }
    return gen;
  };

  const gncLogo: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1687980975/Misc%20Assets/Trust%20Logos/SmallGnc-min_w7egga.png",
    alt: "",
    aspectRatio: "480/152",
  };
  const walmartLogo: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1687978685/Misc%20Assets/Trust%20Logos/walmart-logo-min_xj87gh.png",
    alt: "",
    aspectRatio: "855/305",
  };
  const bodyLogo: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693089460/Misc%20Assets/Trust%20Logos/bodybuilding-2_2x_d1n5ml.png",
    alt: "",
    aspectRatio: "290/42",
  };

  const vslogo: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1689008487/Misc%20Assets/Trust%20Logos/Shoplogo_ml4g7w.png",
    alt: "",
    aspectRatio: "900/156",
  };

  const sampleOne: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693695597/ProSupps/productImages/Theone-min_rupfwf.png",
    alt: "",
    aspectRatio: "1/1",
  };

  const sampleTwo: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693695597/ProSupps/productImages/Theone-min_rupfwf.png",
    alt: "",
    aspectRatio: "1/1",
  };

  const backgroundDesktop: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693544021/ProSupps/Misc%20Assets/BackgroundTest_mjwhh4.png",
    alt: "",
    aspectRatio: "1/1",
  };

  const sampleThree: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1707882266/CLA_oddndp.png",
    alt: "",
    aspectRatio: "1080/811",
  };

  const valuesGridConfig: ValuesGridProps = {
    values: [
      {
        heading: "PROUDLY MADE IN THE USA",
        subtext: "",
        icon: "USAIcon",
        information:
          "Crafted with pride in the USA, our products embody the highest standards of quality and excellence.",
        darkTheme: true,
        smallHeading: true,
      },
      {
        heading: "HIGH QUALITY INGREDIENTS",
        subtext: "",
        icon: "MoleculeIcon",
        information:
          "Highly studied, premium ingredients. You will not find ineffective doses of any ingredients here.",
        darkTheme: true,
        smallHeading: true,
      },
      {
        heading: "FORMULATED BY EXPERTS",
        subtext: "",
        icon: "ElectricIcon",
        information:
          "Our products are formulated by experts who utilize the latest science in order to establish our quality researched products.",
        darkTheme: true,
        smallHeading: true,
      },
      {
        heading: "TRANSPARENT LABELS",
        subtext: "",
        icon: "NoContractsIcon",
        information:
          "Our products and labels offer complete transparency, allowing no use of proprietary blends. What you see is what you get, no hidden secrets.",
        darkTheme: true,
        smallHeading: true,
      },
    ],
    darkTheme: true,
  };

  const generateReview = (reviews: UserReviewProps[]) => {
    const gen = [];
    for (let i = 0; i < reviews.length; i++) {
      gen.push(<UserReview userReviewConfig={reviews[i]} />);
    }
    return gen;
  };

  return (
    <>
      <main className={style.main}>
        <div className={style.header}>
          <ImageContainer imageContainerConfig={logo} />
        </div>
        <div className={style.banner}>
          <ImageContainer imageContainerConfig={mobileBanner} />
          <p>
            IMPROVES BODY COMPOSITION &<br /> WEIGHT LOSS AID.†
          </p>
          <p>ENHANCES FAT TO ENERGY CONVERSION!† </p>
          <div>
            <Link
              href="/checkout"
              onClick={() => {
                va.track("Claim");
              }}
            >
              <button className={style.cta}>
                {" "}
                YES, CLAIM MY PRODUCTS NOW!
                <br />
                <span style={{ fontSize: "11px" }}>
                  {" "}
                  Limited Time Price:{" "}
                  <span
                    style={{
                      fontWeight: "600",
                      color: "lightgrey",
                      textDecoration: "line-through",
                    }}
                  >
                    $49.98
                  </span>{" "}
                  $37.48
                </span>
              </button>
            </Link>
            <p>HURRY, THIS SALE ENDS SOON!</p>
            <div className={style.boxContainer}> {generateBoxes(16)}</div>
          </div>
        </div>
        <div className={style.copy}>
          <div>
            <p>FOR A LIMITED TIME, GET</p>
            <h1>THE ULTIMATE FAT BURNING DUO</h1>
            <p style={{ fontWeight: "800" }}>
              AT A WHOPPING{" "}
              <span style={{ textDecoration: "underline" }}>25% DISCOUNT</span>
            </p>
          </div>
        </div>
        <div className={style.buffer}> </div>
        <div className={style.slider}>
          <div>
            <ImageContainer imageContainerConfig={bodyLogo} />
            <ImageContainer imageContainerConfig={gncLogo} />
            <ImageContainer imageContainerConfig={walmartLogo} />
            <ImageContainer imageContainerConfig={vslogo} />
          </div>
        </div>
        <div className={style.productInfo}>
          <ImageContainer imageContainerConfig={productBanner} />
          <div className={style.prodcutText}>
            <p>Your Secret Weapon for Fat-to-Energy Conversion!† </p>
            <p></p>
            <p>The Ultimate Weight-Loss Super-Aid!† </p>
          </div>
          <h2>Unlock the Secret Weapons for Fat Destruction:</h2>
          <div className={style.productBuffer}></div>
          <div className={style.productInfoSection}>
            <p style={{ fontSize: "20px", fontWeight: "900" }}>
              The Fat-Loss Cheat Code—And How to Crack It:
            </p>
            <p style={{ fontStyle: "italic", fontWeight: "700" }}>
              You're doing everything "right"—lifting, cardio, you name it—but
              that stubborn fat isn't budging. Sound familiar?
            </p>
            <br />
            <p style={{ fontSize: "18px", fontWeight: "900" }}>
              The Big 'Fat' Problem...
            </p>
            <br />
            <p>
              The problem for most people is that they become so drained halfway
              through their workouts that they{" "}
              <span style={{ textDecoration: "underline", fontWeight: "700" }}>
                can't break through that pesky 'barrier' to burn off the fat.
              </span>
              <br />
              <br />
              To make matters worse, slow recovery times make maintaining a
              consistent routine challenging.
              <br />
              <br />
              Trust us, we've all been there and it sucks...
              <br />
              <br />
              <span style={{ fontStyle: "italic", fontWeight: "800" }}>
                ❌ Barrier #1: Fat is a stubborn foe that takes a ton of energy
                to burn.
              </span>
              <br />
              <br />
              <span style={{ fontStyle: "italic", fontWeight: "800" }}>
                ❌ Barrier #2: Slow recovery is killing your consistency and
                your spirit.
              </span>
              <br />
              <br />
            </p>
            <hr />
            <br />
            <p style={{ fontSize: "18px", fontWeight: "900" }}>
              How to Obliterate These Barriers With Ease...
            </p>
            <br />
            <p>
              <span style={{ fontStyle: "italic", fontWeight: "800" }}>
                {" "}
                Drumroll, please...
              </span>{" "}
              Meet the dynamic duo your fat-loss journey has been crying out
              for:
              <br />
              <br />
              <span style={{ fontStyle: "italic", fontWeight: "800" }}>
                {" "}
                ✅ CLA 3000:
              </span>
              <br />
              <br />
              CLA 3000 is for anyone looking to improve their body composition
              and aid in weight loss. It can help you feel fuller longer,
              decreasing the desire for excess calories.†
              <br />
              <br />{" "}
              <span style={{ fontStyle: "italic", fontWeight: "800" }}>
                ✅ L-CARNITINE 3000:
              </span>
              <br />
              <br />
              With its power-packed L-Carnitine and Pantothenic Acid, this
              formula not only helps{" "}
              <span style={{ textDecoration: "underline", fontWeight: "700" }}>
                support your body's natural ability to convert fat into energy
              </span>
              , but also promotes faster exercise recovery.†
            </p>
            <br />
            <hr />
            <div className={style.infoBox} style={{ marginTop: "20px" }}>
              <div>
                <Svg icon="verifiedIcon" color="white" />
                <p>Science-Backed Ingredients.</p>
              </div>
              <p>
                Forget about diluted blends and shady labels. At ProSupps, we go
                all-in with potent, science-backed ingredients in full clinical
                doses — we don't cut any corners!
              </p>
            </div>
            <div className={style.infoBox}>
              <div>
                <Svg icon="FireIcon" color="white" />
                <p>Beyond Delicious Flavors!</p>
              </div>
              <p>
                Think effective means compromising on taste? Think again. Our
                flavors are so sinfully good, you'll mistake your drink for a
                cheat meal.
              </p>
            </div>
            <br />
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "700",
                fontSize: "15px",
              }}
            >
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "900",
                }}
              >
                WARNING:{" "}
              </span>{" "}
              Deals like this on our top products come around only{" "}
              <span style={{ fontWeight: "800" }}>a few times a year.</span>{" "}
              <span style={{ fontWeight: "800", textDecoration: "underline" }}>
                Act fast before the clock runs out!
              </span>
            </p>
          </div>

          <div className={style.gaurentee} style={{ marginTop: "20px" }}>
            <div className={style.headlineCopy}>
              <Svg icon="verifiedIcon" color="lime" />
              <p>The Insane ProSupps Guarantee</p>
            </div>
            <p>
              <span style={{ fontWeight: "700", textDecoration: "underline" }}>
                If you don't find yourself absolutely THRILLED with your
                purchase
              </span>
              , ship it back to us within 30 days, and you'll get every single
              penny refunded.
              <br />
              <br />
              <span style={{ fontWeight: "800", textDecoration: "underline" }}>
                No question, no "buts," and absolutely zero BS.
              </span>
            </p>
          </div>
          <Link
            href="/checkout"
            onClick={() => {
              va.track("Claim");
            }}
          >
            <button className={style.cta}>
              {" "}
              YES, CLAIM MY PRODUCTS NOW!
              <br />
              <span style={{ fontSize: "13px" }}>
                {" "}
                Limited Time Price:{" "}
                <span
                  style={{
                    fontWeight: "600",
                    color: "lightgrey",
                    textDecoration: "line-through",
                  }}
                >
                  $49.98
                </span>{" "}
                $37.48
              </span>
            </button>
          </Link>
        </div>
        <div
          className={style.informationContainer}
          style={{ backgroundColor: "rgba(203, 203, 203, 0.5)" }}
        >
          <div>
            <ImageContainer imageContainerConfig={productBackground} />
            <p>Boost energy by turning fat into fuel.† </p>
            <p>Speed up your post-workout recovery.† </p>
          </div>
          <ImageContainer imageContainerConfig={sampleTwo} />
          <div className={style.productInfoSection}>
            <p style={{ fontWeight: "900" }}>L-CARNITINE 3000:</p>
            <p style={{ fontWeight: "800", fontStyle: "italic" }}>
              Had enough of energy products that ignore the real issue—stubborn
              fat?
            </p>
            <div className={`${style.infoBox} ${style.hydeInfo}`}>
              <div>
                <Svg icon="ElectricIcon" color="white" />
                <p>Fat-to-Energy Alchemy</p>
              </div>
              <p>
                <span style={{ fontWeight: "500" }}>
                  ProSupps® L-Carnitine has been scientifically formulated to
                  convert fatty acids directly into cellular energy.†
                  <br />
                  <br />
                  Imagine it as your body's own renewable energy source—
                  <span style={{ fontWeight: "700" }}>
                    no sugar, no calories, just pure fat-to-energy conversion.†
                  </span>
                </span>
              </p>
              <div
                className={style.hydeBuffer}
                style={{ aspectRatio: "1/.77" }}
              ></div>
              <ImageContainer imageContainerConfig={hydeBanner} />
            </div>
            <h3 style={{ marginTop: "20px" }}>The Bottom Line:</h3>{" "}
            <p>
              <span style={{ fontWeight: "500" }}>
                Stop settling for energy boosters that fizzle out, and leave the
                real enemy—stubborn fat—untouched.
              </span>
              <br />
              <br />
              <span
                style={{
                  fontWeight: "800",

                  fontStyle: "italic",
                }}
              >
                Unlock your true workout potential and elevate your energy game
                today!
              </span>
            </p>
            <hr style={{ marginTop: "20px" }} />
            <Link
              href="/checkout"
              onClick={() => {
                va.track("Claim");
              }}
            >
              <button className={style.cta} style={{ marginTop: "20px" }}>
                YES, CLAIM MY PRODUCTS NOW!
                <br />
                <span style={{ fontSize: "13px" }}>
                  {" "}
                  Limited Time Price:{" "}
                  <span
                    style={{
                      fontWeight: "600",
                      color: "lightgrey",
                      textDecoration: "line-through",
                    }}
                  >
                    $49.98
                  </span>{" "}
                  $37.48
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div
          className={style.informationContainer}
          style={{ backgroundColor: "rgba(203, 203, 203, 0.5)" }}
        >
          <div>
            <ImageContainer imageContainerConfig={productBackground} />
            <p id={style.words1}>Unleash intense energy for your workout.† </p>
            <p id={style.words2}>Fire up your metabolism to burn more fat.† </p>
          </div>
          <ImageContainer imageContainerConfig={sampleThree} />
          <div className={style.productInfoSection}>
            <p> Meet CLA 3000:</p>
            <p style={{ fontWeight: "800", fontStyle: "italic" }}>
              Not Just Another Supplement; A Weight Management Revolution.†
              <span style={{ fontWeight: "500", fontStyle: "normal" }}> </span>
            </p>
            <div className={`${style.infoBox} ${style.hydeInfo}`}>
              <div>
                <Svg icon="ElectricIcon" color="white" />
                <p>
                  Tired of weight loss efforts that barely scratch the surface?
                </p>
              </div>
              <p>
                <span style={{ fontWeight: "500" }}>
                  With every serving delivering a robust 3400-6800mg of
                  Conjugated Linoleic Acid (CLA), CLA 3000 ignites your
                  metabolism and optimizes body composition, far beyond the
                  average intake from food.†
                </span>
                <br />
                <br />
              </p>
              <div
                className={style.hydeBuffer}
                style={{ aspectRatio: "1/0.6" }}
              ></div>
              <ImageContainer imageContainerConfig={hydroBanner} />
            </div>
            <h3 style={{ marginTop: "20px" }}>Let's Put It Plainly:</h3>{" "}
            <p>
              <span style={{ fontWeight: "500" }}>
                If you're seeking a supplement that targets weight loss
                effectively and enhances muscle tone, CLA 3000 is your answer.†
              </span>
              <br />
              <br />
              <span
                style={{
                  fontWeight: "800",

                  fontStyle: "italic",
                }}
              >
                Elevate Your Metabolism, Sculpt Your Body, Embrace the Change
                with CLA 3000. Try It Now!†
              </span>
            </p>
            <hr style={{ marginTop: "20px" }} />
            <Link
              href="/checkout"
              onClick={() => {
                va.track("Claim");
              }}
            >
              <button className={style.cta} style={{ marginTop: "20px" }}>
                YES, CLAIM MY PRODUCTS NOW!
                <br />
                <span style={{ fontSize: "13px" }}>
                  {" "}
                  Limited Time Price:{" "}
                  <span
                    style={{
                      fontWeight: "600",
                      color: "lightgrey",
                      textDecoration: "line-through",
                    }}
                  >
                    $49.98
                  </span>{" "}
                  $37.48
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{ position: "relative", width: "100%", aspectRatio: "4/6.25" }}
        >
          <div className={style.banner}>
            <ImageContainer imageContainerConfig={mobileBanner} />
            <p>TAKE ACTION AND BOOST YOUR ENERGY TODAY!† </p>
            <p style={{ fontSize: "10px", top: "40%", width: "20%" }}>
              {"Boost Your Fat-to-Energy Now!†".toUpperCase()}
            </p>
            <div>
              <Link
                href="/checkout"
                onClick={() => {
                  va.track("Claim");
                }}
              >
                <button className={style.cta}>
                  YES, CLAIM MY PRODUCTS NOW!
                  <br />
                  <span style={{ fontSize: "13px" }}>
                    {" "}
                    Limited Time Price:{" "}
                    <span
                      style={{
                        fontWeight: "600",
                        color: "lightgrey",
                        textDecoration: "line-through",
                      }}
                    >
                      $49.98
                    </span>{" "}
                    $37.48
                  </span>
                </button>
              </Link>
              <p>HURRY, THIS SALES ENDS SOON</p>
              <div className={style.boxContainer}> {generateBoxes(16)}</div>
            </div>
          </div>
          <div className={style.asdf} style={{ marginTop: "10px" }}>
            <div>
              <p></p>
              <h1></h1>
              <p
                style={{
                  textAlign: "left",
                  fontWeight: "900",
                  fontSize: "19px",
                  padding: "0px 20px",
                  paddingTop: "28px",
                }}
              >
                <span
                  style={{
                    color: "var(--primaryColor)",
                    textDecoration: "underline",
                  }}
                >
                  {"THIS IS A LIMITED TIME OFFER,".toUpperCase()}
                </span>
                <br />

                {"CLAIM YOUR STACK BEFORE IT'S TOO LATE!".toUpperCase()}
              </p>
              <p
                style={{
                  padding: "0px 20px",
                  marginTop: "12px",
                  fontWeight: "500",
                }}
              >
                If you're serious about accelerating your fat-loss journey,
                don't dilly-dally. Deals like this on our top products come
                around only a few times a year.
                <span
                  style={{ fontWeight: "700", textDecoration: "underline" }}
                >
                  Act fast before the clock runs out!
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={style.reviews}>
          <div className={style.socialProof}>
            <h4>
              {"Don't just take our word for it—the results speak for themselves!".toUpperCase()}
            </h4>
            <p>
              <br />
              We've got a treasure trove of success stories from folks who've
              used these two products. Scroll down and see for yourself!
            </p>
          </div>
          <UserReviewSlider userReviewSliderConfig={{ reviews: reviews }} />
          <ValuesGrid valuesGridConfig={valuesGridConfig} />
        </div>
        <div style={{ padding: "0px 24px", marginBottom: "40px" }}>
          <Link
            href="/checkout"
            onClick={() => {
              va.track("Claim");
            }}
          >
            <button className={style.cta}>
              {" "}
              YES, CLAIM MY PRODUCTS NOW!
              <br />
              <span style={{ fontSize: "13px" }}>
                {" "}
                Limited Time Price:{" "}
                <span
                  style={{
                    fontWeight: "600",
                    color: "lightgrey",
                    textDecoration: "line-through",
                  }}
                >
                  $49.98
                </span>{" "}
                $37.48
              </span>
            </button>
          </Link>
        </div>
        <Footer />
      </main>
      <main className={style.mainDesktop}>
        <div className={style.desktopBanner}>
          <div className={style.desktopHeader}>
            <ImageContainer imageContainerConfig={logo} />
            <p style={{ fontWeight: "800" }}></p>
          </div>
          <div style={{ width: "100%" }}>
            <img
              style={{ aspectRatio: "1920/1080", width: "100%" }}
              src={desktopBanner.src}
            />
          </div>
        </div>
        <div
          style={{ aspectRatio: "2414/1357", width: "100%" }}
          className={style.desktopCopy}
        >
          <div className={style.ticker}>
            {" "}
            <p>HURRY, THIS SALES ENDS SOON</p>
            <div className={style.boxContainer}> {generateBoxes(16)}</div>
          </div>
          <div className={style.desktopCopyText}>
            <p>FOR A LIMITED TIME ONLY, GET</p>
            <h1 style={{ fontSize: "112px", marginTop: "12px" }}>
              THE ULTIMATE FAT BURNING DUO
            </h1>
            <p>
              AT A WHOPPING{" "}
              <span style={{ textDecoration: "underline" }}>25% DISCOUNT</span>
            </p>
            <div className={style.infoBox} style={{ marginTop: "20px" }}>
              <div>
                <Svg icon="ElectricIcon" color="white" />
                <p>CLA 3000:</p>
              </div>
              <p>
                CLA 3000 is for anyone looking to improve their body composition
                and aid in weight loss. It can help you feel fuller longer,
                decreasing the desire for excess calories.†
              </p>
            </div>
            <div className={style.infoBox}>
              <div>
                <Svg icon="FireIcon" color="white" />
                <p>L-CARNITINE 3000:</p>
              </div>
              <p>
                With its power-packed L-Carnitine and Pantothenic Acid, this
                formula not only helps{" "}
                <span
                  style={{ textDecoration: "underline", fontWeight: "700" }}
                >
                  support your body's natural ability to convert fat into energy
                </span>
                , but also promotes faster exercise recovery.†
              </p>
            </div>
            <Link
              href="/checkout"
              onClick={() => {
                va.track("Claim");
                router.push("/checkout");
              }}
            >
              <button className={style.cta}>
                {" "}
                YES, CLAIM MY PRODUCTS NOW!
                <br />
                <span style={{ fontSize: "11px" }}>
                  {" "}
                  Limited Time Price:{" "}
                  <span
                    style={{
                      fontWeight: "600",
                      color: "lightgrey",
                      textDecoration: "line-through",
                    }}
                  >
                    $49.98
                  </span>{" "}
                  $37.48
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className={style.slider}>
          <div>
            <ImageContainer imageContainerConfig={bodyLogo} />
            <ImageContainer imageContainerConfig={gncLogo} />
            <ImageContainer imageContainerConfig={walmartLogo} />
            <ImageContainer imageContainerConfig={vslogo} />
          </div>
        </div>
        <div className={style.productInfosection}>
          <div className={style.grid}>
            <div className={style.grid1}>
              <div className={style.productInfoSection}>
                <p style={{ fontSize: "44px", fontWeight: "900" }}>
                  The Fat-Loss Cheat Code—And How to Crack It:
                </p>
                <p style={{ fontStyle: "italic", fontWeight: "700" }}>
                  You're doing everything "right"—lifting, cardio, you name
                  it—but that stubborn fat isn't budging. Sound familiar?
                </p>
                <br />
                <p style={{ fontSize: "27px", fontWeight: "900" }}>
                  The Big 'Fat' Problem...
                </p>
                <br />
                <p style={{ fontWeight: "300" }}>
                  The problem for most people is that they become so drained
                  halfway through their workouts that they{" "}
                  <span
                    style={{ textDecoration: "underline", fontWeight: "500" }}
                  >
                    can't break through that pesky 'barrier' to burn off the
                    fat.
                  </span>
                  <br />
                  <br />
                  To make matters worse, slow recovery times make maintaining a
                  consistent routine challenging.
                  <br />
                  <br />
                  Trust us, we've all been there and it sucks...
                  <br />
                  <br />
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: "800",
                      fontSize: "16px",
                    }}
                  >
                    ❌ Barrier #1: Fat is a stubborn foe that takes a ton of
                    energy to burn.
                  </span>
                  <br />
                  <br />
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: "800",
                      fontSize: "16px",
                    }}
                  >
                    ❌ Barrier #2: Slow recovery is killing your consistency and
                    your spirit.
                  </span>
                  <br />
                  <br />
                </p>
                <hr />
                <br />
                <p style={{ fontSize: "26px", fontWeight: "900" }}>
                  How to Obliterate These Barriers With Ease...
                </p>
                <br />
                <p style={{ fontWeight: "300" }}>
                  <span style={{ fontStyle: "italic", fontWeight: "800" }}>
                    {" "}
                    Drumroll, please...
                  </span>{" "}
                  Meet the dynamic duo your fat-loss journey has been crying out
                  for:
                  <br />
                  <br />
                  <span style={{ fontStyle: "italic", fontWeight: "800" }}>
                    {" "}
                    ✅ CLA 3000:
                  </span>
                  <br />
                  <br />
                  CLA 3000 is for anyone looking to improve their body
                  composition and aid in weight loss. It can help you feel
                  fuller longer, decreasing the desire for excess calories.†
                  <br />
                  <br />{" "}
                  <span style={{ fontStyle: "italic", fontWeight: "800" }}>
                    ✅ L-CARNITINE 3000:
                  </span>
                  <br />
                  <br />
                  With its power-packed L-Carnitine and Pantothenic Acid, this
                  formula not only helps{" "}
                  <span
                    style={{ textDecoration: "underline", fontWeight: "600" }}
                  >
                    support your body's natural ability to convert fat into
                    energy
                  </span>
                  , but also promotes faster exercise recovery.†
                </p>
                <br />
                <hr />

                <br />
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "700",
                    fontSize: "15px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "17px",
                      fontWeight: "900",
                    }}
                  >
                    WARNING:{" "}
                  </span>{" "}
                  Deals like this on our top products come around only{" "}
                  <span style={{ fontWeight: "800" }}>a few times a year.</span>{" "}
                  <span
                    style={{ fontWeight: "800", textDecoration: "underline" }}
                  >
                    Act fast before the clock runs out!
                  </span>
                </p>
                <div
                  className={style.gaurentee}
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  <div className={style.headlineCopy}>
                    <Svg icon="verifiedIcon" color="lime" />
                    <p>The Insane ProSupps Guarantee</p>
                  </div>
                  <p>
                    <span
                      style={{ fontWeight: "700", textDecoration: "underline" }}
                    >
                      If you don't find yourself absolutely THRILLED with your
                      purchase
                    </span>
                    , ship it back to us within 30 days, and you'll get every
                    single penny refunded.
                    <br />
                    <br />
                    <span
                      style={{ fontWeight: "800", textDecoration: "underline" }}
                    >
                      No question, no "buts," and absolutely zero BS.
                    </span>
                  </p>
                </div>
                <Link
                  href="/checkout"
                  onClick={() => {
                    va.track("Claim");
                    router.push("/checkout");
                  }}
                >
                  <button className={style.cta}>
                    {" "}
                    YES, CLAIM MY PRODUCTS NOW!
                    <br />
                    <span style={{ fontSize: "13px" }}>
                      {" "}
                      Limited Time Price:{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          color: "lightgrey",
                          textDecoration: "line-through",
                        }}
                      >
                        $49.98
                      </span>{" "}
                      $37.48
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className={style.productdesktop}>
                <ImageContainer
                  imageContainerConfig={{
                    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1707883207/SDFASFASDFASDFASFASDFA_z3lfrx.png",
                    alt: "",
                    aspectRatio: "1/1",
                  }}
                />
                <div>
                  <div className={style.productInfoSection}>
                    <p style={{ fontWeight: "900" }}>L-CARNITINE 3000:</p>
                    <p style={{ fontWeight: "800", fontStyle: "italic" }}>
                      Had enough of energy products that ignore the real
                      issue—stubborn fat?
                    </p>
                    <div className={`${style.infoBox} ${style.hydeInfo}`}>
                      <div>
                        <Svg icon="ElectricIcon" color="white" />
                        <p>Fat-to-Energy Alchemy</p>
                      </div>
                      <p>
                        <span style={{ fontWeight: "500" }}>
                          ProSupps® L-Carnitine has been scientifically
                          formulated to convert fatty acids directly into
                          cellular energy.†
                          <br />
                          <br />
                          Imagine it as your body's own renewable energy source—
                          <span style={{ fontWeight: "700" }}>
                            no sugar, no calories, just pure fat-to-energy
                            conversion.†
                          </span>
                        </span>
                      </p>
                    </div>
                    <h3 style={{ marginTop: "20px", fontSize: "20px" }}>
                      The Bottom Line:
                    </h3>{" "}
                    <p>
                      <span style={{ fontWeight: "500" }}>
                        Stop settling for energy boosters that fizzle out, and
                        leave the real enemy—stubborn fat—untouched.
                      </span>
                      <br />
                      <br />
                      <span
                        style={{
                          fontWeight: "800",

                          fontStyle: "italic",
                        }}
                      ></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.productdesktop}>
                <ImageContainer
                  imageContainerConfig={{
                    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1707883140/ASFDASFDASDFASDFASF_cdp382.png",
                    alt: "",
                    aspectRatio: "1/1",
                  }}
                />
                <div>
                  <div className={style.productInfoSection}>
                    <p>CLA 3000:</p>
                    <p style={{ fontWeight: "800", fontStyle: "italic" }}>
                      {" "}
                      Meet CLA 3000: Not Just Another Supplement; A Weight
                      Management Revolution.†
                    </p>
                    <div className={`${style.infoBox} ${style.hydeInfo}`}>
                      <div>
                        <Svg icon="ElectricIcon" color="white" />
                        <p>Weight Control Meets Scientific Precision†</p>
                      </div>
                      <p>
                        With every serving delivering a robust 3400-6800mg of
                        Conjugated Linoleic Acid (CLA), CLA 3000 ignites your
                        metabolism and optimizes body composition, far beyond
                        the average intake from food.†
                      </p>
                    </div>
                    <h3 style={{ marginTop: "20px", fontSize: "20px" }}>
                      Let's Put It Plainly:
                    </h3>{" "}
                    <p>
                      <span style={{ fontWeight: "500" }}>
                        If you're seeking a supplement that targets weight loss
                        effectively and enhances muscle tone, CLA 3000 is your
                        answer.†
                      </span>
                      <br />
                      <br />
                      <span
                        style={{
                          fontWeight: "800",

                          fontStyle: "italic",
                        }}
                      ></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.background}>
            <div style={{ width: "100%" }}></div>
          </div>
        </div>
        <div className={style.reviews}>
          <div className={style.reviewsSamples}>
            <ImageContainer
              imageContainerConfig={{
                src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693621742/ProSupps/banners/Oneone-min_rwvank.png",
                alt: "",
                aspectRatio: "1/1",
              }}
            />
            <ImageContainer
              imageContainerConfig={{
                src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1707883140/ASFDASFDASDFASDFASF_cdp382.png",
                alt: "",
                aspectRatio: "1/1",
              }}
            />
            <ImageContainer
              imageContainerConfig={{
                src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693621742/ProSupps/banners/Oneone-min_rwvank.png",
                alt: "",
                aspectRatio: "1/1",
              }}
            />
            <ImageContainer
              imageContainerConfig={{
                src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693621742/ProSupps/banners/Oneone-min_rwvank.png",
                alt: "",
                aspectRatio: "1/1",
              }}
            />
            <ImageContainer
              imageContainerConfig={{
                src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693621742/ProSupps/banners/Oneone-min_rwvank.png",
                alt: "",
                aspectRatio: "1/1",
              }}
            />
            <ImageContainer
              imageContainerConfig={{
                src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1707883140/ASFDASFDASDFASDFASF_cdp382.png",
                alt: "",
                aspectRatio: "1/1",
              }}
            />
          </div>
          <div className={style.reviewsBackground}></div>
          <div className={style.reviewHeading}>
            <h1 style={{ fontSize: "60px" }}>
              {"Don't just take our word for it—the results speak for themselves!".toUpperCase()}
            </h1>
            <p>
              We've got a treasure trove of success stories from folks who've
              used these two products. Scroll down and see for yourself!
            </p>
            <div>
              <Svg icon="verifiedIcon" color="white" size="18px" />
              <p>1000+ Verified Reviews for Both Products</p>
            </div>
          </div>
          <div className={style.reviewGrid}>{generateReview(reviews)}</div>
          <Link
            style={{ zIndex: "1" }}
            href="/checkout"
            onClick={() => {
              va.track("Claim");
              router.push("/checkout");
            }}
          >
            <button className={style.cta}>
              {" "}
              YES, CLAIM MY PRODUCTS NOW!
              <br />
              <span style={{ fontSize: "13px" }}>
                {" "}
                Limited Time Price:{" "}
                <span
                  style={{
                    fontWeight: "600",
                    color: "lightgrey",
                    textDecoration: "line-through",
                  }}
                >
                  $49.98
                </span>{" "}
                $37.48
              </span>
            </button>
          </Link>
        </div>
        <Footer />
      </main>
    </>
  );
}
