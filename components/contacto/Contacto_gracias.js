//exporting component
export default function Contacto_gracias(props) {
  let top = props.top;
  let bot = props.bot;
  
  return (
    <>
      <section className='Contacto_gracias container-xl pt-4 py-lg-4'>
        <div className=''>
          <div className='py-4 text-center border-bot-2'>
            <h1 className='text-secondary bold'>{top.h1}</h1>
            <h5 className='text-terciary '>{top.h5}</h5>
          </div>
          <div className='py-4 text-center text-lg-left'>
            <h2 className='text-secondary'>{bot.pregunta}</h2>
            <h5 className='text-terciary'>{bot.response}</h5>
          </div>
        </div>
      </section>
    </>
  )
}