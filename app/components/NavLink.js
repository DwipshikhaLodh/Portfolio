import Link from 'next/link'

function NavLink({ path, title}) {
    return <Link href={path}>{title}</Link>
}

export default NavLink