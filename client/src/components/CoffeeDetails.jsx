import React, { use, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'
import axios from 'axios'

const CoffeeDetails = () => {

  const {data} = useLoaderData()
  const [coffee , setCoffee] = useState(data)
  const {user}= use(AuthContext)
  const { _id, name, price, quantity, photo , likedBy , email } = coffee ||{}

  const [liked , setLiked] = useState(likedBy.includes(user?.email))

  useEffect(()=>{
    setLiked(likedBy.includes(user?.email))
  },[user , likedBy])




  const [likedCount , setLikedCount] = useState(likedBy.length)
  
//  like / dislike
  const handleLiked = ()=>{
   if(user?.email === email) return alert("You not allowed this like")
    //  alert("khabo")
   // fetch by handle likedby  
   axios.patch(`http://localhost:3000/liked/${_id}` , {email : user?.email})
   .then((data)=>{
    const islike = data?.data?.like
    console.log(islike)
    setLikedCount(prev=> islike? prev+1:prev-1)
   })
   .catch((err)=>{
    console.log(err)
   })
  }

  const handleOrder =()=>{
  if(user?.email === email) return alert("You not allowed this like");
  const coffeeDoc = {
     coffeeId: _id ,
     customarEmail:user?.email,
  }
  
  //post the data
  axios.post(`http://localhost:3000/place-order/${_id}`, coffeeDoc)
  .then((data)=>{
    console.log(data.data)
    setCoffee((prev)=>{
      return {...prev ,quantity: prev.quantity-1 }
    })

  })
  .catch((err)=>{
    console.log(err)
  })

  // fetch(`http://localhost:3000/place-order/${_id}`, {
  //   method:"POST",
  //   headers:{
  //     "content-type":"application/json"
  //   },
  //   body:JSON.stringify(coffeeDoc)
  // })
  // .then((res)=>res.json())
  // .then((data)=>{
  //   console.log(data)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
}

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
        <p>Like : {likedCount}</p>
        <button onClick={handleOrder} className='px-6 py-3 bg-[#FF7601] rounded text-white mt-2'>Order</button>
        <button onClick={handleLiked} className='px-6 py-3 bg-[#00809D] ml-2 rounded text-white mt-2'>
          {
            liked ? "Liked":"Like"
          }
        </button>
      </div>
    </div>
  </div>
}

export default CoffeeDetails



