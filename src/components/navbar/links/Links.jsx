import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"

const Links = () => {

    const links = [
        {
            title: "Homepage", 
            path: "/"
        },
        {
            title: "About", 
            path: "/about"
        },
        {
            title: "Contact", 
            path: "/contact"
        },
        {
            title: "Blog", 
            path: "/blog"
        }
    ]

    const session = true
    const isAdmin = true
 
    return (
        <div className={styles.links}>
            {links.map((link => (
                // <Link href={link.path} key={link.title}>{link.title}</Link>)
                <NavLink item={link} key={link.title} />)
            ))}
        </div>
    )
}

export default Links