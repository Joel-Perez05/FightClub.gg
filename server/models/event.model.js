const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Event name is required."],
    },
    game: {
        type: String,
        required: [true, "Event game is required"]
    },
    startDate: {
        type: String,
        required: [true, "Event date is required"]
    },
    endDate: {
        type: String,
        required: [true, "Event date is required"]
    },
    description: {
        type: String,
        required: [true, "Event description is required"]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}, {timestamps: true});

module.exports = mongoose.model("Event", EventSchema);