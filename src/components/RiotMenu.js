import './RiotMenu.css'
import RiotDropDown from './navBar/navBarItems/RiotDropDown';
import './navBar/NavBar.css'
import { useState } from 'react';
import RiotDropUp from './navBar/navBarItems/RiotDropUp';
import Option from './Option';
const RiotMenu=(props)=>{
    const [isHidding,setIsHidding]=useState(true);
    const hideHandler=()=>{
        setIsHidding(false);
        props.onShowMenu(isHidding);
        console.log(isHidding)
    }
return (
  <div>
    {isHidding && (
      <div>
        <div className="overlay"></div>
        <div className="drop-down-menu">
          <div className="position">
            <div className="close-menu" onClick={hideHandler}>
              <RiotDropUp></RiotDropUp>
              <svg className="close-button" viewBox="0 0 32 32">
                <title>applicationSwitcher2DesktopClose</title>
                <path
                  d="M0 12C0 5.373 5.373 0 12 0h8c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-8C5.373 32 0 26.627 0 20v-8z"
                  fill="#BABABA"
                  fill-opacity=".2"
                ></path>
                <path
                  d="M20.667 12.274l-.94-.94L16 15.061l-3.726-3.727-.94.94 3.726 3.727-3.726 3.726.94.94L16 16.941l3.727 3.726.94-.94-3.727-3.726 3.727-3.727z"
                  fill="#0A0A0A"
                ></path>
              </svg>
            </div>
          </div>
          <Option></Option>
        </div>
      </div>
    )}
  </div>
);
     
}
export default RiotMenu;