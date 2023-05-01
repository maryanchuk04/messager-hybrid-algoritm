import React from 'react';

export default function TextField({ placeholder, required, className, type, onChange }) {
	return (
		<input
			className={`active:border-none  w-full static active:border-primaryAuthentication focus:border-primaryAuthentication text-[#506466] my-3 outline-none h-10 px-3 py-1 font-normal rounded-xl border-solid border-2 placeholder:decoration-[#A0A9AB] text-base border-[#D1D7D4] ${className}`}
			type={type}
			placeholder={placeholder}
			required={required}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
}
