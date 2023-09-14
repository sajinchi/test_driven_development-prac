"use client";
import Image from "next/image";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppDispatch, RootState } from '@/src/store';
import { useDispatch, useSelector } from 'react-redux';

import LoginCard from '@/src/components/auth/login';
import { userGetSelf } from "@/src/store/user/userSelf.slice";
import { StoreStatusEnum } from '@/src/commons/StoreStatusEnum';



const Login = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const user = useSelector((state: RootState) => state.userSelf);
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(()=>{
        if (user.status == StoreStatusEnum.SUCCESS){
            router.push('/product');
        }
    },[user]);

    const getUser = async() => {
        if(auth.status == StoreStatusEnum.SUCCESS){
            dispatch(userGetSelf());
        }
    }

    useEffect(()=>{
        getUser();
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
