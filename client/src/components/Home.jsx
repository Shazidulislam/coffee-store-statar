import React from "react"
import { useLoaderData } from "react-router"
import CoffeeCard from "./CoffeeCard"
import { useState } from "react"

const Home = () => {
    const coffeeData = useLoaderData()
      const [coffees , setCoffees] = useState(coffeeData.data || [])
  return (
    <div>
      <div className=''>
        {/* Coffee Cards */}
        <h2 className="text-3xl lg:text-6xl py-5 font-bold text-center">All coffee card here</h2>
        <div className="grid grid-cols-2 gap-5">
          {
            coffees.map((coffee)=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default Home
