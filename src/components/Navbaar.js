import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbaar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2"
              style={{ textDecoration: "none" }}
            >
              <img
                src="https://media-hosting.imagekit.io/5fa716e3018c4f2f/logo.png?Expires=1840192924&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0tmJm3gCadSDgM2V4fqWutWmrU6NYkW0ImYx4KTFho9qHksry78khTq1m7yy7Dr-GE~Wsjuot8JC1dOStoY1rkN5d87ouIEah7~KeAAMWYpqGqdWUWrIyKgz56-wh~CVnVargTYAsqsD89WtDi3cVbbVhg-orGZWOIf91g7R--rmgL7SFvM7b15VPGLWQ32xgYT4wmWcdAzlxKjh3ATuiAtZ0M-DuMWH0GPjk8hM4Egri50VX-PVfVWCsBqsHtSSAjVK1HwYhk4h6FfXztBPtuPUgocYQwVX7QUHC~fuk7gPrdoSW3FlERQMbfc2-yAcDzXcs83cvA2TAXXhGCrdVg__"
                alt="Profile Viesta Logo"
                className="h-auto w-48"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 gap-2">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate("/userlist")}
                  className="text-white hover:bg-blue-700 px-4 button-style py-2 rounded-md text-sm font-medium transition duration-200"
                  style={{ backgroundColor: "#3DC1C9" }}
                >
                  View Users
                </button>
                <button
                  onClick={() => navigate("/users/new")}
                  className="bg-gray-700 text-white button-style hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  Add New User
                </button>
                <button
                  onClick={handleLogout}
                  className=" text-black button-style hover:bg-black hover:text-white  px-4 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="text-white hover:bg-blue-700 px-4 button-style py-2 rounded-md text-sm font-medium transition duration-200"
                  style={{ backgroundColor: "#3DC1C9" }}
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-gray-700 text-white button-style hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
            <div className="flex justify-around items-center h-16 px-4">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/userlist");
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center justify-center w-1/3 h-full text-gray-600 hover:text-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="text-xs mt-1">Users</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/users/new");
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center justify-center w-1/3 h-full text-gray-600 hover:text-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span className="text-xs mt-1">Add User</span>
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center justify-center w-1/3 h-full text-gray-600 hover:text-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span className="text-xs mt-1">Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate("/login");
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center justify-center w-1/2 h-full text-gray-600 hover:text-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <span className="text-xs mt-1">Login</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/signup");
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center justify-center w-1/2 h-full text-gray-600 hover:text-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    <span className="text-xs mt-1">Sign Up</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbaar;
