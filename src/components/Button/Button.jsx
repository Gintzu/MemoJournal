import { memo } from 'react';
import './Button.css';

const ButtonComponent = ({ children, onClick }) => {
	return (
		<>
			<button className="button accent" onClick={onClick}>
				{children}
			</button>
		</>
	);
};
export const Button = memo(ButtonComponent);
