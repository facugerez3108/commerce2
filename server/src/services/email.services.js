import nodemailer from 'nodemailer';
import config from '../config/config';
import logger from '../config/logger';


const transport = nodemailer.createTransport(config.email.smtp);

const sendEmail = async (to, subject, html) => {
    const msg = { from: config.email.from, to, subject, html };
    await transport.sendMail(msg);
};


const sendResetPasswordEmail = async (to, token) => {
    const subject = 'Reset password';
    const resetPasswordUrl = `http://localhost:3000/reset-password/${token}`;
    const html = `
    <p>Hi,</p>
    <p>Please click on the following <a href="${resetPasswordUrl}">link</a> to reset your password. </p>
    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
    `;
    await sendEmail(to, subject, html);
}


const sendVerificationEmail = async (to, token) => {
    const subject = 'Email Verification';
    const verificationEmailUrl = `http://localhost:3000/verify-email/${token}`;
    const html = `
    <p>Hi,</p>
    <p>Please click on the following <a href="${verificationEmailUrl}">link</a> to verify your email. </p>
    <p>If you did not request this, please ignore this email.</p>
    `;
    await sendEmail(to, subject, html);
}

export default {
    transport,
    sendEmail,
    sendResetPasswordEmail,
    sendVerificationEmail
}