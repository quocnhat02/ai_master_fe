import Link from 'next/link';
import React, { useState } from 'react';

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='flex gap-4 p-5 flex-col'>
        <div className='flex gap-4'>
          <Link href={'/'}>Home</Link>
          <Link href={'/test1'}>Test 1</Link>
        </div>

        <div className=''>{children}</div>
      </div>
    </div>
  );
};

export default Page;
