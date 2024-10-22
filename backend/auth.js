const express = require('express');
const User = require('./models/Users'); 
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = new User({ email, password });
        await newUser.save();
        return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        return res.status(200).json({ token: "dummy-token", message: "Login successful" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
