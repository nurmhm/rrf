import React from "react";

function Course() {
  return (
    <div className="container mx-auto flex items-center gap-[55px] py-[83px]">
      <div className="w-1/4 border border-[#D9D9D9] rounded-[10px] py-[30px] px-[28px]">
        <h3 className="roboto_font font-semibold text-[18px] leading-[23px] text-[#1B99D4]">
          Course Highlights
        </h3>
        <div className="flex flex-col gap-[10px] mt-[35px]">
          <div className="flex items-center gap-[10px]">
            <span>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_552)">
                  <path
                    d="M9.74967 10.8332V19.4998L17.333 15.1665L9.74967 10.8332ZM22.7497 6.49984H14.538L18.1022 2.93567L17.333 2.1665L12.9997 6.49984H12.9672L8.63384 2.1665L7.88634 2.93567L11.4397 6.49984H3.24967C2.05801 6.49984 1.08301 7.47484 1.08301 8.6665V21.6665C1.08301 22.8582 2.05801 23.8332 3.24967 23.8332H22.7497C23.9413 23.8332 24.9163 22.8582 24.9163 21.6665V8.6665C24.9163 7.47484 23.9413 6.49984 22.7497 6.49984ZM22.7497 21.6665H3.24967V8.6665H22.7497V21.6665Z"
                    fill="#1B99D4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_552">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span className="roboto_font font-normal text-[16px] leading-[23px] text-[#646464]">
              350+ Live sessions
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_558)">
                  <path
                    d="M7.92407 15.0187C8.00278 15.0974 8.13228 15.0974 8.21099 15.0187L10.7958 12.4339L12.9819 14.6226C13.0606 14.7013 13.1901 14.7013 13.2688 14.6226L19.0147 8.87163C19.0934 8.79292 19.0934 8.66343 19.0147 8.58472L18.0803 7.65034C18.0016 7.57163 17.8721 7.57163 17.7934 7.65034L13.1266 12.3222L10.9405 10.1335C10.8618 10.0548 10.7323 10.0548 10.6536 10.1335L6.9897 13.7974C6.91099 13.8761 6.91099 14.0056 6.9897 14.0843L7.92407 15.0187Z"
                    fill="#1B99D4"
                  />
                  <path
                    d="M22.9531 4.0625H13.9141V2.4375C13.9141 2.32578 13.8227 2.23438 13.7109 2.23438H12.2891C12.1773 2.23438 12.0859 2.32578 12.0859 2.4375V4.0625H3.04688C2.59746 4.0625 2.23438 4.42559 2.23438 4.875V18.0781C2.23438 18.5275 2.59746 18.8906 3.04688 18.8906H12.0961V19.7031L7.91172 22.4479C7.81777 22.5088 7.79238 22.6332 7.85332 22.7271L8.62266 23.9256V23.9281C8.68359 24.0221 8.81055 24.0475 8.90449 23.9865L13 21.3002L17.0955 23.9865C17.1895 24.0475 17.3164 24.0221 17.3773 23.9281V23.9256L18.1467 22.7271C18.2076 22.6332 18.1797 22.5088 18.0883 22.4479L13.9141 19.7107V18.8906H22.9531C23.4025 18.8906 23.7656 18.5275 23.7656 18.0781V4.875C23.7656 4.42559 23.4025 4.0625 22.9531 4.0625ZM21.9375 17.0625H4.0625V5.89062H21.9375V17.0625Z"
                    fill="#1B99D4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_558">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span className="roboto_font font-normal text-[16px] leading-[23px] text-[#646464]">
              15+ Industry Projects
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_564)">
                  <path
                    d="M23.9941 10.4609H17.4941C17.3824 10.4609 17.291 10.5523 17.291 10.6641V11.8828C17.291 11.9945 17.3824 12.0859 17.4941 12.0859H23.9941C24.1058 12.0859 24.1972 11.9945 24.1972 11.8828V10.6641C24.1972 10.5523 24.1058 10.4609 23.9941 10.4609ZM20.5917 13.9141H17.4941C17.3824 13.9141 17.291 14.0055 17.291 14.1172V15.3359C17.291 15.4477 17.3824 15.5391 17.4941 15.5391H20.5917C20.7035 15.5391 20.7949 15.4477 20.7949 15.3359V14.1172C20.7949 14.0055 20.7035 13.9141 20.5917 13.9141ZM12.1189 8.18848H11.0195C10.8621 8.18848 10.7351 8.31543 10.7351 8.47285V14.7697C10.7351 14.8611 10.7783 14.9449 10.8519 14.9982L14.6326 17.7557C14.7595 17.8471 14.9373 17.8217 15.0287 17.6947L15.6812 16.8035V16.801C15.7726 16.674 15.7447 16.4963 15.6177 16.4049L12.4007 14.0791V8.47285C12.4033 8.31543 12.2738 8.18848 12.1189 8.18848Z"
                    fill="#1B99D4"
                  />
                  <path
                    d="M20.4344 17.1107H18.9668C18.8246 17.1107 18.6901 17.1844 18.6139 17.3063C18.2914 17.8166 17.9156 18.2889 17.484 18.7205C16.7401 19.4645 15.8742 20.0484 14.9119 20.4547C13.9141 20.8762 12.8553 21.0895 11.7635 21.0895C10.6692 21.0895 9.61037 20.8762 8.61506 20.4547C7.65275 20.0484 6.78693 19.4645 6.04299 18.7205C5.29904 17.9766 4.71506 17.1107 4.30881 16.1484C3.88732 15.1531 3.67404 14.0943 3.67404 13C3.67404 11.9057 3.88732 10.8494 4.30881 9.85157C4.71506 8.88926 5.29904 8.02344 6.04299 7.2795C6.78693 6.53555 7.65275 5.95157 8.61506 5.54532C9.61037 5.12383 10.6717 4.91055 11.7635 4.91055C12.8578 4.91055 13.9166 5.12383 14.9119 5.54532C15.8742 5.95157 16.7401 6.53555 17.484 7.2795C17.9156 7.71114 18.2914 8.1834 18.6139 8.69376C18.6901 8.81563 18.8246 8.88926 18.9668 8.88926H20.4344C20.6096 8.88926 20.7213 8.70645 20.6426 8.55157C18.9871 5.2584 15.6305 3.11797 11.8828 3.07481C6.39592 3.00626 1.8383 7.49786 1.82814 12.9797C1.81799 18.4717 6.26896 22.9277 11.761 22.9277C15.5569 22.9277 18.9694 20.7797 20.6426 17.4484C20.7213 17.2936 20.607 17.1107 20.4344 17.1107Z"
                    fill="#1B99D4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_564">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span className="roboto_font font-normal text-[16px] leading-[23px] text-[#646464]">
              Life time accessibility
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_570)">
                  <path
                    d="M21.6667 19.5C22.8583 19.5 23.8225 18.525 23.8225 17.3333L23.8333 5.41667C23.8333 4.225 22.8583 3.25 21.6667 3.25H4.33333C3.14167 3.25 2.16667 4.225 2.16667 5.41667V17.3333C2.16667 18.525 3.14167 19.5 4.33333 19.5H0C0 20.6917 0.975 21.6667 2.16667 21.6667H23.8333C25.025 21.6667 26 20.6917 26 19.5H21.6667ZM4.33333 5.41667H21.6667V17.3333H4.33333V5.41667ZM13 20.5833C12.4042 20.5833 11.9167 20.0958 11.9167 19.5C11.9167 18.9042 12.4042 18.4167 13 18.4167C13.5958 18.4167 14.0833 18.9042 14.0833 19.5C14.0833 20.0958 13.5958 20.5833 13 20.5833Z"
                    fill="#1B99D4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_570">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span className="roboto_font font-normal text-[16px] leading-[23px] text-[#646464]">
              Live project experience
            </span>
          </div>
        </div>
      </div>

      <div className="w-3/4 border border-[#D9D9D9] rounded-[10px] px-[40px] py-[54px]">
     <p className="roboto_font font-normal text-[16px] leading-[23px] text-[#646464] ">
     We are driven by the idea of program affordability. So, we give you several financial options to manage
     and budget the expenses of your course.
     </p>

     <div className="flex items-center justify-between mt-6">
<div className="flex flex-col gap-[16px]">
<h2 className="roboto_font font-bold text-[27px] leading-[100%] text[#2C2C2C]">Starting at ₹ 120,000 + GST</h2>
<p className="roboto_font font-normal text-[16px] leading-[23px] text-[#2C2C2C] ">EMI starting from: ₹ 5,900/month</p>
</div>

<button className="rounded-[5px] bg-[#1B99D4] carsor-pointer text-white py-[10px] px-[20px] ">
              <span>Apply Now</span>
            </button>

     </div>

          </div>
    </div>
  );
}

export default Course;
