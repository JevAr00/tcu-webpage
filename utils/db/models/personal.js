import mongoose from 'mongoose';

const personalSchema = new mongoose.Schema({
	id:{},
	nombre: {
		type: String,
		required: [true, ''],
	},
	apellido:{
		type: String,
		required: [true, ''],
	},
	correo:{
		type: String,
		required: [true, ''],
	},
	tipo:{
		type: String,
		required: [true, ''],
	},
});

export default mongoose.models.Personal || mongoose.model('Personal', personalSchema);
