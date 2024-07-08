import React from 'react'
import Header from '../components/Header'
import Sidenav from '../components/home/Sidenav'
import HomeSection from '../components/home/HomeSection'
import Footer from '../components/Footer'

const Home = ({ data, products, onFetchProducts}) => {
  return (
    <>
    <Header />
    <div className="flex">
        <Sidenav data={data} onFetchProducts={onFetchProducts}/>
        <HomeSection products={products}/>
    </div>
    <Footer />
    </>
  )
}

export default Home
