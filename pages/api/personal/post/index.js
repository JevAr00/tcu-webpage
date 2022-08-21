import Personal from 'utils/db/models/personal';
import conectarDB from 'utils/db/dbConnect';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import personal from 'utils/db/models/personal';

import mongoose from 'mongoose';


export default withApiAuthRequired(async function handler(req, res) {
	const { nombre, apellido, correo, tipo } = req.body;
	const newid = new mongoose.Types.ObjectId();
	const user = new personal({

		idP: newid,
		nombre: nombre,
		apellido: apellido,
		correo: correo,
		tipo: tipo,
	});


	// DB Connect
	await conectarDB();

	// Post method

	console.log(req.body);

	try {
		const newpersonal = await user.save();
		res.status(201).json(newpersonal);
	}
	catch (err) {
		res.status(500).json(err);
	}

});