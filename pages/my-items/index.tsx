import MyProfile from '@/components/Layout/MyProfile';
import { NextPage } from 'next'
import React from 'react'

const MyItems: NextPage = () => {
  const isClient = typeof window !== 'undefined';

  return (
    <>
      {isClient && <MyProfile />}
    </>
  );
}

export default MyItems;