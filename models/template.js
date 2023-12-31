const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title:{
        type: String
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
        type: [Object],
        required: true
    },
    likes: {
        type: Number
    }
    

}, {
    timestamps: true
})

module.exports = mongoose.model('Template', templateSchema);