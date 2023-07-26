import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            ScreenHub™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {/* <li>
            <a href="" target="_blank" className="mr-4 hover:underline md:mr-6" rel='noreferrer'>
              About
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="mr-4 hover:underline md:mr-6" rel='noreferrer'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" target="_blank"  className="mr-4 hover:underline md:mr-6" rel='noreferrer'>
              Licensing
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:underline" >
              Contact
            </a>
          </li> */}
        </ul>
      </div>
    </footer>
  );
};
