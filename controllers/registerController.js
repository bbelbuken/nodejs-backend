const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd)
        return res
            .status(400)
            .json({ message: 'Username and password are required' });

    // ? check for duplicated username using mongoose
    const duplicate = await User.findOne({ username: user }).exec(); // * findOne needs exec(). check documentation
    if (duplicate) return res.sendStatus(409); //conflict

    try {
        // * encrypt the password
        const hashedPassword = await bcrypt.hash(pwd, 10); // 10 is salting

        // * create and store the new user ALL IN ONCE
        const result = await User.create({
            username: user,
            password: hashedPassword,
            // * objectID will automatically be created
            // * role will automatically be created bc we did it in User.js
        });
        console.log(result);

        res.status(201).json({ success: `New user ${user}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { handleNewUser };
