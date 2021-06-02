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
      <section className='Prod_banner'>
        <div className='banner' style={props.imgBanner == 'costero' ? bgImgCostero :bgImg }></div>
        <div className='container d-flex justify-content-center border-bot-2 py-5'>
          <div className='col-8 col-md-6 col-lg-5'>
              <img className='w-100' src={`/images/productos/logos/${props.imgLogo}.png`} alt="logo" />
           </div>
        </div>
      </section>
    </>
  )
}