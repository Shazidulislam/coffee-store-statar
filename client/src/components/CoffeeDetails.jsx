import React, {  } from 'react'
import { useLoaderData } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'

const CoffeeDetails = () => {

  const {data:coffee} = useLoaderData()
  console.log(coffee)
    const { _id, name, price, quantity, photo , likedBy } = coffee ||{}
  
  return <div >
    <h2 className='text-5xl py-10 text-center font-bold text-[#404]'>Coffee deatils</h2>
    <div className='flex justify-around items-start gap-6'>
      <figure className='flex-1'>
        <img className='rounded-2xl w-full' src={photo} alt="" />
      </figure>
      <div className='flex-1'>
        <p>Name : {name}</p>
        <p>Quantity : {quantity}</p>
        <p>Price : {price}</p>
        <p>Like : {likedBy?.length}</p>
        <button className='px-6 py-3 bg-[#FF7601] rounded text-white mt-2'>Order</button>
        <button className='px-6 py-3 bg-[#00809D] ml-2 rounded text-white mt-2'>Like</button>
      </div>
    </div>
  </div>
}

export default CoffeeDetails

// {
//     "_id": "6868f4e029b0ea290e43da49",
//     "name": "Joshua Payne",
//     "quantity": "180",
//     "supplier": "Dolor quia adipisci ",
//     "taste": "Consequat Hic excep",
//     "price": "992",
//     "details": "Possimus vel explic",
//     "photo": "https://thumbs.dreamstime.com/b/espresso-coffee-cup-beans-vintage-table-90374872.jpg",
//     "meseage": "Thanks vai data paichi"
// }