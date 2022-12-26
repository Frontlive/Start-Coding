type TextProps = {
	children: string;
};

export const Text = ({ children }: TextProps) => {
	return (
		<p className="text-black bg-green-400 px-3 py-2 rounded-md">{children}</p>
	);
};
