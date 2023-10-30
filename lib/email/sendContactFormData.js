import axios from "axios";
const sendContactFormData = async (data) => {

  const {name, email, subject, message} = data;

  const response = await axios.post('/api/email', {
    name: name,
    email: email,
    subject: subject,
    message: message,
  }).then((response) => {
    console.log("resp:", response);
  })
};

export default sendContactFormData;
