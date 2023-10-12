import Image from 'next/image'
import styles from '../page.module.scss'

function ExpCard({ role, company, outline, duration, logo}) {
    return (
        <div className={styles.expBody} data-aos="zoom-in-left">
            <Image src={logo} width={50} height={50} alt='logo'></Image>
            <div className={styles.expCard}>
                <p className={styles.expRole}>{role}</p>
                <p className={styles.expCompany}>{company}</p>
                <ul>
                    {
                        outline.map((list, index) => {
                            return <li key={index}>{list}</li>
                        })
                    }
                </ul>
                <p className={styles.expDuration}>{duration}</p>
            </div>
        </div>
        
    )
}

export default ExpCard