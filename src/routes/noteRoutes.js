const express = require("express");
const router = express.Router();

const {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
} = require("../controllers/noteControllers.js");

const  {createNoteValidator,updateNoteValidator} = require("../middlewares/noteValidators.js");
 
router.post("/",createNoteValidator,createNote);
router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.put("/:id",updateNoteValidator,updateNote);
router.delete("/:id",deleteNote );

module.exports = router;