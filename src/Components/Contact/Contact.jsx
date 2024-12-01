import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setResult("Sending...");

    emailjs
      .sendForm("service_7o2m86v", "template_2ioiv98", form.current, {
        publicKey: "aS7-5xxi_v-3kh54y",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setResult("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          details below. Your feedbacks, questions and suggestions are important
          to us as we strive to provide exceptional service to our university
          community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@ebuka.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            08141771930
          </li>
          <li>
            <img src={location_icon} alt="" />
            46/48 Muyuliu Oshode street <br />
            Ejigbo, Lagos.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form ref={form} onSubmit={sendEmail}>
          <label> Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          ></input>
          <label> Your Mobile Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          ></input>
          <label> Write your message here</label>
          <textarea
            name="messages"
            rows={6}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;


// # Educity - School Website

// Educity is a simple and responsive school website built to showcase the programs offered, provide information about the institution, and offer a way for users to get in touch through a contact form. The site is built using React, HTML, and CSS, and integrates EmailJS to send form submissions to the school's email.

// ## Features

// - **Programs Overview**: Displays the programs offered at Educity, showcasing various academic courses.
// - **About Section**: Provides information about the school's mission, vision, and values.
// - **Campus Photos**: A visual gallery of campus images to give users a feel for the school environment.
// - **Testimonials**: Displays quotes from students or alumni, highlighting their experiences at Educity.
// - **Contact Form**: Allows users to reach out by filling out a form, with submissions sent to the school's email via EmailJS.

// ## Technologies Used

// - **Frontend**:
//   - React.js
//   - HTML
//   - CSS (Plain)
//   - Vite (for faster development and bundling)
// - **Email Service**: EmailJS (for handling form submissions)
// - **Deployment**: Netlify (for hosting the frontend app)

// ## Installation

// ### Prerequisites

// - Node.js (version >= 14.0)
// - npm (Node package manager)

// ### Steps to run the project locally

// 1. **Clone the repository**:

//     ```bash
//     git clone https://github.com/your-username/educityapp.git
//     ```

// 2. **Navigate to the project directory**:

//     ```bash
//     cd educityapp
//     ```

// 3. **Install the required dependencies** using npm or yarn:

//     ```bash
//     npm install
//     ```

//     Or, if you're using Yarn:

//     ```bash
//     yarn install
//     ```

// 4. **Start the development server**:

//     ```bash
//     npm run dev
//     ```

//     Or, with Yarn:

//     ```bash
//     yarn dev
//     ```

// 5. Open your browser and go to `http://localhost:5173` to view the project (Vite uses port `5173` by default).

// ## Deployment

// This project is hosted on **Netlify**. You can deploy it to your own Netlify account by following these steps:

// 1. Fork the repository to your own GitHub account.
// 2. Connect your repository to Netlify via the Netlify dashboard.
// 3. Set up the deployment settings:
//    - **Build Command**: `npm run build`
//    - **Publish Directory**: `dist/`
// 4. Click "Deploy" to deploy the app.

// ## Contact Form

// The contact form uses **EmailJS** to send the user's message to the school's email address. You'll need to set up an EmailJS account and configure the service in the project.

// 1. Go to [EmailJS](https://www.emailjs.com/) and create an account.
// 2. Set up an email service and template on EmailJS.
// 3. Add your **EmailJS service ID**, **template ID**, and **user ID** into the contact form configuration in the project.

// ## Contributing

// Contributions are welcome! If you'd like to contribute to this project:

// 1. Fork the repository.
// 2. Create a new branch (`git checkout -b feature-branch`).
// 3. Make your changes and commit them (`git commit -m 'Add new feature'`).
// 4. Push to the branch (`git push origin feature-branch`).
// 5. Open a pull request.

// ## License

// This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

// ## Acknowledgments

// - Thanks to the tutorial that inspired this project!
// - Special thanks to EmailJS for making it easy to handle form submissions.
