import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default MainLayout;