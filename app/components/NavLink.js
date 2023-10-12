import Link from 'next/link'
import styles from '../page.module.scss'
import { forwardRef } from 'react'

function NavLink({ path, title}) {
    return <Link href={path}>{title}</Link>
}

export default NavLink