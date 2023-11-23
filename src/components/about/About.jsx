import React from 'react'
import "./about.css"
import AboutImg from "../../assets/profile.jpeg"
import CV from "../../assets/cv__imane.pdf"
import Info from './Info'
const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">
                My introduction
            </span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">Full Stack Developper,I create web pages with UI / UX user interface,I have months of exeperience and many client are happy with the projects carried out.</p>
                    <a download="" href={CV} className="button button--flex">Download CV
                    <svg width="25px" height="25px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="var(--container-color)" d="m80 38 4.243-4.243A6 6 0 0 0 80 32v6Zm16 16-4.243 4.243A6 6 0 0 0 96 60v-6Zm58 94H38v12h116v-12ZM28 138V54H16v84h12Zm10-94h42V32H38v12Zm37.757-1.757 16 16 8.486-8.486-16-16-8.486 8.486ZM164 70v68h12V70h-12ZM96 60h58V48H96v12Zm-58 88c-5.523 0-10-4.477-10-10H16c0 12.15 9.85 22 22 22v-12Zm116 12c12.15 0 22-9.85 22-22h-12c0 5.523-4.477 10-10 10v12Zm22-90c0-12.15-9.85-22-22-22v12c5.523 0 10 4.477 10 10h12ZM28 54c0-5.523 4.477-10 10-10V32c-12.15 0-22 9.85-22 22h12Z"/></svg>
                   </a>
                </div>
            </div>
        </section>
    )
}

export default About
