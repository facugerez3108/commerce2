import jwt from 'jsonwebtoken';
import config from '../config/config';
import Token from '../models/token.model';


const generateToken = async (userId, expires, type, secret) => {
    const payload = {
        sub: userId,
        iat: Date.now(),
        type
    };
    return jwt.sign(payload, secret, { expiresIn: expires });
}


const verifyToken = async (token, secret) => {
    const payload = jwt.verify(token, secret);
    const tokenData = await Token.findOne({ where: { token, userId: payload.sub } });
    if (!tokenData) {
        throw new Error('Token not found');
    }
    return tokenData;
}


const generateAuthTokens = async (userId) => {
    const accessTokenExpires = Date.now() + config.jwt.accessExpirationMinutes * 60 * 1000;
    const accessToken = await generateToken(userId, accessTokenExpires, 'ACCESS', config.jwt.secret);

    const refreshTokenExpires = Date.now() + config.jwt.refreshExpirationDays * 24 * 60 * 60 * 1000;
    const refreshToken = await generateToken(userId, refreshTokenExpires, 'REFRESH', config.jwt.secret);

    return {
        access: {
            token: accessToken,
            expires: accessTokenExpires
        },
        refresh: {
            token: refreshToken,
            expires: refreshTokenExpires
        }
    };
}


const generateResetPasswordToken = async (email) => {

    
}


