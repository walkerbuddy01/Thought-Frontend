import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";

interface AppbarProps {
  authorname: string;
}
function Appbar({ authorname }: AppbarProps) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between border-b p-3">

    {/* //Adding  */}
    <div className="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-custom-trigger" type="button" className="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
    <img className="w-8 h-auto rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Maria"/>
    <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-neutral-400">Maria</span>
    <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  
</div>
    {/* //Adding  */}


     <Link to={"/blog"}><div className="font-semibold">Medium</div></Link> 
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-slate-400"
        onClick={() => {
          navigate("/createblog");
        }}
      >
        New blog
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>

      <Avatar authorname={authorname} size="large" />
    </div>
  );
}

export default Appbar;
