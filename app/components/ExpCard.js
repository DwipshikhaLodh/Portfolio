import styles from '../page.module.scss'

function ExpCard({ role, company, outline, duration, logo}) {
    return (
        <div className={styles.expBody} data-aos="zoom-in-left">
            <img src={logo} width={50} height={50} alt='logo'></img>
            <div className={styles.expCard}>
                <p className={styles.expRole}>{role}</p>
                <p className={styles.expCompany}>{company}</p>
                <ul>
                    {
                        outline.map(list => {
                            return <li>{list}</li>
                        })
                    }
                </ul>
                <p className={styles.expDuration}>{duration}</p>
            </div>
        </div>
        
    )
}

export default ExpCard