"use client";

import { List } from "@/src/components/subscription";
import { SubscriptionGetService } from "@/src/services/subscription/subscriptionGet.service";
import { useEffect } from "react";

const Product = () => {
    const getSubscription = () => {
        const response = SubscriptionGetService();
    }

    useEffect(()=>{
        getSubscription();
    },[]);
  return (
    <>
      <div className="flex flex-row">
        <span className="flex-grow text-3xl">Subscription</span>
      </div>
      <List />
    </>
  );
};

export default Product;