import MenuIcon from "@material-ui/icons/Menu";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Button from "../button/Button";
import NavbarList from "../navbarList/NavbarList";
import NavSideBar from "../sideBar/SideBar";
import Logo from "../../public/assets/images/logo.png";

AOS.init();

export default function Header({ handleScrollToSection }) {
  const [scrollBehavior, setScrollBehavior] = React.useState(false);
  const [toggleNavSideBar, setToggleNavSidedBar] = React.useState(false);
  const navbar = React.useRef(null);

  const handleToggleSideBar = () => {
    setToggleNavSidedBar(!toggleNavSideBar);
  };

  const handleScroll = () => {
    const navbarHeight = navbar.current.offsetHeight;
    if (window.scrollY >= navbarHeight) {
      setScrollBehavior(true);
      return;
    }
    setScrollBehavior(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div
        className={`navbar container-fluid ${scrollBehavior && "scroll"}`}
        ref={navbar}
      >
        <div className="navbar-list-responsive container">
          <i
            id="menu-icon"
            onClick={handleToggleSideBar}
            className="fas fa-bars"
          ></i>
          <img
            src={Logo}
            alt=""
            id="logo-game"
            className="logo-game-responsive"
          />
          <span></span>
        </div>
        <NavbarList />
      </div>

      <div className="welcome scene container">
        <h1
          className="welcome-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          find your champion
        </h1>
        <h4 className="sub-title" data-aos="zoom-in" data-aos-duration="1200">
          With more than 140 champions, you’ll find the perfect match for your
          playstyle. Master one, or master them all.
        </h4>
        <Button handleClick={handleScrollToSection}>go</Button>
        <img
          src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_US/8473ee987f412783afafc8abe37ed37e31b0af83/assets/en_US/assets/divider.png"
          style={{ width: "100%" }}
          alt=""
        />
      </div>
      <img
        src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_US/8473ee987f412783afafc8abe37ed37e31b0af83/assets/en_US/assets/hangtag.svg"
        alt=""
        id="hangtag1"
      />
      <img
        src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_US/8473ee987f412783afafc8abe37ed37e31b0af83/assets/en_US/assets/hangtag.svg"
        alt=""
        id="hangtag2"
      />
      <NavSideBar
        isOpen={toggleNavSideBar}
        handleToggleSideBar={handleToggleSideBar}
      />
    </div>
  );
}
