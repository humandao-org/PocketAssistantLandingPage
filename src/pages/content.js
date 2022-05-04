import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div>
        <section class="hero body-font text-gray-600 bg-purple-bg">
          <div class="container mx-auto flex flex-wrap px-5 py-24">
            <div class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div class="mb-6 w-full px-4 sm:p-4 lg:text-left">
                <h1 class="title-font mb-2 text-xl font-medium text-purple-dark lg:text-4xl">humanDAO</h1>
                <h1 class="ltitle-font mx-auto mb-2 text-6xl font-extrabold uppercase text-purple-text lg:text-7xl">Pocket Assistant</h1>
              </div>
            </div>
            <div class="mt-6 w-full  rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2">
              <img class="h-full w-full object-cover object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/1_wgyom3.png" alt="stats"></img>
              <p class="-mt-6 text-center font-bold">Launching June 2022</p>
            </div>
          </div>
        </section>
        <section class="hero body-font text-gray-600 bg-purple-bg">
          <div class="container mx-auto flex flex-wrap px-5 py-24">
            <div class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div class="mb-6 w-full px-4 sm:p-4 lg:text-left">
                <h1 class="title-font mb-2 text-xl font-medium text-purple-dark lg:text-4xl">humanDAO</h1>
                <h1 class="ltitle-font mx-auto mb-2 text-6xl font-extrabold uppercase text-purple-text lg:text-7xl">Pocket Assistant</h1>
              </div>
            </div>
            <div class="mt-6 w-full  rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2">
              <img class="h-full w-full object-cover object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/1_wgyom3.png" alt="stats"></img>
              <p class="-mt-6 text-center font-bold">Launching June 2022</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
