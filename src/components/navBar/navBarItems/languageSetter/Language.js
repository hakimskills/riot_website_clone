import './Language.css'
const Language =()=>{
    return (
      <div className="language-available">
        <ul className="language-list">
          <li className="selected">
            English{" "}
            <svg
              width="14"
              height="12"
              viewBox="0 0 11 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect
                  x="2.10889"
                  y="7.03003"
                  width="10"
                  height="2"
                  transform="rotate(-44.6688 2.10889 7.03003)"
                ></rect>
                <rect
                  x="1.42236"
                  y="3.48999"
                  width="5"
                  height="2"
                  transform="rotate(45.3312 1.42236 3.48999)"
                ></rect>
              </g>
            </svg>
          </li>

          <li> العربية</li>
        </ul>
      </div>
    );
}
export default Language; 