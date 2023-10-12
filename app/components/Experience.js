import styles from '../page.module.scss'
import ExpCard from './ExpCard'


function Experience() {

    const exps = [
        {
            role: "Web Developer Intern",
            company : "CDAC, Silchar, Assam",
            mode: "Offline",
            outline : [
                "Collaborated with a team to design and build a course website for CDAC Silchar.",
                "Developed the website with a focus on user-friendly design.",
                "Worked closely with team members to ensure a seamless user experience & worked closely with team members to ensure a seamless user experience."
            ],
            duration : "Aug 2022 - Oct 2022",
            logo : "/images/cdaclogo.png"
        },
        {
            role: "Contributer",
            company: "GirlScript Winter of Contribution",
            mode: "Online",
            outline: [
                "Participated in an open-source program with the world's largest multilingual repository.",
                "Demonstrated expertise in coding and algorithm concept & successfully had five pull requests (PRs) merged into the repository.",
                "Actively collaborated with a large community of developers and mentors & gained valuable experience in open-source development, honing skills in collaborative coding, version control, and coding standards."
            ],
            duration: "Sept 2021 - Nov 2021",
            logo: "/images/gswoclogo.png"
        }
    ]
    return (
        <div className={styles.expContainer} id='experience'>
            <p><div></div><span>Experience</span></p>
            <h1>My Previous Experiences</h1>
            <div className={styles.expCardContainer}>
            {
                exps.map(exp => {
                    return <ExpCard role={exp.role} company={exp.company} outline={exp.outline} duration={exp.duration} logo={exp.logo}/>
                })
            }
            </div>
        </div>
            
    )
}

export default Experience