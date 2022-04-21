/*Building RESTful APIs with the MERN stack
*/

const express = require('express');
const router = express.Router();

//Load Book Model
const Book = require('../../models/Book');

//@route GET api/books/test
//@description tests books route
//@access Public
router.get('/test',(req, resp)=>{
    resp.json('book route testing!');
});



//@route GET api/books
//@description Get all books
//@access Public
router.get('/', (req, resp)=>{
    Book.find()
    .then(books => resp.json(books))
    .catch(err => resp.status(404).json({
        nobooksfound: 'No Books found' 
    }));
});


//@route GET api/books/:id
//@description Get single book by id
//@access Public
router.get('/:id',(req, resp)=>{
    Book.findById(req.params.id)
    .then(books => resp.json(books))
    .catch(err => resp.status(404).json({
        nobookfound: 'No Book found'
    }));
});

//@route POST api/books
//@description add/save book
//@access public
router.post('/', (req, resp)=>{
    Book.create(req.body)
        .then(book => resp.json({ msg: 'Book added successfully' }))
        .catch(err => resp.status(400).json({ error: 'Unable to add this book' }));
});

//@route PUT api/books
//@description update book
//@access public
router.put('/:id', (req, resp)=>{
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => resp.json({ msg: 'Updated successfully' }))
    .catch(err => resp.status(400).json({error: 'Unable to update the Database'}))
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, resp) => {
    Book.findByIdAndRemove(req.params.id, req.body)
      .then(book => resp.json({ mgs: 'Book entry deleted successfully' }))
      .catch(err => resp.status(404).json({ error: 'No such a book' }));
  });

module.exports = router;