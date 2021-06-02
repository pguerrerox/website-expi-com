//exporting component
export default function Prods_producto(props) {
  let alternateL = { flexDirection: 'row' };
  let alternateR = { flexDirection: 'row-reverse' }

  return (
    <>
      <section>
        <div className='container border-top-1 py-5'>
          <div className='row d-flex justifu-content-center align-items-center' style={props.eID % 2 == 0 ? alternateL : alternateR}>
            <div className="d-flex justify-content-center col-6">
              <img className='col' src={`/images/productos/skus/${props.sku}/${props.prodImg}.png`} alt="imagen del producto" />
            </div>
            <div className='text-justify col-6'>
              {props.h5 && <h5 className='text-primary bold text-uppercase text-center pb-4' >{props.h5}</h5>}
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