import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';

const app = express();

await connectDB();

//middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

//home route
app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use('/api/admin', adminRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
export default app;