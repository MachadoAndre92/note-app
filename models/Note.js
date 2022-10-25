const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema( {
    title: {
        type: String,
        require: [true, 'Insira um Titulo'],
        unic: true,
        trim: true,
        maxLength: [40, 'O titulo não pode conter mais que 40 caracteres']
    },
    description:{
        type: String,
        required: true,
        maxLength: [200, 'A descrição não pode conter mais que 200 caracteres']

    }
})

module.exports = mongoose.model.Note || mongoose.model('Note', NoteSchema);
