'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [list, setList] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [nav, setNav] = useState(false);
  return (
    <div>
      {/*Main Notification alert*/}

      {/*Main Notification alert*/}
      {/* Navigation starts */}
      <div className='w-full mx-auto bg-white shadow px-5 sm:px-10'>
        <div className='container justify-between h-16 flex items-center lg:items-stretch mx-auto px-5 sm:px-10'>
          <div className='h-full flex items-center'>
            <a href='index'>
              <div className='mr-10 flex items-center'>
                <svg
                  width='208px'
                  height='31px'
                  viewBox='0 0 108 31'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <g
                    id='Screens'
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'
                  >
                    <g
                      id='1.-Project-Management---Dashboard'
                      transform='translate(-150.000000, -20.000000)'
                      fill='#4C51BF'
                    >
                      <g id='Group-3'>
                        <g id='Navigation-Bar-White'>
                          <g
                            id='Group-7'
                            transform='translate(150.000000, 20.000000)'
                          >
                            <text
                              id='PMC-Co.'
                              fontFamily='ProximaNova-Bold, Proxima Nova'
                              fontSize={16}
                              fontWeight='bold'
                              letterSpacing='0.4'
                            >
                              <tspan x={45} y={21}>
                                AI MASTER
                              </tspan>
                            </text>
                            <path
                              d='M25.9730801,11.4210526 C27.1135859,11.4210526 28.1119107,11.8648198 28.8606543,12.5877372 C28.8961995,12.6071496 28.8961995,12.6269502 28.932127,12.6463626 L28.932127,12.6463626 L28.932127,12.6618925 C30.5721774,14.3193223 30.5721774,17.0087147 28.932127,18.6665327 C28.8961995,18.6987573 28.8606543,18.7313701 28.8606543,18.7639829 C28.1119107,19.4764176 27.0780406,19.9131964 25.9730801,19.9131964 C25.2243365,19.9131964 24.5466834,19.9803632 23.9049578,20.1150852 C21.4446911,20.6345607 19.9475861,22.1529978 19.4484237,24.6370071 C19.3054783,25.2799454 19.2343878,25.9873329 19.2343878,26.7587812 C19.2343878,27.8843116 18.8066981,28.906568 18.129045,29.6667571 C18.0934998,29.6966522 18.0579545,29.7269355 18.022027,29.7579953 C17.2381204,30.5573975 16.2038682,30.9716579 15.1699981,31 L15.1699981,31 L14.7782359,30.9933998 C14.1005828,30.9464218 13.3873845,30.7173556 12.7812041,30.305813 C12.5316229,30.1497374 12.317587,29.9703669 12.1043155,29.7711958 L12.1043155,29.7711958 L12.1043155,29.7579953 C11.3196444,28.9585932 10.8919547,27.886641 10.8919547,26.7587812 C10.8919547,24.4258003 12.7812041,22.5129035 15.0633624,22.5129035 L15.0633624,22.5129035 L15.2055434,22.5125153 C15.9187417,22.5047503 16.5604673,22.4375834 17.1670299,22.3117911 C19.5909869,21.7934804 21.0884741,20.273102 21.6231818,17.7852103 C21.7301997,17.1849792 21.8016725,16.5280639 21.8016725,15.815241 L21.8016725,15.815241 L21.8016725,15.6677069 C21.8016725,13.3257962 23.6553766,11.4268763 25.9730801,11.4210526 Z M26.369002,0.815445603 C27.5617232,0.815445603 28.610295,1.28158151 29.3690176,2.0358047 C29.3690176,2.04038964 29.3690176,2.0445925 29.4054425,2.04917745 C31.0317749,3.68179937 31.0317749,6.31814181 29.3690176,7.94541462 C29.3325927,7.97674507 29.2969428,8.00845759 29.2969428,8.04093428 C28.5378327,8.74281269 27.489261,9.17226905 26.369002,9.17226905 C25.6098918,9.17226905 24.9228565,9.23875073 24.272246,9.37094993 C21.7779163,9.88178904 20.2600836,11.3760985 19.7543976,13.8210196 C19.6094731,14.4537417 19.5370108,15.149889 19.5370108,15.9094613 L19.54,15.699 L19.5426482,15.7245388 C19.5697757,16.3596279 19.4502659,16.9997901 19.1860544,17.5917841 L19.125,17.718 L19.1879772,17.5855534 C19.3474858,17.2190605 19.4572034,16.8250682 19.506878,16.4126416 L19.514,16.326 L19.4906702,16.5131888 C19.1957015,18.4610204 17.5282771,19.9708919 15.5174373,20.0693858 L15.3082365,20.0745002 C15.2353868,20.0745002 15.163312,20.0752644 15.0912372,20.0764106 L15.0912372,20.0764106 L15.0551998,20.0771748 C14.3681645,20.0894013 13.7535914,20.1543547 13.1754432,20.2716528 C10.7175384,20.7813457 9.19970563,22.2790938 8.65720732,24.7312744 C8.54909516,25.2929299 8.47663289,25.9042557 8.47663289,26.5644876 L8.47663289,26.5644876 L8.47663289,26.8116924 C8.47663289,29.0625176 6.66895103,30.8980232 4.39200815,30.9866655 L4.39200815,30.9866655 L3.88593473,30.9767314 C2.87378789,30.896877 1.93371583,30.4529016 1.24706798,29.7762404 C-0.415689326,28.1447647 -0.415689326,25.4984882 1.24706798,23.8670126 L1.24706798,23.8670126 L1.35556764,23.7374879 C2.11467777,23.0531851 3.1268246,22.6328986 4.21104622,22.6328986 C5.00658123,22.6328986 5.69322908,22.5660349 6.34383955,22.4338357 C8.83778176,21.9218503 10.3563895,20.4294513 10.8620754,17.9887331 C11.0066125,17.3552467 11.0426499,16.6575712 11.0426499,15.8957064 C11.0426499,14.8274146 11.4766485,13.85235 12.127259,13.1126458 C12.1993338,13.0614473 12.271796,13.0075742 12.3082209,12.9514086 C12.3802957,12.8956251 12.4163331,12.8383134 12.4887953,12.7794733 C13.2114806,12.1211518 14.2236274,11.7199693 15.2718117,11.7176768 L15.2718117,11.7176768 L15.3082365,11.7176768 C15.3803113,11.7176768 15.488811,11.7211155 15.5973106,11.7276108 C16.2479211,11.7130918 16.8621067,11.6481385 17.4410299,11.5327507 C19.8989347,11.0226758 21.4171549,9.52683801 21.9588783,7.07809617 C22.0673779,6.4862564 22.1398402,5.83825107 22.1398402,5.13484434 L22.1398402,5.13484434 L22.1398402,4.99347525 C22.1398402,2.68954121 24.0192093,0.820412625 26.369002,0.815445603 Z M23.8291405,23.2210888 C25.4740221,21.6280581 28.1207862,21.6280581 29.7660512,23.2210888 C31.4113163,24.8141195 31.4113163,27.3970596 29.7660512,28.9897173 C28.1207862,30.5823749 25.4740221,30.5823749 23.8291405,28.9897173 C22.2191503,27.3970596 22.2191503,24.8141195 23.8291405,23.2210888 Z M15.0953689,0 C17.4144814,0 19.2703069,1.89612696 19.2703069,4.23600354 L19.2703069,4.24570935 C19.2703069,6.59063295 17.4144814,8.49141871 15.0953689,8.49141871 C10.6346544,8.49141871 8.35073802,10.8118837 8.35073802,15.3371203 C8.35073802,17.6241973 6.56606966,19.4888775 4.35331043,19.5789474 L3.81848377,19.5692416 C2.81922252,19.4877128 1.89111846,19.036975 1.21321228,18.3498036 C0.428187741,17.5488802 9.68746973e-05,16.4711471 9.68746973e-05,15.3371203 C9.68746973e-05,13.0042319 1.85553986,11.0910228 4.17503488,11.0910228 C8.63574936,11.0910228 10.9200483,8.77133426 10.9200483,4.24570935 C10.9200483,1.90427984 12.7758739,0.00543525338 15.0953689,0 Z M1.22569747,1.63590263 C2.85985698,-0.0300813501 5.4887554,-0.0300813501 7.12253408,1.63590263 C8.72127601,3.30227677 8.72127601,6.00413604 7.12253408,7.67051018 C5.4887554,9.33649416 2.85985698,9.33649416 1.22569747,7.67051018 C-0.408462045,6.00413604 -0.408462045,3.30227677 1.22569747,1.63590263 Z'
                              id='logo_f'
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div className='h-full lg:flex items-center justify-end hidden'>
            <div className='w-full h-full flex items-center'>
              <div className='w-full pr-12 h-full flex items-center border-r'>
                <div className='relative w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-gray-500 absolute ml-3 inset-0 m-auto icon icon-tabler icon-tabler-search'
                    width={16}
                    height={16}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                  <input
                    className='border border-gray-100 focus:outline-none placeholder-gray-500 w-56 rounded text-sm text-gray-600 bg-gray-100 pl-8 py-2'
                    type='text'
                    placeholder='Search'
                  />
                </div>
              </div>
              <div className='w-full h-full flex relative'>
                <button
                  className='w-full flex items-center justify-end relative cursor-pointer'
                  onClick={() => setDropdown(!dropdown)}
                >
                  <ul
                    className={`p-2 w-48 border-r bg-white absolute rounded left-0 shadow mt-16 top-0 ${
                      dropdown ? 'block' : 'hidden'
                    }`}
                  >
                    <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
                      <div className='flex items-center'>
                        <Link href={'/remove-background'} className='ml-2'>
                          Remove Background
                        </Link>
                      </div>
                    </li>
                    <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center'>
                      <Link href={'/restore-image'} className='ml-2'>
                        Restore Image
                      </Link>{' '}
                    </li>
                    <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none'>
                      <Link href={'/interior-design'} className='ml-2'>
                        Interior Design
                      </Link>{' '}
                    </li>
                    <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none'>
                      <Link href={'/scribble-design'} className='ml-2'>
                        Scribble Design
                      </Link>{' '}
                    </li>
                  </ul>
                  <img
                    className='rounded h-10 w-10 object-cover'
                    src='https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png'
                    alt='logo'
                  />
                  <p className='text-gray-800 text-sm ml-2'>Select AI</p>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`lg:hidden  cursor-pointer text-gray-700 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out`}
          >
            <ul
              className={`top-0 z-40 p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-16 md:mt-16 ${
                nav ? 'block' : 'hidden'
              } `}
            >
              <Link href='/'>
                <li className='flex lg:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
                  <div className='flex items-center'>
                    <span className='ml-2 font-bold'>Home</span>
                  </div>
                </li>
              </Link>

              <li className='ml-2 cursor-pointer text-gray-600 text-base leading-3 tracking-normal pt-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
                <input
                  className='border-b border-gray-300 w-56 focus:outline-none text-gray-800 pb-1'
                  placeholder='Search'
                />
              </li>
              <li className='ml-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none'>
                <div className='flex items-center'>
                  <div className='w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out'>
                    <img
                      className='rounded h-10 w-10 object-cover'
                      src='https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png'
                      alt='logo'
                    />
                  </div>
                  <p className='leading-6 text-base ml-1 cursor-pointer'>
                    AI MASTER
                  </p>
                  <div className='sm:ml-2 text-white relative'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-chevron-down cursor-pointer'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <polyline points='6 9 12 15 18 9' />
                    </svg>
                  </div>
                </div>
              </li>
              <li className='ml-2 cursor-pointer text-gray-600 text-base leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
                <div className='flex items-center'>
                  <Link href={'/remove-background'} className='ml-2'>
                    Remove Background
                  </Link>{' '}
                </div>
              </li>
              <li className='ml-2 cursor-pointer text-gray-600 text-base leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
                <div className='flex items-center'>
                  <Link href={'/restore-image'} className='ml-2'>
                    Restore Image
                  </Link>{' '}
                </div>
              </li>
              <li className='ml-2 cursor-pointer text-gray-600 text-base leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
                <div className='flex items-center'>
                  <Link href={'/interior-design'} className='ml-2'>
                    Interior Design
                  </Link>{' '}
                </div>
              </li>
              <li className='ml-2 cursor-pointer text-gray-600 text-base leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
                <div className='flex items-center'>
                  <Link href={'/scribble-design'} className='ml-2'>
                    Scribble Design
                  </Link>{' '}
                </div>
              </li>
            </ul>
            <div>
              <div
                className={` ${nav ? 'hidden' : 'block'} lg:hidden`}
                onClick={() => setNav(!nav)}
              >
                <svg
                  aria-haspopup='true'
                  aria-label='Main Menu'
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-menu'
                  width={32}
                  height={32}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#2C3E50'
                  fill='none'
                  strokeLinecap='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <line x1={4} y1={8} x2={20} y2={8} />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              </div>
              <div
                onClick={() => setNav(!nav)}
                className={`${nav ? 'block' : 'hidden'}`}
              >
                <svg
                  aria-label='Close'
                  xmlns='http://www.w3.org/2000/svg'
                  width={32}
                  height={32}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation ends */}
    </div>
  );
};

export default Navbar;
