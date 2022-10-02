const mongoose = require("mongoose");

const MerchantSchema = new mongoose.Schema({
  merchantName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  sells: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    price: {
        currencyType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
            amount: Number,
        },
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Merchant", MerchantSchema);
