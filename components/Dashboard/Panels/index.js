import Docentes from './PDocentes';

const panelSelector = {
	docente: <Docentes/>,
};

const Panel = ({ selectedPanel }) => {
	return (
		<>
			{
				panelSelector[selectedPanel] || null
			}
		</>
	);
};

export default Panel;