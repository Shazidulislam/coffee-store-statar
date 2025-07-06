import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './components/Home.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import CoffeeDetails from './components/CoffeeDetails.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import AllCoffees from './Pages/AllCoffees.jsx'
import axios from 'axios'
import PriviteRoute from './PriviteRoute/PriviteRoute.jsx'
import MyAddedCoffee from './Pages/MyAddedCoffee.jsx'
import MyOrder from './components/MyOrder.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
            hydrateFallbackElement:<span>Loading.....</span>,
        loader:()=>axios("http://localhost:3000/all-coffee"),
        Component: Home,
      },
      {
        path: 'addCoffee',
        // Component: AddCoffee,
        element:<PriviteRoute>
          <AddCoffee></AddCoffee>
        </PriviteRoute>
      },
      {
        path: 'coffee/:id',
        hydrateFallbackElement:<span>Loading...</span>,
        loader:({params})=>axios(`http://localhost:3000/coffee/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: 'updateCoffee/:id',
        Component: UpdateCoffee,
      },
      {
        path: 'signin',
        Component: SignIn,
      },
      {
        path: 'signup',
        Component: SignUp,
      },
      {
        path:"/all-coffees",
        hydrateFallbackElement:<span>Loading.....</span>,
        loader:()=>axios("http://localhost:3000/all-coffee"),
        element:<PriviteRoute>
          <AllCoffees></AllCoffees>
        </PriviteRoute>
      },
      {
        path:"/my-added-coffee/:email",
        hydrateFallbackElement:<span>Loading...</span>,
        loader:({params})=>fetch(`http://localhost:3000/my-added-coffee/${params.email}` , {
          credentials:'include'
        }),
        element:<PriviteRoute>
          <MyAddedCoffee></MyAddedCoffee>
        </PriviteRoute>
      },
      {
        path:"/myorder",
        element:<PriviteRoute><MyOrder></MyOrder></PriviteRoute>
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
