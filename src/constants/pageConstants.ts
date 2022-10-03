export const pageLinks = {
	index: "/",
	signIn: "/sign-in",
	signUp: "/sign-up",
	home: "/home",
	profile: "/profile",
	manageWallet: "/manage-wallet",
	yourDryCleaner: "/your-dry-cleaner",
	history: "/history",
};
export const customerSidebarLinks = [
	{
		label: "Home",
		active:
			window.location.pathname.split("/")[1] ===
			pageLinks.home.split("/")[1],
		link: pageLinks.home,
	},
	{
		label: "Profile",
		active:
			window.location.pathname.split("/")[1] ===
			pageLinks.profile.split("/")[1],
		link: pageLinks.profile,
	},
	{
		label: "Manage Wallet",
		active:
			window.location.pathname.split("/")[1] ===
			pageLinks.manageWallet.split("/")[1],
		link: pageLinks.manageWallet,
	},
	{
		label: "Your Dry Cleaner",
		active:
			window.location.pathname.split("/")[1] ===
			pageLinks.yourDryCleaner.split("/")[1],
		link: pageLinks.yourDryCleaner,
	},
	{
		label: "History",
		active:
			window.location.pathname.split("/")[1] ===
			pageLinks.history.split("/")[1],
		link: pageLinks.history,
	},
];
