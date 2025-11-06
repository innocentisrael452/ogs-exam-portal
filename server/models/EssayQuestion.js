import mongoose from "mongoose";
const EssayQuestionSchema = new mongoose.Schema({ subjectId: { type: mongoose.Types.ObjectId, ref: "Subject" }, title: String, instruction: String, content: String, maxScore: { type: Number, default: 30 }, createdAt: { type: Date, default: Date.now } }); export default mongoose.model("EssayQuestion", EssayQuestionSchema);
