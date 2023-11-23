import React, { useState } from 'react'
import "./qualification.css"
const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qaulification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">
                My personel journey
            </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button  button--flex"
                        }
                        onClick={()=>toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap qualification__icon">Education</i>
                    </div>

                    <div className={toggleState === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button  button--flex"}
                        onClick={()=>toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt qualification__icon">Experience</i>
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState=== 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content "}>
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">WEB Full Stack et Devops</h3>
                                <span className="qualification__subtitle">Université Hassan 1er  - FST SETTAT

                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2022-2023</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualiication__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualiication__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">technicien spécialisé en Développement Informatiques </h3>
                                <span className="qualification__subtitle">Institut Supérieur des Techniques Informatiques, Commerce et Gestion</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2019-2021</i>
                                </div>
                            </div>

                        </div>


                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title"> Baccalauréat option Science physique</h3>
                                <span className="qualification__subtitle">Lycée Ibn Rochd, Berrechid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2018 – 2019</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualiication__line"></span>
                            </div>
                        </div>


                    </div>

                    {/*  */}

                    <div className={toggleState=== 2
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content "}>
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Développeur full stack: stage</h3>
                                <span className="qualification__subtitle">à R&T System

                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">Avril 2023 – juin 2023</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualiication__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualiication__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Développeur frontend:  stage  </h3>
                                <span className="qualification__subtitle">UX Centres</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">stage à UX Centres</i>
                                </div>
                            </div>

                        </div>
                        <div className="qualification__data">
                           
                          

                            <div>
                                <h3 className="qualification__title">Stage d’initiation  </h3>
                                <span className="qualification__subtitle">Crown Solution</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">Janvier 2022 ─ mars 2022 </i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualiication__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualiication__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Stage de fin de formation</h3>
                                <span className="qualification__subtitle">Pharmacie Yasmina </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">Avril 2021 ─ Mai 2021 </i>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
