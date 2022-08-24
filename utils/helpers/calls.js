import axios from 'axios';

export async function getInfo() {
	const { data } = await axios.get('api/personal/getPersonal');
	return data;
}

export async function sendInfo(object) {
	const res =	await axios.post ('api/personal/post', { nombre: object.nombre, apellido: object.apellido, correo: object.correo, tipo: object.tipo });
	return res;
}

export async function delInfo(id) {
	const res = await axios.delete(`api/personal/delete/${id}`);
	return res;
}