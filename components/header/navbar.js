// importing nextjs/api
import Link from 'next/link';

// exporting component
export default function Navbar(props) {
  const menuItems = props.data
//   const quote = props.quote

  return (
    <>
      <section className='HeaderMid bg-white sticky-top'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg py-2 px-2 row'>
            <div className='navbar-brand'>
              <Link href='/'>
                <a><img className='' src='/images/logo.png' alt="Brand Logo" /></a>
              </Link>
            </div>

            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><FontAwesomeIcon icon="bars" /></span>
            </button> */}

            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className='navbar-nav d-flex justify-content-center align-items-center font-nexa'>
                {menuItems.map((item, index) => <Link href={item.link} key={index}><a className='text-capitalize nav-link border-right-2'>{item.page}</a></Link>)}
                {/* <button type="button" className="btn btn-primary btn-md btn-sm mx-3" data-toggle="modal" data-target="#formModal">{quote.page}</button> */}
              </div>
            </div>
          </nav>
        </div>
        {
        /*
        {
          "page": "about", 
          "link": "/about"
        }, 
        */
        }
      </section>

      <style jsx>{`

      `}</style>
    </>
  )
}