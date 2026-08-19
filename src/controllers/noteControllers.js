const noteModel = require("../models/noteModel");

// BONUS: Search articles by keyword using $text index
//URL: GET /articles/search?q=keyword

const createNote = async (req, res, next) => {
  try {
      const { title, content,  category, tags } = req.body;
    const newNote = new noteModel({
      title,
      content,
      category,
      tags
    });

    await newNote.save();
    return res.status(201).json({
    message: "Note created successfully",
    data : newNote
  });
   
  } catch (error) {
    next(error);
  }
};

// Get all notes (with pagination, sorting, search & category filtering)

const getAllNotes = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, sort, search, q, category } = req.query;
    const query = {};
    // Category Filtering
    if (category) {
      query.category = category;
    }
    // Text Search Filter (Supports "search" or "q")

    const searchString = search || q;
    if (searchString) {
      query.$text = { $search: searchString };
    }
    // Sorting logic (e.g. sort=-createdAt or sort=title)
    let sortOption = {};
    if (sort) {
      const parts = sort.split(",");
      parts.forEach((field) => {
        if (field.startsWith("-")) {
          sortOption[field.substring(1)] = -1;
        } else {
          sortOption[field] = 1;
        }
      });
    } else {
      sortOption = { createdAt: -1 }; // Default: newest first
    }
    // Pagination
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const notes = await noteModel.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNum);

    const totalNotes = await noteModel.countDocuments(query);
    const totalPages = Math.ceil(totalNotes / limitNum);

    res.status(200).json({
      success: true,
      count: notes.length,
      pagination: {
        totalNotes,
        totalPages,
        currentPage: pageNum,
        limit: limitNum,
      },
      data: notes,
    });
  } catch (error) {
    next(error);
  }
};

// Get single note by ID

const getNoteById = async (req, res, next) => {
  try {
    const note = await noteModel.findById(req.params.id);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: `Note not found with id of ${req.params.id}`,
      });
    }
    res.status(200).json({
      success: true,
      message: "Note retrieved successfully",
      data: note,
    });
  } catch (error) {
    next(error);
  }
};

// Update Note
const updateNote = async (req, res, next) => {
  try {
    const note = await noteModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: `Note not found with id of ${req.params.id}`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: note,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a Note
const deleteNote = async (req, res, next) => {
  try {
    const note = await noteModel.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: `Note not found with id of ${req.params.id}`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {createNote, getAllNotes, getNoteById, updateNote, deleteNote};
