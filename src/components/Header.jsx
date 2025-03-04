import { CgProfile } from "react-icons/cg";

const Header = () => {
  const likns =[
  
      <li>Home</li>,
      <li>recipes</li>,
      <li>about</li>,
      <li>search</li>,
  
  ]
    
  
    return (
      <div className="shadow-sm">
        <div className="navbar bg-base-100  w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl flex items-center gap-7 capitalize">
                {likns}
              </ul>
            </div>
            <a className="  text-xl hidden capitalize lg:block">recipe calories</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1   gap-7 text-xl flex items-center capitalize">
              {likns}
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-3">
            <label className="input rounded-3xl">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
              <input type="search" className="grow" placeholder="Search" />
            </label>
            <a className="btn text-xl rounded-full bg-green-600">
              <CgProfile></CgProfile>
            </a>
          </div>
        </div>
       </div>
    );
};

export default Header;