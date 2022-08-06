import Personal from 'utils/db/models/personal';
import conectarDB from 'utils/db/dbConnect';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

// falta ponerle withApiAuthRequired
export default async function handler(req, res) {
	const { id } = req.query;

	// DB Connect
	await conectarDB();

	// Post method


	try {

		const personal = await Personal.findByIdAndDelete(id);
		res.status(200).json({ status:borrado });

	}
	catch (err) {
		res.status(500).json(err);
	}


};
