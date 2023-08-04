import React, { Dispatch, SetStateAction } from "react";

interface IMainComponent {
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
}
const MainComponent: React.FC<IMainComponent> = (props) => {
  return (
    <div
      className={
        !props.mode
          ? "bg-black relative isolate px-6 pt-14 lg:px-8"
          : "relative isolate px-6 pt-14 lg:px-8"
      }
    >
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1
            className={
              !props.mode
                ? "text-white text-4xl font-bold tracking-tight  sm:text-6xl"
                : "text-gray-900 text-4xl font-bold tracking-tight  sm:text-6xl"
            }
          >
            Lorem ipsum.
          </h1>

          <p
            className={
              !props.mode
                ? "text-white mt-6 text-lg leading-8 "
                : "text-gray-600 mt-6 text-lg leading-8 "
            }
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>

            <a
              href="#"
              className={
                !props.mode
                  ? "text-white ext-sm font-semibold leading-6 "
                  : "text-gray-600 ext-sm font-semibold leading-6 "
              }
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default MainComponent;
