type ButtonProps = {
	children: string;
};

export const Button = ({ children }: ButtonProps) => {
	return (
		<button className="text-black bg-purple-400 px-3 py-2 rounded-md">
			{children}
		</button>
	);
};
