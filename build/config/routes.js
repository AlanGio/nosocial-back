import express from 'express';
const router = express.Router();
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json();
import posts_controller from '../controllers/posts_controller.js';
router.post('/posts', jsonParser, posts_controller.wrapped_method(posts_controller.post));
router.get('/posts', posts_controller.wrapped_method(posts_controller.index));
export default router;
