import { NavLink, useNavigate } from "react-router";
import { deleteToken, getToken } from "@/lib/tokenStorage";

export default function Navbar() {
  const navigate = useNavigate();
  const token = getToken();

  const handleLogout = () => {
    deleteToken();
    navigate("/");

    window.location.reload();
  };

  return (
    <nav className="bg-white shadow px-6 py-3 w-full flex justify-center fixed top-0 z-50">
      <ul className="flex gap-6 items-center">
        <li>
          <NavLink
            to="/products-listing"
            className={({ isActive }) =>
              `font-medium hover:text-blue-600 ${
                isActive ? "text-blue-600" : "text-gray-700"
              }`
            }
          >
            Products
          </NavLink>
        </li>

        {token ? (
          <>
            <li>
              <NavLink
                to="/products/create"
                className={({ isActive }) =>
                  `font-medium hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
              >
                Create Product
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `font-medium hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
              >
                Cart
              </NavLink>
            </li>

            <li className="font-semibold text-gray-800">Ahmed</li>

            <li>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `font-medium hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `font-medium hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
              >
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
