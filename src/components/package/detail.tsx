import { AiOutlineEye } from 'react-icons/ai';
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';

import { IPackage } from '@/src/types/package/IPackage'

const Detail = (props:{data:IPackage}) => {
  const [deleteOpen, setDeleteOpen] = useState(false);

  function closeModal() {
    setDeleteOpen(false);
  }

  function openModal() {
    setDeleteOpen(true);
  }
  
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

      <Transition appear show={deleteOpen} as={Fragment}>
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
                    Product Detail
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="bg-white font-Poppins p-9">
                      <div><span className="font-semibold">Name: </span>{props.data.name}</div>
                      <div><span className="font-semibold">Amount: </span>{props.data.amount}</div>
                      <div><span className="font-semibold">ID: </span>{props.data.id}</div>
                      <div><span className="font-semibold">Description: </span>{props.data.description}</div>
                      <div><span className="font-semibold">Type: </span>{props.data.type}</div>
                      <div><span className="font-semibold">Payment Types: </span>
                        
                      </div>
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
