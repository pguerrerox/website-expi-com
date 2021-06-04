//exporting component
export default function Prods_producto(props) {
  let alternateL = 'flex-lg-row';
  let alternateR = 'flex-lg-row-reverse';

  return (
    <>
      <section className='container-xl'>
        <div className='border-bot-1 py-5'>
          <div className={`row d-flex flex-column justify-content-center align-items-center ${props.eID % 2 == 0 ? alternateL : alternateR}`}>
            <div className="d-flex justify-content-center col-10 col-lg-6">
              <img className='col' src={`/images/productos/skus/${props.sku}/${props.prodImg}.png`} alt="imagen del producto" />
            </div>
            <div className='text-justify col-11 col-lg-6 pt-3 pt-lg-0'>
              {props.h5 && <h5 className='text-primary bold text-uppercase text-center py-1'>{props.h5}</h5>}
              {props.h5_2 && <h5 className='border-top-1 text-primary bold text-uppercase text-center py-1' >{props.h5_2}</h5>}
              <p>{props.preMarked} <span className='text-primary bold'>{props.marked} </span>{props.postMarked}</p>
              {props.p2 && <p>{props.p2}</p>}
              {props.p3 && <p>{props.p3}</p>}
              <p className='pt-3'><span className='bold'>{props.pres1}</span> {props.pres2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}