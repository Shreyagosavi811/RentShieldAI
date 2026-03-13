const User = require("../models/User.js");
const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await brcypt.genSalt(10);
        const hashedPassword = await brcypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone
        });

        // generate token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(201).json({
            message: "User registered successfully",
            token,
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

const LoginUser = async (req, res) => {
    try {
        const { phone, email, password } = req.body;
        if (!email && !phone) {
            return res.status(400).json({ message: "Email or phone required" })
        }

        const user = await User.findOne({
            $or: [{ email }, { phone }]
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login successful",
            token,
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export {
    registerUser,
    LoginUser,
}