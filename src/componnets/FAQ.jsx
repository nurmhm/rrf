import React from "react";

function FAQ() {
  return (
    <div className="container px-[118px] mx-auto mt-[94px]">
      <div>
        <h2 className="text-center text-[#1B99D4] font-poppins font-semibold text-[16px] leading-[26px] tracking-[1.6px]">
          ASK YOUR QUESTIONS
        </h2>
        <h2 className="text-center mt-3.5 text-[#000] font-roboto font-semibold text-[36px] leading-[42px]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex items-center justify-between flex-col gap-[35px] mt-[65px] ">
        <div className="p-[18px] w-full flex items-center gap-[10px] border border-[#C1C1C180]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="8" width="20" height="4" rx="2" fill="#1B99D4" />
            <rect x="8" width="4" height="20" rx="2" fill="#1B99D4" />
          </svg>

          <span className="inter_font font-[500px] text-[20px] leading-[28px] text-[#212121]">
            How to enroll for a Course?
          </span>
        </div>
        <div className="p-[18px] w-full flex items-center gap-[10px] border border-[#C1C1C180]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="8" width="20" height="4" rx="2" fill="#1B99D4" />
            <rect x="8" width="4" height="20" rx="2" fill="#1B99D4" />
          </svg>

          <span className="inter_font font-[500px] text-[20px] leading-[28px] text-[#212121]">
          Can I get the recordings of my previous lectures?
          </span>
        </div>
        <div className="p-[18px] w-full flex items-center gap-[10px] border border-[#C1C1C180]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="8" width="20" height="4" rx="2" fill="#1B99D4" />
            <rect x="8" width="4" height="20" rx="2" fill="#1B99D4" />
          </svg>

          <span className="inter_font font-[500px] text-[20px] leading-[28px] text-[#212121]">
          Who would be the instructor for enrolled course?
          </span>
        </div>
        <div className="p-[18px] w-full flex items-center gap-[10px] border border-[#C1C1C180]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="8" width="20" height="4" rx="2" fill="#1B99D4" />
            <rect x="8" width="4" height="20" rx="2" fill="#1B99D4" />
          </svg>

          <span className="inter_font font-[500px] text-[20px] leading-[28px] text-[#212121]">
          What kind of placement support will be given post completion of program?
          </span>
        </div>

      </div>
    </div>
  );
}

export default FAQ;
