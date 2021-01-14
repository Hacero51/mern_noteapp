const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNotes = async (req,res)=>{
        const { title, content, date, author } = req.body;
        const newNote = new Note({
        title,
        content,
        date,
        author
        });
        await newNote.save();
        res.json('New Note save');
};

notesCtrl.getNote = async (req,res)=>{
    const note = await Note.findById(req.params.id);
    res.json(note);
};

notesCtrl.deleteNotes = async (req,res)=>{
    await Note.findOneAndDelete(req.params.id);
    res.json('Delete Note');
};

notesCtrl.updateNotes = async (req,res)=>{
    const { title, content, duration, date, author } = req.body;
    await Note.findOneAndUpdate(req.params.id,{
        title,
        content,
        duration,
        author
    });
    res.json('Update Note');
};

module.exports = notesCtrl;