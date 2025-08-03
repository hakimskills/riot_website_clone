import './LeftItems.css'
const LeftItems =()=>{
return (
  <div className="items-inline">
    <a href="#">
      <svg
        className="riot-svg"
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 32 32"
      >
        <circle cx="16" cy="16" r="16" fill="#f1f5f1"></circle>
        <polygon
          points="16.42 8 6.75 12.47 9.16 21.64 11 21.41 10.49 15.65 11.1 15.38 12.13 21.27 15.27 20.89 14.71 14.53 15.3 14.27 16.45 20.75 19.62 20.36 19.01 13.38 19.61 13.12 20.86 20.2 24 19.82 24 9.89 16.42 8"
          fill="#050505"
        ></polygon>
        <polygon
          points="16.65 21.9 16.81 22.8 24 24 24 21 16.66 21.9 16.65 21.9"
          fill="#050505"
        ></polygon>
      </svg>
    </a>
    <div className="drop-downs">
      <div className="drop-down-active">
        <a>
          <div className="inline-drop">
            <p>who we are </p>
            <svg className="drop-down" viewBox="0 0 8 5">
              <title>mainMenuDownNonHover</title>
              <path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path>
            </svg>
          </div>
        </a>

        <ul className="submenu">
          <li className="hidden"> </li>
          <div className="showed">
            <li>
              <a href="">About Riot</a>
            </li>
            <li>
              <a href="">Diversity & Inclusion</a>
            </li>
            <li>
              <a href="">Social Imapact</a>
            </li>
          </div>
        </ul>
      </div>

      <div className="drop-down-active">
        <a>
          <div className="inline-drop">
            <p> work with us</p>
            <svg className="drop-down" viewBox="0 0 8 5">
              <title>mainMenuDownNonHover</title>
              <path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path>
            </svg>
          </div>
        </a>
        <ul className="submenu">
          <li className="hidden"> </li>
          <div className="showed">
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Benefits</a>
            </li>
            <li>
              <a href="">Offices</a>
            </li>
            <li>
              <a href="">Life At Riot</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="drop-down-active">
        <a>
          <div className="inline-drop">
            <p>News</p>
            <svg className="drop-down" viewBox="0 0 8 5">
              <title>mainMenuDownNonHover</title>
              <path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path>
            </svg>
          </div>
        </a>
        <ul className="submenu">
         
       
        </ul>
      </div>
    </div>
  </div>
);


}
export default LeftItems;