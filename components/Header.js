import routes from './routes';

export default function Header() {
  const visibleRoutes = routes.filter(route => !route.hidden);

  return (
    <header className="text-white bg-tlgray-700">
      <div id="overlay">
        <ul className="text-center list-none text-white text-3xl">
          {visibleRoutes.map(route => (
            <li className="p-2" key={route.url} >
            <a href={route.url}>
              <span>{route.title}</span>
            </a>
          </li>))}
        </ul>
      </div>
      <nav className="flex items-center justify-between flex-wrap bg-opacity-100 p-4">
        <div className="flex items-center flex-shrink-0 text-xl text-grey-900 mr-6">
          <a href="/" className="lg:inline-block text-white">
            <img alt="SolCapture" className="h-14 mr-3 lg:inline-block" src="/img/logo/logo-2.png" />
            <div className="header-name sm:hidden">SolCapture</div>
          </a>
        </div>
        <div className="block lg:hidden">
          <div id="hamburgerbtn" className="flex cursor-pointer items-center w-14 h-10 py-2 rounded mopen">
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
        </div>
        <div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="mobileMenu">
          <div className="text-lg lg:flex-grow">
          </div>
          <div className="text-lg">
          {visibleRoutes.map(route => (
            <a href={route.url} key={route.url} className="duration-200 block mt-4 lg:inline-block lg:mt-0 hover:opacity-60 mr-8 text-white">
              {route.title}
            </a>))}
          </div>
        </div>
      </nav>
    </header>);
}
