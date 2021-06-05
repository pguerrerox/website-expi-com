// importing nextjs/api
import Link from 'next/link';

// importing components
import NavbarTop from './navbartop';

// exporting component
export default function Navbar(props) {
  const menuItems = props.data

  let router = props.router;  
  router = router.includes('/productos') || router.includes('/lineas') ? "/productos" : router;

  return (
    <>
      <header className='HeaderMid container-xl bg-white sticky-top'>
        <div className='position-relative'>
          <nav className='navbar navbar-expand-lg py-2 px-2 row'>
            <div className='navbar-brand'>
              <Link href='/'>
                <a><img className='headerlogo' src='/images/logo.png' alt="Brand Logo" /></a>
              </Link>
            </div>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><div className='svg'><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></div></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className='navbar-nav d-flex justify-content-center align-items-center text-nowrap'>
                {menuItems.map((item, index) => {
                  return <Link href={item.link} key={index}><a className={`text-capitalize py-1 nav-link ${(router === item.link) && 'active'}`}><span>{item.page}</span></a></Link>
                })}

              </div>
            </div>
          </nav>
          <NavbarTop lang={props.lang} langChange={props.langChange}/>
        </div>
      </header>
    </>
  )
}