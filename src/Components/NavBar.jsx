import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  // State variable for mobile menu open/close status.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu items object for the navigation bar.
  const menuItems = ["Home", "Work", "About", "Contact"];

  // Function to Render Menu Items
  const renderMenuItem = (item, isMobile = false) => {
    //this determines the hyperlink for each menu item and mailto for contact link
    const hrefValue = () => {
      if (item === "Contact") {
        return "mailto:slusark.jessica@gmail.com";
      } else {
        return "#" + item.toLowerCase();
      }
    };

    // Renders the actual JSX for the menu item and changes based on whether it's mobile or desktop.
    return (
      <div className={isMobile ? "space-y-2 py-4" : ""}>
        <a
          href={`${hrefValue()}`}
          onClick={(e) => {
            // Log the clicked link for debugging.
            console.log("Link clicked:", hrefValue());

            // If on mobile, this closes the menu after link click.
            if (isMobile) {
              setMobileMenuOpen(false);
            }
          }}
          // Conditional styling based on mobile/desktop.
          className={
            isMobile
              ? "mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              : "text-lg font-semibold leading-6 text-slate-300 hover:text-custom-red"
          }
        >
          {item}
        </a>
      </div>
    );
  };

  // Main return for the NavBar component
  return (
    <header className="bg-transparent md:bg-black  fixed w-full top-0 z-5">
      <nav className="mx-auto 					flex justify-between p-5 " aria-label="Global">
        {/* large screens menu */}
        <div className="hidden md:flex gap-x-12 ml-auto">
          {menuItems.map((item) => renderMenuItem(item))}
        </div>

        {/* hamburger menu on breaking point) */}
        <div className=" flex ml-auto md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-gray-400"
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
                {menuItems.map((item) => renderMenuItem(item, true))}
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </nav>
    </header>
  );
}
