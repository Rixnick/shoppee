import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import UserProduct from '../../components/UserProduct'



const UserProducts = () => {
    return (
            <>
                <Sidebar />
                <div className="main-products-content">
                    <Header />
                    <main>
                        <UserProduct />
                    </main>
                </div>
            </>
    )
}

export default UserProducts;
