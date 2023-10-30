import transporter from "@lib/email/nodemailerTransporter";
import mailTemplate from "@lib/email/mailTemplate";
import mailConfig from "../../config/mail.json"

const sendEmailHandler = async (req, res) =>{

  const {name, email, subject, message} = req.body;

  const mailOptions = {
    from: mailConfig.mailOptions.from,
    to: mailConfig.mailOptions.to,
    subject: subject,
    text: message,
    html: mailTemplate(name, email, subject, message)
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200)
      .json({
        message: 'Email sent successfully',
        info: info.response
      });

  }catch (e) {
    res.status(500)
      .json({
        message: 'Email failed to send',
        error: e
      });
  }
}

export default sendEmailHandler;

