import React from 'react'

const HomeSection = ({ products }) => {

  console.log("Products", products)
  return (
    <div className='home-section bg-red-300'>
      <h1>Products</h1>
      {
       products && products.map((product) => (
        <p>Product: {product.title}</p>
       )) 
      }
    </div>
  )
}

export default HomeSection
