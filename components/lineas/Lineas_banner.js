//exporting component
export default function Lineas_banner(props) {

  let bgImg = {
    backgroundImage: `url(/images/lineas/${props.imgBanner}.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  }

  return (
    <>
      <section className='Lineas_banner container-xl px-0'>
        <div className='banner' style={props.imgBanner == 'costero' ? bgImgCostero :bgImg }></div>
        <div className='container border-bot-2 py-5'>
          <div className='d-flex flex-column flex-lg-row justify-content-center'>
            <div className='d-flex flex-column justify-content-center text-center col'>
              <h3>{props.h3_1}</h3>
              <h1 className='font-markinson text-primary'>{props.h1}</h1>
              <h3 className='font-trajan'>{props.h3_2}</h3>
            </div>
            <div className='d-flex justify-content-center py-3 col'>
              <img className='w-100' style={{ width: "auto !important", maxHeight: "275px" }} src={`/images/logos/${props.imgLogo}.png`} alt="" />
            </div>
          </div>
        </div>
      </section>

      { props.banner2 &&
        <section className='py-5'>
          <div className='container'>
            <div className='d-flex flex-column-reverse flex-lg-row align-items-center text-center'>
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