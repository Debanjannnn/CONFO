'use client'

import { sidebarLinks } from '@/constant';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Link from next/link
import React from 'react';

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className='sticky left-0 top-0 flex h-screen flex-col w-fit justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[246px]'>
      <div className='flex flex-1 flex-col gap-6'>
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                'bg-blue-1': isActive,
              })}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};
