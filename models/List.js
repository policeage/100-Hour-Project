const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  listName: {
    type: String,
    required: true,
  },
  listType: {
    gathering: {
      type: Boolean,
      required: true,
    },
    crafting: {
      type: Boolean,
      required: true,
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  listItems: [
    {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      itemAdded: {
        type: Date,
        default: Date.now,
        immutable: true,
      },
    },
  }
],
});

module.exports = mongoose.model("List", ListSchema);
