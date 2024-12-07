"use client";

import InputTypesDropdown from "@/components/InputTypesDropdown";
import { ArrowUpRight, FilePenLine, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formName, setFormName] = useState();
  const [displayInputDropdown, setDisplayInputDropdown] = useState(false);

  return (
    <div className="max-h-[1206px]">
      <header className="max-w-[90rem]">
        <div className="max-w-[40rem] h-14 border-r border-b border-l px-6 flex justify-between items-center bg-white border-[#E1E4E8] mx-auto">
          <input
            type="text"
            className="text-[#959DA5] text-base leading-6 font-semibold focus:ring-0 focus:outline-none"
            value={formName}
            placeholder="Untitled form"
            onChange={(e) => setFormName(e.target.value)}
          />

          <button
            disabled
            className="rounded-xl border py-[6px] pr-[14px] pl-4 bg-white border-[#E1E4E8] flex items-center gap-1"
          >
            <span className="text-center text-sm font-semibold text-[#959DA5]">
              Preview
            </span>
            <Image
              src="/upRightArrow.svg"
              width={16}
              height={16}
              className="text-[#959DA5]"
              alt="Short Answer Icon "
            />
          </button>
        </div>
      </header>
      <main className="max-w-[40rem] border-r border-l overflow-y-scroll border-[#E1E4E8] bg-white fixed top-14 left-[25rem] h-[1150px] w-full">
        <div className="w-full h-full gap-6">
          <div className="w-full h-auto px-6 pb-20 gap-14">
            <div className="w-full h-auto pt-6 gap-8">
              <div className="relative w-full h-auto rounded-lg px-4 gap-2 flex justify-center items-center ">
                <button
                  onClick={() => setDisplayInputDropdown((cur) => !cur)}
                  className=" rounded-xl border py-[6px] pr-4 pl-[14px] bg-white border-[#E1E4E8] flex items-center gap-1 shadow-bx"
                >
                  <Image
                    src="/plusIcon.svg"
                    width={16}
                    height={16}
                    className="text-gray-900"
                    alt="Short Answer Icon "
                  />
                  <span className="text-center text-sm font-semibold text-[#0D0D0D]">
                    Add Question
                  </span>
                </button>
                {displayInputDropdown && <InputTypesDropdown />}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed max-w-[40rem] w-full h-16 bottom-0 left-[25rem] border border-[#E1E4E8] ">
        <div className="w-full h-full flex items-center justify-between  py-4 px-6 bg-gray-50 bg-opacity-90 backdrop-blur-sm">
          <button
            disabled
            className="rounded-xl border py-[6px] pr-4 pl-[14px] bg-white border-[#E1E4E8] flex items-center  gap-1"
          >
            <Image
              src="/draft.svg"
              width={16}
              height={16}
              className="text-[#959DA5]"
              alt="Short Answer Icon "
            />
            <span className="text-center text-sm font-semibold text-[#959DA5]">
              Save as Draft
            </span>
          </button>
          <button
            disabled
            className="rounded-xl border py-[6px] pr-4 pl-[14px] bg-[#219653] border-[#219653] opacity-50 flex items-center gap-1"
          >
            <Image
              src="/check.svg"
              width={16}
              height={16}
              className="text-[#959DA5]"
              alt="Short Answer Icon "
            />
            <span className="text-center text-sm font-semibold text-white">
              Publish form
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
}
