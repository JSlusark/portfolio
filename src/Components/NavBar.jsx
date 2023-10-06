// TO FIX
//cancelled hamburger menu from template by mistake! 🤦‍♀️
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-transparent md:bg-gray-400 fixed w-full top-0 z-5">
			<nav
				className="mx-auto flex justify-between p-5 "
				aria-label="Global"
			>
				<div className="flex ml-auto md:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<FontAwesomeIcon
							icon={icon({ name: "burger", style: "solid" })}
							className="text-2xl "
						/>
					</button>
				</div>
				<div className="hidden md:flex gap-x-12 ml-auto">
					<a
						href="#home"
						className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-400	"
					>
						Home
					</a>
					<a
						href="#work"
						className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-400	"
					>
						Works
					</a>
					<a
						href="#about"
						className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-400"
					>
						About
					</a>
					<a
						href="#contact"
						className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-400"
					>
						Contact
					</a>
				</div>
			</nav>

			{/* Hamburger menu */}
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a
							href="#"
							className="-m-1.5 p-1.5"
						>
							<a
								href="#"
								className="font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							>
								Home
							</a>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon
								className="h-6 w-6"
								aria-hidden="true"
							/>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-4">
								<a
									href="#work"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Work
								</a>
								<a
									href="#about"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									About
								</a>
								<a
									href="#contact"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Contact
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
