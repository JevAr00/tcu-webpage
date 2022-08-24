import Personal from 'utils/db/models/personal';
import conectarDB from 'utils/db/dbConnect';
import mongoose from 'mongoose';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function Post(req, res) {
	const { nombre, apellido, correo, tipo } = req.body;
	const id = new mongoose.Types.ObjectId();

	const user = new Personal({
		idP: id,
		nombre: nombre,
		apellido: apellido,
		correo: correo,
		tipo: tipo,
	});

	// DB Connect
	await conectarDB();

	try {
		const newPersonal = await user.save();
		res.status(201).json(newPersonal);
	}
	catch (err) {
		res.status(500).json(err);
	}
});