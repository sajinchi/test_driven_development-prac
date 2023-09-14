import React, { Fragment, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";

import { DownloadInvoiceService } from "@/src/services/invoice/invoiceDownload.service";


const Download = (props: { id: string }) => {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [pdfBlob, setPdfBlob] = useState();

  function closeModal() {
    setDownloadOpen(false);
  }

  function openModal() {
    setDownloadOpen(true);
  }
    const downloadInvoice = async () => {
        const file = await DownloadInvoiceService(props.id);
        if (file?.status == 200) {
          setPdfBlob(file.data);
          openModal();
        }
      };
      const download = () => {
        let url = window.URL || window.webkitURL;
        const link = url.createObjectURL(pdfBlob!);
        var a = document.createElement("a");
        a.setAttribute("download", props.id + ".pdf");
        a.setAttribute("href", link);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        closeModal();
      }
  return (
    <div>
        <button
          type="button"
          onClick={downloadInvoice}
          className="rounded-md hover:bg-slate-500/50 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <AiOutlineDownload />
        </button>

      <Transition appear show={downloadOpen} as={Fragment}>
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
            <div className="flex h-full items-center justify-center p-4 px-5 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Download Invoice
                  </Dialog.Title>
                  <div className="mt-2">
                  {pdfBlob && (
                <iframe
                  title="PDF Viewer"
                  src={URL.createObjectURL(pdfBlob)}
                  width="100%"
                  height="500px"
                />
              )}
                  </div>
                  <div className="flex flex-row pt-5 space-x-2 justify-center">
                    <button
                      type="button"
                      className="inline-flex flex-growjustify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-black hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => download()}
                      className="p-2 w-auto bg-orange1 rounded-md text-white"
                    >
                      Download
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
};

export default Download;
