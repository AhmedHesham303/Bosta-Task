import { NavLink } from "react-router";

const navItems = [
  { name: "Products", path: "/products-listing" },
  { name: "Create Product", path: "/products/create" },
  { name: "Cart", path: "/cart" },
  { name: "Login", path: "/login" },
  { name: "Signup", path: "/signup" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-3 w-full flex justify-center sticky top-0 index-100">
      <ul className="flex gap-6 ">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `font-medium hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
