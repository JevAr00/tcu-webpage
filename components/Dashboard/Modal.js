import styled from 'styled-components';
import { colors } from 'public/theme';
import Close from 'components/Icons/Close';
import Delete from 'components/Icons/Delete';
import { ModalContext } from 'utils/helpers/context';
import { useContext, useEffect, useState } from 'react';
import { Form, Formik, Field } from 'formik';
import axios from 'axios';

const TopDiv = styled.div`
display: flex;
justify-content: right;
`;

const MainDiv = styled.div`
display: flex;
justify-content: center;
`;

const Modal = styled.div`
visibility: ${props => props.visible === true ? 'visible' : 'hidden'};
display: flex;
position: absolute;
width: 90%;
height: 100%;
background: rgba(0,0,0,0.5);
justify-content: center;
align-items: center;
z-index: 1;
`;

const ModalContent = styled.div`
width: 1000px;
height: 700px;
border-radius: 10px;
background: white;
`;

const SForm = styled(Form)`
display: flex;
flex-direction: column;
flex: 0.8;
`;

const Title = styled.h1`
font-size: 2.2rem;
margin-bottom: 2rem;
`;

const Label = styled.label`
margin-bottom: 0.2rem;
font-size: 1.4rem;
`;

const SField = styled(Field)`
width: 18rem;
height: 1.8rem;
margin-bottom: 2rem;
`;

const SendButton = styled.button`
width: 10rem;
height: 2.6rem;
font-size: 15px; 
position: relative;
top: 16%;
left: 82%;
border: 0;
border-radius: 6px;
background-color: ${colors.secundario};
color: white;

&:hover{
  cursor: pointer;
  background-color: #3BC17E;
}

&:active{
  background-color: ${colors.secundario};
  opacity: 0.75;
}
`;

const ModalComponent = ({ activeButton, dataRow }) => {
	const { visible, setVisible } = useContext(ModalContext);
	const [ info, setInfo ] = useState({});

	const handlerDelete = async (id) => { await axios.delete(`api/personal/delete/${id}`);};
	console.log(dataRow);
	useEffect(() => {
		setInfo(dataRow);
	}, [dataRow]);

	return (
		<Modal visible={visible}>
			<ModalContent>
				<TopDiv>
					<Close onClick={() => { setVisible(!visible);} }/>
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
						onSubmit = { (values) => {

							(async () => {

								const res =	await axios.post ('api/personal/post', { nombre:values.nombre, apellido:values.apellido, correo:values.correo, tipo:values.tipo });

								if (res.status == 201) {alert('agregado');}
							})();


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
								<option value="Miscelanio">Miscelanio</option>
							</SField>
							<SendButton type='submit'>Guardar</SendButton>
							<Delete type="button" active={activeButton} onClick={() => {handlerDelete;}} />
						</SForm>
					</Formik>
				</MainDiv>
			</ModalContent>
		</Modal>
	);
};

module.exports = ModalComponent;