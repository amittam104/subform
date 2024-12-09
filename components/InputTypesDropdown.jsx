import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const inputTypes = [
  {
    img: "/shortAnswerIcon.svg",
    type: "shortAnswer",
    name: "Short answer",
  },
  {
    img: "/longAnswerIcon.svg",
    type: "longAnswer",
    name: "Long answer",
  },
  {
    img: "/singleSelectIcon.svg",
    type: "singleSelect",
    name: "Single select",
  },
  {
    img: "/urlIcon.svg",
    type: "url",
    name: "URL",
  },
  {
    img: "/hashtag.svg",
    type: "number",
    name: "Number",
  },
];

function InputTypesDropdown({
  type,
  setSelectInputType,
  setDisplayInputDropdown,
  index,
}) {
  function handleInputSelect(inputType) {
    setDisplayInputDropdown(false);

    if (type === "secondary") {
      setSelectInputType((curInputs) => {
        const newInputs = [...curInputs];

        newInputs[index] = {
          type: inputType.type,
          name: inputType.name,
          question: "",
          helpText: "",
          required: false,
          options: inputType.type === "singleSelect" ? [] : undefined,
        };

        return newInputs;
      });
    } else {
      setSelectInputType((cur) => [
        ...cur,
        {
          type: inputType.type,
          name: inputType.name,
          question: "",
          helpText: "",
          required: false,
          options: inputType.type === "singleSelect" ? [] : undefined,
        },
      ]);
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 0.8 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${
          type === "primary" ? "max-w-[300px]" : "max-w-[300px]"
        } w-full h-auto border z-10 bg-white border-[#E1E4E8] rounded-2xl p-1 gap-2 absolute ${
          type === "primary" ? "top-10" : "right-10 top-12"
        } shadow-dropdown`}
      >
        <div className="w-full h-full">
          <div className="w-full h-9 bg-[#FAFBFC] py-2 px-4 rounded-lg flex items-center">
            <p className="text-xs font-semibold text-[#6A737D]">INPUT TYPES</p>
          </div>

          {inputTypes.map((input) => {
            return (
              <div
                key={input.name}
                // onClick={() => {
                //   setDisplayInputDropdown(false);

                //   if (type === "secondary") {
                //     setSelectInputType((curInputs) => {
                //       const newInputs = [...curInputs];

                //       newInputs[index] = {
                //         name: input.name,
                //         component: (
                //           <input.component
                //             setDisplayInputDropdown={setDisplayInputDropdown}
                //             setSelectInputType={setSelectInputType}
                //             index={index}
                //           />
                //         ),
                //       };

                //       return newInputs;
                //     });
                //   } else {
                //     setSelectInputType((cur) => {
                //       return [
                //         ...cur,
                //         {
                //           name: input.name,
                //           component: input.component({
                //             setDisplayInputDropdown,
                //             setSelectInputType,
                //             index,
                //           }),
                //         },
                //       ];
                //     });
                //   }
                // }}
                onClick={() => handleInputSelect(input)}
                className="w-full h-auto rounded-xl p-2 gap-8 flex items-center bg-white hover:bg-[#FAFBFC] cursor-pointer"
              >
                <div className="w-full h-auto flex items-center gap-2">
                  <Image
                    src={input.img}
                    width={20}
                    height={20}
                    alt={input.name}
                  />
                  <span className="text-sm font-medium text-[#0D0D0D]">
                    {input.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default InputTypesDropdown;
