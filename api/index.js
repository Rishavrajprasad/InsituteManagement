import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import facultysalarylistingRouter from './routes/facultysalarylisting.route.js';
import staffsalarylistingRouter from './routes/staffsalarylisting.route.js';
import messcontractorlistingRouter from './routes/messcontractorlisting.route.js';
import securitycontractorlistingRouter from './routes/securitycontractor.route.js';
import btechfeelistingRouter from './routes/btechfeelisting.route.js';
import bcafeelistingRouter from './routes/bcafeelisting.route.js';
import bbafeelistingRouter from './routes/bbafeelisting.route.js';
import billslistingRouter from './routes/billslisting.route.js';
import purchaselistingRouter from './routes/purchaselisting.route.js';


dotenv.config();


mongoose.connect(process.env.MONGO).then(() => { console.log('Connected to MongoDB'); }).catch((err) => { console.log(err); });
const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Servers running on port 3000 !!!');
});



app.use('/api/user',userRouter); 
app.use('/api/auth',authRouter);
app.use('/api/facultysalarylisting',facultysalarylistingRouter); 
app.use('/api/staffsalarylisting',staffsalarylistingRouter);
app.use('/api/messcontractorlisting',messcontractorlistingRouter);
app.use('/api/securitycontractorlisting',securitycontractorlistingRouter);
app.use('/api/btechfeelisting',btechfeelistingRouter);
app.use('/api/bcafeelisting',bcafeelistingRouter);
app.use('/api/bbafeelisting',bbafeelistingRouter);
app.use('/api/billslisting',billslistingRouter);
app.use('/api/purchaselisting',purchaselistingRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json ({
        success:false,
        statusCode,
        message,
    });

    });



    
