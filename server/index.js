const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const DBConnection = require('./database/db');
const loginRouter = require('./routes/login');
const signUpRouter = require('./routes/signUp');
const restaurantRouter = require('./routes/restaurantRoutes');

const app = express();
const PORT = 8000;
app.use(express.json());

app.use(cors());
app.use('/api', restaurantRouter);

app.get('/', (req, res) => {
    res.send('Server running succesfully');
  });

app.use('/api/login', loginRouter);
app.use('/api/signUp', signUpRouter);




DBConnection();
app.listen(PORT, ()=> console.log(`Server is running on PORT ${8000}`));