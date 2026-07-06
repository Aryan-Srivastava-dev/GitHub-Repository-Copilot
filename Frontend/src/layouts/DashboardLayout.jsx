import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const DashboardLayout = () => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar/>

        <div className='flex-1 flex flex-col'>
            <Header/>
            <main className='p-6 flex-1 bg-gray-900'>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default DashboardLayout