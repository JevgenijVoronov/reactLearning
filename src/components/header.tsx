// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import './header.css'

interface HeaderProps {
    href: string
    imgsrc: string
    alt: string
}


function Header({ href, imgsrc, alt }: HeaderProps) {
    return (
        <>
            <a href={href} target="_blank">
            <img src={imgsrc} className="logo react" alt={alt} />
            </a>
        </>
    )
}

export default Header
