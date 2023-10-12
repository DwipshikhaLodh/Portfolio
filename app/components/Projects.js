import styles from '../page.module.scss'
import Link from 'next/link'
import ProjectCard from './ProjectCard'
import Image from 'next/image'

function Projects() {

    const projects = [
        {
            title : "TruHealth",
            image : "/images/1.png",
            desc : "A medical web application, delivering a range of essential services to streamline healthcare access. This user-friendly platform features online appointment scheduling, email notifications, and online consultation capabilities, ensuring a seamless patient experience. Leveraging a technology stack that includes HTML, CSS, Node.js, Express, MongoDB, and Calendly integration.",
            tech : [ "HTML", "CSS", "Node", "Express", "MongoDB"],
            link : ""
        },
        {
            title : "Star War Movies Application",
            image : "/images/2.png",
            desc : "A web application that provides a comprehensive catalog of Star Wars movies, offering users the ability to favorite and unfavorite their selections. The application is thoughtfully divided into two sections, 'Home' and 'Favorites,' enhancing user experience and accessibility. Additionally, the implementation of both light and dark mode options adds a layer of personalization. Powered by a dynamic technology stack, including React, Tailwind CSS, GraphQL, Node.js, and Express",
            tech : [ "React", "Tailwind", "GraphQL", "Node", "Express"],
            link : ""
        },
        {
            title : "Trinket Store",
            image : "/images/3.png",
            desc : "A captivating jewelry e-commerce website that offers a diverse range of categories, making it effortless for users to browse and select their favorite pieces. This feature-rich platform enables customers to add items to their shopping carts, apply filters to streamline their searches, select quantities, and view comprehensive product details.",
            tech : [" React", "CSS", "Node" , "Express", "MongoDB"],
            link: ""
        }
    ]
    return (
        <div className={styles.projectsContainer} id='project'>
            <p><div></div><span>Projects</span></p>
            <h1>Projects I have worked on</h1>
            <div className={styles.projectIntroContainer}>
                <p className={styles.projectIntro}>In my web development career, I have tackled diverse projects using advanced technologies, each making a significant impact in various fields. From e-commerce platforms to data-driven apps, my work showcases innovation and a passion for unique challenges. With a deep understanding of tech, I bridge vision and reality, continually pushing digital boundaries.</p>
            </div>
            <div className={styles.projects}>
                {
                    projects.map((project, index) => {
                        return <ProjectCard key={index} title={project.title} image={project.image} desc={project.desc} tech={project.tech} link={project.link}/>
                    })
                }
            </div>
            <div className={styles.githubContainer}>
                <p>visit github</p>
                <Link className={styles.github} href='https://github.com/DwipshikhaLodh?tab=repositories'><Image src='/images/github.png' height={200} width={400} alt='github image'></Image></Link>
            </div>
        </div>
    )
}

export default Projects