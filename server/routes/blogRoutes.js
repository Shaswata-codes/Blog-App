import express from "express";
import {
  addBlog,
  deleteBlogById,
  getAllBlogs,
  getBlogById,
  togglePublish
} from "../controllers/blogController.js";

import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

// Create blog
blogRouter.post("/add", upload.single("image"), auth, addBlog);

// Get all blogs
blogRouter.get("/", getAllBlogs);

// Get single blog
blogRouter.get("/:blogId", getBlogById);

// Delete blog
blogRouter.delete("/:blogId", auth, deleteBlogById); // ⭐ REST style fix

// Toggle publish
blogRouter.post("/togglePublish/:blogId", auth, togglePublish); // ⭐ param style

export default blogRouter;
