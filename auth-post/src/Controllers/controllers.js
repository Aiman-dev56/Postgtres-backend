const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const regUser = async (req, res) => {
    try {
const {username, email, password } = req.body;

if(!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });

}

const existingUser = await pool.query(
    "SELECT * FROM users WHERE email = $1", [email] 
);

if(existingUser.row.length > 0) {
    return res.status(409).json({
        message: "User already exists",
    });
}

const hashedPassword = await bcrypt.hash(password, 10);

const result = await pool.query(
    `INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING user_id, username, email, created_at
    `,
    [username, email, hashedPassword]
);
res.status(201).json({
    message: "User registered successfully",
    user: result.rows[0],
});
    }
    catch(error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error",
        });

    }
};



const loginUser = async (req, res) => {
    try{
        const { email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1", [email]
        );

        if(result.rows.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const user = result.rows[0];

        const isPasswordValid = await bcrypt.compare(password, user.passsword);

        if(!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            {
                user_id: user.user_id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                epiresIn: "1h",
            }
        );

        res.status(200).json({
            message: "Login Sucessful",
            token,
            
                user: {
                    user_id: user.user_id,
                    name: user.username,
                    email: user.email,
                },
            });
    } catch(error){
        console.error(error);

        res.status(500).json({
            message: "Server error",
        });
    }
};

module.exports ={
    regUser,
    loginUser,
};