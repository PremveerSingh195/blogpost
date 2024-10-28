import Logo from "./icons/Logo";
import { Link } from "react-router-dom";
import Image from "./icons/Image";

function LandingPage() {
  return (
    <div className="w-screen h-auto bg-gradient-to-t from-blue-500 via-blue-200 to-white flex flex-col items-center ">
      <div className="w-auto lg:gap-24 h-16 border-black border-2 align-top mt-5 rounded-full flex justify-between px-5 items-center bg-[#FBFBFB]">
        <button>
          <Link to="/">
            <div className="flex justify-center items-center flex-row gap-0">
              <Logo />
              <h2 className="font-extrabold text-3xl -ml-44 ">hashnode</h2>
            </div>
          </Link>
        </button>
        <div>
          <ul className="flex flex-row justify-center items-center gap-4">
            <button className="hover:bg-slate-200 p-2 rounded-full">
              Products
            </button>
            <button className="hover:bg-slate-200 p-2 rounded-full">
              Editor
            </button>
            <button className="hover:bg-slate-200 p-2 rounded-full">
              Changelog
            </button>
            <button className="hover:bg-slate-200 p-2 rounded-full">
              Community
            </button>
          </ul>
        </div>
        <button className="bg-white border-2 hover:bg-[#F4F4F5]  py-2 px-4 rounded-full">
          Sign in
        </button>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center">
        <h3 className="font-sans text-7xl font-semibold">
          Create, collaborate, and scale
        </h3>
        <h3 className="font-sans text-7xl font-semibold">
          your blogs and docs.
        </h3>

        <div className="mt-16 text-xl flex flex-col justify-center items-center">
          <p>
            Effortlessly build blogs, API docs, and product guides with
            Hashnode, plus
          </p>
          <p>get the flexibility of a headless CMS and more.</p>
        </div>
      </div>
      <button className="text-white py-3 px-6 bg-[#222325] rounded-full mt-8 text-xl ">
        Sign up for free
      </button>
      <Image />
    </div>
  );
}

export default LandingPage;
