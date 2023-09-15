"use client";

import { useEffect, useState } from "react";

import Idle from "@/src/components/common/idle";
import Error from "@/src/components/common/error";
import { List, Add } from "@/src/components/product/";
import Loading from "@/src/components/common/loading";
import { IProduct } from "@/src/types/product/IProduct";
import { StoreStatusEnum } from "@/src/commons/StoreStatusEnum";
import { ProductGetResponse, ProductGetService } from "@/src/services/product/productGet.service";

const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<StoreStatusEnum>(StoreStatusEnum.IDLE);
  const getProduct = async () => {
      setStatus(StoreStatusEnum.LOADING);
      const response: ProductGetResponse = await ProductGetService();
      if(response.status == 200){
        setStatus(StoreStatusEnum.SUCCESS);
        setProducts(response.data);
      }else{
        setStatus(StoreStatusEnum.ERROR);
        setMessage(response.message);
      }
    };
  
    useEffect(() => {
      getProduct();
    }, []);
    
  return (
    <>
      <div className="flex flex-row">
        <span className="flex-grow text-3xl">Product</span>
        <Add />
      </div>
      {Boolean(status == StoreStatusEnum.IDLE) && (<><Idle/></>)}
      {Boolean(status == StoreStatusEnum.LOADING) && (<><Loading/></>)}
      {Boolean(status == StoreStatusEnum.SUCCESS) && (<>
        <List products={products} />
      </>)}
      {Boolean(status == StoreStatusEnum.ERROR) && (<><Error message={message}/></>)}
    </>
  );
};

export default Product;
