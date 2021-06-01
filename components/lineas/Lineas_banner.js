//exporting component
export default function Lineas_banner(props) {

  return (
    <>
      <section>
        <img className='w-100' src={`/images/lineas/${props.imgBanner}.png`} alt="imagen relacionada al producto" />
        <div className='container border-bot-2 py-5'>
          <div className='d-flex flex-row justify-content-center'>
            <div className='d-flex flex-column justify-content-center text-center col-6'>
              <h3>{props.h3_1}</h3>
              <h1>{props.h1}</h1>
              <h3>{props.h3_2}</h3>
            </div>
            <div className='d-flex justify-content-center col-6'>
              <img className='w-100' style={{ width: "auto !important", maxHeight: "275px" }} src={`/images/logos/${props.imgLogo}.png`} alt="" />
            </div>
          </div>
        </div>
      </section>

      { props.banner2 &&
        <section className='py-5'>
          <div className='container'>
            <div className='d-flex flex-row align-items-center text-center'>
              <div className='col-6'>
                <p>{props.banner2.p}</p>
              </div>
              <div className='col-6'>
                <img className='w-100' src={`/images/lineas/${props.banner2.imgBanner2}.png`} alt="" />
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}