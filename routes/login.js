const express = require('express');
const bcrypt = require('bcrypt');
const { loginAttempt } = require("../database");
const { firstLogin } = require("../database");

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body; // ottaa vastaan email ja salasana
    console.log('LoginAttempt with:', req.body);

    try {
        const password_hash = await loginAttempt(email); // hae salasanan hash

        if (!password_hash) {
            return res.status(401).json({ success: false, message: "Väärä sähköposti tai salasana" });
        }

        const match = await bcrypt.compare(password, password_hash); // vertaillaan salasanaa

        if (match) {
            const first_login = await firstLogin(email);
            return res.status(200).json({ success: true, message: "Kirjautuminen onnistui", isFirstLogin: first_login});
        } else {
            return res.status(401).json({ success: false, message: "Väärä sähköposti tai salasana" });
        }
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ success: false, message: "Palvelinvirhe" });
    }
});

module.exports = router;
