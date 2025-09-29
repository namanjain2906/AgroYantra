import mongoose from "mongoose";

const cropsSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String },
	description: { type: String },
	// Add more fields as needed
});

const Crops = mongoose.model("Crops", cropsSchema);
export default Crops;
