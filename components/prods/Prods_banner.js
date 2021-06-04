// import components
import Productos_Banner from '../../components/productos/Productos_banner';

//exporting component
export default function Prods_banner(props) {
  
  return (
    <>
      <section className='Prod_banner container-xl px-0'>
        {
          !props.imgBanner 
          ? 
          <Productos_Banner {...props.banner}/>
          : 
          <div className='banner'>
            <img className='img-fluid' src={`/images/productos/banners/${props.imgBanner}.png`} alt=""/>
          </div>
        }
        <div className='d-flex justify-content-center justify-content-lg-start border-bot-2'>
          <div className='col-6 col-md-4 col-lg-2 py-4'>
              <img className='w-100 mx-3' src={`/images/productos/logos/${props.imgLogo}.png`} alt="logo" />
           </div>
        </div>
      </section>
    </>
  )
}