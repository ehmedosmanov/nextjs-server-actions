import Link from 'next/link';
import React from 'react'

type Props = {}

const links = [
    { href: '/', label: 'home' },
    { href: '/client', label: 'client' },
    { href: '/drinks', label: 'drinks' },
    { href: '/tasks', label: 'tasks' },
    { href: '/prisma-example', label: 'prisma' },
];


const Navbar = (props: Props) => {
    return (
        <nav id='navbar' className=' bg-black text-white'>
            <div className=' px-16 h-16'>
                <div className='flex h-16 gap-x-6 items-center'>
                    {links.map(item => (
                        <Link className=' capitalize' href={item.href}>{item.label}</Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar