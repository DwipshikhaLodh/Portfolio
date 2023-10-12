'use client'
import Image from 'next/image';
import styles from '../page.module.scss'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

function Intro() {
    return (
        <div className={styles.introbody}>
            <div className={styles.bio}>
                <h1><TypeAnimation
                sequence={[
                    'Hello!! I am Dwipshikha',
                    1000,
                    'Hello!! I am a Web Developer',
                    1000,
                    'Welcome to my portfolio',
                    1000
                ]}
                speed={50}
                style={{ fontSize: '35px' }}
                repeat={Infinity}
                /></h1>
                <p>
                As a computer science graduate with a flair for web development, I fuse cutting-edge tech with creativity. My work thrives on crafting exceptional digital experiences, all while staying along with industry trends. Let us build the future of web together.
                </p>
                <div>
                    <Link className={styles.hireBTN} href='#contactme'>Hire Me</Link>
                    
                    <a href='/images/resume.png' download='resume'>
                        <button className={styles.resumeBTN}>Resume <AiOutlineCloudDownload/> </button>
                    </a>
                </div>
            </div>
            <div className={styles.dpContainer}>
                <div className={styles.dp}>
                    <Image className={styles.avatar} src='/images/avatarDP.png' width={250} height={250} alt='avatar'></Image>
                </div>
            </div>
        </div>
    )
}

export default Intro;
