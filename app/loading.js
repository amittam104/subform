function loading() {
  return (
    <div className="max-h-screen flex flex-col">
      <header className="max-w-[90rem]">
        <div className="max-w-[40rem] h-14 border-r border-b border-l px-2 sm:px-6 flex justify-between items-center bg-white border-[#E1E4E8] mx-auto"></div>
      </header>
      <main className="max-w-[40rem] border-r border-l overflow-y-scroll border-[#E1E4E8] bg-white mx-auto h-[1150px] w-full">
        <div className="w-full h-full flex flex-col gap-6">
          <div className="w-full h-auto px-6 pb-20 gap-14">
            <div className="w-full h-auto pt-6 gap-8 flex flex-col">
              <div className="relative w-full h-auto rounded-lg px-4 gap-2 flex justify-center items-center ">
                <p>Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default loading;
