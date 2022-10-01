import { CustomerLayoutProps } from "../../interfaces";
// import CustomerOnboarding from "../complex/CustomerOnboarding";
import CustomerSidebar from "../compound/CustomerSidebar";
function CustomerLayout({ children }: CustomerLayoutProps) {
	return (
		<div className="flex flex-row min-h-screen">
			{/* Sidebar */}
			<div className="flex-[0.2] h-full">
				<CustomerSidebar />
			</div>
			{/* Body */}
			<div className="flex-1">
				{/* <CustomerOnboarding /> */}
				{/* {children} */}
			</div>
		</div>
	);
}

export default CustomerLayout;
