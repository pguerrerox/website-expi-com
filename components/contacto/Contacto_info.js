//exporting component
export default function Contacto_info(props) {


  return (
    <>
      <section className='col-lg-6 p-0 align-content-center d-flex justify-content-center align-items-center'> 
        <div className=''>
          <div className='d-flex flex-column justify-content-center text-center px-5'>
            <div className='border-bot-2 py-4'>
              <h2 className='text-secondary bold'><span className='text-primary'>{props.marked}</span>{props.h2}</h2>
            </div>
            <div className=''>
            {
              props.informacion.map((info) => {
                if (info.id == "telefono") {
                  return (
                    <div className='border-bot-2 py-4'>
                      <h4><span className='text-primary'>{info.marked}</span> {info.texto}</h4>
                      <h3>{info.dato1}</h3>
                    </div>
                  )
                } else
                  if (info.id == "horario") {
                    return (
                      <div className='border-bot-2 py-4'>
                        <h4><span className='text-primary'>{info.marked}</span> {info.texto}</h4>
                        <h4>{info.dato1}</h4>
                        <h3>{info.dato2}</h3>
                      </div>
                    )
                  } else {
                    return (
                      <div className='py-4'>
                        <h4>{info.texto} <span className='text-primary'>{info.marked}</span></h4>
                        <a href={info.linkHref}><h3>{info.dato1}</h3></a>
                      </div>
                    )
                  }
              })
            }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}