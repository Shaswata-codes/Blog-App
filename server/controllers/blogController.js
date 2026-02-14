import fs from "fs";
import mongoose from "mongoose";
import imagekit from "../configs/imagekit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/comment.js";

/* ================= ADD BLOG ================= */
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } =
      JSON.parse(req.body.blog);

    const imageFile = req.file;

    if (!title || !subTitle || !description || !category || !imageFile) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // cleanup temp file
    fs.unlinkSync(imageFile.path);

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image: optimizedImageUrl,
      isPublished,
    });

    return res.status(201).json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    console.error("ADD BLOG ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ================= GET ALL BLOGS ================= */
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });

    return res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET BLOG BY ID ================= */
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID",
      });
    }

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// export const deleteBlogById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid blog ID",
//       });
//     }

//     const deletedBlog = await Blog.findByIdAndDelete(id);

//     if (!deletedBlog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Blog deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete Blog Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };

// export const togglePublish = async (req, res) => {
//   try {
//     const { blogId } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid blog ID",
//       });
//     }

//     const blog = await Blog.findByIdAndUpdate(
//       id,
//       [{ $set: { isPublished: { $not: "$isPublished" } } }],
//       { new: true }
//     );

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Blog publish status updated",
//       isPublished: blog.isPublished,
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export const deleteBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID",
      });
    }

    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    //delete all comments associated with this blog
    await Comment.deleteMany({blog: blogId});

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export const togglePublish = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID",
      });
    }

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // ⭐ simplest toggle
    blog.isPublished = !blog.isPublished;

    await blog.save();

    return res.status(200).json({
      success: true,
      message: "Blog publish status updated",
      isPublished: blog.isPublished,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addComment = async(req, res) =>{
  try {
    const {blog, name, content} = req.body;
    await Comment.create({blog, name, content});
    res.json({success: true, message: "Comment added successfully"})
  } catch (error) {
    res.json({success: false, message: error.message})
  }
}

export const getBlogComments = async (req, res) => {
  try {
    const {blogId} = req.body;
    const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1});
    res.json({success: true, comments})
  } catch (error) {
    res.json({success: false, message: error.message})
  }
}
