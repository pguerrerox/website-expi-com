//exporting component
export default function Contacto_top(props) {
  // let data = props.top;

  return (
    <>
      <section className='Contacto_top py-5 bg-alternate border-top-1 border-bot-1'>
        <div className='container d-flex flex-row justify-content-around'>
          <img className='section1logo' src={`/images/${props.img}.png`} />
        </div>
      </section>
    </>
  )
}