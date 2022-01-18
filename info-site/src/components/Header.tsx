import reactLogo from '../img/logo192.png'

const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <img className='nav-logo' src={reactLogo} alt="Logo"/>
                <ul className='nav-items'>
                    <li>One</li>
                    <li>Two</li>
                    <li>Any</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;