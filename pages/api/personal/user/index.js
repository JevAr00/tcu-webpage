import Personal from 'utils/db/models/personal';
import conectarDB from 'utils/db/dbConnect';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
/*
export default async function handler(req, res) {

	const { method } = req;

	// DB Connect
	conectarDB();

	switch (method) {
	  case 'GET':
		try {
		  const personal = await Personal.find();

		  if (!personal) {
				return res.status(400).json({ success: false });
		  }
		  res.status(200).json({ success: true, data: personal });
		}
		catch (error) {
		  res.status(500).json({ success: false });
		}
		break;

	  case 'PUT':
		try {
		  const personal = await Personal.findByIdAndUpdate(id, req.body, {
				new: true,
				runValidators: true,
		  });
		  if (!personal) {
				return res.status(400).json({ success: false });
		  }
		  res.status(200).json({ success: true, data: personal });
		}
		catch (error) {
		  res.status(400).json({ success: false });
		}
		break;

	  case 'DELETE':
		try {
		  const personal = await Personal.deleteOne({ _id: id });
		  if (!personal) {
				return res.status(400).json({ success: false });
		  }
		  res.status(200).json({ success: true, data: {} });
		}
		catch (error) {
		  res.status(400).json({ success: false });
		}
		break;
	  default:
		res.status(400).json({ success: false });
		break;
	}

	if (method === 'POST') {
		try {
			const personal = await Personal.create(req.body);
			res.status(201).json(personal);
		}
		catch (err) {
			res.status(500).json(err);
		}
	}
}*/


async function handler1(req, res) {
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
	if (method === 'POST') {
		try {
			const personal = await Personal.create(req.body);
			res.status(201).json(personal);
		}
		catch (err) {
			res.status(500).json(err);
		}
	}

}


export default withApiAuthRequired(async function handler(req, res) {
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
	if (method === 'POST') {
		try {
			const personal = await Personal.create(req.body);
			res.status(201).json(personal);
		}
		catch (err) {
			res.status(500).json(err);
		}
	}
});