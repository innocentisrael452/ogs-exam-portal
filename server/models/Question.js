import mongoose from "mongoose";
const schema = new mongoose.Schema({ subjectId: { type: mongoose.Types.ObjectId, ref: "Subject" }, text: String, options: [String], correct_answer: String },{timestamps:true}); export default mongoose.model("Question", schema);
