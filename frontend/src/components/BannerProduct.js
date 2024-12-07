import React, { useEffect, useState } from "react";
import image1 from "../assest/banner/img2.webp";
import image2 from "../assest/banner/img2_mobile.webp";
import image3 from "../assest/banner/img3.jpg";
import image4 from "../assest/banner/img3_mobile.jpg";
import image5 from "../assest/banner/img4.jpg";
import image6 from "../assest/banner/img4_mobile.jpg";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
    const [currentImage,setCurrentImage] = useState(0)
    const desktopImages = [image1, image3, image5];

  const mobileImages = [image2, image4, image6];

  const nextImage = () =>{
    if(desktopImages.length-1 > currentImage){
        setCurrentImage(preve => preve+1)
    }
    

  }

  const preveImage = () =>{
    if(currentImage !== 0 ){
        setCurrentImage(preve => preve - 1)
    }
  }
  
  useEffect(()=>{
    const interval = setInterval(()=>{
            if(desktopImages.length-1 > currentImage){
                nextImage()
            }else {
                setCurrentImage(0)
            }
    },5000)

    return ()=> clearInterval(interval)
  },[currentImage])

  return (
    <div className="container mx-auto px-4 rounded ">
      <div className="h-56 md:h-72 w-full bg-slate-200 relative">
        <div className="absolute z-10 w-full h-full md:flex items-center hidden">

            <div className=" flex justify-between w-full  text-2xl">
            <button className="bg-white shadow-md rounded-full p-1" onClick={preveImage}><FaAngleLeft /></button>
            <button className="bg-white shadow-md rounded-full p-1" onClick={nextImage}><FaAngleRight /></button>
            </div>
            
        </div>

        {/**Destop and tablet Version */}
        <div className="hidden  md:flex h-full w-full overflow-hidden  ">
        {
            
            desktopImages.map((imageURl, index) => {
              return (
                <div className="w-full h-full min-w-full min-h-full transition-all" key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                  <img src={imageURl} className="w-full h-full" alt="" />
                </div>
              );
            })
            
            }
        </div>

        {/**Mobile Version */}

        <div className="flex h-full w-full overflow-hidden md:hidden">
        {
            
            mobileImages.map((imageURl, index) => {
              return (
                <div className="w-full h-full min-w-full min-h-full transition-all" key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                  <img src={imageURl} className="w-full h-full object-cover" alt="" />
                </div>
              );
            })
            
            }
        </div>

      </div>
    </div>
  );
};

export default BannerProduct;
