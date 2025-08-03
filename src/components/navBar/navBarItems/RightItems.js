import { useState } from "react";
import "./RightItems.css";
import Language from "./languageSetter/Language";

const RightItems = () => {
const [isSelecting,setIsSelecting]=  useState(false);
const StartSelecting = () => {
  setIsSelecting((prevState) => !prevState);
};
  return (
    <div className="items-inline">
      <div className="set-language">
        <div className="language" onClick={StartSelecting}>
          <svg width="20" height="18" class="" viewBox="0 0 16 16">
            <title>globeIcon</title>
            <path
              d="M7.992 0C3.576 0 0 3.584 0 8s3.576 8 7.992 8C12.416 16 16 12.416 16 8s-3.584-8-8.008-8zm5.544 4.8h-2.36c-.256-1-.624-1.96-1.104-2.848A6.424 6.424 0 0113.536 4.8zM8 1.632A11.27 11.27 0 019.528 4.8H6.472A11.27 11.27 0 018 1.632zM1.808 9.6A6.594 6.594 0 011.6 8c0-.552.08-1.088.208-1.6h2.704A13.212 13.212 0 004.4 8c0 .544.048 1.072.112 1.6H1.808zm.656 1.6h2.36c.256 1 .624 1.96 1.104 2.848A6.39 6.39 0 012.464 11.2zm2.36-6.4h-2.36a6.39 6.39 0 013.464-2.848A12.52 12.52 0 004.824 4.8zM8 14.368A11.27 11.27 0 016.472 11.2h3.056A11.27 11.27 0 018 14.368zM9.872 9.6H6.128A11.77 11.77 0 016 8c0-.544.056-1.08.128-1.6h3.744C9.944 6.92 10 7.456 10 8s-.056 1.072-.128 1.6zm.2 4.448a12.52 12.52 0 001.104-2.848h2.36a6.424 6.424 0 01-3.464 2.848zM11.488 9.6c.064-.528.112-1.056.112-1.6s-.048-1.072-.112-1.6h2.704c.128.512.208 1.048.208 1.6s-.08 1.088-.208 1.6h-2.704z"
              fill="#E8E8E8"
            ></path>
          </svg>
        </div>
       { isSelecting && <Language></Language>}
      </div>
      <div className="search-bar">
        <form>
          <label className="search-content">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            ></input>
            <button type="submit">
              <span className="search-icon">
                <svg viewBox="0 0 19 20">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 18.6l-5.2-5.2C15.2 12 16 10.1 16 8c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8c1.6 0 3.1-.5 4.3-1.3l5.3 5.3 1.4-1.4zM2 8c0-3.3 2.7-6 6-6 1.6 0 3.1.6 4.2 1.8C13.4 4.9 14 6.4 14 8s-.6 3.1-1.8 4.2C11.1 13.4 9.6 14 8 14c-3.3 0-6-2.7-6-6z"
                  ></path>
                </svg>
              </span>
            </button>
          </label>
        </form>
      </div>
      <div className="signIn-button">
        <a className="red-button">sign in</a>
      </div>
    </div>
  );
};
export default RightItems;
