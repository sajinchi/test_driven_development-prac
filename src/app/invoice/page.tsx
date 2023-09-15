"use client";
import React, { useEffect, useState } from 'react';

import { List } from '@/src/components/invoice';
import Idle from '@/src/components/common/idle';
import Error from '@/src/components/common/error';
import Loading from '@/src/components/common/loading';
import { IInvoice } from '@/src/types/invoice/IInvoice';
import { StoreStatusEnum } from '@/src/commons/StoreStatusEnum';
import { InvoiceGetService } from '@/src/services/invoice/invoiceGet.service';

const Invoice = () => {
  const [invoice, setInvoice] = useState<IInvoice[]>([]);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<StoreStatusEnum>(StoreStatusEnum.IDLE);
  const getInvoice = async () => {
    setStatus(StoreStatusEnum.LOADING);
    const response = await InvoiceGetService();
    if(response.status == 200 ){
      setStatus(StoreStatusEnum.SUCCESS);
      setInvoice(response.data);
    }else{
      setStatus(StoreStatusEnum.ERROR);
      setMessage(response.message);
    }
  };

  useEffect(() => {
    getInvoice();
  }, []);

  return (
    <>
    <div className="flex flex-row">
      <span className="flex-grow text-3xl">Invoice</span>
    </div>
    {Boolean(status == StoreStatusEnum.IDLE) && (<><Idle /></>)}
    {Boolean(status == StoreStatusEnum.LOADING) && (<><Loading /></>)}
    {Boolean(status == StoreStatusEnum.SUCCESS) && (<><List invoice={invoice}/></>)}
    {Boolean(status == StoreStatusEnum.ERROR) && (<><Error message={message}/></>)}
    
  </>
  )
}

export default Invoice
