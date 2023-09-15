"use client";

import { useEffect, useState } from "react";

import Idle from "@/src/components/common/idle";
import Error from "@/src/components/common/error";
import { Add, List } from "@/src/components/package";
import Loading from "@/src/components/common/loading";
import { IPackage } from "@/src/types/package/IPackage";
import { StoreStatusEnum } from "@/src/commons/StoreStatusEnum";
import { PackageGetService } from "@/src/services/package/packageGet.service";


const Package = () => {
  const [pack, setPack] = useState<IPackage[]>([]);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<StoreStatusEnum>(StoreStatusEnum.IDLE);
  const getPackage = async() => {
    setStatus(StoreStatusEnum.LOADING);
      const response = await PackageGetService();
      if (response.status == 200){
        setStatus(StoreStatusEnum.SUCCESS);
        setPack(response.data);
      }else{
        setStatus(StoreStatusEnum.ERROR);
        setMessage(response.message);
      }
  }

  useEffect(()=>{
      getPackage();
  },[]);
  
  return (
    <>
      <div className="flex flex-row">
        <span className="flex-grow text-3xl">Package</span>
        <Add />
      </div>
      {Boolean(status == StoreStatusEnum.IDLE) && (<><Idle/></>)}
      {Boolean(status == StoreStatusEnum.LOADING) && (<><Loading/></>)}
      {Boolean(status == StoreStatusEnum.SUCCESS) && (<><List packages={pack}/></>)}
      {Boolean(status == StoreStatusEnum.ERROR) && (<><Error message={message} /></>)}
    </>
  );
};

export default Package;