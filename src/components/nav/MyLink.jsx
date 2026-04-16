"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyLink = ({ item }) => {
    const pathName = usePathname();
    // console.log(pathName);
    return (
        <div>
            <Link href={item.href} className={`flex rounded-sm items-center gap-1 ${pathName === item.href ? 'bg-[#244D3F] text-white p-1 px-2' : 'text-gray-500'}`} >
                {item.icon}
                {item.name}
            </Link>
        </div>
    );
};

export default MyLink;