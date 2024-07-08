import React, { useEffect, useState } from 'react'

// categories
const [categories, setCategories] = useState([]);

useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(data => setCategories(data))
}, [])

const ProductCategories = () => {
  return (
    <div className="flex space-x-4">
    {categories.map(category => (
      <button key={category} onClick={() => filterByCategory(category)} className="bg-gray-200 p-2 rounded">
        {category}
      </button>
    ))}
  </div>
  )
}

export default ProductCategories
