"use client";

import { List, Add } from "@/src/components/product/";

const Product = () => {
  return (
    <>
      <div className="flex flex-row">
        <span className="flex-grow text-3xl">Product</span>
        <Add />
      </div>
      <List />
    </>
  );
};

export default Product;
