import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{string, required:true},
    subTitle:{string},
    description : {type:string, required:true},
    category: {type:string, required:true},
    image:{type:string, required:true},
    isPublished:{type:boolean, required:true},
},{timestamps:true});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;