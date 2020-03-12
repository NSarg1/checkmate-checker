import React from "react";

const CustomButton = ({ className, children, ...otherProps }) => {
	return (
		<button {...otherProps} className={className ? `ns-btn ${className}` : "ns-btn"}>
			{children}
		</button>
	);
};

export default CustomButton;