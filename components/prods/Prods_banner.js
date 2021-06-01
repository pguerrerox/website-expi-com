//exporting component
export default function Prods_banner(props) {

  let bgImg = {
    backgroundImage: `url(/images/productos/banners/${props.imgBanner}.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '500px',
  }
  let bgImgCostero = {
    backgroundImage: `url(/images/productos/banners/${props.imgBanner}.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    minHeight: '500px',
  }

  return (
    <>
      <section>
        <div style={props.imgBanner == 'costero' ? bgImgCostero :bgImg }></div>
        <div className='container d-flex justify-content-center border-bot-2 py-5'>
          <div className='col-4'>
              <img className='w-100' src={`/images/productos/logos/${props.imgLogo}.png`} alt="logo" />
           </div>
        </div>
      </section>
    </>
  )
}