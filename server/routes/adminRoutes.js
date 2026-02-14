import express from 'express';
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';

const adminRouter = express.Router();

adminRouter.post('/login',adminLogin);
adminRouter.get('/comments', auth, getAllComments);
adminRouter.get('/blogs', auth, getAllBlogsAdmin);
adminRouter.post('/deleteComment', auth, deleteCommentById);
adminRouter.post('/approveComment', auth, approveCommentById);
adminRouter.get('/dashboard', auth, getDashboard);

export default adminRouter;
