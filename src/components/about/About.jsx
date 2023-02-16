import "./about.css";
import AboutImg from "../../assets/about.jpg";
import ResumePdf from "../../assets/Resume-Shubham-Lal.pdf";
import FilesSVG from "../../assets/files.svg";
import Info from "./Info";

export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Insights</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="Shubham-Second" className="about__img" />
                <p className="about__hobby">
                    Full-Stack Developer | Game Dev | Software Programmer | App Developer
                </p>
                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        <span className="about__hobbies">Full-Stack Developer | Game Dev | Software Programmer | App Developer</span>
                        <span>I start my day reading newspaper in the morning, a few hours later dive into Game development for couple of hours and work on Websites all day along.</span>
                        At night, I practise some problems on Leetcode and Codeforces on the topics related to Data Structure and work out on some algorithm.
                    </p>

                    <a href={ResumePdf} className="button button--flex" target="_blank" rel="noopener noreferrer" >
                        My Resume
                        <img src={FilesSVG} className="button__icon" alt="" />
                    </a>
                </div>
            </div>
        </section >
    )
}
