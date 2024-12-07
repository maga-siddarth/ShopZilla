import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct category={"watches"} heading={"Luxury Watches"} />
      <VerticalCardProduct category={"mobile"} heading={"Premium SmartPhones"} />
      <VerticalCardProduct category={"mouse"} heading={"Mouse"} />
      <VerticalCardProduct category={"television"} heading={"Cinematic Excellence"} />
      <VerticalCardProduct category={"camera"} heading={"Elite Cameras"} />
      <VerticalCardProduct category={"earphones"} heading={"Wireless Freedom"} />
      <VerticalCardProduct category={"refrigerator"} heading={"Fridge Fusion"} />
      <VerticalCardProduct category={"printer"} heading={"Print Essentials"} />
      <VerticalCardProduct category={"processor"} heading={"Performance Hub"} />
      <VerticalCardProduct category={"speakers"} heading={"Echo Essentials"} />
      <VerticalCardProduct category={"trimmers"} heading={"Grooming Gears"} />


    </div>
  )
}

export default Home