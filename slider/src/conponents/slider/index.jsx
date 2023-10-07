import "./style.scss";

import '../../assets/icons/style.css'
import images from "../images";
import { useState } from "react";

function Slider() {

    const [orderImages, setOrderImages] = useState(0)

    const handleClick = (next) => {
        if(next) {
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


    const handleClickOnImage = (index) => {
        setOrderImages(index)
    }


  return (
    <div className="slider">
        <div className="main-image">
            <span onClick={()=>{ handleClick(false) }} className="icon-arrow-left left"/>
            <img src={images[orderImages]} alt="" />
            <span onClick={()=>{ handleClick(true) }} className="icon-arrow-right right"/>
        </div>
      <div className="all-images">
        {images.map((item, index) => (
          <div key={index} className="image-loop">
            <img onClick={()=>{handleClickOnImage(index)}} className={index===orderImages? 'selected': ''}  src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
