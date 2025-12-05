// import mongoose from "mongoose";
const {mongoose} = require('mongoose')

const messageSchema = new mongoose.Schema({
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", index: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  body: String,
  attachments: [{
    url: String, type: { type: String } // image|file|audio, etc.
  }],
  status: { type: String, enum: ["sent", "delivered", "seen"], default: "sent" }, // 👈 ticks
  deliveredTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  deletedFor: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],           // 👈 delete for me
  deletedForEveryone: { type: Boolean, default: false }                           // 👈 delete for all
}, { timestamps: true });


messageSchema.index({ chat: 1, createdAt: 1 });

// export default mongoose.model("Message", messageSchema);

module.exports = mongoose.model("Message", messageSchema)
