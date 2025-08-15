import{ configDotenv } from 'dotenv';
configDotenv();
import express from 'express';
import cors from 'cors';
import CookierParser from 'cookie-parser';
import connectDB from './config/mongodb.config.ts';
import ProtectedEndpoint from './routes/protected.routes.ts';
import AuthEndpoint from './routes/auth.routes.ts';
import PortfolioEndpoint from './routes/portfolio.routes.ts';
import UploadEndpoint from './routes/upload.routes.ts';
import GalleryEndpoint from './routes/gallery.routes.ts';

const app = express();
app.use(CookierParser());
app.use(express.json());



app.use(cors({
    origin: ['http://localhost:3000','https://blackrockvisuals.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}));



await connectDB();


app.use('/apiRoutes/portfolioRoutes', PortfolioEndpoint);
app.use('/apiRoutes/authRoutes', AuthEndpoint);
app.use('/apiRoutes/protectedRoutes', ProtectedEndpoint);
app.use('/apiRoutes/uploadRoutes', UploadEndpoint);
app.use('/apiRoutes/galleryRoutes', GalleryEndpoint);




app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server is running on port ${process.env.BACKEND_PORT}`);
});

