import express from "express";
import {
  addBlog,
  addComment,
  deleteBlogById,
  generateContent,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublish
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();
blogRouter.post("/add", upload.single("image"), auth, addBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.delete("/:blogId", auth, deleteBlogById);
blogRouter.post("/togglePublish/:blogId", auth, togglePublish);
blogRouter.post("/addComment", addComment);
blogRouter.post("/getComments", getBlogComments);
blogRouter.post("/generateContent", generateContent);

export default blogRouter;
