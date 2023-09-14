import React, { Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { MdOutlineDeleteOutline } from 'react-icons/md'

import { DeleteProductService } from '@/src/services/product/productDelete.service';
import { INetwortRequestResponseState } from '@/src/types/INetworkRequestResponseState';

const Delete = (props:{id:string,name:string}) => {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const deleteProduct = async (id: string) => {
    const response: INetwortRequestResponseState = await DeleteProductService(id);
    if (response.status == 200) {
      closeModal();
    }
  };

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
          <MdOutlineDeleteOutline />
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Delete
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="bg-white font-Poppins p-9 ">
                      <div className="mb-5 font-medium">
                        Are you sure you want to delete?
                      </div>
                      <div>Product Name: {props.name}</div>
                      <div>ID: {props.id}?</div>
                    </div>
                  </div>
                  <div className="flex flex-row p-5 space-x-2 justify-center">
                    <button
                      type="button"
                      className="inline-flex flex-growjustify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-black hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteProduct(props.id)}
                      className="p-2 w-auto bg-orange1 rounded-md text-white"
                    >
                      Delete
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

export default Delete
