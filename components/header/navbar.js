// importing nextjs/api
import Link from 'next/link';

// importing components
import NavbarTop from './navbartop';

// exporting component
export default function Navbar(props) {
  const menuItems = props.data

  return (
    <>
      <header className='HeaderMid bg-white sticky-top'>
        <div className='container position-relative'>
          <nav className='navbar navbar-expand-lg py-2 px-2 row'>
            <div className='navbar-brand'>
              <Link href='/'>
                <a><img className='' src='/images/logo.png' alt="Brand Logo" /></a>
              </Link>
            </div>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                X
              </span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className='navbar-nav d-flex justify-content-center align-items-center font-nexa'>
                {menuItems.map((item, index) => <Link href={item.link} key={index}><a className='text-capitalize nav-link border-right-2'>{item.page}</a></Link>)}
              </div>
            </div>
          </nav>
          <NavbarTop lang={props.lang} langChange={props.langChange}/>
        </div>
      </header>
    </>
  )
}