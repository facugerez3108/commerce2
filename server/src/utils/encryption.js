import bcrypt from 'bcryptjs';

export const encryptPassword = async (password) => {
    const encryptedPassword = await bcrypt.hash(password, 8);
    return encryptedPassword;
}

export const isPasswordMatched = async (password, hashedPassword) => {
    const isMatched = await bcrypt.compare(password, hashedPassword);
    return isMatched;
}

