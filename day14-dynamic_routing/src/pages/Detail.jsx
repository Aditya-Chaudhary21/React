import React from 'react'
import { useParams } from 'react-router'
import { useContext } from 'react'
import { MyStore } from '../context/MyStore'
import { useEffect } from 'react'
import axios from 'axios'
import { Star } from 'lucide-react'

const Detail = () => {
    const { singleProduct, setSingleProduct } = useContext(MyStore);
    const { id } = useParams();
    
    const singleProductData =async()=>{
    const res =  await axios.get(`https://fakestoreapi.com/products/${id}`)
    setSingleProduct(res.data)
    }

    useEffect(()=>{
singleProductData()
    },[])

  return (
    <div className="h-fit bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">

          {/* Product Image */}
          <div className="flex justify-center items-center bg-gray-50 rounded-xl p-8">
            <img
              src={singleProduct.image}
              alt={singleProduct.title}
              className="h-96 object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">

            <span className="inline-block w-fit px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium capitalize">
              {singleProduct.category}
            </span>

            <h1 className="text-4xl font-bold text-gray-800 mt-4">
              {singleProduct.title}
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <Star className="fill-yellow-400 text-yellow-400" size={22} />
              <span className="font-semibold">
                {singleProduct.rating?.rate}
              </span>
              <span className="text-gray-500">
                ({singleProduct.rating?.count} Reviews)
              </span>
            </div>

            <h2 className="text-4xl font-bold text-green-600 mt-6">
              ${singleProduct.price}
            </h2>

            <p className="text-gray-600 leading-7 mt-6">
              {singleProduct.description}
            </p>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Detail
