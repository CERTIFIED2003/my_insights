import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Shubham</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/CERTIFIED2003" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://stackoverflow.com/users/21035210/shubham-lal" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-stack-overflow' style={{ fontWeight: "700", scale: "1.25" }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shubham-lal" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; WeKnewHow Inc. All rights reserved</span>
            </div>
        </footer>
    )
}
