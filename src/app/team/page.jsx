import Footer from '@/components/Common/Footer';
import Navbar from '@/components/Common/Navbar';
import TeamCard from '@/components/TeamCard';
import React from 'react'
import { client } from '../lib/sanity';

const getTeam = async () => {
    const query = `*[_type=='teamAndAlumni'] | order(_createdAt asc) {
  _id,
  type,
  name,
  fieldOfResearch,
  details,
  "image":image.asset._ref
}`

    const data = await client.fetch(query);
    return data;
}

const page = async () => {
    const data = await getTeam();
    return (
        <div className='w-full h-full'>
            <Navbar />
            <div className='px-[80px] w-full h-[100vh] mb-[90vh]'>
                <div className='my-[65px]'>
                    <h1 className='text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px]'>Faculty</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                        {data.map((member) => (
                            member?.type === "faculty" ? <TeamCard member={member} key={member._id} /> : ''
                        ))}
                    </div>
                    <h1 className='text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px] my-[65px]'>Phd Scholars</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                        {data.map((member) => (
                            member?.type === "phdScholars" ? <TeamCard member={member} key={member._id} /> : ''
                        ))}
                    </div>
                    <h1 className='text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px] my-[65px]'>Post Graduates</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                        {data.map((member) => (
                            member?.type === "postGraduates" ? <TeamCard member={member} key={member._id} /> : ''
                        ))}
                    </div>
                    <h1 className='text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px] my-[65px]'>Trainee</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                        {data.map((member) => (
                            member?.type === "trainee" ? <TeamCard member={member} key={member._id} /> : ''
                        ))}
                    </div>
                    <h1 className='text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px] my-[65px]'>alumni</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                        {data.map((member) => (
                            member?.type === "alumni" ? <TeamCard member={member} key={member._id} /> : ''
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page