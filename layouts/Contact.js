import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";
import Circle from "@components/Circle";
import image from  "./../public/images/contact2.webp";

import {useState} from "react";
import sendContactFormData from "@lib/email/sendContactFormData";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendContactFormData(formData)
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <section className="section">
      <Banner title={title} />
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <div className="about-image relative p-[60px]">
              <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={image}
                  width={425}
                  height={487}
                  alt=""
              />
              <Circle
                  className="top-4 left-4 z-[-1]"
                  width={85}
                  height={85}
              />
              <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="top-20 right-10 z-[-1]"
              />
              <Circle
                  className="top-1/2 right-12 -z-[1]"
                  width={24}
                  height={24}
              />
              <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
              />
              <Circle
                  className="top-1/2 left-12 z-[-1]"
                  width={20}
                  height={20}
              />
              <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
              />
            </div>
          </div>
          <div className="animate lg:col-5">
            <form
              onSubmit={handleSubmit}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Get in touch with us</h2>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-textarea w-full"
                  rows="6"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary block w-full">
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
