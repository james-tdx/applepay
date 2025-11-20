import Image from 'next/image';
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { ImUsers } from "react-icons/im";
import { GiWorld } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";





export default function Home() {
  return (

    <main className='bg-gray-100 h-1345 md:h-647 md:w-95 lg:h-auto lg:w-315'>
      <div className="h-8 w-94 flex top-0 fixed items-center justify-center justify-between bg-[#003B65] z-50 md:w-95 md:fixed md:top-0 md:items-center md:bg-[#003B65] md:h-4 md:z-50                                                                                                     lg:w-289 lg:fixed lg:top-0 lg:flex lg:items-center lg:justify-between lg:bg-[#003B65]  lg:h-10 lg:z-50">
        <ul className="flex md:flex   lg:flex  ">
          <li className="px-6 py-3 text-[10px] font-semibold md:font-semibold  md:hover:bg-white md:py-4 md:text-[5px] hover:text-[#003B65] md:w-15 text-gray-400       lg:px-6 lg:py-4 lg:hover:bg-white lg:text-xs hover:text-[#003B65] lg:w-30 text-gray-400">HOME</li>
          <li className="px-4 py-3 text-[10px] font-semibold bg-white         md:font-semibold md:py-4 md:hover:bg-white md:text-[5px]  md:w-15 text-[#003B65]                   lg:px-6 lg:py-4 lg:hover:bg-white lg:text-xs hover:text-[#003B65] lg:w-30 text-gray-400 ">PERSONAL</li>
          <li className="px-6 py-3 text-[10px] font-semibold md:font-semibold  md:hover:bg-white md:py-4 md:text-[5px] hover:text-[#003B65] md:w-13 text-gray-400                               lg:px-6 lg:py-4 lg:hover:bg-white lg:text-xs hover:text-[#003B65] lg:w-30 text-gray-400 ">BUSINESS</li>
          <li className="px-2 py-3  text-[10px] font-semibold md:font-semibold  md:hover:bg-white md:py-4 md:text-[5px] hover:text-[#003B65] md:w-13 text-gray-400                   lg:px-6 lg:py-4 lg:hover:bg-white lg:text-xs hover:text-[#003B65] lg:w-30 text-gray-400">PRIVATE</li>
        </ul>
        <ul className="hidden md:hidden   lg:flex lg:space-x-8 ">
          <div className="ml-45 bg-white w-30 ">
          <button className="text-xs font-semibold px-5 py-5 hover:bg-white w-30 tracking-wide text-[#003B65] ">English</button>
        
      </div>
          <li className="text-xs font-semibold px-5 py-5 hover:bg-white hover:text-[#003B65] w-30 tracking-wide text-gray-400 ">SUSTAINBILITY</li>
          <li className="text-xs font-semibold px-5 py-5 hover:bg-white hover:text-[#003B65] w-30 tracking-wide text-gray-400  ">CONTACT</li> 
          <div className="flex">
            <Image className='pt-5 pl-5 ml-11 py-5 bg-white'
            src="/flag.webp"
            alt="flag.webp"
            width={40}
            height={10}/>
           <p className="text-xs font-semibold px-2 py-5 bg-white hover:text-[#003B65] w-30 tracking-wide text-gray-400 ">NIGERIA</p>
          </div>
        </ul>
      </div>

      <div className='flex fixed top-8 bg-white h-13 w-400 z-50          md:flex md:fixed md:top-4 md:bg-white md:h-9 md:w-95 md:z-50                              lg:flex lg:fixed lg:top-10 lg:bg-white lg:h-20 lg:w-400 lg:z-50'>
          <div className='pt-6 pl-3 md:pt-4 md:pl-2 lg:hidden'>
          <CgMenuLeft className='text-xl text-[#003B65]    md:text-[12px] text-[#003B65]  lg:hidden' />
          </div>
          <Image className="ml-2 py-4 w-[118px] h-[62px]  md:w-[80px] md:h-[53px]    lg:px-2 lg:py-4 lg:w-[160px] lg:h-[75px] "
          src="/mai.png"
          alt="mai.png"
          width={190}
          height={79}
          />
          <div className='hidden md:hidden lg:flex'>
       <div className="group pt-5">
        <div className='flex'>
        <button className="py-2 font-medium text-[#003B65]  tracking-wider text-[17px]">Accounts</button>
        <MdKeyboardArrowDown className='pt-2 pr-4 text-4xl text-[#003B65]' />
        </div>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded w-70">
          <li className="px-6 py-2 hover:bg-gray-100 text-[#003B65]">Savings</li>
          <li className="px-6 py-2 hover:bg-gray-100 text-[#003B65]">Current</li>
          <li className="px-6 py-2 hover:bg-gray-100 text-[#003B65]">Student</li>
        </ul>
       </div>
       <div className="group pt-5">
        <div className='flex'>
        <button className=" py-2 font-medium text-[#003B65] tracking-wider text-[17px] ">Cards</button>
        <MdKeyboardArrowDown className='pt-2 pr-4 text-4xl text-[#003B65]' />
        </div>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded">
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Savings</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Current</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Student</li>
        </ul>
       </div>
       <div className="group pt-5">
        <div className='flex'>
        <button className=" py-2 font-medium text-[#003B65] tracking-wider text-[17px] ">Loans</button>
        <MdKeyboardArrowDown className='pt-2 pr-4 text-4xl text-[#003B65]' />
        </div>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-1">
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Savings</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Current</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Student</li>
        </ul>
       </div> 

       <div className="group relative pt-5">
        <div className='flex'>
        <button className="py-2 font-medium text-[#003B65]  tracking-wider text-[17px] whitespace-nowrap">Ways to Bank</button>
        <MdKeyboardArrowDown className='pt-2 pr-4 text-4xl text-[#003B65]' />
        </div>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded">
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Savings</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Current</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Student</li>
        </ul>
       </div>

       <div className="group pt-5">
        <div className='flex'>
        <button className=" py-2 font-medium text-[#003B65]  tracking-wider text-[17px] ">Transfer</button>
        <MdKeyboardArrowDown className='pt-2 pr-4 text-4xl text-[#003B65]' />
        </div>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded">
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Savings</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Current</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Student</li>
        </ul>
       </div>

       <div className="group pt-5">
        <div className='flex'>
        <button className=" py-2 font-medium text-[#003B65]  tracking-wider text-[17px] whitespace-nowrap">E-Solution</button>
        <MdKeyboardArrowDown className='pt-2 pr-4 text-4xl text-[#003B65]' />
        </div>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded">
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Savings</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Current</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Student</li>
        </ul>
       </div>

       <div className="group pt-5">
        <div className='flex'>
        <button className=" py-2 font-medium text-[#003B65] tracking-wider text-[17px] ">Payments</button>
        <MdKeyboardArrowDown className='pt-2 pr-4 text-4xl text-[#003B65]' />
        </div>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded">
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Savings</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Current</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Student</li>
        </ul>
       </div>

       <div className="group pt-5">
        <div className='flex'>
        <button className=" py-2 font-medium text-[#003B65]  tracking-wider text-[17px] ">Blog</button>
        <MdKeyboardArrowDown className='pt-2 pr-4 text-4xl text-[#003B65]'/>
        </div>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded">
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Savings</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Current</li>
          <li className="px-4 py-2 hover:bg-gray-100 text-[#003B65]">Student</li>
        </ul>
       </div>
       <div className='flex pt-7 ml-10'>
       <IoSearchOutline className='mr-3 text-2xl text-[#003B65]' />
       </div>
       </div>
       <div className=' lg:mt-4'>
       <button className='bg-[#F0BD2D] w-[80px] h-[51px] text-[#003B65] hover:bg-[#003B65] hover:text-amber-400 ml-34    md:bg-[#F0BD2D] md:w-[56px] md:h-[35px] md:text-[#003B65] md:hover:bg-[#003B65] md:hover:text-amber-400 md:ml-54                            lg:bg-[#fcb900] lg:w-[155px] lg:h-[45px] lg:text-[#003B65] lg:hover:bg-[#003B65] lg:hover:text-amber-400 lg:ml-0'><span className='hidden md:hidden lg:block'>Online Banking</span>
       <span className='block text-[#003B65] text-xs md:block lg:hidden'>Login</span>
       
       </button>
       </div>
       
     </div> 
     


     <div className=' pt-26 pb-2 pl-10    md:pt-16 md:h-22 md:items-center md:flex md:relative right-6            lg:pl-17 lg:pt-32 lg:pb- lg:h-45'>
      <button className='bg-[#F0BD2D] py-2 w-75 rounded whitespace-nowrap text-[#003B65]  md:bg-[#F0BD2D]  md:py-1  md:w-88  md:whitespace-nowrap md:text-[#003B65]                                                 lg:bg-[#F0BD2D] lg:py-2 lg:px-93 lg:pl-0 lg:w-280  lg:whitespace-nowrap lg:text-[#003B65] '> <span className='hidden md:hidden lg:inline  py-2 px-7 bg-[#003B65] text-white mr-5'>Press Release</span><span className='text-[13px]  md:hidden lg:inline lg:text-[15px]'>FirstBank interagates PAPPS into LIT App for sea<span className='md:hidden'>...</span></span><span className='hidden md:hidden lg:inline'>mless Cross-Border Payments Across Africa</span>
      <span className='hidden md:block lg:hidden text-[10px]'>5 must have apps For Life and Hustle</span>
                      </button>
     </div>


     <div className='bg-[url(/mk.png)] h-[50vh] bg-contain bg-no-repeat        md:bg-[url(/mk.png)] md:h-[30vh] md:w-95 md:bg-center md:bg-cover     lg:bg-[url(/image4.png)] lg:h-[100vh] lg:w-[212vh] lg:bg-cover lg:bg-center'>
     <div className='py-58 flex  md:py-64 md:flex lg:py-58 lg:flex'>
     <div className='absolute z-0 bg-[#003B65] flex w-93 h-70 flex-col                                    md: md:relative bottom-20 md:bg-neutral-900/30 md:backdrop-blur-md md:w-50 md:h-45                                                lg:absolute lg:top-100 lg:z-0 lg:bg-neutral-900/30 lg:backdrop-blur-md lg:flex lg:w-120 lg:h-90 lg:flex-col'>
      <h1 className='mt-14 md:mt-5 lg:text-white lg:text-xl lg:mt-14 lg:px-15'><span className='hidden md:hidden lg:inline'>Over the years, we've done more than crunch numbers, we've helped fund millions of dreams,boosted businesses,and unlocked brighter futures.</span></h1>
      <span className='pl-5 text-center text-gray-200 inline md:hidden'>Over the years, we've done more than </span>
      <span className='pl-10 inline text-gray-200 md:hidden'>crunch numbers, we've helped fund millions</span>
      <span className='pl-15 inline text-gray-200 md:hidden'>of dreams,boosted businesses,and</span>
      <span className='pl-23 inline text-gray-200 md:hidden'>unlocked brighter futures.</span>
      <span className='hidden md:inline text-white text-[20px] font-medium pl-5  lg:hidden'>Loans that get<br></br> you moving</span>
      <span className='hidden md:inline text-[10px] text-white pl-5 mt-3 lg:hidden'>Get your drem cars with easy loan</span>
      <button className='bg-amber-400 w-[140px] h-[45px] text-[#003B65] hover:bg-[#003B65] hover:text-amber-400 mt-9 ml-28                                      md:bg-amber-400 md:w-[70px] md:h-[30px] md:text-[#003B65] md:hover:bg-[#003B65] md:hover:text-amber-400 md:mt-5 md:relative right-18 md:text-[10px]                                                          lg:bg-amber-400 lg:w-[150px] lg:h-[50px] lg:text-[#003B65] lg:hover:bg-[#003B65] lg:hover:text-amber-400 lg:mt-9 lg:ml-33 lg:tracking-wider lg:text-base '>Learn more</button>
      </div>
      <div className='hidden md:hidden lg:pl-247 lg:pt-29 lg:inline'>
      <div className=' bg-white w-67 h-62 '>
        <h1 className='text-center pt-4 text-[#003B65] tracking-wider'>Internet Banking Login</h1>

        <button className='ml-10 mt-4 w-47 h-16 bg-[#F0BD2D] text-[#003B65] hover:bg-[#003B65] hover:text-amber-400 tracking-wider'>Personal (Individual/Corporate)</button>

        <button className='h-10 w-47 bg-[#003B65] hover:text-[#F0BD2D] text-white ml-10 mt-5 tracking-wider'>FirstDirect2.0</button>
      </div>
      </div>
     </div>
     </div>

     <div className='bg-white h-85 md:bg-white md:h-37 md:w-95 lg:hidden'>
      
      <p className='pt-35 pl-26 text-[13px] tracking-wider text-[#003B65]      md:pt-5 md:text-[13px] md:tracking-wider md:text-[#003B65]'>Internet Banking Login</p>
      <button className='ml-7 mt-4 w-80 h-13 bg-[#F0BD2D] text-[#003B65] hover:bg-[#003B65] hover:text-amber-400 tracking-wider block              md:w-90 md:h-8 md:ml-2 md:text-[10px]'>Personal (Individual/Corporate)</button>
      <button className='h-13 w-80 bg-[#003B65] hover:text-[#F0BD2D] text-white ml-7 mt-5 tracking-wider        md:w-90 md:h-8 md:ml-2 md:text-[10px] md:mt-2'>FirstDirect2.0</button>

     </div>


     <div className='bg-[#003B65] h-50 w-95 whitespace-nowrap overflow-x-auto md:bg-[#003B65] md:h-30 md:whitespace-nowrap md:overflow-x-auto   lg:bg-[#003B65] lg:w-315 lg:h-80'>
      <div className='relative pt-10 items-center flex gap-10                            md:relative md:pt-8 md:flex md:gap-4       lg:relative lg:pt-20 lg:px-18 lg:flex lg:gap-15'>
      <div className='bg-[#002F51] w-22 h-22 rounded-full px-9 pt-7          md:bg-[#002F51] md:w-8 md:h-8 md:rounded-full md:px-5 md:pt-9 md:object-cover                   lg:bg-[#002F51] lg:w-27 lg:h-27 lg:rounded-full lg:px-9 lg:pt-9 '>
    <FiEdit className=' text-3xl text-white relative right-2   md:text-xl md:text-white md:relative md:bottom-7    lg:text-4xl lg:text-white lg:relative lg:left-0 lg:bottom-0' />
    <p className='absolute top-35 left-2  text-white whitespace-nowrap text-[13px]            md:absolute md:top-20 md:left-0  md:text-white md:whitespace-nowrap md:text-[7px]          lg:absolute lg:top-53 lg:left-19  lg:text-white lg:whitespace-nowrap lg:text-base  '>Open Account</p>
    </div>
    
    <div className='bg-[#002F51] w-22 h-22 rounded-full px-9 pt-7          md:bg-[#002F51] md:w-8 md:h-8 md:rounded-full md:px-5 md:pt-9                   lg:bg-[#002F51] lg:w-27 lg:h-27 lg:rounded-full lg:px-9 lg:pt-9 '>
      <ImUsers  className='text-3xl text-white relative right-2            md:text-xl md:text-white md:relative md:bottom-7 md:right-2.5   lg:text-4xl lg:text-white lg:relative lg:left-0 lg:bottom-0' />
      <p className='absolute top-35 left-33  text-white whitespace-nowrap text-[13px]            md:absolute md:top-20 md:left-14  md:text-white md:whitespace-nowrap md:text-[7px]          lg:absolute lg:top-53 lg:left-60  lg:text-white lg:whitespace-nowrap lg:text-base '>Agent Banking</p>
    </div>

    <div className='bg-[#002F51] w-22 h-22 rounded-full px-9 pt-7          md:bg-[#002F51] md:w-8 md:h-8 md:rounded-full md:px-5 md:pt-9                   lg:bg-[#002F51] lg:w-27 lg:h-27 lg:rounded-full lg:px-9 lg:pt-9'>
      <GiWorld  className='text-3xl text-white relative right-2   md:text-xl md:text-white md:relative md:bottom-7 md:right-2.5     lg:text-4xl lg:text-white lg:relative lg:left-0 lg:bottom-0' />
      <p className='absolute top-35 left-63  text-white whitespace-nowrap text-[13px]            md:absolute md:top-20 md:left-27  md:text-white md:whitespace-nowrap md:text-[7px]          lg:absolute lg:top-53 lg:left-100  lg:text-white lg:whitespace-nowrap lg:text-base '>Diasporal Banking</p>
    </div>

    <div className='bg-[#002F51] w-22 h-22 rounded-full px-9 pt-7          md:bg-[#002F51] md:w-8 md:h-8 md:rounded-full md:px-5 md:pt-9                   lg:bg-[#002F51] lg:w-27 lg:h-27 lg:rounded-full lg:px-9 lg:pt-9'>
      <BiPhoneCall  className='text-3xl text-white relative right-2   md:text-xl md:text-white md:relative md:bottom-7 md:right-2.5    lg:text-4xl lg:text-white lg:relative lg:left-0 lg:bottom-0' />
      <p className='absolute top-35 left-100  text-white whitespace-nowrap text-[13px]            md:absolute md:top-20 md:left-44  md:text-white md:whitespace-nowrap md:text-[7px]          lg:absolute lg:top-53 lg:left-148  lg:text-white lg:whitespace-nowrap lg:text-base '>Contact Us</p>
    </div>

    <div className='bg-[#002F51] w-22 h-22 rounded-full px-9 pt-7          md:bg-[#002F51] md:w-8 md:h-8 md:rounded-full md:px-5 md:pt-9                   lg:bg-[#002F51] lg:w-27 lg:h-27 lg:rounded-full lg:px-9 lg:pt-9 '>
      <FaMapMarkerAlt  className='text-3xl text-white relative right-2   md:text-xl md:text-white md:relative md:bottom-7 md:right-2.5    lg:text-4xl lg:text-white lg:relative lg:left-0 lg:bottom-0' />
      <p className='absolute top-35 left-129  text-white whitespace-nowrap text-[13px]            md:absolute md:top-20 md:left-56  md:text-white md:whitespace-nowrap md:text-[7px]          lg:absolute lg:top-53 lg:left-188  lg:text-white lg:whitespace-nowrap lg:text-base '>Find a Branch</p>
    </div>

    <div className='bg-[#002F51] w-22 h-22 rounded-full px-9 pt-7          md:bg-[#002F51] md:w-8 md:h-8 md:rounded-full md:px-5 md:pt-9                   lg:bg-[#002F51] lg:w-27 lg:h-27 lg:rounded-full lg:px-9 lg:pt-9'>
      <BsCalculator  className='text-3xl text-white relative right-2   md:text-xl md:text-white md:relative md:bottom-7 md:right-2.5    lg:text-4xl lg:text-white lg:relative lg:left-0 lg:bottom-0' />
      <p className='absolute top-35 left-160  text-white whitespace-nowrap text-[13px]            md:absolute md:top-20 md:left-69  md:text-white md:whitespace-nowrap md:text-[7px]          lg:absolute lg:top-53 lg:left-230  lg:text-white lg:whitespace-nowrap lg:text-base '>Loan caculator</p>
    </div>

    <div className='bg-[#002F51] w-22 h-22 rounded-full px-9 pt-7          md:bg-[#002F51] md:w-8 md:h-8 md:rounded-full md:px-5 md:pt-9                   lg:bg-[#002F51] lg:w-27 lg:h-27 lg:rounded-full lg:px-9 lg:pt-9 '>
      <GiWorld  className='text-3xl text-white relative right-2   md:text-xl md:text-white md:relative md:bottom-7 md:right-2.5    lg:text-4xl lg:text-white lg:relative lg:left-0 lg:bottom-0' />
      <p className='absolute top-35 left-194  text-white whitespace-nowrap text-[13px]            md:absolute md:top-20 md:left-84  md:text-white md:whitespace-nowrap md:text-[7px]          lg:absolute lg:top-53 lg:left-273  lg:text-white lg:whitespace-nowrap lg:text-base '>Sustainbility</p>
    </div>
    </div>
     </div>

     <div className='bg-white md:w-95 lg:w-320'>
      <p className='text-xl border-l-5 h-13 w-92 border-r-5  border-[#fcb900] text-center pt-3  text-[#003B65] font-medium     md:text-[14px] md:text-center md:pt-1 md:text-[#003B65] md:font-medium md:border-l-3 md:h-8 md:w-92 md:border-r-3         lg:text-3xl lg:text-center lg:mt-0 lg:text-[#003B65] lg:font-medium lg:border-l-5 lg:h-15 lg:border-r-5  lg:border-[#fcb900] lg:pt-3 lg:w-314 '>Over 130 Years of <span className='text-[#fcb900]'>Putting You First</span></p>
     </div>



     <div className='bg-gray-100 md:w-93 h-1040 lg:w-auto '>
      <marquee className="overflow-hidden whitespace-nowrap mt-7 mb-14">
        <p className='text-2xl text-[#003B65] font-bold tracking-normal      md:text-[17px] md:text-[#003B65] md:font-bold             lg:text-4xl lg:text-[#003B65] lg:font-medium lg:tracking-normal'>Click Here To Link Your NIN or BVN. <span className='px-20 md:px-10 lg:px-20'>Dail *894* To Block Your Number</span></p>
      </marquee>

      <div className='px-6 md:px-3 lg:px-22'>
        <h1 className='text-2xl font-bold md:text-[16px] md:font-[645] lg:text-[44px] md:tracking-wider lg:tracking-normal text-[#003B65] lg:font-medium'>Recommended for you</h1>
        <p className='mt-3 tracking-wider text-gray-400 text-[13px] mb-7 md:text-gray-400 md:mt-2 md:text-[10px] md:10 md:tracking-tight lg:text-gray-400 lg::mt-5 lg:mb-10 lg:tracking-normal lg:text-base'>Check out our latest products and services</p>
      </div>
      <div className='w-85 ml-5 md:w-93 md:ml-0 lg:w-300 '>
      <div className='px-5 gap-70 overflow-x-auto    md:px-3 md:gap-5 md:overflow-hidden   lg:px-20 grid grid-cols-3 lg:gap-25 lg:'>
        <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65   md:w-27 lg:w-85'>
          <Image
          src="/family.jpg"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 font-medium pt-6 pl-5'>Open an Account</p>
        </div>

        <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65   md:w-27 lg:w-85'>
          <Image
          src="/work.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 font-medium pt-6 pl-5'>Open an Account</p>
        </div>

        <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65  md:w-27 lg:w-85'>
          <Image
          src="/support.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 font-medium pt-6 pl-5'>Open an Account</p>
        </div>

       </div>
      </div>

      <div className='w-85 ml-5 mt-6 md:w-93  md:ml-0 lg:w-300 lg:mt-10'>
        <div className='px-5 gap-70 overflow-x-auto    md:px-3 md:gap-5 md:overflow-hidden   lg:px-20 grid grid-cols-3 lg:gap-25 lg:overflow-hidden'>
          <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65  md:w-27 lg:w-85'>
          <Image
          src="/coffe.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 lg:px-4 font-medium '>Open an Account</p>
        </div>

        <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65   md:w-27 lg:w-85'>
          <Image
          src="/key.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 font-medium pt-6 pl-5'>Open an Account</p>
        </div>

        <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65  md:w-27 lg:w-85'>
          <Image
          src="/girl.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 font-medium pt-6 pl-5'>Open an Account</p>
        </div>
        
        </div>
      </div>


      <div className='ml-6 mt-18 mb-90 h-94 w-83 bg-white md:mb-17 md:ml-3 md:mt-5 md:h-40 md:w-68    lg:ml-20 lg:mt-18 lg:h-120 lg:w-280 lg:mb-0'>
        <div className=' pt- flex-none  md:ml- md:pt- md:  lg:ml-20 lg:pt-18 lg:flex'>
        <h1 className='text-[#003B65] text-[27px] pl-15 pt-10 lg:text-[38px] md:text-[14px] md:pt-5 md:pl-11 lg:pl-0 lg:pt-0 font-medium '>The Giant in You</h1>
        
        <Image
        src="/man.png"
          alt='picture'
          width={380}
          height={500}
          className='w-120 h-80 object-contain mt-75 relative bottom-13  md:ml-38 md:w-50 md:h-40 md:object-contain md:relative md:bottom-85  lg:ml-49 lg:w-120 lg:h-80 lg:object-cover lg:mt-0 lg:relative lg:bottom-0 lg'
        />
        
        
        </div>
        <p className='hidden   md:hidden   lg:text-gray-500 lg:text-[19px] lg:relative lg:bottom-60 lg:left-20 lg:block '>We beleive that there is a 'GIANT' in every<br></br> employee, every customer, and every<br></br>stakeholder - a giant dream, a giant possibility,  a<br></br> giant idea, a giant life, a giant future waiting to be<br></br> birthed</p>
        <span className='hidden md:block md:relative md:bottom-111 md:left-3 md:text-gray-500 md:text-[7px]  lg:hidden'>We beleive that there is a 'GIANT' in every<br></br> employee, every customer, and every<br></br>stakeholder - a giant dream, a giant<br></br> possibility, a giant idea, a giant life, a giant<br></br> future waiting to be birthed</span>
        <div className='relative bottom-148'>
        <span className='pl-7 text-[15px] text-gray-500  md:hidden lg:hidden'>We beleive that there is a 'GIANT' in every</span>
        <span className='pl-10 tracking-wide text-[15px] text-gray-500 md:hidden lg:hidden'> employee, every customer, and every</span>
        <span className='pl-13  text-[15px] text-gray-500 md:hidden lg:hidden'> stakeholder - a giant dream, a giant</span>
        <span className='pl-10 relative left-3 tracking-wide text-[15px] text-gray-500 md:hidden lg:hidden'> possibility, a giant idea, a giant life, a giant </span>
        <span className='pl-20 text-[15px] text-gray-500 md:hidden lg:hidden'> future waiting to be birthed.</span>
        </div>
        <button className='bg-[#fcb900] w-[290px] h-[45px] text-[#003B65] hover:bg-[#003B65] hover:text-amber-400 relative bottom-140 left-5          md:bg-[#F0BD2D] md:w-[78px] md:h-[22px] md:text-[#003B65] md:text-[10px] md:hover:bg-[#003B65] md:hover:text-amber-400 md:relative md:bottom-110 md:left-8    lg:bg-[#fcb900] lg:w-[155px] lg:h-[45px] lg:text-[#003B65] lg:hover:bg-[#003B65] lg:hover:text-amber-400 lg:relative lg:bottom-50 lg:left-20 lg:text-base'>Learn More</button>
        
      </div>


      <div className='ml-5 mt-18 md:ml-2 md:mt-15 lg:ml-15 lg:mt-18'>
        <h1 className='text-[32px] font-bold  md:text-[17px] lg:text-[44px] text-[#003B65] md:font-medium'>Sustainbility</h1>
        <p className='text-base md:text-[12px] md:mt-1 lg:text-base lg:mt-5 text-gray-500 mb-5'>Making difference beyond banking</p>
        <div className='md:grid grid-cols-2'>
        <div className='w-85 h-115   bg-white md:h-35 md:w-60 lg:w-190 lg:h-110  md:flex '>
          
        <Image
        src="/double.png"
          alt='picture'
          width={380}
          height={500}
          className='h-60 md:h-35 md:w-28 lg:h-110 lg:w-90 object-cover'
        />
        <h1 className='hidden text-[#003B65] md:text-[11px] md:font-medium md:px-10 md:pt-20 md:whitespace-nowrap md:hidden   lg:text-2xl lg:font-medium lg:px-10 lg:pt-20 lg:whitespace-nowrap lg:block'>Thriving in An Economic<br></br> Slowdown: Putting Your<br></br> Business First</h1>
        <span className='hidden md:inline md:text-[10px] md:whitespace-nowrap md:pl-4 md:pt-4 md:font-medium md:text-[#003B65] lg:hidden'>Thriving in An <br></br> Economic Slowdown:<br></br> Putting Your Business<br></br> First</span>
        <span className='text-[#003B65] text-[17px] relative top-4 left-4  font-bold  md:hidden'>Thriving in An Economic Slowdown:<br></br> Putting Your Business First</span>
        <p className='hidden md:relative top-50 right-75 whitespace-nowrap text-gray-500 md:hidden lg:block'>With about 17.4 million enterprises, it is no<br></br> denial that SMEs account forms<br></br> approximately 50% and 90% of both<br></br> industrial jobs and the manufacturing<br></br> sector respectively.</p>
        <span className='hidden md:inline md:text-[6px] md:relative md:top-20 right-25  md:whitespace-nowrap md:text-gray-500  lg:hidden'>With about 17.4 million enterprises,<br></br> it is no denial that SMEs account<br></br> forms approximately 50% and 90%<br></br> of both industrial jobs and the<br></br> manufacturing sector respectively.</span>
        <div className='relative top-8 left-4'>
        <span className='block text-[15px] text-gray-500  md:hidden' >With about 17.4 million enterprises, it is no </span>
        <span className='block text-[15px] text-gray-500   md:hidden'> denial that SMEs account forms</span>
        <span className='block text-[15px] text-gray-500  md:hidden'>approximately 50% and 90% of both</span>
        <span className='block text-[15px] text-gray-500   md:hidden'>industrial jobs and the manufacturing sector</span>
        <span className='block text-[15px] text-gray-500   md:hidden'>respectively.</span>
        </div>
        </div>

        <div className='mt-4 h-80 w-85 md:h-35 md:mt-0 md:ml-16 md:w-30 lg:ml-45 bg-white lg:h-110 lg:w-90 lg:mt-0'>
        <Image
        src="/money.png"
          alt='picture'
          width={380}
          height={500}
          className='object-contain  md:h-23 md:object-cover  lg:h-80 lg:object-cover'
        />
        <h1 className='text-[17px] font-medium px-5 mt-5    md:text-2xl md:font-medium md:px-5 md:mt-5 md:hidden text-[#003B65] lg:text-2xl lg:font-medium lg:px-5 lg:mt-5 lg:block'>Stimulating the Nigerian<br></br> Economy with FirstAdvance</h1>
        <span className='hidden md:block md:font-medium md:pl-4 md:pt-1 md:text-[9px] md:text-[#003B65] lg:hidden'>Stimulating the<br></br> Nigerian Economy<br></br> with FirstAdvance</span>
        </div>
        </div>
      </div>


      <div className='w-85 ml-5 mt-6 md:w-93 md:mt-5  md:ml-0 lg:w-300 lg:mt-10'>
        <div className='px-5 gap-70 overflow-x-auto    md:px-3 md:gap-5 md:overflow-hidden   lg:px-20 grid grid-cols-3 lg:gap-25 lg:overflow-hidden'>
          <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65  md:w-27 lg:w-85'>
          <Image
          src="/pos.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 lg:px-4 font-medium '>Open an Account</p>
        </div>

        <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65   md:w-27 lg:w-85'>
          <Image
          src="/plant.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 font-medium pt-6 pl-5'>Open an Account</p>
        </div>

        <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65  md:w-27 lg:w-85'>
          <Image
          src="/hands.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 font-medium pt-6 pl-5'>Open an Account</p>
        </div>
        
        </div>
      </div>      




      <div className='px-5 mt-10 md:px-3 lg:px-22 lg:mt-25'>
        <h1 className='text-2xl mb-8 font-bold md:text-[16px] md:font-[645] lg:text-[44px] md:tracking-wider lg:tracking-normal text-[#003B65] lg:font-medium lg:mb-10'>Latest Blogs</h1>
        
      </div>
      <div className='w-85 ml-5 md:w-93 md:ml-0 lg:w-300 '>
      <div className=' gap-70     md:px-3 md:gap-5 md:grid grid-cols-2   lg:px-20 lg:grid-cols-3 lg:gap-25 lg:'>
        <div className='h-60 w-85 md:h-38 md:w-43  bg-white lg:h-99 lg:w-85  '>
          <div className='w-85   md:w-44 lg:w-85'>
          <Image
          src="/golf.png"
          alt='picture'
          width={380}
          height={500}
          className='h-40 object-cover md:h-28 md:object-contain lg:h-75 lg:object-fill '
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 font-medium pt-6 pl-5'>Open an Account</p>
        </div>

        <div className='h-60 w-85 mt-10 md:h-38 md:w-44 md:mt-0  bg-white lg:h-99 lg:w-85 lg:mt-0  '>
          <div className='w-85   md:w-44 lg:w-85'>
          <Image
          src="/fones.png"
          alt='picture'
          width={380}
          height={500}
          className='h-40 object-cover md:h-28 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 font-medium pt-6 pl-5'>Open an Account</p>
        </div>

        <div className='h-60 w-85 mt-10 md:h-38 md:w-44 md:mt-0  bg-white lg:h-99 lg:w-85 lg:mt-0  '>
          <div className='w-85  md:w-44 lg:w-85'>
          <Image
          src="/food.png"
          alt='picture'
          width={380}
          height={500}
          className='h-40 object-cover md:h-28 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-2xl lg:pt-8 font-medium pt-6 pl-5'>Open an Account</p>
        </div>
        

       </div>
      </div>

      <div className='mt-5 gap-10 flex lg:gap-10 justify-center md:gap-4 md:text-[8px] md:mb-10 lg:mb-0 lg:text-base md:mt-3 items-center lg:mt-7'>
          <h1 className='text-[#5F707D] font-medium'>previous</h1>
          <p className='text-[#003B65] font-medium'>1</p>
          <p className='text-[#5F707D] font-medium'>2</p>
          <p className='text-[#5F707D] font-medium'>3</p>
          <p className='text-[#5F707D] font-medium'>...</p>
          <p className='text-[#5F707D] font-medium'>5</p>
          <p className='hidden md:inline text-[#5F707D] font-medium'>Next</p>
        </div>
        <span className='text-[#5F707D] mb-10 font-medium flex items-center justify-center md:hidden lg:hidden'>Next</span>





      <div className='px-6 md:px-3 lg:px-22 lg:mt-40'>
        <h1 className='text-2xl font-bold md:text-[14px] md:font-medium lg:text-[44px] md:t lg:tracking-normal text-[#003B65] lg:font-medium'>More From FirstBank</h1>
        <p className='mt-3 tracking-wider text-gray-400 text-[13px] mb-7 md:text-gray-400 md:mt-2 md:text-[8px] md:mb-3 md:tracking-tight lg:text-gray-400 lg::mt-5 lg:mb-10 lg:tracking-normal lg:text-base'>Discover a different side of banking</p>
      </div>
      <div className='w-85 ml-5 md:w-93 md:ml-0 lg:w-300 '>
      <div className='px-5 gap-70 overflow-x-auto    md:px-3 md:gap-5 md:overflow-hidden   lg:px-20 grid grid-cols-3 lg:gap-25 lg:'>
        <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65   md:w-27 lg:w-85'>
          <Image
          src="/fone.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-[23px] lg:pt-8 font-medium pt-6 pl-5'>FirstMobile</p>
        </div>

        <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65   md:w-27 lg:w-85'>
          <Image
          src="/women.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-[23px] lg:pt-8 font-medium pt-6 pl-5'>FirstGem</p>
          
        </div>

        <div className='h-73 w-65 md:h-36 md:w-27  bg-white lg:h-99 lg:w-85  '>
          <div className='w-65  md:w-27 lg:w-85'>
          <Image
          src="/woman.png"
          alt='picture'
          width={380}
          height={500}
          className='h-52 object-cover md:h-25 md:object-cover lg:h-75 lg:object-cover'
          
          />
          </div>
          <p className='text-[#003B65] hover:text-[#fcb900] md:text-[10px] md:pt-4 lg:text-[23px] lg:pt-8 font-medium pt-6 pl-5'>*894# Mobile Banking</p>
        </div>

       </div>
      </div>

    <div className='fixed top-100 left-70 md:fixed md:top-125 md:left-50 lg:top-125 lg:left-255 lg:fixed'>
      <div className='w-80 md:w-70 lg:w-90'>
        <Image
        src="/fixed.png"
        alt="picture"
        width={200}
        height={150}
        className='md:h-7 md:object-contain lg:h-15'
        />
      </div>
      </div>

      
     </div>
    </main>

  );
}
