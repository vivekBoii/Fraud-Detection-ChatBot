import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BinPage = () => {
  const [detect, setdetect] = useState(null);
  const [localform, setLocalform] = useState(null);
  const [binId, setbinId] = useState(null);
  const [Page, setPage] = useState(0);
  const navigateTo = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    var storedJsonString = localStorage.getItem("detect");
    var storedJsonString1 = localStorage.getItem("details");
    if (JSON.parse(storedJsonString) === null) {
      setdetect([]);
      setLocalform([]);
    } else {
      setdetect(JSON.parse(storedJsonString));
      setLocalform(JSON.parse(storedJsonString1));
    }

    if (detect) {
      //   console.log(detect[id]);
    }
    if (localform) {
        // console.log(localform[id]);
    }
  }, []);

  const binHandler = async () => {
    const headers = {
      apikey: "tgViAOQE3lV45u3IEFevEjTppI6ANcK9",
    };

    try {
      const response = await axios.get(
        `https://api.apilayer.com/bincheck/${localform[id].bin_no}`,
        {
          headers: headers,
        }
      );
      console.log(response.data);
      setbinId(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* --------------------------------------------sidebar----------------------- */}

      <nav class='fixed top-0 z-50 w-full border-b bg-blue-gray-50 dark:border-gray-700'>
        <div class='px-3 py-3 lg:px-5 lg:pl-3'>
          <div class='flex items-center justify-between'>
            <div class='flex items-center justify-start rtl:justify-end'>
              <button
                data-drawer-target='logo-sidebar'
                data-drawer-toggle='logo-sidebar'
                aria-controls='logo-sidebar'
                type='button'
                class='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              >
                <span class='sr-only'>Open sidebar</span>
                <svg
                  class='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                  ></path>
                </svg>
              </button>
              <a to='' class='flex ms-2 md:me-24'>
                <img
                  src='https://flowbite.com/docs/images/logo.svg'
                  class='h-8 me-3'
                  alt='FlowBite Logo'
                />
                <span class='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                  Fraud Prevention
                </span>
              </a>
            </div>
            <div class='flex items-center'>
              <div class='flex items-center ms-3'>
                <div>
                  <button
                    type='button'
                    class='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                    aria-expanded='false'
                    data-dropdown-toggle='dropdown-user'
                  >
                    <span class='sr-only'>Open user menu</span>
                    <img
                      class='w-8 h-8 rounded-full'
                      src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                      alt='user photo'
                    />
                  </button>
                </div>
                <div
                  class='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
                  id='dropdown-user'
                >
                  <div class='px-4 py-3' role='none'>
                    <p
                      class='text-sm text-gray-900 dark:text-white'
                      role='none'
                    >
                      Neil Sims
                    </p>
                    <p
                      class='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
                      role='none'
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul class='py-1' role='none'>
                    <li>
                      <a
                        to='#'
                        class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        to='#'
                        class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        to='#'
                        class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        to='#'
                        class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id='logo-sidebar'
        class='fixed  top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-blue-gray-50 border-r border-gray-200 sm:translate-x-0 dark:border-gray-700'
        aria-label='Sidebar'
      >
        <div class='h-full px-3 pb-4 overflow-y-auto bg-blue-gray-50'>
          <ul class='space-y-2 font-medium '>
            <li>
              <Link
                to='/bin'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 21'
                >
                  <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                  <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
                </svg>
                <span class='ms-3'>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to='/pro'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 18'
                >
                  <path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>
                  Fraud Detection
                </span>
                <span class='inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <a
                to='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Inbox</span>
                <span class='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                  0
                </span>
              </a>
            </li>
            <li>
              <a
                to='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 20'
                >
                  <path d='M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Help Center</span>
              </a>
            </li>
            <li>
              <a
                to='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 16'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3'
                  />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Sign In</span>
              </a>
            </li>
            <li>
              <a
                to='#'
                class='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z' />
                  <path d='M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.{detect && detect[id].ip_mobile_mnc}9a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z' />
                  <path d='M8.961 16a.93.93 0 0 0 .189-.019l3.4-.{detect && detect[id].ip_mobile_mnc}9a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.{detect && detect[id].ip_mobile_mnc}9 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class='p-4 sm:ml-64 py-20 '>
        <div className='max-w-screen-2xl p-5 mx-auto min-h-[80vh]'>
          <div className='text-3xl'>
            Transitions #{detect && detect[id].fraudlabspro_id}
          </div>
          <div className='text-md text-gray-600'>
            {detect && detect[id].date}
          </div>
          {/* -------------------------------------------- */}

          <ul class='flex flex-wrap text-[15px] font-medium text-center text-gray-600 border-b border-gray-400 dark:border-gray-700 dark:text-gray-400 py-4 mb-5'>
            <li class='me-2'>
              <a
                to='#'
                aria-current='page'
                class={
                  Page === 0
                    ? "inline-block p-4 cursor-pointer	 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
                    : "inline-block p-4 cursor-pointer rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }
                onClick={() => {
                  setPage(0);
                }}
              >
                Response
              </a>
            </li>
            <li class='me-2'>
              <a
                to='#'
                class={
                  Page === 1
                    ? "inline-block p-4 cursor-pointer	 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
                    : "inline-block p-4 cursor-pointer rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }
                onClick={() => {
                  binHandler();
                  setPage(1);
                }}
              >
                Order Details
              </a>
            </li>
            <li class='me-2'>
              <a
                to='#'
                class={
                  Page === 2
                    ? "inline-block p-4 cursor-pointer	 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
                    : "inline-block p-4 cursor-pointer rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }
                onClick={() => {
                  setPage(2);
                }}
              >
                Notes
              </a>
            </li>
          </ul>

          {/* ---------------------------------------------------------------------------------- */}
          <div id='page0' className={Page === 0 ? "block" : "hidden"}>
            <div class='w-full p-4 bg-white border border-gray-300 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex gap-28'>
              <div className='flex-1'>
                <div class='flex items-center justify-between mb-4'>
                  <h5 class='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                    General Information
                  </h5>
                </div>
                <div class='flow-root'>
                  <ul class='dark:divide-gray-700'>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Score
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].fraudlabspro_score}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            IP Location to Billing Location
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          N/A
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            IP Location to Shipping Location
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          N/A
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='flex-1'>
                <div class='flow-root pt-8'>
                  <ul class='dark:divide-gray-700'>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Billing Location to Shipping Location
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          N/A
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Error Code
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'></div>
                        {detect &&
                        detect[id] &&
                        detect[id].fraudlabspro_error_code === null
                          ? "-"
                          : ""}
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Error Message
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].fraudlabspro_message === null
                            ? "-"
                            : ""}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* -------- */}

            <div class='w-full p-4 bg-white border border-gray-300 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex gap-28 my-5'>
              <div className='flex-1'>
                <div class='flex items-center justify-between mb-4'>
                  <h5 class='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                    IP Geolocation
                  </h5>
                </div>
                <div class='flow-root'>
                  <ul class='dark:divide-gray-700'>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            IP Address
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].ip}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Continent
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].ip_continent}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Country
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].ip_country}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Region
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].ip_region}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            City
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].ip_city}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Time Zone
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].ip_timezone}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Elevation
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].ip_elevation}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='flex-1'>
                <div class='flow-root pt-8'>
                  <ul class='dark:divide-gray-700'>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Domain
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].ip_mobile_brand}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Net Speed
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'></div>
                        {detect && detect[id].ip_netspeed}
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            ISP Name
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].ip_isp_name}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Usage Type
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].ip_usage_type}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Mobile MNC
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          <button
                            onClick={() => {
                              navigateTo("/pro");
                            }}
                            type='button'
                            class='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
                          >
                            Upgrade
                          </button>
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Mobile MCC
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          <button
                            onClick={() => {
                              navigateTo("/pro");
                            }}
                            type='button'
                            class='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
                          >
                            Upgrade
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ----------- */}

            <div class='w-full p-4 bg-white border border-gray-300 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex gap-28 my-5'>
              <div className='flex-1'>
                <div class='flex items-center justify-between mb-4'>
                  <h5 class='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                    Validation Information
                  </h5>
                </div>
                <div class='flow-root'>
                  <ul class='dark:divide-gray-700'>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Free Mail
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].is_free_email}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Disposable Mail
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          <button
                            onClick={() => {
                              navigateTo("/pro");
                            }}
                            type='button'
                            class='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
                          >
                            Upgrade
                          </button>
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Proxy IP Address
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].is_proxy_ip_address}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Domain Exists
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].is_domain_exists}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='flex-1'>
                <div class='flow-root pt-8'>
                  <ul class='dark:divide-gray-700'>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            New Domain Name
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {detect && detect[id].is_new_domain_name}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Disposable Phone Number
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'></div>
                        <button
                          onClick={() => {
                            navigateTo("/pro");
                          }}
                          type='button'
                          class='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
                        >
                          Upgrade
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ----------- */}
            <div className='flex gap-10'>
              <div class='w-full p-4 bg-white border border-gray-300 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex gap-28 my-5'>
                <div className='flex-1'>
                  <div class='flex items-center justify-between mb-4'>
                    <h5 class='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                      Credit Card Validation
                    </h5>
                  </div>
                  <div class='flow-root'>
                    <ul class='dark:divide-gray-700'>
                      <li class='py-2'>
                        <div class='flex items-center'>
                          <div class='flex-1 min-w-0 ms-4'>
                            <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                              BIN Found
                            </p>
                          </div>
                          <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                            {detect && detect[id].is_bin_found}
                          </div>
                        </div>
                      </li>
                      <li class='py-2'>
                        <div class='flex items-center '>
                          <div class='flex-1 min-w-0 ms-4'>
                            <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                              BIN Country Matches Billing Country
                            </p>
                          </div>
                          <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                            {detect && detect[id].is_bin_name_match}
                          </div>
                        </div>
                      </li>
                      <li class='py-2'>
                        <div class='flex items-center'>
                          <div class='flex-1 min-w-0 ms-4'>
                            <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                              BIN Country Matches User Phone Country
                            </p>
                          </div>
                          <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                            {detect && detect[id].is_bin_phone_country_match}
                          </div>
                        </div>
                      </li>
                      <li class='py-2'>
                        <div class='flex items-center'>
                          <div class='flex-1 min-w-0 ms-4'>
                            <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                              Prepaid Card
                            </p>
                          </div>
                          <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                            {detect && detect[id].is_bin_prepaid}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class='w-full p-4 bg-white border border-gray-300 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex gap-28 my-5'>
                <div className='flex-1'>
                  <div class='flex items-center justify-between mb-4'>
                    <h5 class='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                      Blaclist Validation
                    </h5>
                  </div>
                  <div class='flow-root'>
                    <ul class='dark:divide-gray-700'>
                      <li class='py-2'>
                        <div class='flex items-center'>
                          <div class='flex-1 min-w-0 ms-4'>
                            <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                              IP Address In Blacklist
                            </p>
                          </div>
                          <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                            {detect && detect[id].is_ip_blacklist}
                          </div>
                        </div>
                      </li>
                      <li class='py-2'>
                        <div class='flex items-center '>
                          <div class='flex-1 min-w-0 ms-4'>
                            <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                              Email In Blacklist
                            </p>
                          </div>
                          <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                            {detect && detect[id].is_email_blacklist}
                          </div>
                        </div>
                      </li>
                      <li class='py-2'>
                        <div class='flex items-center'>
                          <div class='flex-1 min-w-0 ms-4'>
                            <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                              Credit Card In Blacklist
                            </p>
                          </div>
                          <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                            {detect && detect[id].is_credit_card_blacklist}
                          </div>
                        </div>
                      </li>
                      <li class='py-2'>
                        <div class='flex items-center'>
                          <div class='flex-1 min-w-0 ms-4'>
                            <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                              Device In Blacklist
                            </p>
                          </div>
                          <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                            {detect && detect[id].is_device_blacklist}
                          </div>
                        </div>
                      </li>
                      <li class='py-2'>
                        <div class='flex items-center'>
                          <div class='flex-1 min-w-0 ms-4'>
                            <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                              Shipping Address In Blacklist
                            </p>
                          </div>
                          <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                            {detect && detect[id].is_ship_address_blacklist}
                          </div>
                        </div>
                      </li>
                      <li class='py-2'>
                        <div class='flex items-center'>
                          <div class='flex-1 min-w-0 ms-4'>
                            <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                              Phone In Blacklist
                            </p>
                          </div>
                          <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                            {detect && detect[id].is_phone_blacklist}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id='page1' className={Page === 1 ? "block" : "hidden"}>
            <div class='w-full p-4 bg-white border border-gray-300 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex gap-28'>
              <div className='flex-1'>
                <div class='flex items-center justify-between mb-4'>
                  <h5 class='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                    Order Details
                  </h5>
                </div>
                <div class='flow-root'>
                  <ul class='dark:divide-gray-700'>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Name
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform
                            ? `${localform[id].first_name} ${localform[id].last_name}`
                            : ""}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Email Address
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform && localform[id].email}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Phone Number
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform && localform[id].user_phone}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='flex-1'>
                <div class='flow-root pt-8'>
                  <ul class='dark:divide-gray-700'>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Quantity
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform && localform[id].quantity}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Currency
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'></div>
                        {localform && localform[id].currency}
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Total Amount
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform && localform[id].amount}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='w-full p-4 bg-white border border-gray-300 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex gap-28 my-5'>
              <div className='flex-1'>
                <div class='flex items-center justify-between mb-4'>
                  <h5 class='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                    Billing Details
                  </h5>
                </div>
                <div class='flow-root'>
                  <ul class='dark:divide-gray-700'>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Address
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform && localform[id].ship_addr}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Postcode
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform && localform[id].bill_zip_code}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Country
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform && localform[id].bill_country}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            City
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform && localform[id].ship_city}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Payment Mode
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform && localform[id].payment_mode}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            AVS
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'></div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            CVV
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='flex-1'>
                <div class='flow-root pt-8'>
                  <ul class='dark:divide-gray-700'>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            BIN Number
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {localform && localform[id].bin_no}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center'>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Card Issuing Bank
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'></div>
                        {binId && binId.bank_name}
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Card Issuing Country
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {binId && binId.country}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Card Type
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {binId && binId.type}
                        </div>
                      </div>
                    </li>
                    <li class='py-2'>
                      <div class='flex items-center '>
                        <div class='flex-1 min-w-0 ms-4'>
                          <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                            Card Brand
                          </p>
                        </div>
                        <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                          {binId && binId.scheme}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id='page2' className={Page === 2 ? "block" : "hidden"}>
            <div className='py-5'>
              <button
                type='button'
                className='flex gap-2 items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
              >
                <div>+</div>
                Add Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BinPage;
