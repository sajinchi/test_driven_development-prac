"use client";
import React from "react";
import mime from "mime-types";
import { useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";

import { IImage } from "@/src/types/IImage";
import { Dialog, Transition } from "@headlessui/react";
import { IProductCreateData } from "@/src/types/product/IProductCreateData";
import { handleFileUpload } from "@/src/services/image/imageUpload.service";
import { ProductAddService } from "@/src/services/product/productAdd.service";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductCreateData>({ mode: "all" });
  const router = useRouter();
  const validateFile = (fileList: FileList) => {
    const file = fileList;
    if (!file) {
      return "*Please select a file.";
    }

    const mimeType = mime.lookup(file[0]?.name);
    if (mimeType !== "image/jpeg") {
      return "*Please select a JPEG image file.";
    }
  };
  const onSubmit = async (data: IProductCreateData) => {
    const imageUpload = await handleFileUpload(data.images);
    if (imageUpload.status == 200) {
      let images: IImage[] = [];
      imageUpload.data.detial.forEach((image: string) => {
        let obj: IImage = {
          image_url: image,
        };
        images.push(obj);
      });
      const response = await ProductAddService(
        data.name,
        data.amount,
        data.discount_amount,
        data.inventory,
        data.description,
        images
      );
      if (response.status == 201) {
        closeModal();
      }
    }
  };

  const [addOpen, setAddOpen] = useState(false);

  function closeModal() {
    setAddOpen(false);
  }

  function openModal() {
    setAddOpen(true);
  }
  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-orange1/50 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add Product
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
                          <div className="flex flex-row space-x-6">
                            <div className="flex-grow flex-col">
                              <label>Name</label>
                              <input
                                {...register("name", {
                                  required: {
                                    value: true,
                                    message: "*Name is required.",
                                  },
                                  min: 1,
                                  max: 150,
                                })}
                                type="text"
                                placeholder="Enter name of the product"
                                className={` pl-3 w-full  h-10 rounded-lg border outline-none ${
                                  errors.name &&
                                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                                }`}
                              />
                              <div className=" text-red-500 italic text-sm ">
                                {errors.name?.message}
                              </div>
                            </div>

                            <div className="flex-grow flex-col">
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
                                className={`flex-grow pl-3 w-full  h-10 rounded-lg border outline-none ${
                                  errors.amount &&
                                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                                }`}
                              />
                              <div className=" text-red-500 italic text-sm ">
                                {errors.amount?.message}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row space-x-6">
                            <div className="flex-grow flex-col">
                              <label>Discount Amount</label>
                              <input
                                {...register("discount_amount", {
                                  required: {
                                    value: true,
                                    message: "*Discount amount is required.",
                                  },
                                  max: 100,
                                  pattern: {
                                    value: /^[0-9-]/,
                                    message: "*Enter number only",
                                  },
                                })}
                                type="text"
                                placeholder="Enter the Discount amount"
                                className={`pl-3 w-full  h-10 rounded-lg border outline-none ${
                                  errors.discount_amount &&
                                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                                }`}
                              />
                              <div className=" text-red-500 italic text-sm ">
                                {errors.discount_amount?.message}
                              </div>
                            </div>

                            <div className="flex-grow flex-col">
                              <label>Inventory</label>
                              <input
                                {...register("inventory", {
                                  required: {
                                    value: true,
                                    message: "*Inventory is required.",
                                  },
                                  pattern: {
                                    value: /^[0-9-]/,
                                    message: "*Enter number only",
                                  },
                                })}
                                type="text"
                                placeholder="Enter the inventory"
                                className={`pl-3 w-full h-10 rounded-lg border outline-none ${
                                  errors.inventory &&
                                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                                }`}
                              />
                              <div className=" text-red-500 italic text-sm ">
                                {errors.inventory?.message}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col">
                            <label className=" font-Poppins">Description</label>
                            <textarea
                              {...register("description", {
                                required: {
                                  value: true,
                                  message: "Description is required",
                                },
                                min: 1,
                                max: 500,
                              })}
                              className={`pl-3 w-full  h-20 rounded-5px border outline-none ${
                                errors.description &&
                                "focus:border-red-500 focus:ring-red-500 border-red-500"
                              }`}
                            />
                            <div className=" text-red-500 italic text-sm ">
                              {errors.description?.message}
                            </div>
                          </div>
                          <div>
                            <label className=" font-Poppins">Images</label>
                          </div>
                          <input
                            type="file"
                            multiple
                            {...register("images", {
                              validate: validateFile,
                            })}
                          />
                          <div className=" text-red-500 italic text-sm ">
                            {errors.images?.message}
                          </div>
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
                            Add Product
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
    </>
  );
};

export default Add;
