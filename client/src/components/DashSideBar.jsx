import { Sidebar } from "flowbite-react";
import {HiUser , HiArrowSmRight} from 'react-icons/hi';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
export default function DashSideBar(){
    const location = useLocation();
    const [tab , setTap] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFormUrl = urlParams.get("tab");
        if (tabFormUrl) {
            setTap(tabFormUrl);
        }
    }) , [location.search];
    return (
        <Sidebar className="w-full md:w-56">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/dashboard?tab=profile'>
                    <Sidebar.Item active={tab ==='profile'} icon={HiUser} label={'user'} labelColor ='blue'>
                        Profile
                    </Sidebar.Item>
                    </Link>
                    <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};