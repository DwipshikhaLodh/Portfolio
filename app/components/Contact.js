import styles from '../page.module.scss'

function Contact() {
    return (
        <div className={styles.contactContainer} id='contactme'>
            <div className={styles.imgContainer}>
                <img src='/images/illus.png' width={600} height={300}></img>
            </div>
            <div className={styles.contactForm} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                <form method='POST' action='https://formspree.io/f/xeqbokow'>
                    <label htmlFor='name'>
                    <input type='text' id='name' name='name' required placeholder='your name here'></input>
                    </label>
                    <label htmlFor='email'>
                        <input type='email' id='email' name='email' placeholder='your email here' required></input>
                    </label>
                    <label htmlFor='msg'>
                        <input id='msg' className={styles.textarea} placeholder='your message here...' name='message' required></input>
                    </label>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact