import "./sass/stylesheet.scss";
import WOW from "wowjs";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Tooltip } from "./components/Tooltip";
import FAQs from "./components/FAQs";

import FullScreenHeader from "./components/themes/fullScreen/Header";
import FullScreenDefaultIntro from "./components/themes/fullScreen/IntroDefault";

import { useLocation } from "react-router-dom";
import $ from "jquery";

function App() {

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  const searchParams = useLocation().search;

  const themeColor = new URLSearchParams(searchParams).get("themeColor");


  useEffect(() => {
    if (themeColor) {
      require(`./sass/color-${themeColor}.scss`);
    }
  }, [themeColor]);

  useEffect(() => {
    $(".switcher-toggle").on("click", function () {
      const div = $("#styles-switcher.left");
      const divRight = $("#styles-switcher.right");

      if (divRight.css("right") === "-202px") {
        divRight.animate({ right: "0px" }, 300).addClass("shadow");
      } else {
        divRight.animate({ right: "-202px" }, 300).removeClass("shadow");
      }

      if (div.css("left") === "-202px") {
        div.animate({ left: "0px" }, 300).addClass("shadow");
      } else {
        div.animate({ left: "-202px" }, 300).removeClass("shadow");
      }
    });

    $("#styles-switcher ul li").on("click", function () {
      const path = $(this).data("path");
      $("#color-switcher").attr("href", path);

      $(this).parent().find("li").removeClass("active");
      $(this).addClass("active");
    });

    $("#reset-color").on("click", function () {
      $("#color-switcher").removeAttr("href");
      $("#styles-switcher ul li")
        .parent()
        .find("li")
        .removeClass("active");
    });
  }, []);

  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  const checkScrollTop = () => {
    const scrollTopBtn = document.getElementById("back-to-top");

    if (!scrollTopBtn) return;

    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      setScrollTopVisible(true);
    } else {
      setScrollTopVisible(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  const getHeader = () => {
    return <FullScreenHeader/>
  };

  const getFullScreenIntro = () => {
    return <FullScreenDefaultIntro />;
  };


  return (
    <>
      <div style={{ position: "relative" }}>
        <div id="main-wrapper">

          {getHeader()}

          <div id="content" role="main">
            {getFullScreenIntro()}

            <AboutUs />
            <Resume />
            <Services />
            {/* <Portfolio /> */}
            <FAQs />
            <Contact />
          </div>

          <Footer handleNavClick={handleNavClick} />
        </div>

        {/* Back to Top */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <i className="fas fa-arrow-up"></i>
          </span>
        </Tooltip>

      </div>
    </>
  );
}

export default App;