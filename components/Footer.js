import Image from "next/image"
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";


export function Footer () {
    const year = new Date().getFullYear();
    return(
        
        <footer className="bg-[#003B65] h-230 md:h-170 md:w-93 lg:w-auto lg:h-auto">
            <div className="flex items-center ml-20 pt-10">
                <Image
                src="/sc1.png"
                alt="pic"
                width={100}
                height={80}
                className="h-13 w-13"
                />

                 <div className="group relative bottom-2 ml-2">
                        <div className='flex'>
                        <button className="w-40 h-9 bg-white font-[460] text-[#003B65] text-[15px] "><span className="relative right-8">English</span></button>
                        </div>
                        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded">
                          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Savings</li>
                          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Current</li>
                          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Student</li>
                        </ul>
                       </div>

                       <div className="flex ml-140 gap-7">
                       <div className="w-11 h-11 rounded-full bg-[#002F51]">
                        <BiLogoFacebookCircle className="text-xl text-white relative top-3 left-3" />
                       </div>

                       <div className="w-11 h-11 rounded-full bg-[#002F51]">
                        <BsTwitterX className=" text-white relative top-4 left-3.5" />
                       </div>

                       <div className="w-11 h-11 rounded-full bg-[#002F51]">
                        <FaInstagram className="text-xl text-white relative top-3 left-3" />
                       </div>

                       <div className="w-11 h-11 rounded-full bg-[#002F51]">
                        <FaYoutube className="text-xl text-white relative top-3 left-3" />
                       </div>

                       <div className="w-11 h-11 rounded-full bg-[#002F51]">
                        <BsLinkedin className="top-4 left-3.5 relative text-white" />
                       </div>
                       </div>
                       </div>

                       <div className="border-b pt-8 w-275 ml-20  border-[#f0bd2d]"></div>

                       <div className="grid grid-cols-4 mt-10 px-20">
                        <div>
                            <p className="text-white text-[12px] font-medium mb-5 tracking-wider">BANKING</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4 ">Corporate Information</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Personal Banking</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Business Banking</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Priate Banking</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Loan Calculator</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Vendor Portal </p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Download Forms</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">USSD</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Update BVN/NIN</p>
                            
                        </div>
                        <div>
                            <p className="text-white text-[12px] font-medium mb-5 tracking-wider">SECURITY</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">BVN </p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Anti-Fraud</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Security Tips</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Secure Code</p>
                        </div>
                        <div>
                            <p className="text-white text-[12px] font-medium mb-5 tracking-wider">CONTACT US</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Feedback Complaints</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Whistleblowing</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Find a Branch</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Contact Form</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Find an Agent</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Agent Network </p>
                        </div>
                        <div>
                            <p className="text-white text-[12px] font-medium mb-5 tracking-wider">LEGAL</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Sitemap</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Terms of Use</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Privacy Policy</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Cookies Policy</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Communications Policy</p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Information and Cybersecurity Policy </p>
                            <p className="text-[#ABBECC] text-[15px] mb-4">Delete</p>
                        </div>
                       </div>

                       <div className="border-b pt-8 w-275 ml-20  border-[#f0bd2d]"></div>

                       <div>
                        <p className="text-[#ABBECC] text-[12px] tracking-wider ml-20 mt-10">© {year}.First Bank of Nigeria Ltd. A FirstHoldCo Company.Licensed by the Cental Bank of Nigeria</p>
                       </div>
        </footer>

    )
}