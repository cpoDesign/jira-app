import logo from './logo.svg';
import './App.css';

import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import axios, { Axios } from 'axios';

import { useFormik } from 'formik';
const DODFile =
  'https://gist.githubusercontent.com/cpoDesign/90284a995f32b4765461ef006788a611/raw/edd1d78f72c5ae3dd05ad47e59091c69fd402cb4/gistfile1.txt';

function Example() {
  const [showDod, setShowDod] = useState(false);
  const [dodText, setDodText] = useState('');

  const [isCreating, setIsCreating] = useState(false);

  axios({
    url: DODFile,
    method: 'GET',
  }).then((response) => {
    setDodText(response.data);
  }, []);

  const handleAddDodClick = () => {
    setShowDod(!showDod);
  };

  const createTask = () => {
    console.log('creating item');
    setIsCreating(true);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <h1>Design your ticket</h1>

                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-left lg:text-left">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    onClick={handleAddDodClick}
                  >
                    {!showDod && <>Add DOD</>}
                    {showDod && <>Remove DOD</>}
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    {!showDod && <>Add </>}
                    {showDod && <>Remove</>}
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:text-left lg:text-left">
              <div className="-space-y-px rounded-md shadow-sm">
                <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />

                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />

                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />

                  <div>
                    <label htmlFor="email-address" className="">
                      Business benefit
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Business benefit"
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Describe the task"
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            <div className="sm:text-left lg:text-left">
              <div className="sm:text-left lg:text-left">
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      onClick={createTask}
                      disabled={isCreating}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Generate a task
                    </button>
                  </div>
                </div>
              </div>
              <h1>Preview</h1>

              {showDod && <pre>{dodText}</pre>}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Example />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
