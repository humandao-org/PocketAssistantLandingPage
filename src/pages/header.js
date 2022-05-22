import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <header class="body-font bg-purple-main text-gray-600">
          <div class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
            {/* <a class="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
              <img class="h-10 w-10" src="https://secureservercdn.net/198.71.233.86/cb6.757.myftpupload.com/wp-content/uploads/2021/12/HDAO-60x60-72dpi-1.svg?time=1651670863"></img>
              <span class="ml-1 text-xl">humanDAO</span>
            </a> */}
            <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
              <a class="mt-4 inline-flex items-center rounded-lg bg-purple-box py-2 px-3 text-base font-bold text-white hover:bg-purple-box/80 focus:outline-none md:mt-0" target="_blank" rel="noreferrer" href="https://humandao.org/">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </a>
              <a class="mt-4 ml-4 inline-flex items-center rounded-lg bg-purple-box py-2 px-3 text-base font-bold text-white hover:bg-purple-box/80 focus:outline-none md:mt-0" target="_blank" rel="noreferrer" href="https://humandao.org/">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Become a PA
              </a>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
