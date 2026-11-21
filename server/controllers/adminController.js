import  jwt  from "jsonwebtoken";
import Blog from "../models/blog.js";
import Comment from "../models/comment.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

// export const adminLogin = (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
//             return res.json({success:false, message: "Invalid Credentials" });
//         }
//         const token = jwt.sign({email}, process.env.JWT_SECRET);
//         res.json({success:true, token});
//     } catch (error) {
//         res.json({success:false, message:error.message});
//     }
// }
// export const adminLogin = (req, res) => {
//   const { email } = req.body;

//   const token = jwt.sign(
//     { email },
//     process.env.JWT_SECRET
//   );

//   res.json({ success: true, token });
// };
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const adminEmail = process.env.ADMIN_EMAIL || process.env.ADMIN_EMAIl;
    const adminPass = process.env.ADMIN_PASSWORD;

    if (adminEmail && adminPass && email === adminEmail && password === adminPass) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET);
      return res.json({ success: true, token });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.json({ success: true, token });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.json({ success: true, token });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getAllBlogsAdmin = async (req, res) => {
    try {
        const blogs = await Blog.find({}).sort({createdAt: -1});
        res.json({success:true, blogs});
    } catch (error) {
        res.json({success:false, message:error.message});
    }
}

export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({}).populate("blog").sort({createdAt: -1});
        res.json({success:true, comments});
    } catch (error) {
        res.json({success:false, message:error.message});
    }
}

export const getDashboard = async (req, res) =>{
    try {
        const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
        const blogs = await Blog.countDocuments();
        const comments = await Comment.countDocuments();
        const drafts = await Blog.countDocuments({isPublished: false})

        const dashboardData = {
            blogs, comments, drafts, recentBlogs
        }
        res.json({success: true, dashboardData})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const deleteCommentById = async (req, res) => {
    try {
        const { id } = req.body;
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.json({ success: false, message: "Comment not found" });
        }
        res.json({ success: true, message: "Comment deleted successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const approveCommentById = async (req, res) => {
    try {
        const {id} = req.body;
        await Comment.findByIdAndUpdate(id, {isApproved: true});
        res.json({success: true, message: "Comment approred success"})
    } catch (error) {
        
    }
}