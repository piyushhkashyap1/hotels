const jwt = require('jsonwebtoken')

const jwtAuthMiddleware = (req, res, next) => {
    // first check the rquest header has authorization or not 
    const authorization = req.headers.authorization
    if(!authorization) return res.status(401).json({error:'Token Not Found'})
    
    // extarct the jwt toekn from the request headers
    const token = req.headers.authorization.split('')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' })

    try {
        const decoded = jwt.verifty(token, process.env.JWT_SECRET, { expiresIn: 30000 })

        req.user = decoded
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ error: 'Invalid token' })
    }
}

const generateToken = (userData) => {
    // generate new jwt token using user data
    return jwt.sign(userData, process.env.JWT_SECRET);
}
module.exports = { jwtAuthMiddleware, generateToken }
