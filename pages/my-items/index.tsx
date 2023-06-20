import MyProfile from '@/components/Layout/MyProfile';
import { NextPage } from 'next'
import React from 'react'

const MyItems: NextPage = () => {
  // Check if the code is running on the client-side before rendering the MyProfile component
  const isClient = typeof window !== 'undefined';

  return (
    <>
      {isClient && <MyProfile />}
    </>
  );
}

export default MyItems;