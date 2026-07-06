import "dotenv/config";
import crypto from "crypto";

export const login = (req, res) => {
    try {
        const state = crypto.randomBytes(32).toString("hex");
        const params = new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            scope: "read:user repo",
            state
        });

        res.cookie("oauth_state", state);
        res.redirect(`https://github.com/login/oauth/authorize?${params}`);
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
};

export const callback = async (req, res) => {
    try {
        const { code, state, error } = req.query;
        const savedState = req.cookies.oauth_state;

        if(error) {
            res.status(400).json({error: "GitHub access denied"});
            return res.redirect(`http://localhost:${process.env.FRONTEND_PORT}`);
        }
        if(!code) {
            res.status(400).json({error: "Authorization code required"});
            return res.redirect(`http://localhost:${process.env.FRONTEND_PORT}`);
        }
        if(state !== savedState) {
            res.status(400).json({error: "Invalid state"});
            return res.redirect(`http://localhost:${process.env.FRONTEND_PORT}`);
        }

        res.clearCookie("oauth_state");
        const response = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                code
            })
        });

        if(!response.ok) {
            res.status(500).json({error: "Failed to fetch access token"});
            return res.redirect(`http://localhost:${process.env.FRONTEND_PORT}`);
        }

        const data = await response.json();
        if(data.error) {
            res.status(400).json({error: data.error_description});
            return res.redirect(`http://localhost:${process.env.FRONTEND_PORT}`);
        }
        
        const accessToken = data.access_token;
        if(!accessToken) {
            res.status(500).json({error: "Access token not received"});
            return res.redirect(`http://localhost:${process.env.FRONTEND_PORT}`);
        }

        res.redirect(`http://localhost:${process.env.FRONTEND_PORT}/app/dashboard`);
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "Internal server error"});
    }
};
