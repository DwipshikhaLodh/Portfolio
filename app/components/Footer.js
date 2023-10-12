import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
import styles from '../page.module.scss'
import Link from 'next/link'
import { BiSolidPhoneCall } from 'react-icons/bi'

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.contactDetail}>
                <span>
                    <AiTwotoneMail/>
                    <p>lodhdwipshikha@gmail.com</p>
                </span>
                <span>
                    <BiSolidPhoneCall/>
                    <p>6003377948</p>
                </span>
            </div>
            <div className={styles.impLinks}>
                <span>
                    <Link href='https://www.linkedin.com/in/dwipshikha-lodh-8137b91a9'><AiFillLinkedin/></Link>
                    <p>https://www.linkedin.com/in/dwipshikha-lodh-8137b91a9</p>
                </span>
                <span>
                    <Link href='https://github.com/DwipshikhaLodh'><AiFillGithub/></Link>
                    <p>https://github.com/DwipshikhaLodh</p>
                </span>
            </div>
        </div>
    )
}

export default Footer