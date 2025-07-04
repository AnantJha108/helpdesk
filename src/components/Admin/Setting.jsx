import React from 'react';
import Footer from '../includes/Footer';
import AdminSidebar from '../includes/AdminSidebar';
import Header from '../includes/Header';


const Setting = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex flex-1">
                <AdminSidebar/>
                <div className="flex-1 p-4 overflow-auto">
                    <h1 className="text-2xl font-semibold mb-4">Setting</h1>

                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Setting;
