import fs from "fs";
import imagekit from "../configs/imagekit.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } =
        JSON.parse(req.body.blog);

    const imageFile = req.file;

    if (!title || !subTitle || !description || !category || !imageFile) {
        return res.json({ message: "All fields are required" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imagekit.upload({
        file: fileBuffer,
        fileName: imageFile.originalname,
        folder: "/blogs",
    });

    const optimizedImageUrl = imagekit.url({
        path: response.filePath,
        transformation: [
            { quality: "auto" },
            { format: "webp" },
            { width: "1280" },
        ],
    });

    const image = optimizedImageUrl;

    await Blog.create({
        title,
        subTitle,
        description,
        category,
        image,
        isPublished,
    });

    res.json({ success: true, message: "Blog added successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
