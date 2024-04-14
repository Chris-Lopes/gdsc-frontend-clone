import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main class="flex flex-col items-center justify-center h-screen">
      <div class="container bg-white w-8/12 min-h-80 mb-10 rounded-3xl flex justify-center items-center text-center">
        <section class=" flex flex-col ">
          <h1 class="mt-10 mb-2 text-4xl font-black">Welcome, 'user name'</h1>
          <p class="mb-10 text-gray-400">
            People who have applied please Keep an eye on your dashboard for
            further updates.
          </p>
          <Link href={"/apply"}>click me</Link>
        </section>
      </div>
      <section class="max-w-2xl px-2 md:px-4 mx-auto text-white">
        <h3 class="text-3xl font-extrabold mb-6 text-center">Timeline</h3>
        <ol class="border-l border-accent md:grid md:grid-cols-3 md:justify-center md:gap-6 md:border-l-0 md:border-t">
          <li>
            <div class="flex-start flex items-center pt-2 md:block md:pt-0">
              <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-ring md:-mt-[5px] md:ml-0 md:mr-0 bg-white"></div>
              <p class="mt-2 text-sm italic">06 April, 2024</p>
            </div>
            <div class="ml-4 mt-2 pb-5 md:ml-0">
              <h4 class="mb-1.5 text-xl font-bold">
                Applications Submission Starts
              </h4>
              <p class="mb-3 text-sm">
                Applications will close on <b>14th of April 11.59pm</b> after
                which we will not accept further applicants.
              </p>
            </div>
          </li>
          <li>
            <div class="flex-start flex items-center pt-2 md:block md:pt-0">
              <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-ring md:-mt-[5px] md:ml-0 md:mr-0 bg-white"></div>
              <p class="mt-2 text-sm italic">15 April, 2024</p>
            </div>
            <div class="ml-4 mt-2 pb-5 md:ml-0">
              <h4 class="mb-1.5 text-xl font-bold">Interviews</h4>
              <p class="mb-3 text-sm">
                Shortlisted students will proceed to the interview round from 15
                April onwards.
              </p>
            </div>
          </li>
          <li>
            <div class="flex-start flex items-center pt-2 md:block md:pt-0">
              <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-ring md:-mt-[5px] md:ml-0 md:mr-0 bg-white"></div>
              <p class="mt-2 text-sm italic">To be decided</p>
            </div>
            <div class="ml-4 mt-2 pb-5 md:ml-0">
              <h4 class="mb-1.5 text-xl font-bold">Final Results</h4>
              <p class="mb-3 text-sm">
                Selection Results date would be announced soon!
              </p>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );

}
