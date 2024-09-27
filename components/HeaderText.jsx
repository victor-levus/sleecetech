import React from "react";

const HeaderText = ({ children, twColor = "text-app-color2" }) => {
	return (
		<h1
			className={`font-dancing text-center capitalize text-6xl font-extrabold mb-10 bg-clip-text ${twColor}`}
		>
			{children}
		</h1>
	);
};

export default HeaderText;
