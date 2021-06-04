//exporting component
export default function Lineas_banner(props) {

  return (
    <>
      <section className='Lineas_banner container-xl px-0'>
        <div className='banner'>
          <img className='img-fluid' src={`/images/lineas/${props.imgBanner}.png`} alt=""/>
        </div>
        
        <div className='border-bot-2 py-4'>
          <div className='d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center'>
            
            <div className='m-3 col-8 col-md-6 col-lg-4'>
              <img className='w-100' src={`/images/logos/${props.imgLogo}.png`} alt="" />
            </div>

            <div className='d-flex flex-column justify-content-center text-center col col-lg-6'>
              <h3>{props.h3_1}</h3>
              <h1 className='p-0 m-0 font-markinson text-primary'>{props.h1}</h1>
              <h3 className='font-maiandra text-uppercase text-redish'>{props.h3_2}</h3>
            </div>

          </div>
        </div>
      </section>

      { props.banner2 &&
        <section className='py-5'>
          <div className='container-xl'>
            <div className='d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center text-center'>
              <div className='col col-lg-6'>
                <p>{props.banner2.p}</p>
              </div>

              <div className='col-10 col-lg-5'>
                <img className='w-100' src={`/images/lineas/${props.banner2.imgBanner2}.png`} alt="" />
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}