const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    phrases: {
        type: [String],
        required: true
    },
    libs: {
        type: [String],
        required: true
    },
    body: {
        type: [String],
        required: true
    },
    likes: {
        type: Number
    }
    

}, {
    timestamps: true
})

module.exports = mongoose.model('Template', templateSchema);