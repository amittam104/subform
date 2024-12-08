"use client";

import InputTypesDropdown from "@/components/InputTypesDropdown";
import Image from "next/image";
import React, { useState } from "react";

const inputBlocks = [];

export default function Home() {
  const [formName, setFormName] = useState();
  const [displayInputDropdown, setDisplayInputDropdown] = useState(false);
  const [SelectInputType, setSelectInputType] = useState(inputBlocks);

  return (
    <div className="max-h-screen flex flex-col">
      <header className="max-w-[90rem]">
        <div className="max-w-[40rem] h-14 border-r border-b border-l px-2 sm:px-6 flex justify-between items-center bg-white border-[#E1E4E8] mx-auto">
          <input
            type="text"
            className="placeholder:text-[#959DA5] text-[#0D0D0D] text-sm sm:text-base leading-6 font-semibold focus:ring-0 focus:outline-none"
            value={formName}
            placeholder="Untitled form"
            onChange={(e) => setFormName(e.target.value)}
          />

          <button
            disabled={SelectInputType.length >= 1 ? false : true}
            className={`rounded-xl border py-[6px] pr-[14px] pl-4 bg-white border-[#E1E4E8] flex items-center gap-1 ${
              SelectInputType.length >= 1 ? "shadow-bx" : "shadow-none"
            }`}
          >
            <span
              className={`text-center text-xs sm:text-sm font-semibold ${
                SelectInputType.length >= 1
                  ? "text-[#0D0D0D]"
                  : "text-[#959DA5]"
              } `}
            >
              Preview
            </span>
            <Image
              src="/upRightArrow.svg"
              width={16}
              height={16}
              className={`${
                SelectInputType.length >= 1 ? "opacity-100" : "opacity-40"
              }`}
              alt="Short Answer Icon "
            />
          </button>
        </div>
      </header>
      <main className="max-w-[40rem] border-r border-l overflow-y-scroll border-[#E1E4E8] bg-white mx-auto h-[1150px] w-full">
        <div className="w-full h-full flex flex-col gap-6">
          <div className="w-full h-auto px-6 pb-20 gap-14">
            <div className="w-full h-auto pt-6 gap-8 flex flex-col">
              <div className="flex flex-col gap-4">
                {SelectInputType.map((input, index) => {
                  return (
                    <div key={index}>
                      {React.cloneElement(input.component, {
                        setSelectInputType,
                        setDisplayInputDropdown,
                        index: index,
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="relative w-full h-auto rounded-lg px-4 gap-2 flex justify-center items-center ">
                <button
                  onClick={() => setDisplayInputDropdown((cur) => !cur)}
                  className=" rounded-xl border py-[6px] pr-4 pl-[14px] bg-white border-[#E1E4E8] flex items-center gap-1 shadow-bx"
                >
                  <Image
                    src="/plus.svg"
                    width={16}
                    height={16}
                    className="text-gray-900"
                    alt="Short Answer Icon "
                  />
                  <span className="text-center text-sm font-semibold text-[#0D0D0D]">
                    Add Question
                  </span>
                </button>
                {displayInputDropdown && (
                  <InputTypesDropdown
                    type="primary"
                    setSelectInputType={setSelectInputType}
                    setDisplayInputDropdown={setDisplayInputDropdown}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="max-w-[40rem] w-full h-16 border border-[#E1E4E8] mx-auto">
        <div className="w-full h-full flex items-center justify-between  py-4 px-2 sm:px-6 bg-gray-50 bg-opacity-90 backdrop-blur-sm">
          <button
            disabled={SelectInputType.length >= 1 ? false : true}
            className={`rounded-xl border py-[6px] pr-4 pl-[14px] bg-white border-[#E1E4E8] flex items-center gap-1 ${
              SelectInputType.length >= 1 ? "shadow-bx" : "shadow-none"
            }`}
          >
            <Image
              src="/draft.svg"
              width={16}
              height={16}
              className={`${
                SelectInputType.length >= 1 ? "opacity-100" : "opacity-40"
              }`}
              alt="Short Answer Icon "
            />
            <span
              className={`text-center text-xs sm:text-sm font-semibold ${
                SelectInputType.length >= 1
                  ? "text-[#0D0D0D]"
                  : "text-[#959DA5]"
              }`}
            >
              Save as Draft
            </span>
          </button>
          <button
            disabled={SelectInputType.length >= 1 ? false : true}
            className={`rounded-xl border py-[6px] pr-4 pl-[14px] bg-[#219653] border-[#219653] ${
              SelectInputType.length >= 1 ? "opacity-100" : "opacity-50"
            } ${
              SelectInputType.length >= 1 ? "shadow-publish" : "shadow-none"
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
