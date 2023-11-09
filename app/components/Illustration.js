import Image from 'next/image'
import styles from '../page.module.scss'


function Illus() {
    return (
        <div className={styles.illus}>
            <Image alt='design purpose' src="/images/illus1.png" width={200} height={100}></Image>
            <div></div>
            <div></div>
        </div>
    )
}

export default Illus