import "./style.scss";

import '../../assets/icons/style.css'
import images from "../images";
import { useState } from "react";

function Slider() {

    const [orderImages, setOrderImages] = useState(0)

    const handleClick = (next) => {
        console.log(next);
        if(next === 'right') {
            if(orderImages < (images.length - 1)){
                let count = orderImages
                setOrderImages(count += 1)
            } else {
                setOrderImages(0)
            }
        } else {
            if(orderImages === 0) {
                setOrderImages(images.length - 1)
            } else {
                let count = orderImages
                setOrderImages(count -= 1)
            }
        }
    }


  return (
    <div className="slider">
        <div className="main-image">
            <span onClick={()=>{ handleClick('left') }} className="icon-arrow-left left"/>
            <img src={images[orderImages]} alt="" />
            <span onClick={()=>{ handleClick('right') }} className="icon-arrow-right right"/>
        </div>
      <div className="all-images">
        {images.map((item, index) => (
          <div key={index} className="image-loop">
            <img className={index===orderImages? 'selected': ''}  src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
