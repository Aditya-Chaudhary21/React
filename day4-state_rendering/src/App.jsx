import Productcard from './Productcard.jsx'
import React, { useState } from "react";

const App = () => {

  let [products ,setProducts] = useState([ { id: 1, name: "Wireless Mouse", price: 799, image: "https://picsum.photos/id/180/300/200" },
  { id: 2, name: "Mechanical Keyboard", price: 3499, image: "https://picsum.photos/id/48/300/200" },
  { id: 3, name: "Gaming Headset", price: 2499, image: "https://picsum.photos/id/1060/300/200" },
  { id: 4, name: "Smart Watch", price: 4999, image: "https://picsum.photos/id/26/300/200" },
  { id: 5, name: "Bluetooth Speaker", price: 1999, image: "https://picsum.photos/id/1080/300/200" },
  { id: 6, name: "USB-C Hub", price: 1299, image: "https://picsum.photos/id/250/300/200" },
  { id: 7, name: "Laptop Stand", price: 1599, image: "https://picsum.photos/id/96/300/200" },
  { id: 8, name: "Portable SSD", price: 6499, image: "https://picsum.photos/id/119/300/200" },
  { id: 9, name: "Webcam HD", price: 2899, image: "https://picsum.photos/id/1015/300/200" },
  { id: 10, name: "Noise Cancelling Earbuds", price: 3999, image: "https://picsum.photos/id/433/300/200" },
  { id: 11, name: "Monitor 24 Inch", price: 8999, image: "https://picsum.photos/id/20/300/200" },
  { id: 12, name: "Gaming Chair", price: 12999, image: "https://picsum.photos/id/29/300/200" },
  { id: 13, name: "Wireless Charger", price: 999, image: "https://picsum.photos/id/30/300/200" },
  { id: 14, name: "Power Bank 20000mAh", price: 1799, image: "https://picsum.photos/id/31/300/200" },
  { id: 15, name: "LED Desk Lamp", price: 1499, image: "https://picsum.photos/id/32/300/200" },
  { id: 16, name: "Laptop Backpack", price: 2199, image: "https://picsum.photos/id/33/300/200" },
  { id: 17, name: "Smartphone Tripod", price: 899, image: "https://picsum.photos/id/34/300/200" },
  { id: 18, name: "Fitness Band", price: 2499, image: "https://picsum.photos/id/35/300/200" },
  { id: 19, name: "Action Camera", price: 10999, image: "https://picsum.photos/id/36/300/200" },
  { id: 20, name: "DSLR Camera", price: 45999, image: "https://picsum.photos/id/37/300/200" },
  { id: 21, name: "Tablet 10 Inch", price: 18999, image: "https://picsum.photos/id/38/300/200" },
  { id: 22, name: "Wireless Printer", price: 7499, image: "https://picsum.photos/id/39/300/200" },
  { id: 23, name: "External Hard Drive 1TB", price: 4299, image: "https://picsum.photos/id/40/300/200" },
  { id: 24, name: "Graphic Tablet", price: 5999, image: "https://picsum.photos/id/41/300/200" },
  { id: 25, name: "VR Headset", price: 25999, image: "https://picsum.photos/id/42/300/200" },
  { id: 26, name: "Microphone USB", price: 3199, image: "https://picsum.photos/id/43/300/200" },
  { id: 27, name: "Ring Light", price: 1399, image: "https://picsum.photos/id/44/300/200" },
  { id: 28, name: "Gaming Controller", price: 2899, image: "https://picsum.photos/id/45/300/200" },
  { id: 29, name: "WiFi Router", price: 3699, image: "https://picsum.photos/id/46/300/200" },
  { id: 30, name: "Smart TV 43 Inch", price: 29999, image: "https://picsum.photos/id/47/300/200" }])


let deleteProduct = (id) => {
  let updatedProducts = products.filter((elem) => elem.id !==id)
  setProducts(updatedProducts);

}
  return (
    <div className='flex  flex-col '>
      <h1 className='text-2xl font-bold mb-4'>Data of Products </h1>
      <div className='flex flex-wrap gap-3'>
      
      {
        products.map((elem) => {
          return <Productcard key={elem.id} product = {elem} del={deleteProduct} />
        })
      }
        
      </div>

    </div>
  )
}


export default App
