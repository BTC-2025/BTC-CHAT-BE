const {mongoose} = require('mongoose')

const pendingDeliverySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  message: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
}, { timestamps: true });


module.exports = mongoose.model("PendingDelivery", pendingDeliverySchema)