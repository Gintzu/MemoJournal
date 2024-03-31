import { memo } from 'react';
import styles from './Logo.module.css';

const LogoComponent = ({ image }) => {
	return <img className={styles.logo} src={image} alt="Логотип журнала" />;
};

export const Logo = memo(LogoComponent);