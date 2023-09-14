import { useForm } from 'react-hook-form';
import { AiFillEdit } from 'react-icons/ai';
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';

import { PackageUpdateService } from '@/src/services/package/packageUpdate.service';
import { IPackage } from '@/src/types/package/IPackage'
import { IPackageCreateData } from '@/src/types/package/IPackageCreateData';

const Update = (props:{data:IPackage}) => {
  const [addOpen, setAddOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPackageCreateData>({ mode: "all" });

  function closeModal() {
    setAddOpen(false);
  }

  function openModal() {
    setAddOpen(true);
  }

  const onSubmit = async (data:IPackageCreateData) => {
    const response = await PackageUpdateService(data.type, data.amount, data.description);
  };
  return (
    <div>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md hover:bg-slate-500/50 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
          <AiFillEdit />
        </button>
      </div>

      <Transition appear show={addOpen} as={Fragment}>
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
                    Product Add
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="bg-white font-Poppins p-9">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" space-y-4">
                          <label>Type</label>
                          <select
                            {...register("type", {
                              required: {
                                value: true,
                                message: "*Type is required",
                              },
                            })}
                            defaultValue={props.data.type}
                            className={` pl-3 w-full  h-10 rounded-lg border outline-none ${
                              errors.type &&
                              "focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                          >
                            <option value="Fm">Family</option>
                            <option value="Co">Couple</option>
                            <option value="So">Solo</option>
                            <option value="Fr">Friend</option>
                          </select>

                          <div className=" text-red-500 italic text-sm ">
                            {errors.type?.message}
                          </div>

                          <label>Amount</label>
                          <input
                            {...register("amount", {
                              required: {
                                value: true,
                                message: "*Amount is required.",
                              },
                              pattern: {
                                value: /^[0-9-]/,
                                message: "*Enter number only",
                              },
                            })}
                            type="text"
                            placeholder="Enter the price"
                            defaultValue={props.data.amount}
                            className={`flex-grow pl-3 w-full  h-10 rounded-lg border outline-none ${
                              errors.amount &&
                              "focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                          />
                          <div className=" text-red-500 italic text-sm ">
                            {errors.amount?.message}
                          </div>
                        </div>

                        <label className=" font-Poppins">Description</label>
                        <textarea
                          {...register("description", {
                            required: {
                              value: true,
                              message: "*Description is required",
                            },
                            min: 1,
                            max: 500,
                          })}
                          defaultValue={props.data.description}
                          className={`pl-3 w-full  h-20 rounded-5px border outline-none ${
                            errors.description &&
                            "focus:border-red-500 focus:ring-red-500 border-red-500"
                          }`}
                        />
                        <div className=" text-red-500 italic text-sm ">
                          {errors.description?.message}
                        </div>
                        <div className="flex flex-row p-9 space-x-2 justify-center">
                          <button
                            type="button"
                            className="inline-flex flex-growjustify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-black hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                          <button className="p-2 w-auto bg-orange1 rounded-md text-white">
                            Create Package
                          </button>
                        </div>
                      </form>
                    </div>
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

export default Update
