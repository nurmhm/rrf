import React from "react";

function Cohort() {
  return (
    <div className="container mx-auto">
      <h2 className="roboto_font font-semibold text-4xl leading-[47px] text-center">
        Next Cohort Details
      </h2>

      <div className="border border-[#D9D9D9]  rounded-[10px] mt-[30px]">
        <div className="flex items-center justify-between py-[20px]  px-[40px] border-b border-[#D9D9D9]" >
          <h2 className="roboto_font font-bold text-4xl leading-[26px] ">
            19{" "}
            <span className="roboto_font font-[500] text-[12px] tracking-[3.6px] text-[#272727]">
              <sup>MAR</sup>
            </span>
          </h2>

          <h3 className="roboto_font font-[500] text-[24px] leading-[23px] ">
            Weekend Batch [Sat - Sun]
          </h3>
          <button className="px-[15px] py-[5px] bg-[#1B99D4] text-white rounded-[2px] text-[12px] font-[500] leading-[24px]">
            Enroll Now
          </button>
        </div>

        <div className="flex items-center justify-between py-[20px]  px-[40px] border-b border-[#D9D9D9]">
            <div className="flex flex-col">
                <h4 className="text-[15px] font-[500] leading-[22px] text-[#272727] roboto_font">Batch</h4>
                <p className="text-[18px] font-normal leading-[24px] text-[#777D8C] roboto_font">Morning </p>
            </div>

            <div className="flex flex-col">
                <h4 className="text-[15px] font-[500] leading-[22px] text-[#272727] roboto_font">Time</h4>
                <p className="text-[18px] font-normal leading-[24px] text-[#777D8C] roboto_font">09:00 am-12:00 pm </p>
            </div>
            <div className="flex flex-col">
                <h4 className="text-[15px] font-[500] leading-[22px] text-[#272727] roboto_font">Seat</h4>
                <p className="text-[18px] font-normal leading-[24px] text-[#777D8C] roboto_font">Available </p>
            </div>
            <div className="flex flex-col">
                <h4 className="text-[15px] font-[500] leading-[22px] text-[#272727] roboto_font">Venue</h4>
                <p className="text-[18px] font-normal leading-[24px] text-[#777D8C] roboto_font">Virtual  Hall </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cohort;
