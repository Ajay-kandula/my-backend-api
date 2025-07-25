require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Message=require('./Model/message')
const connectDB=require('./Config/db')

const app = express();
connectDB();

app.use(cors({
  origin: 'https://protfolio-ashen-one.vercel.app', 
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());


app.post('/send', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const msg = await Message.create({ name, email, message });
    res.json({ success: true, data: msg });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


  app.listen(5000, () => {
    console.log('Backend running on https://my-backend-api-3-crp2.onrender.com');
  });

