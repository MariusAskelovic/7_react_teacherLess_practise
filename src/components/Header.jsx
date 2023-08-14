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
                <button className='emptyBtn headerBtn'>Log in</button>
                <button className='greenBtn headerBtn'>Sign Up</button>
            </div>
        </div>
    )
}