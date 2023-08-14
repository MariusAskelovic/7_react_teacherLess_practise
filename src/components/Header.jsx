import './header.scss'

export default function Header() {
    return (
        <div className="header">
            <img src="/images/Logo.svg" alt="logo" className="logo" />
            <ul className='headerUl'>
                <li><a href="#">Product</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
            <div>
                <button className='emptyBtn headerBtn'><a href='#'>Log In</a></button>
                <button className='greenBtn headerBtn'><a href='#'>Sign Up</a></button>
            </div>
        </div>
    )
}