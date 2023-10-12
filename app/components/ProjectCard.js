import Image from 'next/image'
import styles from '../page.module.scss'
import Link from "next/link"
import { BiLinkAlt } from 'react-icons/bi'

function ProjectCard({ image, title, desc, tech, link}) {
    return (
        <div className={styles.projectCard }>
            <Image className={styles.image} src={image} alt="project image" height={200} width={200}></Image>
            <div className={styles.linkContainer}>
            <Link className={styles.link} href={link}><BiLinkAlt/></Link> 
            </div>
            <p>{title}</p>
            <div className={styles.desc}>
                    {desc}
            </div>
        </div>
    )
}

export default ProjectCard