import styles from './Footer.module.css'
import routes from './routes';

export default function Footer() {
  return (
    <footer className="bg-tlgray-100">

      <div className="flex items-center justify-between flex-wrap bg-gray-800 p-8 text-white">
        <div className="items-center text-xl text-grey-900 mr-6">
          SolCapture
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="mobileMenu">
          <div className="text-lg lg:flex-grow">
          </div>
          <div className="text-lg">
          {routes.map(route => (
            <a href={route.url} key={route.url} className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-8">
            {route.title}
          </a>))}
          </div>
        </div>
      </div>
      <div className="copy pl-8 py-5 bg-tlgray-700 text-white text-md">
        &copy; SolCapture 2021 All Rights Reserved.
      </div>
    </footer>

  )
}
