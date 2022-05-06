import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <header class="body-font bg-purple-content/30 text-gray-600">
          <div class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
            <a class="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
              <img class="h-10 w-10" src="https://secureservercdn.net/198.71.233.86/cb6.757.myftpupload.com/wp-content/uploads/2021/12/HDAO-60x60-72dpi-1.svg?time=1651670863"></img>
              <span class="ml-3 text-xl">humanDAO</span>
            </a>
            <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
              <a class="mr-5 font-bold text-black hover:text-black/80" target="_blank" rel="noreferrer" href="https://humandao.org/">
                Home
              </a>
            </nav>
            <a class="mt-4 inline-flex items-center rounded-lg bg-purple-box py-2 px-3 text-base font-bold text-white hover:bg-purple-box/80 focus:outline-none md:mt-0" target="_blank" rel="noreferrer" href="https://forms.gle/PZGDjDBXZC8WE26CA">
              Fill out form
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="ml-1 h-4 w-4" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
