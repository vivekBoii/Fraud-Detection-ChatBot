import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Bin = () => {
  const [detect, setdetect] = useState([]);
  const [localform, setLocalform] = useState([]);
  const navigateTo = useNavigate();
  useEffect(() => {
    var storedJsonString = localStorage.getItem("detect");
    if (JSON.parse(storedJsonString) === null) {
      setdetect([]);
    } else {
      setdetect(JSON.parse(storedJsonString));
    }
  }, []);

  const [FormData, setFormData] = useState({
    key: "ZVV6AGYDHTT6DZHWVKK2ACNOY9QXJVHR",
    ip: "122.161.48.19",
    format: "json",
    first_name: "",
    last_name: "",
    email: "",
    bill_state: "",
    bill_country: "",
    bill_zip_code: "",
    ship_first_name: "",
    ship_last_name: "",
    card_hash: "",
    ship_addr: "",
    ship_city: "",
    ship_state: "",
    ship_country: "",
    ship_zip_code: "",
    user_phone: "",
    bin_no: "",
    bin_bank_name: "",
    avs_result: "",
    cvv_result: "",
    user_order_id: "",
    amount: "",
    quantity: null,
    currency: "",
    department: "",
    payment_mode: "",
  });
  const [FormToggle, setFormToggle] = useState(false);

  const TABLE_HEAD = ["Id", "Date", "Email", "Ip", "Score", "Status"];

  const handlefraud = async (e) => {
    e.preventDefault();
    console.log(FormData);
    const options = {
      method: "GET",
      url: "https://chrislim-fraudlabs-pro-screen-order.p.rapidapi.com/order/screen",
      params: FormData,
      headers: {
        "X-RapidAPI-Key": "85a7b8ccdcmsh753cb2286c694bbp1a6cd9jsn63c35846414f",
        "X-RapidAPI-Host": "chrislim-fraudlabs-pro-screen-order.p.rapidapi.com",
      },
    };

    try {
      console.log(FormData);
      const response = await axios.request(options);
      response.data.date = new Date().toUTCString();
      setdetect([...detect, response.data]);
      setLocalform([...localform, FormData]);
      localStorage.setItem(
        "detect",
        JSON.stringify([...detect, response.data])
      );
      localStorage.setItem("details", JSON.stringify([...localform, FormData]));
    } catch (error) {
      console.error(error);
    }
    setFormToggle(!FormToggle);
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
                  3
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
                  viewBox='0 0 20 18'
                >
                  <path d='M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Users</span>
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
                  <path d='M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z' />
                  <path d='M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z' />
                </svg>
                <span class='flex-1 ms-3 whitespace-nowrap'>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class='p-4 sm:ml-64 py-20'>
        <div className='max-w-screen-2xl mx-auto min-h-[80vh]'>
          <div className='flex items-center justify-between px-20 py-10'>
            <div className='text-4xl'>Transitions</div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setFormToggle(!FormToggle);
              }}
            >
              Add Transitions
            </Button>
          </div>
          {/* -------------------------------------------- */}
          <table className='w-full min-w-max table-auto text-left border-4'>
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
                  >
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal leading-none opacity-70'
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {detect &&
                detect.map((data, index) => {
                  const isLast = index === detect.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={data.name}>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal cursor-pointer hover:underline'
                          onClick={() => {
                            navigateTo(`${index}`);
                          }}
                        >
                          {data.fraudlabspro_id}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {data.date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {data.email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {data.ip}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {data.fraudlabspro_score}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {data.fraudlabspro_status}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {/* --------------------------form -------------------------------- */}
      <div
        style={{ display: FormToggle ? "block" : "none" }}
        className=' w-full bg-opacity-90 py-10 bg-white bg-blur-md absolute top-0 flex items-center justify-center '
      >
        <div className='flex bg-white w-[900px] mx-auto border-2 items-center justify-center p-6 py-10 rounded-xl relative'>
          <div className='mx-auto w-[900px]'>
            <div
              className='absolute right-10 cursor-pointer'
              onClick={() => {
                setFormToggle(!FormToggle);
              }}
            >
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nO2VXQrCMBAGxwtalZY86NkVLP6hN6hQCaQgJdXdsFHEDOQt+02TbBooFP6JBrgBB2ChqFsCJ+AK1FrpLBT2YXSAE9S5MHeo8xlqLk8BEvlY6sc5RbyKBE3JY9IuZCRRRwLvwGbUC7E561SpRJ5N+m4rpUdhvvJsK5XKs0qZONNYw31E2ueUu280V/Piykjuubl0wFxeGfwyfYaa1uCR2KeIjwbPos9QU4Uv3iq3zM/dhdp5irhQ+E0ekyummbane5EAAAAASUVORK5CYII=' />
            </div>
            <div className='text-2xl text-center mb-10'>New Transitions</div>
            <form action='' method='POST'>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='Order'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Order Id
                  </label>
                  <input
                    type='text'
                    name='Order'
                    id='Order'
                    placeholder='Order Id'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.user_order_id}
                    onChange={(e) => {
                      setFormData({
                        ...FormData,
                        user_order_id: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='ip'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    IP Address
                  </label>
                  <input
                    type='text'
                    name='ip'
                    id='ip'
                    placeholder='0.0.0.0/0'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.ip}
                    onChange={(e) => {
                      setFormData({ ...FormData, ip: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='first_name'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    name='first_name'
                    id='first_name'
                    placeholder='First Name'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.first_name}
                    onChange={(e) => {
                      setFormData({ ...FormData, first_name: e.target.value });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='last_name'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='last_name'
                    id='last_name'
                    placeholder='Last Name'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.last_name}
                    onChange={(e) => {
                      setFormData({ ...FormData, last_name: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='email'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='example@domain.com'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.email}
                    onChange={(e) => {
                      setFormData({ ...FormData, email: e.target.value });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='user_phone'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Phone Number
                  </label>
                  <input
                    type='text'
                    name='user_phone'
                    id='user_phone'
                    placeholder='Phone'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.user_phone}
                    onChange={(e) => {
                      setFormData({ ...FormData, user_phone: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='currency'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Currency Code
                  </label>
                  <input
                    type='text'
                    name='currency'
                    id='currency'
                    placeholder='Currency'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.currency}
                    onChange={(e) => {
                      setFormData({ ...FormData, currency: e.target.value });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='amount'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Total Amount
                  </label>
                  <input
                    type='text'
                    name='amount'
                    id='amount'
                    placeholder='Amount'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.amount}
                    onChange={(e) => {
                      setFormData({ ...FormData, amount: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='quantity'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Quantity
                  </label>
                  <input
                    type='number'
                    name='quantity'
                    id='quantity'
                    placeholder='Quantity'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.quantity}
                    onChange={(e) => {
                      setFormData({ ...FormData, quantity: e.target.value });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='department'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Department
                  </label>
                  <input
                    type='text'
                    name='department'
                    id='department'
                    placeholder='Department'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.department}
                    onChange={(e) => {
                      setFormData({ ...FormData, department: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10 my-5'>
                <div className='mb-5 text-2xl flex-1'>Billing Details</div>
                <div className='mb-5 text-2xl flex-1'>Shipping Details</div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='payment_mode'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Payment methods
                  </label>
                  <input
                    type='text'
                    name='payment_mode'
                    id='payment_mode'
                    placeholder='Payment methods'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.payment_mode}
                    onChange={(e) => {
                      setFormData({
                        ...FormData,
                        payment_mode: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='ship_first_name'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Shipping First Name
                  </label>
                  <input
                    type='text'
                    name='ship_first_name'
                    id='ship_first_name'
                    placeholder='Shipping Full Name'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.ship_first_name}
                    onChange={(e) => {
                      setFormData({
                        ...FormData,
                        ship_first_name: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='card_hash'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Credit card Number
                  </label>
                  <input
                    type='text'
                    name='card_hash'
                    id='card_hash'
                    placeholder='Credit card Number'
                    value={FormData.card_hash}
                    onChange={(e) => {
                      setFormData({ ...FormData, card_hash: e.target.value });
                    }}
                    s='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='ship_last_name'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Shipping Last Name
                  </label>
                  <input
                    type='text'
                    name='ship_last_name'
                    id='ship_last_name'
                    placeholder='Shipping Last Name'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.ship_last_name}
                    onChange={(e) => {
                      setFormData({
                        ...FormData,
                        ship_last_name: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='bill_zip_code'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Postal Code
                  </label>
                  <input
                    type='text'
                    name='bill_zip_code'
                    id='bill_zip_code'
                    placeholder='Postal Code'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.bill_zip_code}
                    onChange={(e) => {
                      setFormData({
                        ...FormData,
                        bill_zip_code: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='ship_addr'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Address
                  </label>
                  <input
                    type='text'
                    name='ship_addr'
                    id='ship_addr'
                    placeholder='Address'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.ship_addr}
                    onChange={(e) => {
                      setFormData({ ...FormData, ship_addr: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='bill_state'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    State
                  </label>
                  <input
                    type='text'
                    name='bill_state'
                    id='bill_state'
                    placeholder='State'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.bill_state}
                    onChange={(e) => {
                      setFormData({ ...FormData, bill_state: e.target.value });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='ship_city'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    City
                  </label>
                  <input
                    type='text'
                    name='ship_city'
                    id='ship_city'
                    placeholder='City'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.ship_city}
                    onChange={(e) => {
                      setFormData({ ...FormData, ship_city: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='bill_country'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Country
                  </label>
                  <input
                    type='text'
                    name='bill_country'
                    id='bill_country'
                    placeholder='Country'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.bill_country}
                    onChange={(e) => {
                      setFormData({
                        ...FormData,
                        bill_country: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='ship_zip_code'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Postal Code
                  </label>
                  <input
                    type='text'
                    name='ship_zip_code'
                    id='ship_zip_code'
                    placeholder='Postal Code'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.ship_zip_code}
                    onChange={(e) => {
                      setFormData({
                        ...FormData,
                        ship_zip_code: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='avs_result'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    AVS code
                  </label>
                  <input
                    type='text'
                    name='avs_result'
                    id='avs_result'
                    placeholder='AVS code'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.avs_result}
                    onChange={(e) => {
                      setFormData({ ...FormData, avs_result: e.target.value });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='ship_state'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    state
                  </label>
                  <input
                    type='text'
                    name='ship_state'
                    id='ship_state'
                    placeholder='State'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.ship_state}
                    onChange={(e) => {
                      setFormData({ ...FormData, ship_state: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='cvv_result'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    CVV code
                  </label>
                  <input
                    type='text'
                    name='cvv_result'
                    id='cvv_result'
                    placeholder='CVV Code'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.cvv_result}
                    onChange={(e) => {
                      setFormData({ ...FormData, cvv_result: e.target.value });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='ship_country'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Country
                  </label>
                  <input
                    type='text'
                    name='ship_country'
                    id='ship_country'
                    placeholder='Country'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.ship_country}
                    onChange={(e) => {
                      setFormData({
                        ...FormData,
                        ship_country: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='Bin'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Bin
                  </label>
                  <input
                    type='text'
                    name='Bin'
                    id='Bin'
                    placeholder='Bank Identification Number'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.bin_no}
                    onChange={(e) => {
                      setFormData({ ...FormData, bin_no: e.target.value });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='bin_bank_name'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Bin Bank Name
                  </label>
                  <input
                    type='text'
                    name='bin_bank_name'
                    id='bin_bank_name'
                    placeholder='Bin Bank Name'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={FormData.bin_bank_name}
                    onChange={(e) => {
                      setFormData({
                        ...FormData,
                        bin_bank_name: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={handlefraud}
                  className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bin;
