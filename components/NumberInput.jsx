"use client";

import Image from "next/image";
import InputTypesDropdown from "./InputTypesDropdown";
import { useState } from "react";

function NumberInput() {
  const [displayInputDropdown, setDisplayInputDropdown] = useState(false);

  return (
    <div className="w-[36rem] h-auto relative rounded-2xl border border-[#E1E4E8] group hover:bg-[#FAFBFC] bg-white p-4 gap-2 mx-auto">
      <div className="w-full h-auto gap-2 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col grow">
            <input
              type="text"
              placeholder="Write a question"
              className="text-sm text-[#0D0D0D] placeholder:text-[#959DA5] group-hover:bg-[#FAFBFC] font-semibold focus:ring-0 focus:outline-none flex-1"
            />
            <input
              type="text"
              placeholder="Write a help text or caption (leave empty if not needed)"
              className="text-xs text-[#0D0D0D] placeholder:text-[#959DA5] group-hover:bg-[#FAFBFC] font-normal focus:ring-0 focus:outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2 ">
            <div
              onClick={() => setDisplayInputDropdown((prev) => !prev)}
              className="flex items-center cursor-pointer"
            >
              <Image
                src="/hashtag.svg"
                alt="short answer icon"
                width={20}
                height={20}
                className="opacity-50"
              />
              <Image
                src="/chevDown.svg"
                alt="down arrow icon"
                width={16}
                height={16}
                className="opacity-50"
              />
              {displayInputDropdown && <InputTypesDropdown type="secondary" />}
            </div>
            <div className="cursor-grab rounded-full border border-transparent hover:border-[#E1E4E8] p-1">
              <Image
                src="/dragDrop.svg"
                alt="drag drop icon"
                width={15}
                height={15}
                className="opacity-50"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto gap-8">
          <input
            type="number"
            disabled
            className="rounded-lg text-sm border border-[#E1E4E8] py-[6px] px-2 disabled:bg-[#F6F8FA] w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default NumberInput;