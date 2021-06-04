//exporting component
export default function Productos_ads(props) {
  return (
    <div className='container-xl py-5'>
      <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row'>
        <div className='pb-4 pb-lg-0 col-lg-4 d-flex justify-content-center col-7'>
          <img className='col logoImg' src={`/images/logos/${props.img}.png`} alt={`Logo de ${props.nombre}`} />
        </div>
        <div className='text-center col-10 col-lg-8'>
          <p className=''>{props.p}</p>
          {
            props.p2 ?
              <p>{props.p2}</p> :
              null
          }
          <div className='text-center mt-4'>
            <a className='btn btn-small btn-primary text-capitalize' href={props.linkHref}>{props.linkText}</a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .logoImg{ width: 300px }
        `}
      </style>
    </div>
  )
}