import { useState } from "react";
import "./qualification.css";

export default function Qualification() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Journey So Far</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        onClick={() => toggleTab(1)}
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        <span className={toggleState === 1 ? "underline__active" : ""}>Education</span>
                    </div>

                    <div
                        onClick={() => toggleTab(2)}
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        <span className={toggleState === 2 ? "underline__active" : ""}>Experience</span>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* DATA 1 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Game Development</h3>
                                <span className="qualification__subtitle">Taught Myself</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* DATA 2 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">App Development</h3>
                                <span className="qualification__subtitle">Youtube Playlists</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>
                        </div>
                        {/* DATA 3 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineering</h3>
                                <span className="qualification__subtitle">BIT - Kolkata</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* DATA 4 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Udemy Couses</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* DATA 5 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Indie Game Dev</h3>
                                <span className="qualification__subtitle">Casuals4Fun - WeKnewHow Inc.</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* DATA 6 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">App Dev</h3>
                                <span className="qualification__subtitle">Casuals4Fun - WeKnewHow Inc.</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>
                        </div>
                        {/* DATA 7 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Freelance & WeKnewHow Inc.</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* DATA 6 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Backend Dev</h3>
                                <span className="qualification__subtitle">Casuals4Fun - WeKnewHow Inc.</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}