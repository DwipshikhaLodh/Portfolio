import Link from "next/link"
import {BsArrowUpCircle} from 'react-icons/bs'
import styles from '../page.module.scss'

function ScrollUp() {
    return (
        <div className={styles.scrollUpContainer}>
            <Link className={styles.scrollUpWrap} href= '#intro'><BsArrowUpCircle className='scroll-up'/></Link>
        </div>
    )
}

export default ScrollUp