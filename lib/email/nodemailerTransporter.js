import nodemailer from 'nodemailer';
import mailConfig from  "../../config/mail.json"

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: mailConfig.transporterOptions.user,
    pass: mailConfig.transporterOptions.password
  }
});

export default transporter;
