import { useState } from 'react';
import './Option.css'
const Option =(props)=>{

     const [isHiding, setIsHiding] = useState(true);
     const [hoveredImage, setHoveredImage] = useState(null);

     const hideHandler = () => {
       setIsHiding(false);
       props.onShowMenu(isHiding);
     };

     const gamesData = [
       {
         name: "league of legends",
         imageURL:
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt69961ce901c892c5/63ead58ad6b15b22437be7e1/LOL_KA23_Product-Card_RBAR_1280x720_FINAL.jpg??&format=pjpg&quality=85",
       },
       {
         name: "valorant",
         imageURL:
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt7ea5564832d87165/64966337b70242984bcab3a8/062723_Ep7_Riot_Bar_Promo_card_660x428.png??&format=pjpg&quality=85",
       },
       {
         name: "teamfight tactics",
         imageURL:
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltfe729ffe29021170/64813b50cc30bbb04ab0456e/TFT_SET923_Riotbar_1920x1080_v004_ASteme.jpg??&format=pjpg&quality=85",
       },
       {
         name: "legends of runeterra",
         imageURL: 
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt026d2bccb899c112/649b467a66ab62671ffc77f1/LoR_7B2023_HotH_RiotBarApplicationSwitcher_1920x1080_opt.jpg??&format=pjpg&quality=85"
       },
       {
         name: "lol:wild rift",
         imageURL:
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltd64089e018c89048/615a85a49c76234dd174c199/Wildrift.jpg??&format=pjpg&quality=85",
       },
     ];
     const ForgeData = [
       {
         name: "conv/rgence",
         imageURL:
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt15a80d65a2698d1f/615a859d8f1f7b55821485ee/convergence.jpg??&format=pjpg&quality=85",
       },
       {
         name: "hextech mayhem",
         imageURL:
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt8589cd81c00f5c6a/6189ee6d666f1777c9bcfa52/JFG_Key_Art_T2AV2.jpg??&format=pjpg&quality=85",
       },
       {
         name: "the mageseeker",
         imageURL:
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt7b361b63541962b6/63e56f590773755832f894cf/MAGESEEKER-PRODUCT-IMAGE-1920x1080.jpg??&format=pjpg&quality=85",
       },
       {
         name: "ruined king",
         imageURL:
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt160d084323f31a63/615a859c7ab23a526f225189/ruined_king.jpg??&format=pjpg&quality=85",
       },
       {
         name: "song of nunu",
         imageURL:
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltf9eb503252c8233e/6192ffed4ce2b23a1fb3c548/Everson_KeyArt01.jpg??&format=pjpg&quality=85",
       },
       {
         name: "valorant esports",
         imageURL:
           "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt8e6f343314f438ee/615d4fd6f2882661476b77da/Riot_Forge.jpg??&format=pjpg&quality=85",
       },
     ];
const EsportsData = [
  {
    name: "lol esports",
    imageURL:
      "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blta3add1f2553033a2/6424cbeb223f2f118c954ad5/033023_LoL_Esports_MegaMenu_Product_Card.jpg??&format=pjpg&quality=85",
  },
  {
    name: "riot forge games",
    imageURL:
      "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt42e1162ed54d15d2/6424cbeb18bad210b77f86b7/033023_VCT_Esports_MegaMenu_Product_Card.jpg??&format=pjpg&quality=85",
  },
];
const EnterData = [
  {
    name: "Arcane",
    imageURL:
      "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blta84d6d394801dedb/615a859d9c76234dd174c195/arcane.jpg??&format=pjpg&quality=85",
  },
  {
    name: "universe",
    imageURL:
      "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltea74e94e1296b057/615a8fccc22cd45706cf29fe/universe.jpg??&format=pjpg&quality=85",
  },
  {
    name: "riot games music",
    imageURL:
      "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt4303739f818a50e3/615a859d054fcd4c567205ab/Riot_Music.jpg??&format=pjpg&quality=85",
  },
];
const BusinessData = [
  {
    name: "riot games",
    imageURL:
      "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltf2aeb4512fc8f095/615a859ddb34085ff954a028/Riot_Games.jpg??&format=pjpg&quality=85",
  },
  {
    name: "riot merch",
    imageURL:
      "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt1313d1f5e9424233/615a859d7ab23a526f22518d/Riot_Merch.jpg??&format=pjpg&quality=85",
  },
  {
    name: "riot mobile",
    imageURL:
      "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltb984b7fd7649c9b0/615a93758f1f7b5582148611/riot-mobile.jpg??&format=pjpg&quality=85",
  },
  {
    name: "riot support",
    imageURL:
      "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltb67b232cf8d5069f/617b29d861f3c21067237706/riot-support-2.jpg??&format=pjpg&quality=85",
  },
];
     const handleOptionHover = (imageURL) => {
       setHoveredImage(imageURL);
     };

     const handleOptionLeave = () => {
       setHoveredImage(null);
     };

    return (
      <div className="options">
        <div className="option-select">
          <ul className="side-by-side">
            <li className="big-title">games</li>
            {gamesData.map((game, index) => (
              <li
                key={index}
                onMouseEnter={() => handleOptionHover(game.imageURL)}
                onMouseLeave={handleOptionLeave}
              >
                {game.name}
              </li>
            ))}
          </ul>
          <ul className="side-by-side">
            <li className="big-title">forge</li>
            {ForgeData.map((game, index) => (
              <li
                key={index}
                onMouseEnter={() => handleOptionHover(game.imageURL)}
                onMouseLeave={handleOptionLeave}
              >
                {game.name}
              </li>
            ))}
            <li className="big-title">esports</li>
            {EsportsData.map((game, index) => (
              <li
                key={index}
                onMouseEnter={() => handleOptionHover(game.imageURL)}
                onMouseLeave={handleOptionLeave}
              >
                {game.name}
              </li>
            ))}
          </ul>
          <ul className="side-by-side">
            <li className="big-title">entertainment</li>
            {EnterData.map((game, index) => (
              <li
                key={index}
                onMouseEnter={() => handleOptionHover(game.imageURL)}
                onMouseLeave={handleOptionLeave}
              >
                {game.name}
              </li>
            ))}
            <li className="big-title">business</li>
            {BusinessData.map((game, index) => (
              <li
                key={index}
                onMouseEnter={() => handleOptionHover(game.imageURL)}
                onMouseLeave={handleOptionLeave}
              >
                {game.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="option-details">
          <div className="option-details-content">
            {!hoveredImage && (
              <div>
                <div className="valorant-part">
                  <div className="part">
                    <img src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt7ea5564832d87165/64966337b70242984bcab3a8/062723_Ep7_Riot_Bar_Promo_card_660x428.png??&format=pjpg&quality=85"></img>
                    <h4>
                      Check out how VALORANT’s evolving the game in this new
                      Episode.
                    </h4>
                  </div>
                  <div className="part">
                    <img src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt026d2bccb899c112/649b467a66ab62671ffc77f1/LoR_7B2023_HotH_RiotBarApplicationSwitcher_1920x1080_opt.jpg??&format=pjpg&quality=85"></img>
                    <h4>
                      New Legends of Runeterra Expansion - Heart of the Huntress
                    </h4>
                  </div>
                </div>
              </div>
            )}
            {hoveredImage && (
              <div className="show-image">
                <img src={hoveredImage} alt="Valorant Part"></img>
              </div>
            )}

            <div></div>
          </div>
        </div>
      </div>
    );
}
export default Option;