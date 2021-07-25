import React, { useState, useEffect } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import "./header.scss";
import logo from "./images/logo.svg";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import CancelPresentationRoundedIcon from "@material-ui/icons/CancelPresentationRounded";
import FormHiddenSearch from "./Components/FormHiddenSearch";

import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [isAnimate, setIsAnimate] = useState(true);

  const showSearchBoxHandler = () => {
    setToggleSearch(true);
  };

  const hiddenSearchBoxHandler = () => {
    setToggleSearch(false);
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setIsAnimate(true);
      window.sessionStorage.setItem("firstLoadDone", 1);
    } else {
      setIsAnimate(false);
    }
  }, []);

  return (
    <header className={isAnimate ? "fade__in-hello" : ""}>
      <nav className="wrapperHeaderNav">
        <ul
          className={
            isOpen ? "header__menu header__menu__active" : "header__menu"
          }
        >
          <li className="liItem__menu">Favorites</li>
          <li className="liItem__menu liItem__toggleMenu">
            My library
            <ul className="hidden__header-menu">
              <li className="liItem__hidden-menu">Watched</li>
              <li className="liItem__hidden-menu">Queue</li>
            </ul>
          </li>
        </ul>

        <div className="wrapperMainNav">
          <div className="header__content">
            <div className="wrapper__nav">
              <div
                className={
                  isOpen ? "wrapper__hamburger-active" : "wrapper__hamburger"
                }
              >
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  size="30"
                  easing="ease-in"
                  rounded
                />
              </div>
              <img src={logo} alt="logo flix.by" className="imgLogo" />
            </div>

            <div className="search__iconHeader" onClick={showSearchBoxHandler}>
              <SearchRoundedIcon />
            </div>

            <CSSTransition
              in={toggleSearch}
              appear={true}
              unmountOnExit={true}
              classNames="fade"
              timeout={{ enter: 500, exit: 500 }}
            >
              <div className="wrapper__searchBox-active">
                <FormHiddenSearch />
                <button
                  className="js-btn__closeForm"
                  onClick={hiddenSearchBoxHandler}
                >
                  <CancelPresentationRoundedIcon />
                </button>
              </div>
            </CSSTransition>
          </div>
        </div>
      </nav>
    </header>
  );
}
