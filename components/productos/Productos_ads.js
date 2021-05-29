//exporting component
export default function Productos_ads(props) {
  return (
    <div className='container py-5'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-4'>
          <img className='col logoImg' src={`/images/logos/${props.img}.png`} alt={`Logo de ${props.nombre}`} />
        </div>
        <div className='col'>
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