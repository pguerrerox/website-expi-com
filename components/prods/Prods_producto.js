//exporting component
export default function Prods_producto(props) {
  let alternateL = { flexDirection: 'row' };
  let alternateR = { flexDirection: 'row-reverse' }

  let imgStyle = {
    height: '450px',
    overflow:' hidden'
  }

  return (
    <>
      <section>
        <div className='container border-top-1 py-5'>
          <div className='d-flex justifu-content-center align-items-center' style={props.eID % 2 == 0 ? alternateL : alternateR}>
            <div className="d-flex justify-content-center col-6 imgwrapper">
              <img className='imgwraped' src={`/images/productos/skus/${props.sku}/${props.prodImg}.png`} alt="imagen del producto" />
            </div>
            <div className='text-justify col-6'>
                <p>{props.preMarked} <span className='text-primary bold'>{props.marked} </span>{props.postMarked}</p>
                {props.p2 && <p>{props.p2}</p>}
                {props.p3 && <p>{props.p3}</p>}
                <p className='pt-3'><span className='bold'>{props.pres1}</span> {props.pres2}</p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
      .imgwrapper{ height: 400px}
      .imgwraped{ maxwidth: 400px }


      
      `}
      </style>
    </>
  )
}