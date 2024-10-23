import React from 'react'
import Banner from '../../components/HomePageCompos/Banner/Banner'
import CategorySelector from '../../components/HomePageCompos/CategorySelector/CategorySelector'
import HomePageAllProducts from '../../components/HomePageCompos/HomePageAllProducts/HomePageAllProducts'

function HomePage() {
  return (
    <div>
      <Banner/>
      <CategorySelector/>
      <HomePageAllProducts/>
    </div>
  )
}

export default HomePage