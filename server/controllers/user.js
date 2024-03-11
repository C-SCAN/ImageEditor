const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');


const app = express();
// app.use(express.json());
app.use(bodyParser.json());


exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser || existingUser.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { userId: existingUser._id, email: existingUser.email },
            'secret', // Replace with your actual secret key
            { expiresIn: '1h' }
        );

        res.status(200).json({ userId: existingUser._id, email: existingUser.email, token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.signUp = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            'secret', // Replace with your actual secret key
            { expiresIn: '1h' }
        );

        res.status(201).json({ userId: newUser._id, email: newUser.email, token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

