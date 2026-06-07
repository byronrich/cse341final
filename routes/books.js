const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books");

router.get("/", booksController.getAllBooks);

router.get("/:id", booksController.getBookById);

router.post("/", booksController.createBook);
/* #swagger.tags = ['Books']
   #swagger.description = 'Create a new book'
   #swagger.parameters.body = {
       in: 'body',
       required: true,
       schema: {
           $title: 'The Hobbit',
           $isbn: '9780547928227',
           $publicationYear: 1937,
           $authorId: '6a245d923f08e108ca1e4a28'
       }
   }
*/

router.put("/:id", booksController.updateBook);
/* #swagger.tags = ['Books']
   #swagger.description = 'Update a book'
   #swagger.parameters.id = {
       in: 'path',
       description: 'Book ID',
       required: true,
       type: 'string'
   }
   #swagger.parameters.body = {
       in: 'body',
       required: true,
       schema: {
           $title: 'Updated Book Title',
           $isbn: '9780547928227',
           $publicationYear: 1954,
           $authorId: '6a245d923f08e108ca1e4a28'
       }
   }
*/

router.delete("/:id", booksController.deleteBook);

module.exports = router;
