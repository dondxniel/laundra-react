import WalletCard from "../../simple/WalletCard";
function FundWallet() {
	return (
		<div>
			<div className="grid md:grid-cols-3 grid-cols-1 justify-center mt-4">
				<div className="mt-2">
					<WalletCard
						label="Wallet balance"
						amount="₦0.00"
						comment="Tap to deposit into your wallet"
						highlight={true}
					/>
				</div>
				<div className="mt-2">
					<WalletCard label="Last wash bill" amount="₦0.00" />
				</div>
				<div className="mt-2">
					<WalletCard label="Total August bill" amount="₦0.00" />
				</div>
			</div>
		</div>
	);
}

export default FundWallet;
