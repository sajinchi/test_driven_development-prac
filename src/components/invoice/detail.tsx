import { AiOutlineEye } from 'react-icons/ai';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react'

import { IInvoice } from '@/src/types/invoice/IInvoice'
import { GetUserSingleService, SingleUserGetResponse } from '@/src/services/user/userGetSingle.service';

const Detail = (props:{detail:IInvoice}) => {
  const [detailOpen, setDetailOpen] = useState(false);
  const [userName, setUserName] = useState('');

  function closeModal() {
    setDetailOpen(false);
  }

  function openModal() {
    setDetailOpen(true);
  }
  
  const dataext = (data: string) => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let date = new Date(data);
    let year = date.getFullYear();
    let monthIndex = date.getMonth() + 1;
    let day = date.getDate();
    let monthName = monthNames[monthIndex];
    let formattedDate = `${monthName} ${day.toString().padStart(2, '0')}, ${year}`;
    return (formattedDate);
  };

  const paidStatus = (data:boolean) => {
    if(data == true){
      return "Paid"
    }else{
      return "Not Paid"
    }
  }

  const getuser = async(id:string) => {
    let response:SingleUserGetResponse = await GetUserSingleService(id);
    if (response.status == 200){
      setUserName(response?.data!.username);
    }
  }

  useEffect(()=>{
    getuser(props.detail.user);
  },[]);

  return (
    <div>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md hover:bg-slate-500/50 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <AiOutlineEye />
        </button>
      </div>

      <Transition appear show={detailOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Invoice Detail
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="bg-white font-Poppins p-9">
                      <div><span className="font-semibold">Created At: </span>{dataext(props.detail.created_at)}</div>
                      <div><span className="font-semibold">ID: </span>{props.detail.id}</div>
                      <div><span className="font-semibold">Is Paid: </span>{paidStatus(props.detail.is_paid)}</div>
                      <div><span className="font-semibold">Updated At: </span>{dataext(props.detail.updated_at)}</div>
                      <div><span className="font-semibold">User: </span>{userName}</div>
                        
                      </div>
                    </div>
                
                  <div className="flex flex-row  space-x-2 justify-center">
                    <button
                      type="button"
                      className="inline-flex flex-growjustify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-black hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Back
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Detail
