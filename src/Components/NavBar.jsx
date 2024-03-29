import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function NavBar({ navigateToPage }) {
  // State variable for mobile menu open/close status.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ["Home", "Work", "About"];

  // Main return for the NavBar component
  return (
    <nav className=" justify-between fixed p-10 w-screen" aria-label="Global">
      {/* large screens menu */}
      <div className="hidden md:flex gap-x-12 ml-auto">
        {menuItems.map((pageName) => {
          return (
            <NavLink
              to={pageName.toLowerCase()}
              className={({ isActive }) =>
                isActive
                  ? "text-xl font-semibold  text-purple-400 "
                  : "text-xl font-semibold  text-stone-200 hover:text-purple-400  active:text-violet-500"
              }
            >
              {pageName}
            </NavLink>
          );
        })}
        <a
          href="mailto:slusark.jessica@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-xl font-semibold  text-stone-200 hover:text-purple-400  "
        >
          Contact
        </a>
      </div>

      {/* hamburger menu on breaking point) */}
      <div className=" flex ml-auto md:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-950 bg-indigo-600"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FontAwesomeIcon
            icon={icon({ name: "burger", style: "solid" })}
            className="text-3xl"
          />
        </button>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 min-w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              {menuItems.map((pageName) => {
                return (
                  <NavLink
                    to={pageName.toLowerCase()}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className="block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                  >
                    {pageName}
                  </NavLink>
                );
              })}
              <a
                href="mailto:slusark.jessica@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                Contact
              </a>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </nav>
  );
}
