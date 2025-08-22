import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next)=> {
    try {
        const { token } = req.headers;
    if (!token){
      return res.json({success: false, message: "Not authorized Login again"})
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        return res.json({success: false, message: "Not authorized Login again"});
    }
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: error.message});
    }
    next();
}

export default adminAuth;