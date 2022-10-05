import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div>
        <section class="hero body-font bg-purple-main text-gray-600">
          <div class="container mx-auto flex flex-wrap px-5 py-32">
            <div class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
              <div class="mb-6 w-full px-4 sm:p-4 md:px-12 lg:text-left">
                <h1 style={{ textShadow: "2px 4px white" }} class="title-font mx-auto mb-2 font-play text-5xl font-extrabold uppercase text-[#dd5b87] sm:text-left lg:text-7xl">
                  Pocket Assistant
                </h1>
                <p class="text-2xl font-bold text-black sm:text-left lg:text-left lg:text-3xl">Launching Soon</p>
              </div>
            </div>
            <div class="mt-6 w-full  rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2">
              <img class="h-full w-full object-cover object-center" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651671607/hdao-pa/1_fdqd59.png" alt="stats"></img>
            </div>
          </div>
        </section>
        <section class="intro body-font bg-purple-content text-gray-600">
          <div class="flex w-full flex-col text-center">
            <h1 style={{ textShadow: "2px 2px black" }} class="mx-8 mt-20 font-play text-5xl uppercase text-white-lt lg:text-6xl">
              What does an hDAO PA do?
            </h1>
          </div>
          <div class="container mx-auto px-5 py-24">
            <div class="-m-2 flex flex-wrap">
              <div class="p-6 duration-300 ease-in hover:-translate-y-8 lg:w-1/3 lg:p-4">
                <div class="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-16 pb-20 text-center">
                  <img class="relative mx-auto w-52" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/3_mh4kih.png"></img>
                  <h1 class="title-font mb-3 text-2xl font-bold text-pink-title sm:text-2xl">Works on day-to-day tasks</h1>
                  <p class="mb-3 text-xl leading-tight text-white">A PA supports clients by doing day-to-day tasks in order to help them free up their time.</p>
                </div>
              </div>
              <div class="p-6 lg:w-1/3 lg:p-4">
                <div class="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-16 pb-20 text-center duration-300 ease-in hover:-translate-y-8">
                  <img class="relative mx-auto w-52" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/4_or3wbg.png"></img>
                  <h1 class="title-font mb-3 text-2xl font-bold text-pink-title sm:text-2xl">Research and collect information</h1>
                  <p class="mb-3 text-xl leading-tight text-white">At launch an hDAO PA works on tasks specific to Data Entry and Research.</p>
                </div>
              </div>
              <div class="p-6 lg:w-1/3 lg:p-4">
                <div class="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-16 pb-20 text-center duration-300 ease-in hover:-translate-y-8">
                  <img class="relative mx-auto w-52" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/5_bfllic.png"></img>
                  <h1 class="title-font mb-3 text-2xl font-bold text-pink-title sm:text-2xl">Work remotely and flexibly</h1>
                  <p class="mb-3 text-xl leading-tight text-white">Being a PA is like doing gig work. You can select as many tasks as you want and work around your schedule.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="tasks body-font bg-purple-content text-gray-600">
          <div class="flex w-full flex-col text-center">
            <h1 style={{ textShadow: "2px 2px black" }} class="mx-8 mt-20 font-play text-5xl uppercase  text-white-lt lg:text-6xl">
              Types of Tasks
            </h1>
          </div>
          <div class="container mx-auto px-5 pt-20 pb-16">
            <div class="-m-2 lg:flex lg:flex-wrap">
              <div class="p-6 lg:w-1/2 lg:p-4">
                <div class="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-4 pb-4 text-center">
                  <h1 class="py-4 text-center text-3xl font-bold text-white">Personal Tasks</h1>
                  <ul class="list-disc p-4 text-left">
                    <li class="py-2 text-white">Research flights and hotels</li>
                    <li class="py-2 text-white">Price shop best offers for a product or service</li>
                    <li class="py-2 text-white">Event planning research</li>
                    <li class="py-2 text-white">Confirm appointments</li>
                    <li class="py-2 text-white">Research transportation options</li>
                    <li class="py-2 text-white">Collate and file expenses into a spreadsheet</li>
                  </ul>
                </div>
              </div>
              <div class="p-6 lg:w-1/2 lg:p-4">
                <div class="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-4 pb-4 text-center">
                  <h1 class="py-4 text-center text-3xl font-bold text-white">Administration</h1>
                  <ul class="list-disc p-4 text-left">
                    <li class="py-2 text-white">Add accounts to a spreadsheet/CRM</li>
                    <li class="py-2 text-white">Find businesses or peoples emails or contact info</li>
                    <li class="py-2 text-white">Search and find 10 particular images online for use</li>
                    <li class="py-2 text-white">Transcribe audio or notes from a webinar</li>
                    <li class="py-2 text-white">Create/update spreadsheets</li>
                    <li class="py-2 text-white">Verify outdated data, update changes to records</li>
                  </ul>
                </div>
              </div>
              <div class="p-6 lg:w-1/2 lg:p-4">
                <div class="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-4 pb-4 text-center">
                  <h1 class="py-4 text-center text-3xl font-bold text-white">Lead Generation</h1>
                  <ul class="list-disc p-4 text-left">
                    <li class="py-2 text-white">Find leads on social media and/or job board sites</li>
                    <li class="py-2 text-white">Call stores/businesses to get information</li>
                    <li class="py-2 text-white">Retrieve public records/addresses/contact details</li>
                    <li class="py-2 text-white">Find and link me to the blogs for these 10 projects</li>
                    <li class="py-2 text-white">Find and list popular YouTube channels and podcasts on P2E gaming</li>
                    <li class="py-2 text-white">Make a list of keywords to search for a specific product or service</li>
                  </ul>
                </div>
              </div>
              <div class="p-6 lg:w-1/2 lg:p-4">
                <div class="relative h-full rounded-2xl bg-purple-box bg-opacity-40 px-8 pt-4 pb-4 text-center">
                  <h1 class="py-4 text-center text-3xl font-bold text-white">Web3 Research</h1>
                  <ul class="list-disc p-4 text-left">
                    <li class="py-2 text-white">Search and link to the roadmap of these 5 projects</li>
                    <li class="py-2 text-white">Research and collect certain data points over time</li>
                    <li class="py-2 text-white">Find upcoming NFT releases on Solana</li>
                    <li class="py-2 text-white">Find and link me to the blogs for these 10 projects</li>
                    <li class="py-2 text-white">Find and link to Discord servers for these 10 projects</li>
                    <li class="py-2 text-white">Who are the investors (VCs) in xyz company</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="qualities bg-purple-content py-20">
          <div class="container mx-auto max-w-6xl items-center px-10 sm:px-20 md:px-32 lg:px-4">
            <div class="-mx-3 flex flex-wrap items-center">
              <h1 style={{ textShadow: "2px 2px black" }} class="mt-12 font-play text-5xl uppercase text-white-lt lg:text-6xl">
                What qualities should you have?
              </h1>
              <div class="lg:order-0 order-1 mx-auto w-full px-3 lg:w-1/2">
                <div class="w-full lg:max-w-md">
                  <ul class="">
                    <li class="mx-auto inline-flex items-center space-x-4 py-2 lg:text-left xl:py-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class="text-md text-left  font-medium text-white md:text-2xl">Familiarity with English language</span>
                    </li>
                    <li class="inline-flex items-center space-x-4 py-2 xl:py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class=" text-md font-medium text-white md:text-2xl">Well-rounded Interpersonal skills</span>
                    </li>
                    <li class="inline-flex items-center space-x-4 py-2 xl:py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class=" text-md font-medium text-white md:text-2xl">Flexibility and organizational skill</span>
                    </li>
                    <li class="inline-flex items-center space-x-4 py-2 xl:py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class="text-md text-left font-medium text-white md:text-2xl">Familiarity with productivity tools</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="order-0 mx-auto mb-6 px-3 md:w-1/2 lg:order-1 lg:w-1/2">
                <img class="mx-auto" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651659483/hdao-pa/10_bathn4.png" alt="feature image"></img>
              </div>
            </div>
          </div>
        </section>
        <section class="journey body-font bg-purple-content text-gray-600">
          <div class="flex w-full flex-col text-center">
            <h1 style={{ textShadow: "2px 2px black" }} class="mx-8 mt-20 font-play text-5xl uppercase text-white-lt lg:text-6xl">
              Journey to Earning
            </h1>
          </div>
          <div class="container mx-auto px-5 py-24">
            <div class="-m-2 mx-4 flex flex-wrap rounded-2xl bg-purple-box/40 lg:mx-0">
              <div class="mx-auto p-6 lg:w-1/3 lg:p-4">
                <div class="relative mx-auto h-full w-full rounded-lg bg-opacity-40 px-8 pt-16 text-center">
                  <img class="relative mx-auto w-60" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/6_opuxa4.png"></img>
                  <h1 class="title-font mb-3 text-3xl font-bold text-pink-title lg:text-3xl">1. Study and take the PA exam</h1>
                </div>
              </div>
              <div class="mx-auto p-6 lg:w-1/3 lg:p-4">
                <div class="relative mx-auto h-full w-full rounded-lg bg-opacity-40 px-8 pt-16 text-center">
                  <img class="relative mx-auto w-60" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625418/hdao-pa/7_wmvmxn.png"></img>
                  <h1 class="title-font mb-3 text-3xl font-bold text-pink-title lg:text-3xl">2. Log in and start completing tasks</h1>
                </div>
              </div>
              <div class="p-6 lg:w-1/3 lg:p-4">
                <div class="relative mx-auto h-full w-full rounded-lg bg-opacity-40 px-8 pt-16 pb-16 text-center">
                  <img class="relative mx-auto w-60" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625419/hdao-pa/8_kb9cua.png"></img>
                  <h1 class="title-font mb-3 text-3xl font-bold text-pink-title lg:text-3xl">3. Earn wages weekly from completed tasks</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="form body-font bg-purple-main text-gray-600">
          <div class="container mx-auto flex flex-col items-center p-12 px-12 py-32 md:flex-row">
            <div class="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
              <img class="rounded object-cover object-center" alt="rocket" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651625419/hdao-pa/9_l0smjf.png"></img>
            </div>
            <div class="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
              <h1 style={{ textShadow: "2px 3px white" }} class="mb-4 font-play text-4xl uppercase text-[#dd5b87] lg:text-6xl">
                Interested?
              </h1>
              <p class="mb-8 text-justify text-xl font-medium leading-relaxed text-black">
                If you are someone who is able to use online tools and is willing to work on a weekly basis, hDAO has a new way for you to make money through the Pocket Assistant opportunity. If you don't have the skills required for the PA role,
                don't worry. We have provided learning materials below so that you can learn these tools and platforms and join the PA program.
              </p>
              <div class="mx-auto flex flex-col space-y-4 lg:mx-0 lg:flex-row lg:space-y-0 lg:space-x-4">
                <a class="inline-flex items-center rounded-lg bg-purple-box px-4 py-4 font-bold text-white hover:bg-purple-box/80 focus:outline-none" target="_blank" rel="noreferrer" href="https://forms.gle/PZGDjDBXZC8WE26CA">
                  <span className="mx-auto">Become a PA</span>
                </a>
                <a
                  class="hover:bg- inline-flex items-center rounded-lg bg-gray-100 px-4 py-4 font-bold text-purple-title hover:text-purple-900 focus:outline-none"
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1cqSKp6CSS5oCwPw4cZKOQkEswIkQXrwG/view?usp=sharing"
                >
                  <span className="mx-auto">Learn Research Skills</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="resources body-font bg-purple-main text-gray-600">
          <div class="container mx-auto px-5 pb-12 pt-4">
            <div class="mb-12 text-center">
              <h1 style={{ textShadow: "2px 3px white" }} class="mt-4 font-play text-4xl uppercase text-[#dd5b87] lg:text-6xl">
                Need to prepare? <br></br> Study these free resources.
              </h1>
            </div>
            <div class="mx-auto w-full lg:w-full lg:max-w-3xl">
              <img class="rounded object-cover object-center" alt="rocket" src="https://res.cloudinary.com/daljbo1q0/image/upload/v1651672451/hdao-pa/11_ufniuj.png"></img>
            </div>
            <div class="mx-auto mb-12">
              <a
                class="inline-flex items-center rounded-lg bg-purple-box px-4 py-4 font-bold text-white hover:bg-purple-box/80 focus:outline-none"
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1J8t_uYnIdEVdvBBT4izAzPwvBtpGUOSE/view?usp=sharing"
              >
                <span className="mx-auto">View learning materials</span>
              </a>
            </div>
          </div>
        </section>

        <section class="relative bg-purple-main px-8 pt-4 pb-16">
          <div class="container mx-auto xl:px-5">
            <h1 style={{ textShadow: "2px 4px white" }} class="mt-12 font-play text-4xl uppercase text-[#dd5b87] lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <div class="mx-auto mt-10 w-full rounded-lg border bg-purple-box/70 px-6 py-6 text-justify sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3">
              <h3 class="py-4 text-lg font-bold text-white sm:text-xl md:text-3xl">When can I start?</h3>
              <p class="md:text-normal mt-2 text-base text-white sm:text-lg">
                The PA program launches sometime soon. But you need to become a qualified hDAO PA by passing our Exam. You have plenty of time to learn the material (above) and take the Exam to enter the PA pool and start working when it launches. We
                highly recommend you complete each of the course links provided. Each link should only take 1-1.5 hrs but knowing this info will help you complete tasks quicker and with higher quality, which means more wages.
              </p>
              <p class="md:text-normal mt-6 text-base text-white sm:text-lg">Also, please tell your family and friends. They can all benefit and earn as a PA as these skills can be learned within a week.</p>
            </div>
            <div class="mx-auto mt-10 w-full rounded-lg border bg-purple-box/70 px-6 py-6 text-justify sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3">
              <h3 class="py-4 text-lg font-bold text-white sm:text-xl md:text-3xl">How does it work?</h3>
              <p class="md:text-normal mt-2 text-base text-white sm:text-lg">
                There is an app you need to log into when you are available and ready to start completing tasks. Choose and accept the task(s) you will fulfill. When you accept a task it must be completed ASAP.
              </p>
              <p class="md:text-normal mt-6 text-base text-white sm:text-lg">
                When finished with task, you will upload any info or data to the client and mark the task as completed. A task should not take longer than 30 min. If it does, the client will have to use another task credit for completion.{" "}
              </p>
            </div>
            <div class="mx-auto mt-10 w-full rounded-lg border bg-purple-box/70 px-6 py-6 text-justify sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3">
              <h3 class="py-4 text-lg font-bold text-white sm:text-xl md:text-3xl">What do I need to have?</h3>
              <p class="md:text-normal mt-2 text-base text-white sm:text-lg">
                Tasks can be done remotely and in a short period of time; all it requires is a working device and a stable internet connection. It would be an advantage to have prior knowledge in online productivity tools such as Google Workspace,
                Search Engines, etc.
              </p>
            </div>
            <div class="mx-auto mt-10 w-full rounded-lg border bg-purple-box/70 px-6 py-6 text-justify sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3">
              <h3 class="py-4 text-lg font-bold text-white sm:text-xl md:text-3xl">How much can I make?</h3>
              <p class="md:text-normal mt-2 text-base text-white sm:text-lg">
                That is entirely up to you. This is considered gig/freelance work. So the more tasks you complete the more you will make. Payouts will be weekly. We will also be rewarding PA's in both quality and quantity with a bonus every week.
                Bonuses can easily 2x the earning for those who qualify.{" "}
              </p>
              <p class="md:text-normal mt-6 text-base text-white sm:text-lg">
                As we don't know how successful this will be it is hard to know prior to launch how much each task will be worth, but we can provide a minimum/floor value which is $2 per task. Remember, a task could take 3 minutes or 30, and with
                bonuses and rewards it could be 2-3x higher. We highly recommend you complete each of the course links provided. Each link should only take 1-1.5 hrs but knowing this info will help you complete the tasks quicker and with higher
                quality, which means more wages.
              </p>
            </div>
          </div>
        </section>

        <section class="body-font bg-purple-content/30">
          <div class="container mx-auto px-5 py-12">
            <div class="mx-auto flex flex-col items-start sm:flex-row sm:items-center lg:w-2/3">
              <h1 class="title-font mx-auto flex-grow pb-4 text-2xl font-medium text-gray-900 sm:pr-12 lg:pb-0 lg:text-left">Ready to start your journey to earning?</h1>
              <a class="mx-auto items-center rounded-lg bg-purple-box py-4 px-5 font-bold text-white hover:bg-purple-box/80 focus:outline-none lg:inline-flex" target="_blank" rel="noreferrer" href="https://forms.gle/PZGDjDBXZC8WE26CA">
                Become a PA
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
