//exporting component
export default function Lineas_productos_1(props) {

  return (
    <>
      {
        !props.style ?
        <section className='py-5'>
          <div className='container'>
            <div className="d-flex justify-content-center">
              <div className='col-10'>
                <img className='w-100' src={`/images/prods/${props.prodImg}.png`} alt="imagen del producto" />
              </div>
            </div>
            <div className='text-center d-flex justify-content-center pt-4'>
              <div className='col-8'>
                <p><span className='text-primary bold'>{props.prodDescMarked}</span>{props.prodDesc}</p>
                {props.prodDesc2 && <p>{props.prodDesc2}</p>}
                <p><span className='bold'>{props.prodPrePresentation}</span>{props.prodPresentation}</p>
              </div>
            </div>
          </div>
        </section>
        :
        <section className='py-2'>
          {
          props.banda &&
            <div className='bg-alternate py-2 text-center text-uppercase bold'>
              <p className='p-0 m-0 text-terciary'>{props.banda.p1}</p>
              <p className='p-0 m-0 text-primary'>{props.banda.p2}</p>
            </div>
          }
          <div className='container py-4'>
            <div className='d-flex' style={props.eID % 2 == 0 ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }}>
              <div className="d-flex justify-content-center col-6">
                <img className='w-100' src={`/images/prods/${props.prodImg}.png`} alt="imagen del producto" />
              </div>
              <div className='text-center d-flex flex-column justify-content-center py-4 col-5'>
                <p><span className='text-primary bold'>{props.prodDescMarked}</span>{props.prodDesc}</p>
                {props.prodDesc2 && <p>{props.prodDesc2}</p>}
                <p><span className='bold'>{props.prodPrePresentation}</span>{props.prodPresentation}</p>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}