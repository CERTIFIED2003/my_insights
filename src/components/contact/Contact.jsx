import "./contact.css";
import Send from "../../assets/send.svg";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { Oval } from 'react-loading-icons';
import { Checkmark } from 'react-checkmark';

export default function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(0);
    const [nameVal, setNameVal] = useState("");
    const [emailVal, setEmailVal] = useState("");
    const [projectVal, setProjectVal] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        const emailVerify = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailVerify.test(emailVal)) {
            if (nameVal !== "" && emailVal !== "" && projectVal !== "") {
                setLoading(1);
                emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
                    .then(() => {
                        setLoading(2);
                    }, (error) => {
                        console.log(error.text);
                    });
            }
        }
        else {
            // Incorrect Email
        }
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact</h2>
            <span className="section__subtitle">Get in Touch with me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk with me</h3>

                    <div className="contact__info">
                        {/* CARD 1 */}
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">new.shubhamlal@gmail.com</span>

                            <a href="mailto:new.shubhamlal@gmail.com" className="contact__button">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        {/* CARD 2 */}
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+91 91631 61834</span>

                            <a
                                href="https://api.whatsapp.com/send?phone=9163161834&text=Namaste Shubham"
                                className="contact__button">

                                Chat
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        {/* CARD 3 */}
                        <div className="contact__card">
                            <i className="bx bxl-github contact__card-icon"></i>

                            <h3 className="contact__card-title">Github</h3>
                            <span className="contact__card-data">CERIFIED2003</span>

                            <a href="https://github.com/CERTIFIED2003/DISCUSSIONS/issues/1" className="contact__button" target="_blank" rel="noopener noreferrer">
                                Discuss
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form className="contact__form" ref={form}>
                        {/* INPUT 1 */}
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Say your Name"
                                onChange={(e) => setNameVal(e.target.value)}
                            />
                        </div>
                        {/* INPUT 2 */}
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Enter your Email"
                                onChange={(e) => setEmailVal(e.target.value)}
                            />
                        </div>
                        {/* INPUT 3 */}
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                name="project"
                                cols="30"
                                rows="10"
                                className="contact__form-input scrollbar"
                                placeholder="Write your project here"
                                onChange={(e) => setProjectVal(e.target.value)}
                            />
                        </div>
                        <button href="#contact" className="button button--flex" disabled={loading === 2 ? true : false} onClick={(e) => sendEmail(e)}>
                            {loading === 0 ?
                                <>
                                    <span>Share</span>
                                    <img src={Send} height={24} width={24} className="button__icon" alt="" />
                                </>
                                : loading === 1 ?
                                    <Oval stroke="#fff" height={25} width={25} />
                                    : loading === 2 ?
                                        <Checkmark color="#111" size="25px" />
                                        : ""
                            }
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}