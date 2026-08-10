export const dashboard = (req, res) => {
    res.json({
        message: "Welcome",
        user: req.user
    });
};