import React, {  } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../components/CoffeeCard';

const AllCoffees = () => {
    const coffeeData = useLoaderData()
    // const [coffees , setCoffees] = useState(coffeeData.data)
    const coffees = coffeeData.data
        return (
        <div>
            <h3 className='text-5xl font-bold text-[#403f3f] text-center py-10'>Here Is Our All Type Coffee</h3>
          <div className='grid grid-cols-2 gap-5'>
              {
               coffees.map((coffee)=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>) 
            }
          </div>
        </div>
    );
};

export default AllCoffees;