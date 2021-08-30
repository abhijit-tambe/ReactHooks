import { render } from "@testing-library/react";
import React from "react";
import "./Home.css";
import Product from "./Product";


function Home(props) {
  console.log('props:',props);
  const product1_Image_URL =
    "https://www.vitaminworld.com/dw/image/v2/BBPX_PRD/on/demandware.static/-/Sites-vitaminworld-master/default/dw9bb65c69/images/2017/044174.jpg?sw=300&sh=500&sm=fit";
  return (
    
    <div className="home">
      {/* <p>Home</p> */}
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-2813_SVOD_PrimeDay_5DXGY/Amazon_GW_DesktopTallHero_RB-2813_SVOD_PrimeDay_5DXGY_v4_1500x600._CB405337872_.jpg"
      />
      <div className="home__products row__1">
        <Product
          id="5431"
          name="Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)"
          ratings={5}
          cost={59.99}
          img={product1_Image_URL}
        />
         <Product
          id="5432"
          name="Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)"
          ratings={5}
          cost={59.99}
          img={product1_Image_URL}
        />
      
      </div>
      <div className="home__products row__2">
        <Product
        className="dx1"
          id="5433"
          name="Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)"
          ratings={5}
          cost={59.99}
          img={product1_Image_URL}
         
        />
         <Product
         className="dx2"
          id="5434"
          name="Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)"
          ratings={5}
          cost={59.99}
          img={product1_Image_URL}
         
        />
        <Product
        className="dx3"
            flexval={4}
          id="5435"
          name="Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)"
          ratings={5}
          cost={59.99}
          img={product1_Image_URL}
         
        />
      </div>
      <div className="home__products row__3">
        <Product
          id="5436"
          name="Sceptre 30-Inch 21: 9 Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI DisplayPort Up to 85Hz Mprt 1ms FPS-RTS Build-in Speakers, Machine Black 2020"
          ratings={4}
          cost={249.68}
          img="https://m.media-amazon.com/images/I/81uNJ+-LyJL._AC_UY327_QL65_.jpg"
        />
        </div>
    </div>
  );
}

export default Home;
