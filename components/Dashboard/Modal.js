import styled from 'styled-components';
import { Form, Formik, Field } from 'formik';
import { useContext, useEffect, useState } from 'react';

import { sendInfo, delInfo } from 'utils/helpers/calls';
import Close from 'components/Icons/Close';
import Delete from 'components/Icons/Delete';
import { colors } from 'public/theme';
import { ModalContext, DataContext } from 'utils/helpers/context';

const TopDiv = styled.div`
display: flex;
justify-content: right;
`;

const MainDiv = styled.div`
display: flex;
justify-content: center;
`;

const Modal = styled.div`
z-index: 1;
width: 90%;
height: 100%;
display: flex;
position: absolute;
align-items: center;
justify-content: center;
background: rgba(0,0,0,0.5);
visibility: ${props => props.visible === true ? 'visible' : 'hidden'};
`;

const ModalContent = styled.div`
width: 1000px;
height: 700px;
background: white;
border-radius: 10px;
`;

const SForm = styled(Form)`
flex: 0.8;
display: flex;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 2.2rem;
margin-bottom: 2rem;
`;

const Label = styled.label`
font-size: 1.4rem;
margin-bottom: 0.2rem;
`;

const SField = styled(Field)`
width: 18rem;
height: 1.8rem;
margin-bottom: 2rem;
`;

const SendButton = styled.button`
top: 16%;
border: 0;
left: 82%;
width: 10rem;
color: white;
height: 2.6rem;
font-size: 15px; 
position: relative;
border-radius: 6px;
background-color: ${colors.secundario};

&:hover{
  cursor: pointer;
  background-color: #3BC17E;
}

&:active{
	opacity: 0.75;
  background-color: ${colors.secundario};
}
`;

const ModalComponent = ({ activeButton, dataRow }) => {
	const { visible, setVisible } = useContext(ModalContext);
	const { reload, setReload } = useContext(DataContext);
	const [ info, setInfo ] = useState({});

	const handlerDelete = async () => {
		const id = (Object.values(info)[0]);
		const res = await delInfo(id);
		if (res.status == 204) { alert('Se ha elimando el registro'); }
	};

	useEffect(() => {
		setInfo(dataRow);
	}, [dataRow]);

	return (
		<Modal visible={visible}>
			<ModalContent>
				<TopDiv>
					<Close onClick={() => {
						setReload(true);
						setVisible(!visible);
					}}/>
				</TopDiv>
				<MainDiv>
					<Formik
						initialValues={{
							nombre: info ? info.nombre : '',
							apellido: info ? info.apellido : '',
							correo: info ? info.correo : '',
							tipo: info ? info.tipo : '--elegir--',
						}}
						enableReinitialize={true}
						onSubmit = { async (values) => {
							const res = await sendInfo(values);
							if (res.status == 201) { alert('Se ha agregado un nuevo registro'); }
						}}
					>
						<SForm>
							<Title>Información personal</Title>
							<Label>Nombre</Label>
							<SField autoComplete="off" name='nombre' type='text' />
							<Label>Apellidos</Label>
							<SField autoComplete="off" name='apellido' type='text' />
							<Label>Correo Institucional</Label>
							<SField autoComplete="off" name='correo' type='text' />
							<Label>Tipo</Label>
							<SField name='tipo' component='select'>
								<option value="--elegir--">--elegir--</option>
								<option value="Director">Director</option>
								<option value="Profesor">Profesor</option>
								<option value="Administrativo">Administrativo</option>
							</SField>
							<SendButton type='submit'>Guardar</SendButton>
							<Delete type="button" active={activeButton} onClick={handlerDelete} />
						</SForm>
					</Formik>
				</MainDiv>
			</ModalContent>
		</Modal>
	);
};

module.exports = ModalComponent;