import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function NavBar({ navigateToPage }) {
  // State variable for mobile menu open/close status.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ["Home", "Work", "About"];

  // Main return for the NavBar component
  return (
    <header className="bg-transparent md:bg-slate-900  fixed w-full top-0 z-5">
      <nav className="mx-auto flex justify-between p-5 " aria-label="Global">
        {/* large screens menu */}
        <div className="hidden md:flex gap-x-12 ml-auto">
          {menuItems.map((pageName) => {
            return (
              <Link
                to={pageName.toLowerCase()}
                className="text-lg font-semibold  text-stone-200 hover:text-indigo-400 active:text-indigo-700 focus:outline-none focus:text-indigo-600"
              >
                {pageName}
              </Link>
            );
          })}
          <a
            href="mailto:slusark.jessica@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold  text-stone-200 hover:text-indigo-400 active:text-indigo-700 focus:outline-none focus:text-indigo-600"
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
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                    <Link
                      to={pageName.toLowerCase()}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      className="block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                    >
                      {pageName}
                    </Link>
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
    </header>
  );
}
