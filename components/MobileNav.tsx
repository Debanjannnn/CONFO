"use client"
import Image from 'next/image';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { sidebarLinks } from '@/constant';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';


export const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[246px] '>
            <Sheet>
                <SheetTrigger asChild>
                    <Image className='cursor-pointer sm:hidden'
                        src="/icons/hamburger.svg"
                        alt="hamburger"
                        width={36}
                        height={36}
                    />
                </SheetTrigger>
                <SheetContent side="left" className='border-none bg-dark-1 ' >
                    <Link href="/" className='flex items-center gap-1 '>
                        <Image
                            src="/icons/logo.svg"
                            width={32}
                            height={32}
                            className='max-sm:size-10'
                            alt={'CoNFO'} />
                        <p className='text-white font-extrabold text-[26px]'>CoNFO</p>
                    </Link>
                    <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                        <SheetClose asChild>
                            <section className='h-full flex flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route 
                                    return (
                                        <SheetClose  asChild key={link.route}>
                                        <Link
                                            href={link.route}
                                            key={link.label}
                                            className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60', {
                                                'bg-blue-1': isActive,
                                            })}
                                        >
                                            <Image
                                                src={link.imgURL}
                                                alt={link.label}
                                                width={20}
                                                height={20} />
                                            <p className='font-semibold '>{link.label}</p>
                                        </Link></SheetClose>
                                    );
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}
