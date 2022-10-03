import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { customerSidebarLinks } from "../../constants/index";

function CustomerSidebar() {
	return (
		<div className="bg-blue-700 text-white h-full pt-4 px-12">
			<img
				src="/assets/images/white-logo.svg"
				alt="Logo"
				className="logo"
			/>
			<div className="mt-5">
				{customerSidebarLinks.map((item, i) => (
					<Link
						key={JSON.stringify(item)}
						to={item.link}
						className="hover:text-white"
					>
						<div
							className="mb-3 flex flex-row items-center transition-all ease-in-out hover:ml-2"
							key={i}
						>
							{item.active && <BiChevronsRight />}
							{item.label}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default CustomerSidebar;
