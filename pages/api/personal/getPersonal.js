import Personal from 'utils/db/models/personal';
import conectarDB from 'utils/db/dbConnect';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default async function handler1(req, res) {
	const { method } = req;

	// DB Connect
	await conectarDB();

	// Get and Post method

	if (method === 'GET') {
		try {
			const personal = await Personal.find();

			res.status(200).json(personal);
		}
		catch (err) {
			res.status(500).json(err);
		}

	}

}