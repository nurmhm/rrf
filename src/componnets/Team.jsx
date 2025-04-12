import team1 from "../assets/team/team1.png";
import team2 from "../assets/team/team2.png";
import team3 from "../assets/team/team3.png";

import morgan from "../assets/team/morgan.png";
import walmart from "../assets/team/walmart.png";
import mic from "../assets/team/mic.png";
import morgan2 from "../assets/team/jpMorgan.png";
import walmart2 from "../assets/team/Walmart2.png";


function Team() {
  return (
    <div>
      <div className="container mx-auto px-14">
        <div>
          <h2 className="text-center text-[#1B99D4] font-poppins font-semibold text-[16px] leading-[26px] tracking-[1.6px]">
            Our Alumni Placed
          </h2>
          <h2 className="text-center mt-3.5 text-[#000] font-roboto font-semibold text-[36px] leading-normal">
            Explore Our Alumni & Connect With Them
          </h2>
        </div>

        <div className="flex items-center justify-center mt-12 gap-12">
          <div className="w-1/3 h-[377.08px] flex flex-col p-5 rounded-[12px] bg-white shadow-[1px_5px_50px_0px_rgba(84,99,122,0.10)]">
            <div className="w-[72px] h-[72px] flex-shrink-0">
              <img
                className="w-[100%] h-[100%] object-cover rounded-[36px]"
                src={team1}
                alt=""
              />
            </div>
            <h3 className="font-semibold text-[20px] leading-[32px] tracking-[0.1px] text-[#000]">
              Shaumaya Qha
            </h3>
            <h4 className="text-[16px] leading-[32px] tracking-[0.1px]">
              Software Engineer
            </h4>
            <p className="text-[#4D607D] text-[16px] leading-[24px] tracking-[0.1px]">
              Apart from regular live classes, I was assigned with a Mentor
              someone from Microsoft and he guided me very well through out the
              course.
            </p>

            <div className="flex items-center mt-[33px]">
              <img src={morgan} className="w-[123px] h-[26px]" alt="" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 12L19 12"
                  stroke="#7C8DA5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#7C8DA5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <img className="w-[115px] h-[26px]" src={walmart} alt="" />
            </div>
            <a href="#" className="flex items-center gap-[10px] mt-[16px]">
              <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_174)">
                  <path d="M20.4491 23.1845H16.8931V17.6154C16.8931 16.2875 16.8694 14.5779 15.0436 14.5779C13.1915 14.5779 12.908 16.0249 12.908 17.5188V23.1841H9.35213V11.7319H12.7658V13.297H12.8136C13.1552 12.7129 13.6489 12.2323 14.2421 11.9065C14.8352 11.5808 15.5057 11.422 16.1819 11.447C19.7861 11.447 20.4506 13.8178 20.4506 16.902L20.4491 23.1845ZM5.33963 10.1666C4.1999 10.1668 3.27581 9.24298 3.27563 8.10326C3.27544 6.96355 4.19916 6.03945 5.33887 6.03926C6.4786 6.03898 7.40269 6.96279 7.40287 8.10251C7.40298 8.64982 7.18566 9.17476 6.79872 9.56186C6.41179 9.94894 5.88694 10.1665 5.33963 10.1666ZM7.11769 23.1846H3.5579V11.7319H7.1176L7.11769 23.1846ZM22.222 2.73673H1.77103C0.804469 2.72586 0.0118125 3.50014 0 4.46671V25.0029C0.0114375 25.9699 0.804 26.745 1.77094 26.7349H22.222C23.191 26.7469 23.9866 25.9718 24 25.0029V4.46511C23.9862 3.49667 23.1905 2.72248 22.222 2.73514" fill="#0A66C2"/>
                </g>
                <defs>
                  <clipPath id="clip0_1_174">
                    <rect width="24" height="24" fill="white" transform="translate(0 2.73499)"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#006DD9] font-poppins font-normal text-[16px] leading-[28.7px] tracking-[0.5px]">Read full review</span>
            </a>
          </div>

          <div  className="w-1/3 h-[377.08px] flex flex-col p-5 rounded-[12px] bg-white shadow-[1px_5px_50px_0px_rgba(84,99,122,0.10)]">
            <div className="w-[72px] h-[72px] flex-shrink-0">
              <img
                className="w-[100%] h-[100%] object-cover rounded-[36px]"
                src={team2}
                alt=""
              />
            </div>
            <h3 className="font-semibold text-[20px] leading-[32px] tracking-[0.1px] text-[#000]">
              Shaumaya Qha
            </h3>
            <h4 className="text-[16px] leading-[32px] tracking-[0.1px]">
              Software Engineer
            </h4>
            <p className="text-[#4D607D] text-[16px] leading-[24px] tracking-[0.1px]">
              Apart from regular live classes, I was assigned with a Mentor
              someone from Microsoft and he guided me very well through out the
              course.
            </p>

            <div className="flex items-center mt-[33px]">
              <img src={morgan} className="w-[123px] h-[26px]" alt="" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 12L19 12"
                  stroke="#7C8DA5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#7C8DA5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <img className="w-[115px] h-[26px]" src={mic} alt="" />
            </div>
            <a href="#" className="flex items-center gap-[10px] mt-[16px]">
              <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_174)">
                  <path d="M20.4491 23.1845H16.8931V17.6154C16.8931 16.2875 16.8694 14.5779 15.0436 14.5779C13.1915 14.5779 12.908 16.0249 12.908 17.5188V23.1841H9.35213V11.7319H12.7658V13.297H12.8136C13.1552 12.7129 13.6489 12.2323 14.2421 11.9065C14.8352 11.5808 15.5057 11.422 16.1819 11.447C19.7861 11.447 20.4506 13.8178 20.4506 16.902L20.4491 23.1845ZM5.33963 10.1666C4.1999 10.1668 3.27581 9.24298 3.27563 8.10326C3.27544 6.96355 4.19916 6.03945 5.33887 6.03926C6.4786 6.03898 7.40269 6.96279 7.40287 8.10251C7.40298 8.64982 7.18566 9.17476 6.79872 9.56186C6.41179 9.94894 5.88694 10.1665 5.33963 10.1666ZM7.11769 23.1846H3.5579V11.7319H7.1176L7.11769 23.1846ZM22.222 2.73673H1.77103C0.804469 2.72586 0.0118125 3.50014 0 4.46671V25.0029C0.0114375 25.9699 0.804 26.745 1.77094 26.7349H22.222C23.191 26.7469 23.9866 25.9718 24 25.0029V4.46511C23.9862 3.49667 23.1905 2.72248 22.222 2.73514" fill="#0A66C2"/>
                </g>
                <defs>
                  <clipPath id="clip0_1_174">
                    <rect width="24" height="24" fill="white" transform="translate(0 2.73499)"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#006DD9] font-poppins font-normal text-[16px] leading-[28.7px] tracking-[0.5px]">Read full review</span>
            </a>
          </div>

          <div  className="w-1/3 h-[377.08px] flex flex-col p-5 rounded-[12px] bg-white shadow-[1px_5px_50px_0px_rgba(84,99,122,0.10)]">
            <div className="w-[72px] h-[72px] flex-shrink-0">
              <img
                className="w-[100%] h-[100%] object-cover rounded-[36px]"
                src={team3}
                alt=""
              />
            </div>
            <h3 className="font-semibold text-[20px] leading-[32px] tracking-[0.1px] text-[#000]">
              Shaumaya Qha
            </h3>
            <h4 className="text-[16px] leading-[32px] tracking-[0.1px]">
              Software Engineer
            </h4>
            <p className="text-[#4D607D] text-[16px] leading-[24px] tracking-[0.1px]">
              Apart from regular live classes, I was assigned with a Mentor
              someone from Microsoft and he guided me very well through out the
              course.
            </p>

            <div className="flex items-center mt-[33px]">
              <img src={morgan2} className="w-[145px] h-[20px]" alt="" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 12L19 12"
                  stroke="#7C8DA5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#7C8DA5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <img className="w-[132px] h-[18px]" src={walmart2} alt="" />
            </div>
            <a href="#" className="flex items-center gap-[10px] mt-[16px]">
              <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_174)">
                  <path d="M20.4491 23.1845H16.8931V17.6154C16.8931 16.2875 16.8694 14.5779 15.0436 14.5779C13.1915 14.5779 12.908 16.0249 12.908 17.5188V23.1841H9.35213V11.7319H12.7658V13.297H12.8136C13.1552 12.7129 13.6489 12.2323 14.2421 11.9065C14.8352 11.5808 15.5057 11.422 16.1819 11.447C19.7861 11.447 20.4506 13.8178 20.4506 16.902L20.4491 23.1845ZM5.33963 10.1666C4.1999 10.1668 3.27581 9.24298 3.27563 8.10326C3.27544 6.96355 4.19916 6.03945 5.33887 6.03926C6.4786 6.03898 7.40269 6.96279 7.40287 8.10251C7.40298 8.64982 7.18566 9.17476 6.79872 9.56186C6.41179 9.94894 5.88694 10.1665 5.33963 10.1666ZM7.11769 23.1846H3.5579V11.7319H7.1176L7.11769 23.1846ZM22.222 2.73673H1.77103C0.804469 2.72586 0.0118125 3.50014 0 4.46671V25.0029C0.0114375 25.9699 0.804 26.745 1.77094 26.7349H22.222C23.191 26.7469 23.9866 25.9718 24 25.0029V4.46511C23.9862 3.49667 23.1905 2.72248 22.222 2.73514" fill="#0A66C2"/>
                </g>
                <defs>
                  <clipPath id="clip0_1_174">
                    <rect width="24" height="24" fill="white" transform="translate(0 2.73499)"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#006DD9] font-poppins font-normal text-[16px] leading-[28.7px] tracking-[0.5px]">Read full review</span>
            </a>
          </div>

        
        </div>

        <div className="flex items-center justify-center mt-[86px]">
            <a href="#" className="py-[18px] px-[24px] flex items-center gap-[10px] rounded-[4px] bg-[#1B99D4]">
                <span className="text-white font-poppins font-semibold text-[18px] leading-[24px]">Connect Now</span>

<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.74617 5.08008L5.44584 1.05469L6.57256 0L12.8071 5.83594L6.57256 11.6719L5.44584 10.6172L9.74617 6.5918H0V5.08008H9.74617Z" fill="white"/>
</svg>

            </a>
        </div>
      </div>
    </div>
  );
}

export default Team;
