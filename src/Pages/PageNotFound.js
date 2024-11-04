import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/404.gif"
import { Button } from "../Components/Button"
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = ({title}) => {

  const pageTitle= useTitle(title);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops! Page Not Found</p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><b>Back to MovieBuddy</b></button>
          </Link>          
        </div>
      </section>
    </main>
  )
}