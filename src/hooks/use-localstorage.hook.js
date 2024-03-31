import { useState } from 'react';
import { useEffect } from 'react';

export function useLocalStorage(key) {
	const [data, setData] = useState();

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		if (res && typeof res === 'object') {
			setData(res);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(data));
		setData(newData);
	};

	return [data, saveData];
}
