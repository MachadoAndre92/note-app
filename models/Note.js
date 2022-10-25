const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: [true, 'Insira um Titulo'],
        unique: true,
        trim: true,
        maxlength: [40, 'O titulo não pode conter mais que 40 caracteres']
    },
    description:{
        type: String,
        required: true,
        maxlength: [200, 'A descrição não pode conter mais que 200 caracteres']

    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);
