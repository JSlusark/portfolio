// TO FIX
//cancelled hamburger menu from template by mistake! 🤦‍♀️
import React from "react";

function NavBar() {
	return (
		<div className="NavBar">
			<header class="bg-gray-700">
				<nav
					class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
					aria-label="Global"
				>
					{/*remove this but also make sure to keep the menu items on the right*/}
					<div class="flex lg:flex-1">
						<a
							href="#"
							class="-m-1.5 p-1.5"
						>
							{/*logo was removed*/}
						</a>
					</div>

					<div class="hidden lg:flex lg:gap-x-12">
						<div class="relative">
							{/*  'Product' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"tate. */}
						</div>
						<a
							href="#"
							class="text-sm font-semibold leading-6 text-white hover:text-black"
						>
							Home
						</a>

						<a
							href="#"
							class="text-sm font-semibold leading-6 text-white hover:text-black"
						>
							Work
						</a>

						<a
							href="#"
							class="text-sm font-semibold leading-6 text-white hover:text-black"
						>
							About Me
						</a>
						<a
							href="#"
							class="text-sm font-semibold leading-6 text-white hover:text-black"
						>
							Contact
						</a>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default NavBar;
