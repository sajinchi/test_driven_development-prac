"use client";
import { List } from '@/src/components/invoice'
import React from 'react'

const Invoice = () => {
  return (
    <>
    <div className="flex flex-row">
      <span className="flex-grow text-3xl">Invoice</span>
    </div>
    <List />
  </>
  )
}

export default Invoice
