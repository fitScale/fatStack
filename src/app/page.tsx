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

export default function Home() {
  const logo: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693082667/ProSupps/logos/ProSuppsLogo-dark_yelsda.webp",
    alt: "",
    aspectRatio: "776/97",
  };

  const mobileBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693620621/ProSupps/banners/Thermo_Stack_jy545l.jpg",
    alt: "",
    aspectRatio: "1637/2238",
  };

  const productBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693693072/TheFinalOneFR_hypusy.jpg",
    alt: "",
    aspectRatio: "1080/2814",
  };

  const desktopBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693539561/ProSupps/banners/Tewst22_gqz5nl.jpg",
    alt: "",
    aspectRatio: "2414/1357",
  };
  const hydeBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693703566/ProSupps/productImages/Thelast_in3ylq.jpg",
    alt: "",
    aspectRatio: "2/1.75",
  };

  const hydroBanner: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693703565/ProSupps/productImages/HydeFinal_qtbz6n.jpg",
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
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1693701237/ProSupps/productImages/hyde2-min_anl4cu.png",
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
            TURBOCHARGES YOUR{" "}
            <span style={{ fontWeight: 900, textDecoration: "underline" }}>
              {" "}
              METABOLISM
            </span>
            , ENERGY, AND FOCUS.
          </p>
          <p>ENHANCES FAT TO ENERGY CONVERSION!</p>
          <div>
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
                  $62.00
                </span>{" "}
                $39.99
              </span>
            </button>
            <p>HURRY, THIS SALE ENDS SOON!</p>
            <div className={style.boxContainer}> {generateBoxes(16)}</div>
          </div>
        </div>
        <div className={style.copy}>
          <div>
            <p>LIMITED TIME OFFER, GET</p>
            <h1>THE ULTIMATE FAT BURNING DUO</h1>
            <p>
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
            <p>Your Secret Weapon for Fat-to-Energy Conversion!</p>
            <p></p>
            <p>Energize and Turbocharge Your Metabolism!</p>
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
              consistent routine challenging
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
                ✅ HYDE® Thermo:
              </span>
              <br />
              <br />
              Infused with Capsimax® to turbocharge your metabolism into
              overdrive and fortified with caffeine and Vitamin B-12 for
              <span style={{ textDecoration: "underline", fontWeight: "700" }}>
                {" "}
                razor-sharp focus and powerful energy.
              </span>
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
              , but also promotes faster exercise recovery.
              <br />
              <br />
              <span style={{ textDecoration: "underline", fontWeight: "700" }}>
                So say goodbye to next-day soreness
              </span>{" "}
              and fatigue—now you can fuel your workouts to new levels and
              bounce back ready for more!
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
                $62.00
              </span>{" "}
              $39.99
            </span>
          </button>
        </div>
        <div
          className={style.informationContainer}
          style={{ backgroundColor: "rgba(203, 203, 203, 0.5)" }}
        >
          <div>
            <ImageContainer imageContainerConfig={productBackground} />
            <p>Boost energy by turning fat into fuel.</p>
            <p>Speed up your post-workout recovery.</p>
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
                  convert fatty acids directly into cellular energy.
                  <br />
                  <br />
                  Imagine it as your body's own renewable energy source—
                  <span style={{ fontWeight: "700" }}>
                    no sugar, no calories, just pure fat-to-energy conversion.
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
                No more energy solutions that leave you flat before you've even
                hit your stride.
              </span>
              <br />
              <br />
              <span
                style={{
                  fontWeight: "800",

                  fontStyle: "italic",
                }}
              >
                Flip the switch, go beyond the ordinary, and energize your lifts
                to new levels today!
              </span>
            </p>
            <hr style={{ marginTop: "20px" }} />
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
                  $62.00
                </span>{" "}
                $39.99
              </span>
            </button>
          </div>
        </div>
        <div
          className={style.informationContainer}
          style={{ backgroundColor: "rgba(203, 203, 203, 0.5)" }}
        >
          <div>
            <ImageContainer imageContainerConfig={productBackground} />
            <p id={style.words1}>Unleash intense energy for your workout.</p>
            <p id={style.words2}>Fire up your metabolism to burn more fat.</p>
          </div>
          <ImageContainer imageContainerConfig={sampleThree} />
          <div className={style.productInfoSection}>
            <p>HYDE® THERMO:</p>
            <p style={{ fontWeight: "800", fontStyle: "italic" }}>
              Typical pres' give you a caffeine buzz but lack a real metabolic
              kick to give you the edge in weight loss?
              <br />
              <br />
              <span style={{ fontWeight: "500", fontStyle: "normal" }}>
                {" "}
                Meet HYDE® Thermo. This isn't just another energy booster; it's
                a metabolic energizer.
              </span>
            </p>
            <div className={`${style.infoBox} ${style.hydeInfo}`}>
              <div>
                <Svg icon="ElectricIcon" color="white" />
                <p>Insane Energy Meets Metabolic Mastery</p>
              </div>
              <p>
                <span style={{ fontWeight: "500" }}>
                  Thermo is precisely formulated to elevate your energy levels
                  while also stoking your metabolic fires.
                  <br />
                  <br /> With 250mg of caffeine for that unmistakable energy
                  surge and 50mg of Capsimax® to ignite your metabolism, we're
                  offering a full-spectrum experience.
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
                If you're done with half-measures and ready for a pre-workout
                that delivers both energy and enhanced metabolism, HYDE® Thermo
                is your go-to.
              </span>
              <br />
              <br />
              <span
                style={{
                  fontWeight: "800",

                  fontStyle: "italic",
                }}
              >
                Maximize Energy, Rev Up Metabolism, and Take Your Workouts to
                the Next Level. Try Thermo today!
              </span>
            </p>
            <hr style={{ marginTop: "20px" }} />
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
                  $62.00
                </span>{" "}
                $39.99
              </span>
            </button>
          </div>
        </div>
        <div
          style={{ position: "relative", width: "100%", aspectRatio: "4/6.25" }}
        >
          <div className={style.banner}>
            <ImageContainer imageContainerConfig={mobileBanner} />
            <p>TAKE ACTION AND BOOST YOUR ENERGY TODAY!</p>
            <p style={{ fontSize: "10px", top: "40%", width: "20%" }}>
              {"Boost Your Fat-to-Energy Now!".toUpperCase()}
            </p>
            <div>
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
                    $62.00
                  </span>{" "}
                  $39.99
                </span>
              </button>
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
                around only a few times a year.{" "}
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
                $62.00
              </span>{" "}
              $39.99
            </span>
          </button>
        </div>
        <Footer />
      </main>
      <main className={style.mainDesktop}>
        <div className={style.desktopBanner}>
          <div className={style.desktopHeader}>
            <ImageContainer imageContainerConfig={logo} />
            <p style={{ fontWeight: "800" }}>
              {"hundreds of millions of Hyde servings sold worldwide!".toUpperCase()}
            </p>
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
            <p>HURRY, STOCK LEVELS ARE RUNNING LOW!</p>
            <div className={style.boxContainer}> {generateBoxes(16)}</div>
          </div>
          <div className={style.desktopCopyText}>
            <p>ONLY WHILE SUPPLIES LAST, GET</p>
            <h1>FREE SAMPLES</h1>
            <p>
              AND A <span style={{ textDecoration: "underline" }}>FREE</span>{" "}
              SHAKER BOTTLE
            </p>
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
            <button className={style.cta}>YES, CLAIM MY FREE PRODUCTS!</button>
            <p className={style.handle}>( JUST COVER S&H )*</p>
            <p className={style.four}>
              GET 4 OF OUR BEST-SELLERS{" "}
              <span style={{ textDecoration: "underline" }}>FOR FREE!</span>
            </p>
            <p className={style.five}>
              TOTAL VALUE:{" "}
              <span style={{ textDecoration: "line-through", color: "grey" }}>
                $21.72
              </span>{" "}
              FREE
            </p>
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
              <h2>Fuel Every Aspect of Your Workout...</h2>

              <div
                className={style.productInfoSection}
                style={{ marginTop: "40px", zIndex: "1" }}
              >
                <p>Master Every Workout Stage... FOR FREE!</p>
                <p style={{ fontWeight: "800", fontStyle: "italic" }}>
                  From the motivation to start, the endurance to push through,
                  to the nutrition for recovery — we've got your back.
                </p>
                <div className={`${style.infoBox} ${style.hydeInfo}`}>
                  <p>
                    <span style={{ fontWeight: "800" }}>
                      Here's what you'll be getting:
                    </span>
                    <br />
                    <br />✅ Hyde Nigtmare: ( Pre ) —{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "lightGrey",
                      }}
                    >
                      $2.99
                    </span>{" "}
                    FREE
                    <br />
                    <br />✅ HydroBCAA: ( Intra ) —{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "lightGrey",
                      }}
                    >
                      $2.99
                    </span>{" "}
                    FREE
                    <br />
                    <br />✅ Whey Isolate: ( Post ) —{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "lightGrey",
                      }}
                    >
                      $2.99
                    </span>{" "}
                    FREE
                    <br />
                    <br />
                    And here's the cherry on top—we're throwing in our premium
                    shaker at no extra cost. Yes, you heard that right... FREE!
                    <br />
                    <br />✅ Premium Shaker —{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "lightGrey",
                      }}
                    >
                      $12.99
                    </span>{" "}
                    FREE
                    <br />
                    <br />
                    —
                    <br />
                    <span
                      style={{
                        fontWeight: "800",

                        fontStyle: "italic",
                      }}
                    >
                      Act fast, because this deal is as hot as they come. We
                      have limited stock for all items; once we are out, we are
                      out!
                    </span>
                    <br />
                    <br />
                  </p>
                </div>

                <button className={style.cta} style={{ marginTop: "20px" }}>
                  YES, CLAIM MY FREE PRODUCTS!
                </button>
              </div>
              <div className={style.desktopInfoCopy}>
                <p>PRE-WORKOUT</p>
                <p>POST-WORKOUT</p>
                <p>INTRA-WORKOUT</p>
              </div>
              <img
                src="https://res.cloudinary.com/dod9nbjke/image/upload/v1693550188/ProSupps/banners/TheBest-min_kiuhj5.png"
                style={{
                  width: "90%",
                  position: "absolute",
                  top: "8%",
                  zIndex: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
            <div>
              <div className={style.productdesktop}>
                <ImageContainer imageContainerConfig={sampleOne} />
                <div>
                  <div className={`${style.infoBox} ${style.hydeInfo}`}>
                    <p>
                      <span
                        style={{
                          fontSize: "17px",
                          fontWeight: "800",
                        }}
                      >
                        SAMPLE #1 : HYDE NIGHTMARE
                      </span>
                    </p>
                    <hr />
                    <div>
                      <Svg icon="ElectricIcon" color="white" />
                      <p>Off-the-Charts Energy</p>
                    </div>
                    <p>
                      <span style={{ fontWeight: "500" }}>
                        HYDE brings you a cocktail of clinically validated
                        ingredients that'll make you feel like you've been
                        plugged directly into a power outlet —
                        <span style={{ fontWeight: "700" }}>
                          NOT Exaggerating!
                        </span>
                      </span>
                      <br />
                      <br />
                      <span
                        style={{
                          textShadow: "0px 0px 10px black",
                          fontWeight: "700",
                        }}
                      >
                        Trust us, we don't call it{" "}
                        <span
                          style={{
                            fontWeight: "900",

                            fontStyle: "italic",
                          }}
                        >
                          'Nightmare'
                        </span>{" "}
                        for nothing.
                      </span>
                    </p>
                    <div className={style.hydeBuffer}></div>
                  </div>
                </div>
              </div>
              <div className={style.productdesktop}>
                <ImageContainer imageContainerConfig={sampleTwo} />
                <div>
                  <div className={`${style.infoBox} ${style.hydeInfo}`}>
                    <p>
                      <span
                        style={{
                          fontSize: "17px",
                          fontWeight: "800",
                        }}
                      >
                        SAMPLE #1 : HYDE NIGHTMARE
                      </span>
                    </p>
                    <hr />
                    <div>
                      <Svg icon="ElectricIcon" color="white" />
                      <p>Skyrocket Your Intra-Workout Output</p>
                    </div>
                    <p>
                      <span style={{ fontWeight: "500" }}>
                        HydroBCAA® offers a Full Spectrum 10g EAA Matrix that
                        doesn't just fuel your workout, it launches it into
                        orbit.
                        <br />
                        <br />{" "}
                        <span
                          style={{
                            fontWeight: "800",
                            textDecoration: "underline",
                          }}
                        >
                          You'll feel like a machine{" "}
                        </span>
                        , conquering each rep with unprecedented intensity.
                      </span>
                      <br />
                      <br />
                    </p>
                    <div
                      className={style.hydeBuffer}
                      style={{ aspectRatio: "1/0.65" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className={style.productdesktop}>
                <ImageContainer imageContainerConfig={sampleThree} />
                <div>
                  <div className={`${style.infoBox} ${style.hydeInfo}`}>
                    <p>
                      <span
                        style={{
                          fontSize: "17px",
                          fontWeight: "800",
                        }}
                      >
                        SAMPLE #1 : HYDE NIGHTMARE
                      </span>
                    </p>
                    <hr />
                    <div>
                      <Svg icon="FlexIcon" color="white" />
                      <p>Unleash Muscle Growth</p>
                    </div>
                    <p>
                      Our triple cold-filtered Powder retains all the essential
                      amino acids and valuable micro-fractions, ensuring your
                      muscles get the top-grade fuel they deserve.
                      <br />
                      <br />
                      Don't squander your time and effort on subpar proteins
                      that compromise your goals.
                    </p>
                    <div
                      className={style.hydeBuffer}
                      style={{ aspectRatio: "1/0.72" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.background}>
            <div style={{ width: "100%" }}>
              <img
                style={{ aspectRatio: "1920/1389", width: "100%" }}
                src="https://res.cloudinary.com/dod9nbjke/image/upload/v1693597219/ProSupps/Misc%20Assets/BackgroundTest_nmfhju.jpg"
              />
            </div>
          </div>
        </div>
        <div className={style.reviews}>
          <div className={style.reviewsSamples}>
            <ImageContainer imageContainerConfig={sampleOne} />
            <ImageContainer imageContainerConfig={sampleTwo} />
            <ImageContainer imageContainerConfig={sampleThree} />
            <ImageContainer imageContainerConfig={sampleTwo} />
            <ImageContainer imageContainerConfig={sampleThree} />
            <ImageContainer imageContainerConfig={sampleOne} />
          </div>
          <div className={style.reviewsBackground}></div>
          <div className={style.reviewHeading}>
            <h1>
              {"experience why thousands choose us over all others.".toUpperCase()}
            </h1>
            <p>
              Dive into a world of unparalleled quality and performance, and
              discover why so many trust ProSupps above the rest. Join the
              movement, feel the difference.
            </p>
            <div>
              <Svg icon="verifiedIcon" color="white" size="18px" />
              <p>1000+ Verified Reviews for Pump Kaps</p>
            </div>
          </div>
          <div className={style.reviewGrid}>{generateReview(reviews)}</div>
          <button className={style.cta}>YES, CLAIM MY FREE PRODUCTS!</button>
        </div>
        <Footer />
      </main>
    </>
  );
}
