import { client } from "@/app/lib/sanity";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SingleWorkshop from "@/components/SingleWorkshop";

const getWorkshop = async (slug) => {
    const query = `*[_type == 'workshops' && _id == '${slug}']{
  title,
    about,
    details,
    "image":titleImage.asset._ref,
    "doc":workshopDoc.asset._ref,
    photos,
}[0]`;

    const data = await client.fetch(query);
    return data;
};

const page = async ({ params }) => {
    const { slug } = params;
    const data = await getWorkshop(slug)

    return (
        <div>
            <Navbar />
            <div className="px-[80px] mb-[10vh]">
                <div className="text-[#3392C5] text-[16px] font-[500] leading-[150%] tracking-[-0.304px] mt-[64px]">Workshops </div>
                <SingleWorkshop data={data} />
            </div>
            <Footer />
        </div>
    )
}

export default page