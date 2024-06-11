import Footer from '@/components/Common/Footer';
import Navbar from '@/components/Common/Navbar' 
import React from 'react' 

const page = ({ params }) => {
    const { slug } = params;
    return (
        <div>
            <Navbar /> 
            <Footer />
        </div>
    )
}

export default page