import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SingleWorkshop from "@/components/SingleWorkshop";



const page = ({ params }) => {
    const { slug } = params;

    return (
        <div>
            <Navbar />
            <div className="px-[80px] mb-[10vh]">
                <div className="text-[#3392C5] text-[16px] font-[500] leading-[150%] tracking-[-0.304px] mt-[64px]">Workshops </div>
                <SingleWorkshop />
            </div>
            <Footer />
        </div>
    )
}

export default page