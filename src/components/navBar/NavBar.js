import { useState } from 'react';
import RiotMenu from '../RiotMenu';
import './NavBar.css'
import LeftItems from './navBarItems/LeftItems';
import RightItems from './navBarItems/RightItems';
import RiotDropDown from './navBarItems/RiotDropDown';

const NavBar = () => {
  document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    // Adjust this value based on when you want the background color to change
    var threshold = 50;

    if (scrollPosition > threshold) {
        document.getElementById("navbar").style.backgroundColor = "black";
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }
});

  
 
  
  const [isShowed,setIsShowed]=useState(false);
  const [isShowed2,setIsShowed2]=useState(true);
  const showMenuHandler = (enteredData) => {
    const showMenu = enteredData;
  if(showMenu===true){
    setIsShowed(false)
    setIsShowed2(true);
  }
  console.log(showMenu)
  };

 
  const showHandler = () => {
    setIsShowed(true);
    setIsShowed2(false);

  };
  return (
    <div>
      {isShowed2 && <div className="navbar" id='navbar'>
        <div className="navbar-items">
          <div className="leftSide-bar">
            <div onClick={showHandler}>
            <RiotDropDown></RiotDropDown>
            </div>
            <LeftItems></LeftItems>
          </div>
          <div className="rightSide-bar">
            <RightItems></RightItems>
          </div>
        </div>
      </div>}
      {isShowed && <RiotMenu onShowMenu={showMenuHandler}></RiotMenu>}
    </div>
  );
};

export default NavBar;
<script>
  
</script>