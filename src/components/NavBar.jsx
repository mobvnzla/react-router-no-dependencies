import '../styles/NavBar.css';

function NavBar({ toPage }) {
  return (
    <header className='header'>
      <div className='container'>
        <div className='nav-bar'>
          <a
            href='/'
            onClick={(e) => {
              e.preventDefault();
              toPage('');
            }}
          >
            Logo
          </a>
          <nav>
            <ul>
              <li>
                <a
                  href='/About'
                  onClick={(e) => {
                    e.preventDefault();
                    toPage('About');
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='/Contact'
                  onClick={(e) => {
                    e.preventDefault();
                    toPage('Contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default NavBar;
