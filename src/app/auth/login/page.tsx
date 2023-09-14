"use client";
import Image from "next/image";
import { useEffect } from 'react';
import { RootState } from '@/src/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import LoginCard from '@/src/components/auth/login';

import { StoreStatusEnum } from '@/src/commons/StoreStatusEnum';



const Login = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const router = useRouter();
    useEffect(()=>{
      if(auth.status == StoreStatusEnum.SUCCESS){
        router.push('/product');
      }
    },[auth]);
    return (
    <div className=" bg-authbackground min-h-screen min-w-screen flex items-center justify-center">
    <div className=" w-1/4 h-3/4 shadow-md mx-auto  bg-white rounded-lg font-poppins">
      <div className="flex items-center justify-center p-10 ">
        <Image
          src="/logo.png"
          width={144.31}
          height={46}
          alt=""
          className=" items-center"
        />
      </div>
      <div className="text-xl pl-10 font-semibold">
        Sign in to your account
      </div>
      <LoginCard />
    </div>
  </div>
  )
}

export default Login
