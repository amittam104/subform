import Image from "next/image";

function InputTypesDropdown() {
  return (
    <div className="w-[300px] h-auto border border-[#E1E4E8] rounded-2xl p-1 gap-2 absolute top-10 shadow-dropdown">
      <div className="w-full h-full">
        <div className="w-full h-9 bg-[#FAFBFC] py-2 px-4 rounded-lg flex items-center">
          <p className="text-xs font-semibold text-[#6A737D]">INPUT TYPES</p>
        </div>
        <div className="w-full h-auto rounded-xl p-2 gap-8 flex items-center bg-white">
          <div className="w-full h-auto flex items-center gap-2">
            <Image
              src="/shortAnswerIcon.svg"
              width={20}
              height={20}
              alt="Short Answer Icon "
            />
            <span className="text-sm font-medium text-[#0D0D0D]">
              Short answer
            </span>
          </div>
        </div>
        <div className="w-full h-auto rounded-xl p-2 gap-2 flex items-center bg-white">
          <div className="w-full h-auto flex items-center gap-2">
            <Image
              src="/longAnswerIcon.svg"
              width={20}
              height={20}
              alt="Short Answer Icon "
            />
            <span className="text-sm font-medium text-[#0D0D0D]">
              Long answer
            </span>
          </div>
        </div>
        <div className="w-full h-auto rounded-xl p-2 gap-2 flex items-center bg-white">
          <div className="w-full h-auto flex items-center gap-2">
            <Image
              src="/singleSelectIcon.svg"
              width={20}
              height={20}
              alt="Short Answer Icon "
            />
            <span className="text-sm font-medium text-[#0D0D0D]">
              Single select
            </span>
          </div>
        </div>
        <div className="w-full h-auto rounded-xl p-2 gap-2 flex items-center bg-white">
          <div className="w-full h-auto flex items-center gap-2">
            <Image
              src="/urlIcon.svg"
              width={20}
              height={20}
              alt="Short Answer Icon "
            />
            <span className="text-sm font-medium text-[#0D0D0D]">URL</span>
          </div>
        </div>
        <div className="w-full h-auto rounded-xl p-2 gap-2 flex items-center bg-white">
          <div className="w-full h-auto flex items-center gap-2">
            <Image
              src="/dateIcon.svg"
              width={20}
              height={20}
              alt="Short Answer Icon "
            />
            <span className="text-sm font-medium text-[#0D0D0D]">Date</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputTypesDropdown;
