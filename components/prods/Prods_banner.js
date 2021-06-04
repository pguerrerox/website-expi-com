//exporting component
export default function Prods_banner(props) {

  let bgImg = {
    backgroundImage: `url(/images/productos/banners/${props.imgBanner}.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  let bgImgCostero = {
    backgroundImage: `url(/images/productos/banners/${props.imgBanner}.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  }

  return (
    <>
      <section className='Prod_banner container-xl px-0'>
        <div className='banner' style={props.imgBanner == 'costero' ? bgImgCostero :bgImg }></div>
        <div className='d-flex justify-content-center justify-content-lg-start border-bot-2 py-5'>
          <div className='col-7 col-md-5 col-lg-3'>
              <img className='w-100' src={`/images/productos/logos/${props.imgLogo}.png`} alt="logo" />
           </div>
        </div>
      </section>
    </>
  )
}