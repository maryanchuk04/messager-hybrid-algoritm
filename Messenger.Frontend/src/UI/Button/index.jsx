import React from 'react';

function Button({ children, className, type = 'button', disabled = false, onClick, ...custom }) {
	return (
		<button
			className={`disabled:opacity-50 px-4 py-2 border rounded-lg font-medium hover:opacity-90 duration-200 ${className}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
			{...custom}
		>
			{children}
		</button>
	);
}
export default Button;
