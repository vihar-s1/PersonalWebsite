import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.NEXT_PUBLIC_email,
        pass: process.env.NEXT_PUBLIC_password
    }
});

export const mailOptions = {
    from: process.env.NEXT_PUBLIC_email,
    to: process.env.NEXT_PUBLIC_email
};