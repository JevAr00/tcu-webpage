import mongoose from 'mongoose';

const personalSchema = new mongoose.Schema({
	idP:{ type: mongoose.Schema.Types.ObjectId,
	},
	nombre: {
		type: String,

	},
	apellido:{
		type: String,

	},
	correo:{
		type: String,

	},
	tipo:{
		type: String,

	},
});

personalSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		// returnedObject.id = returnedObject._id.toString();
		// delete returnedObject._id;
		delete returnedObject.__v;

	} });

export default mongoose.models.Personal || mongoose.model('Personal', personalSchema, 'personal');
