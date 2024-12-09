"use client";

import PreviewFormDraft from "@/components/previewFormDraft";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function page() {
  const [SelectInputType, setSelectInputType] = useState([]);
  const [formName, setFormName] = useState();

  useEffect(function () {
    try {
      const formDraft = JSON.parse(localStorage.getItem("formDraft"));

      if (!formDraft) {
        alert(
          "Form draft is not saved. Please save the draft to preview the form."
        );
        return;
      }

      const formInputs = formDraft.slice(0, -1);

      const nameOfForm = formDraft[formDraft.length - 1];

      setSelectInputType(formInputs);
      setFormName(nameOfForm);
    } catch (error) {
      alert("Something went wrong while getting the saved form draft.");
    }
  }, []);

  // console.log(formName);

  return (
    <div className="max-h-screen flex flex-col">
      <header className="max-w-[90rem]">
        <div className="max-w-[40rem] h-14 border-r border-b border-l px-2 sm:px-6 flex justify-between items-center bg-white border-[#E1E4E8] mx-auto">
          <input
            type="text"
            className="placeholder:text-[#959DA5] text-[#0D0D0D] text-sm sm:text-base leading-6 font-semibold focus:ring-0 focus:outline-none"
            value={formName}
            placeholder="Untitled form"
            // onChange={(e) => setFormName(e.target.value)}
          />
          <Link href="/">
            <button
              className={`rounded-xl border py-[6px] pr-[14px] pl-4 bg-white border-[#E1E4E8] flex items-center gap-1 ${
                SelectInputType?.length >= 1 ? "shadow-bx" : "shadow-none"
              }`}
            >
              <span
                className={`text-center text-xs sm:text-sm font-semibold ${
                  SelectInputType?.length >= 1
                    ? "text-[#0D0D0D]"
                    : "text-[#959DA5]"
                } `}
              >
                Back
              </span>
              <Image
                src="/upRightArrow.svg"
                width={16}
                height={16}
                className={`${
                  SelectInputType?.length >= 1 ? "opacity-100" : "opacity-40"
                }`}
                alt="Short Answer Icon "
              />
            </button>
          </Link>
        </div>
      </header>
      <main className="max-w-[40rem] border-r border-l overflow-y-scroll border-[#E1E4E8] bg-white mx-auto h-[1150px] w-full">
        <div className="w-full h-full flex flex-col gap-6">
          <div className="w-full h-auto px-6 pb-20 gap-14">
            <div className="w-full h-auto pt-6 gap-8 flex flex-col">
              <div className="flex flex-col gap-8">
                {SelectInputType?.map((inputData, index) => {
                  return <PreviewFormDraft key={index} data={inputData} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="max-w-[40rem] w-full h-16 border border-[#E1E4E8] mx-auto">
        <div className="w-full h-full flex items-center justify-between  py-4 px-2 sm:px-6 bg-gray-50 bg-opacity-90 backdrop-blur-sm">
          <button
            disabled
            onClick={() => handleDraftSave()}
            className={`rounded-xl border py-[6px] pr-4 pl-[14px] bg-white border-[#E1E4E8] flex items-center opacity-50 gap-1 ${
              SelectInputType?.length >= 1 ? "shadow-bx" : "shadow-none"
            }`}
          >
            <Image
              src="/draft.svg"
              width={16}
              height={16}
              className={`${
                SelectInputType?.length >= 1 ? "opacity-100" : "opacity-40"
              }`}
              alt="Short Answer Icon "
            />
            <span
              className={`text-center text-xs sm:text-sm font-semibold ${
                SelectInputType?.length >= 1
                  ? "text-[#0D0D0D]"
                  : "text-[#959DA5]"
              }`}
            >
              Save as Draft
            </span>
          </button>
          <button
            disabled
            className={`rounded-xl border py-[6px] pr-4 pl-[14px] bg-[#219653] border-[#219653] ${
              SelectInputType?.length >= 1 ? "opacity-100" : "opacity-50"
            } ${
              SelectInputType?.length >= 1 ? "shadow-publish" : "shadow-none"
            } flex items-center gap-1`}
          >
            <Image
              src="/check.svg"
              width={16}
              height={16}
              className="text-[#959DA5]"
              alt="Short Answer Icon "
            />
            <span className="text-center text-xs sm:text-sm font-semibold text-white">
              Publish form
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default page;
