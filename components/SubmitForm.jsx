"use client";

import { useState } from "react";

function SubmitForm({ data, handleInputChange, index }) {
  const [inputValue, setInputValue] = useState("");

  function handleValueChange(newValue) {
    setInputValue(newValue);
    handleInputChange(index, newValue);
  }

  const inputElements = {
    shortAnswer: (
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleValueChange(e.target.value)}
        className="w-full text-sm h-auto rounded-lg border py-[6px] px-2 gap-1 bg-white border-[#E1E4E8] hover:shadow-bx transition-shadow ease-in-out delay-100 placeholder:text-[#959DA5] text-[#0D0D0D] focus:outline-[#219653]"
      />
    ),
    longAnswer: (
      <textarea
        type="text"
        value={inputValue}
        onChange={(e) => handleValueChange(e.target.value)}
        className="rounded-lg text-sm border border-[#E1E4E8] hover:shadow-bx transition-shadow ease-in-out delay-100 resize-none py-[6px] focus:outline-[#219653] px-2 w-full h-20"
      />
    ),
    singleSelect: (
      <div className="w-auto h-auto flex flex-col gap-4">
        {data.options?.map((option, index) => {
          return (
            <div key={index} className="flex items-center gap-1">
              <input
                type="radio"
                checked={inputValue === option}
                onChange={() => handleValueChange(option)}
                name={`preview-option-${index}`}
                className="rounded-lg text-sm border-[1.5px] grow-0 border-[#6A737D] hover:shadow-bx transition-shadow ease-in-out delay-100 accent-[#219653] py-[6px] px-2  w-4 h-4 cursor-pointer"
              />
              <p className="text-sm grow w-full font-medium">{option}</p>
            </div>
          );
        })}
      </div>
    ),
    number: (
      <input
        type="number"
        value={inputValue}
        onChange={(e) => handleValueChange(e.target.value)}
        className="w-full text-sm h-auto rounded-lg border py-[6px] px-2 gap-1 bg-white border-[#E1E4E8] hover:shadow-bx transition-shadow ease-in-out delay-100 placeholder:text-[#959DA5] text-[#0D0D0D] focus:outline-[#219653]"
      />
    ),
    url: (
      <input
        type="url"
        value={inputValue}
        onChange={(e) => handleValueChange(e.target.value)}
        className="w-full text-sm h-auto rounded-lg border py-[6px] px-2 gap-1 bg-white border-[#E1E4E8] hover:shadow-bx transition-shadow ease-in-out delay-100 placeholder:text-[#959DA5] text-[#0D0D0D] focus:outline-[#219653]"
      />
    ),
  };

  return (
    <div
      className={`w-full h-auto ${
        data.type === "singleSelect" ? "gap-4" : "gap-1"
      } flex flex-col`}
    >
      <div>
        <label className="text-sm font-semibold text-[#0D0D0D]">
          {data.question}
        </label>
        {data.helpText && (
          <p className="text-xs font-normal text-[#0D0D0D]">{data.helpText}</p>
        )}
      </div>
      {inputElements[data.type]}
    </div>
  );
}

export default SubmitForm;
