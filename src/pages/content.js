import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div>
        <section class="hero body-font bg-purple-main text-gray-600">
          <div class="container mx-auto flex flex-wrap px-5 py-24">
            <div class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div class="mb-6 w-full px-4 sm:p-4 lg:text-left">
                <h1 class="title-font mb-2 text-xl font-medium text-purple-box lg:text-4xl">humanDAO</h1>
                <h1 class="ltitle-font mx-auto mb-2 text-7xl font-extrabold uppercase text-purple-title lg:text-8xl">Pocket Assistant</h1>
              </div>
            </div>
            <div class="mt-6 w-full  rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2">
              <img class="h-full w-full object-cover object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/1_wgyom3.png" alt="stats"></img>
              <p class="-mt-9 text-center text-2xl font-bold text-black lg:text-2xl">Launching June 2022</p>
            </div>
          </div>
        </section>
        <section class="body-font bg-purple-content text-gray-600">
          <div class="flex w-full flex-col text-center">
            <h1 class="mt-20 font-sans text-4xl font-bold text-white-lt lg:text-6xl">What does an HDAO PA do?</h1>
          </div>
          <div class="container mx-auto px-5 py-40">
            <div class="-m-4 flex flex-wrap">
              <div class="p-12 lg:w-1/3 lg:p-4">
                <div class="relative h-full rounded-lg bg-purple-box bg-opacity-40 px-8 pt-16 pb-20 text-center">
                  <img class="relative mx-auto -mt-32 w-52" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/3_mh4kih.png"></img>
                  <h1 class="title-font mb-3 text-2xl font-bold text-pink-title sm:text-2xl">Works on day-to-day tasks</h1>
                  <p class="mb-3 text-xl leading-tight text-white">A PA supports clients by doing day-to-day tasks in order to help them free up their time.</p>
                </div>
              </div>
              <div class="p-12 lg:w-1/3 lg:p-4">
                <div class="relative h-full rounded-lg bg-purple-box bg-opacity-40 px-8 pt-16 pb-20 text-center">
                  <img class="relative mx-auto -mt-32 w-52" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/4_or3wbg.png"></img>
                  <h1 class="title-font mb-3 text-2xl font-bold text-pink-title sm:text-2xl">Works on day-to-day tasks</h1>
                  <p class="mb-3 text-xl leading-tight text-white">A PA supports clients by doing day-to-day tasks in order to help them free up their time.</p>
                </div>
              </div>
              <div class="p-12 lg:w-1/3 lg:p-4">
                <div class="relative h-full rounded-lg bg-purple-box bg-opacity-40 px-8 pt-16 pb-20 text-center">
                  <img class="relative mx-auto -mt-32 w-52" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/5_bfllic.png"></img>
                  <h1 class="title-font mb-3 text-2xl font-bold text-pink-title sm:text-2xl">Works on day-to-day tasks</h1>
                  <p class="mb-3 text-xl leading-tight text-white">A PA supports clients by doing day-to-day tasks in order to help them free up their time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
