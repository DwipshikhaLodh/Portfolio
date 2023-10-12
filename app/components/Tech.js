import Image from 'next/image'
import styles from '../page.module.scss'


function Tech() {

    const techs = [
        {
            image: "/images/html.png"
        },
        {
            image: "/images/css.png"
        },
        {
            image: "/images/js.png"
        },
        {
            image: "/images/node.png"
        },
        {
            image: "/images/express.png"
        },
        {
            image: "/images/mongodb.png"
        },
        {
            image: "/images/react.png"
        },
        {
            image: "/images/tailwind.png"
        },
        {
            image: "/images/git.png"
        }
    ]
    return (
        <div className={styles.techContainer} id='technologies'>
            <p><div></div><span>Technologies</span></p>
            <h1>Technologies I have used till date</h1>
            <div>
                {
                    techs.map((tech, index) => {
                        return <Image key={index} alt='tech logo' data-aos="zoom-in" src={tech.image} width={200} height={200}></Image>
                    })
                }
            </div>
        </div>
    )
}

export default Tech