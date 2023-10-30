import transporter from "@lib/email/nodemailerTransporter";
import mailTemplate from "@lib/email/mailTemplate";
import mailConfig from "../../config/mail.json"

const sendEmailHandler = async (req, res) =>{

  const {name, email, subject, message} = req.body;

  const mailOptionsForUs = {
    from: mailConfig.mailOptionsForUs.from,
    to: mailConfig.mailOptionsForUs.to,
    subject: `New CURT-FS Contact Message: ${subject}`,
    text: message,
    html: mailTemplate({name, email, subject, message})
  };

  const mailOptionsForUser = {
    from: mailConfig.mailOptionsForUser.from,
    to: email,
    subject: `We have got your message about ${subject}!`,
    text: `Hi ${name},\n\nThank you for contacting us. We will get back to you as soon as possible.\n\nBest Regards,\n CURT-Formula Student`,
    html: mailTemplate({name, subject, message})
  };


  try {
    const infoForOurMail = await transporter.sendMail(mailOptionsForUs);
    const infoForUserMail = await transporter.sendMail(mailOptionsForUser);

    res.status(200)
      .json({
        message: 'Email sent successfully',
        ourInfo: infoForOurMail.response,
        userInfo: infoForUserMail.response
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

