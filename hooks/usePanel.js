import { useState } from 'react';

const usePanel = () => {
	const [panel, setPanel] = useState(null);

	const selectPanel = (param) => {
		if (panel !== param) {
			setPanel(param);
		}
		else {
			setPanel(null);
		}
	};

	return {
		panel,
		selectPanel,
	};
};

export default usePanel;