const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    answers: {
        type: [Object],
        required: true
    },
    template: {
        type: Object,
        ref: 'Template',
        required: true
    }
    
    

}, {
    timestamps: true
})

module.exports = mongoose.model('Entry', entrySchema);