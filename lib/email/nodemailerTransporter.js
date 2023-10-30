import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'autonomous.curt.fs@gmail.com',
    pass: 'tqhm xtpf sgvq wlzc'
  }
});

export default transporter;
