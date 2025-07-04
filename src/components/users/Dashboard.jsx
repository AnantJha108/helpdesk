import React from 'react'
import Header from '../includes/Header';
import UserSidebar from '../includes/UserSidebar';
import Footer from '../includes/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header/>
      <div className="flex flex-1">
        <UserSidebar/>
        <div className="flex-1 p-4">
          <h2 className="text-center text-2xl font-semibold mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card color="bg-blue-500" title="Total Tickets" count="12" />
            <Card color="bg-green-400" title="Total Solved" count="8" />
            <Card color="bg-red-400" title="Total Awaiting Approval" count="2" />
            <Card color="bg-yellow-300" title="Total in Progress" count="2" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

const Card = ({ color, title, count }) => (
  <div className={`${color} text-center p-4 rounded-lg shadow-md`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-4xl font-bold mt-2 text-blue-900">{count}</p>
  </div>
);

export default Dashboard