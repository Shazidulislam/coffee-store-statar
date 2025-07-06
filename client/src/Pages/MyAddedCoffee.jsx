import React, {  } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useLoaderData } from 'react-router';

const MyAddedCoffee = () => {
    // const {user} = use(AuthContext)
    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <h2>Hello brother{data.length}</h2>
        </div>
    );
};

export default MyAddedCoffee;