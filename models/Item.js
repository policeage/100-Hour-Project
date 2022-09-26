const mongoose = require("mongoose");

const CraftingMaterialSchema = new mongoose.Schema ({
    materialName: String,
    usedIn: {
        itemName: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "item",
            amountNeeded: Number,
        }],
    },
});

const GatheringSchema = new mongoose.Schema ({
    nodeType: {
        type: String,
    },
    nodeWindow: {
        type: Number,
    },
    nodeRequirements: {
        level: {
            type: Number,
        },
        perception: {
            type: Number,
        },
        itemRequirement: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        },
    },
});

const ItemStatSchema = new mongoose.Schema ({
    strength: {
        type: Number,
    },
    dexterity: {
        type: Number,
    },
    vitality: {
        type: Number,
    },
    intelligence: {
        type: Number,
    },
    mind: {
        type: Number,
    },
    criticalHit: {
        type: Number,
    },
    determination: {
        type: Number,
    },
    directHitRate: {
        type: Number,
    },
    attackPower: {
        type: Number,
    },
    skillSpeed: {
        type: Number,
    },
    piety: {
        type: Number,
    },
    tenacity: {
        type: Number,
    },
    craftmanship: {
        type: Number,
    },
    control: {
        type: Number,
    },
    gathering: {
        type: Number,
    },
    perception: {
        type: Number,
    },
    blockStrength: {
        type: Number,
    },
    blockRate: {
        type: Number,
    },
    physicalDamage: {
        type: Number,
    },
    magicalDamage: {
        type: Number,
    },
    autoAttack: {
        type: Number,
    },
    delay: {
        type: Number,
    },
    itemLevel: {
        type: Number,
    },
});

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  craftable: {
    type: Boolean,
    required: true,
  },
  gatherable: {
    type: Boolean,
    required: true,
  },
  craftingMaterials: [CraftingMaterialSchema],
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  gathering: [GatheringSchema],
  itemStats: ItemStatSchema,
  merchant: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Merchant"
  }],
  cloudinaryId: {
    type: String,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
