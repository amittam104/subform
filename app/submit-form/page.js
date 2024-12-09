"use client";

import SubmitForm from "@/components/SubmitForm";
import { useEffect, useState } from "react";

function page() {
  const [SelectInputType, setSelectInputType] = useState([]);
  const [formName, setFormName] = useState();
  const [formValues, setFormValues] = useState({});
  const [completeness, setCompleteness] = useState();
  const [completenessBar, setCompletenessBar] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(function () {
    try {
      let formDraft;
      if (typeof window !== "undefined") {
        formDraft = JSON.parse(localStorage.getItem("formDraft"));
      }

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

  function handleInputChange(index, value) {
    setFormValues((prev) => {
      const newValues = { ...prev, [index]: value };

      const filledFields = Object.values(newValues).filter(
        (value) => value && value.trim !== ""
      ).length;
      const totalFormFields = SelectInputType.length;
      const completenessPercent = (filledFields / totalFormFields) * 100;
      setCompleteness(completenessPercent);

      const completenessBarWidth = (completenessPercent / 100) * 300;
      setCompletenessBar(completenessBarWidth);

      return newValues;
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    try {
      localStorage.setItem("SubmittedForm", JSON.stringify(formValues));

      setFormSubmitted(true);
    } catch (error) {
      alert("Something went wrong while submitting the form");
    }
  }

  console.log(formValues);

  return (
    <div className="max-h-screen flex flex-col">
      <header className="max-w-[90rem]">
        <div className="max-w-[40rem] sm:h-14 h-24 border-r border-b border-l px-2 sm:px-6 flex flex-col gap-2 sm:flex-row justify-center sm:justify-between sm:items-center bg-white border-[#E1E4E8] mx-auto">
          <p className="text-[#0D0D0D] text-sm sm:text-base leading-6 font-semibold">
            {formName}
          </p>
          <div className="flex flex-col sm:items-end gap-2">
            <p className="text-sm font-normal text-[#0D0D0D]">
              Form completeness — <span>{completeness || 0}%</span>
            </p>
            <div className="w-[300px] h-1 bg-[#E1E4E8] rounded relative">
              <div
                style={{ width: `${completenessBar}px` || 0 }}
                className={`h-full  absolute inset-0 rounded bg-[#00AA45]`}
              >
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-[40rem] border-r border-l overflow-y-scroll border-[#E1E4E8] bg-white mx-auto h-[1150px] w-full">
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="w-full h-full flex flex-col p-6 gap-10"
        >
          <div className="flex flex-col gap-8">
            {SelectInputType?.map((inputData, index) => {
              return (
                <SubmitForm
                  key={index}
                  data={inputData}
                  handleInputChange={handleInputChange}
                  index={index}
                />
              );
            })}
          </div>
          <button
            disabled={completeness !== 100}
            type="submit"
            className={`rounded-xl place-self-end border py-[6px] px-4 bg-[#219653] border-[#1E874B] hover:shadow-publish flex items-center gap-1`}
          >
            <span className="text-center text-xs sm:text-sm font-semibold text-white">
              {formSubmitted ? "Form Submitted Successfully!" : "Submit"}
            </span>
          </button>
        </form>
      </main>
    </div>
  );
}

export default page;
