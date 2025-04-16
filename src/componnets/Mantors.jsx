import mic from "../assets/team/mic.png";

import mantor1 from "../assets/mantors/mantor1.jpeg";
import mantor2 from "../assets/mantors/mantor2.jpeg";
import mantor3 from "../assets/mantors/mantor3.jpeg";

function Mantors() {
  return (
    <div className="px-[193px] mx-auto mt-[94px]">
      <div>
        <h2 className="text-center text-[#1B99D4] font-poppins font-semibold text-[16px] leading-[26px] tracking-[1.6px]">
          DISCOVER OUR MENTORS
        </h2>
        <h2 className="text-center mt-3.5 text-[#000] font-roboto font-semibold text-[36px] leading-[42px]">
          We have Industry Experts as Mentor who guide you with Career Planning
          & Interview Preparation
        </h2>
      </div>

      <div className="flex items-center justify-between gap-[53px] mt-[60px]">
        <div className="w-1/3 h-[414px] rounded-[10px] shadow-[1px_5px_50px_0px_rgba(84,99,122,0.10)]">
          <img src={mantor1} alt="mentor1" />
          <div className="p-4">
            <div className="flex justify-between ">
              <div>
                <h2 className="font-semibold text-[20px] leading-[24px] tracking-[0.1px] text-[#000]">
                  Sachin Sharma
                </h2>
                <p className="text-[14px] leading-[24px] tracking-[0.1px] text-[#00000080]">
                  Managing Director
                </p>
              </div>
              <img className="w-[80px] h-[20px]" src={mic} alt="" />
            </div>
            <a href="#" className="flex items-center gap-[10px] mt-[16px]">
              <svg
                width="24"
                height="30"
                viewBox="0 0 24 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_174)">
                  <path
                    d="M20.4491 23.1845H16.8931V17.6154C16.8931 16.2875 16.8694 14.5779 15.0436 14.5779C13.1915 14.5779 12.908 16.0249 12.908 17.5188V23.1841H9.35213V11.7319H12.7658V13.297H12.8136C13.1552 12.7129 13.6489 12.2323 14.2421 11.9065C14.8352 11.5808 15.5057 11.422 16.1819 11.447C19.7861 11.447 20.4506 13.8178 20.4506 16.902L20.4491 23.1845ZM5.33963 10.1666C4.1999 10.1668 3.27581 9.24298 3.27563 8.10326C3.27544 6.96355 4.19916 6.03945 5.33887 6.03926C6.4786 6.03898 7.40269 6.96279 7.40287 8.10251C7.40298 8.64982 7.18566 9.17476 6.79872 9.56186C6.41179 9.94894 5.88694 10.1665 5.33963 10.1666ZM7.11769 23.1846H3.5579V11.7319H7.1176L7.11769 23.1846ZM22.222 2.73673H1.77103C0.804469 2.72586 0.0118125 3.50014 0 4.46671V25.0029C0.0114375 25.9699 0.804 26.745 1.77094 26.7349H22.222C23.191 26.7469 23.9866 25.9718 24 25.0029V4.46511C23.9862 3.49667 23.1905 2.72248 22.222 2.73514"
                    fill="#0A66C2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_174">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 2.73499)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#006DD9] font-poppins font-normal text-[16px] leading-[28.7px] tracking-[0.5px]">
                View Profile
              </span>
            </a>
          </div>
        </div>

        <div className="w-1/3 h-[414px]  shadow-[1px_5px_50px_0px_rgba(84,99,122,0.10)]">
          <img className="" src={mantor2} alt="mentor1" />
          <div className="p-4">
            <div className="flex justify-between ">
              <div>
                <h2 className="font-semibold text-[20px] leading-[24px] tracking-[0.1px] text-[#000]">
                  Santosh Kumar
                </h2>
                <p className="text-[14px] leading-[24px] tracking-[0.1px] text-[#00000080]">
                  Managing Director
                </p>
              </div>
              <img className="w-[80px] h-[20px]" src={mic} alt="" />
            </div>
            <a href="#" className="flex items-center gap-[10px] mt-[16px]">
              <svg
                width="24"
                height="30"
                viewBox="0 0 24 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_174)">
                  <path
                    d="M20.4491 23.1845H16.8931V17.6154C16.8931 16.2875 16.8694 14.5779 15.0436 14.5779C13.1915 14.5779 12.908 16.0249 12.908 17.5188V23.1841H9.35213V11.7319H12.7658V13.297H12.8136C13.1552 12.7129 13.6489 12.2323 14.2421 11.9065C14.8352 11.5808 15.5057 11.422 16.1819 11.447C19.7861 11.447 20.4506 13.8178 20.4506 16.902L20.4491 23.1845ZM5.33963 10.1666C4.1999 10.1668 3.27581 9.24298 3.27563 8.10326C3.27544 6.96355 4.19916 6.03945 5.33887 6.03926C6.4786 6.03898 7.40269 6.96279 7.40287 8.10251C7.40298 8.64982 7.18566 9.17476 6.79872 9.56186C6.41179 9.94894 5.88694 10.1665 5.33963 10.1666ZM7.11769 23.1846H3.5579V11.7319H7.1176L7.11769 23.1846ZM22.222 2.73673H1.77103C0.804469 2.72586 0.0118125 3.50014 0 4.46671V25.0029C0.0114375 25.9699 0.804 26.745 1.77094 26.7349H22.222C23.191 26.7469 23.9866 25.9718 24 25.0029V4.46511C23.9862 3.49667 23.1905 2.72248 22.222 2.73514"
                    fill="#0A66C2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_174">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 2.73499)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#006DD9] font-poppins font-normal text-[16px] leading-[28.7px] tracking-[0.5px]">
                View Profile
              </span>
            </a>
          </div>
        </div>
        <div className="w-1/3 h-[414px] rounded-[10px] shadow-[1px_5px_50px_0px_rgba(84,99,122,0.10)]">
          <img src={mantor3} alt="mentor1" />
          <div className="p-4">
            <div className="flex justify-between ">
              <div>
                <h2 className="font-semibold text-[20px] leading-[24px] tracking-[0.1px] text-[#000]">
                  Prem Kumar
                </h2>
                <p className="text-[14px] leading-[24px] tracking-[0.1px] text-[#00000080]">
                  Mentorship
                </p>
              </div>
              <img className="w-[80px] h-[20px]" src={mic} alt="" />
            </div>
            <a href="#" className="flex items-center gap-[10px] mt-[16px]">
              <svg
                width="24"
                height="30"
                viewBox="0 0 24 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_174)">
                  <path
                    d="M20.4491 23.1845H16.8931V17.6154C16.8931 16.2875 16.8694 14.5779 15.0436 14.5779C13.1915 14.5779 12.908 16.0249 12.908 17.5188V23.1841H9.35213V11.7319H12.7658V13.297H12.8136C13.1552 12.7129 13.6489 12.2323 14.2421 11.9065C14.8352 11.5808 15.5057 11.422 16.1819 11.447C19.7861 11.447 20.4506 13.8178 20.4506 16.902L20.4491 23.1845ZM5.33963 10.1666C4.1999 10.1668 3.27581 9.24298 3.27563 8.10326C3.27544 6.96355 4.19916 6.03945 5.33887 6.03926C6.4786 6.03898 7.40269 6.96279 7.40287 8.10251C7.40298 8.64982 7.18566 9.17476 6.79872 9.56186C6.41179 9.94894 5.88694 10.1665 5.33963 10.1666ZM7.11769 23.1846H3.5579V11.7319H7.1176L7.11769 23.1846ZM22.222 2.73673H1.77103C0.804469 2.72586 0.0118125 3.50014 0 4.46671V25.0029C0.0114375 25.9699 0.804 26.745 1.77094 26.7349H22.222C23.191 26.7469 23.9866 25.9718 24 25.0029V4.46511C23.9862 3.49667 23.1905 2.72248 22.222 2.73514"
                    fill="#0A66C2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_174">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 2.73499)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#006DD9] font-poppins font-normal text-[16px] leading-[28.7px] tracking-[0.5px]">
                View Profile
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[86px]">
        <a
          href="#"
          className="py-[18px] px-[24px] flex items-center gap-[10px] rounded-[4px] bg-[#1B99D4]"
        >
          <span className="text-white font-poppins font-semibold text-[18px] leading-[24px]">
          More Mentor Details
          </span>
        </a>
      </div>
    </div>
  );
}

export default Mantors;
