import hero from "../assets/man.png";

function HeroSection() {
  return (
    <div className="bg-[#1B99D4] relative">
      <div className="absolute left-[22.57%] bottom-0">
        <img src={hero} alt="heroooo" />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div
            className="roboto_font max-w-[455px] text-white 
                "
          >
            <span className="text-sm font-medium bg-[#3a9bca] px-2 py-[7px] text-white rounded-[5px]">
              Specialization over generalization
            </span>
            <h2 className="text-[42px] font-bold leading-[47.5px] text-white mt-5">
              Advanced Data Science & AI Course
            </h2>
            <p className="text-[17px] leading-[24px] mt-5">
              Equip yourself with data science skills through live, interactive
              lectures guided by industry expert mentors
            </p>
            <p className="text-[28px] leading-[24px] tracking-[-0.5%] mt-5 font-normal">
              Live Interactive Classes
            </p>
            <button
              className="flex items-center gap-[5px] p-4 mt-[37px] bg-white
              rounded-[5px]"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.125 9.375V11.875C13.125 12.2065 12.9933 12.5245 12.7589 12.7589C12.5245 12.9933 12.2065 13.125 11.875 13.125H3.125C2.79348 13.125 2.47554 12.9933 2.24112 12.7589C2.0067 12.5245 1.875 12.2065 1.875 11.875V9.375"
                  stroke="#272727"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.375 6.25L7.5 9.375L10.625 6.25"
                  stroke="#272727"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 9.375V1.875"
                  stroke="#272727"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="text-[16px] text-[#272727] leading-[17px] font-medium">
                Download Brochure
              </span>
            </button>
          </div>
          <div className="w-[429px]  bg-white px-[30px] py-[33px] rounded-[10px] roboto_font mt-[50px] mb-[50px]">
            <div className="">
              <h2 className="text-[36px] font-bold leading-[33px] roboto_font tracking-[0%] text-[#252525]">
                We’re here to help!
              </h2>
              <p className="text-[18px] leading-[25px] tracking-[0%] text-[#2525259d] mt-[15px] ">
                Enter your details to get started
              </p>
            </div>
            <div className="mt-[45px] space-y-[30px]">
              <input
                type="text"
                placeholder="Your name"
                className="py-[12px] pl-[12px] text-[15px] leading-[100%] tracking-[0%] text-[#727695] font-normal border-[1px] border-[#E6E9FC] rounded-[5px] w-full "
              />
              <input
                type="text"
                placeholder="Your email address"
                className="py-[12px] pl-[12px] text-[15px] leading-[100%] tracking-[0%] text-[#727695] font-normal border-[1px] border-[#E6E9FC] rounded-[5px] w-full "
              />

              <input
                type="text"
                placeholder="Your phone number"
                className="py-[12px] pl-[12px] text-[15px] leading-[100%] tracking-[0%] text-[#727695] font-normal border-[1px] border-[#E6E9FC] rounded-[5px] w-full "
              />
              <div className="py-[12px] px-[12px]  text-[15px] leading-[100%] tracking-[0%] text-[#7276958a] font-normal border-[1px] border-[#E6E9FC] rounded-[5px] w-full">
                <select className="w-full">
                  <option className="" value="" disabled selected>
                    Select Course
                  </option>
                </select>
              </div>
            </div>

            <button className="rounded-[5px] bg-[#1B99D4] carsor-pointer text-white py-[10px] px-[20px] mt-[44px] flex items-center juctify-between gap-[15px]">
              <span>Get in Touch</span>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.13196 4.78765L5.10264 0.993976L6.15836 0L12 5.5L6.15836 11L5.10264 10.006L9.13196 6.21235H0V4.78765H9.13196Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
