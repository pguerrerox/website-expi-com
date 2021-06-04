//exporting component
export default function Index_section(props) {
  let data = props.data;
  let islower3er = props.data.lower3er;

  return (
    <section className='Index_section container-xl bgImage mt-4 d-flex flex-column justify-content-center align-items-center position-relative'>
      <div className='d-flex justify-content-center justify-content-lg-end'>
        <div className='bg-white col-10 col-lg-6 p-4 d-flex flex-column justify-content-center text-center'>
          <h1 className='font-markinson text-primary'>{data.h1}</h1>
          <p className='text-secondary p-2'>{data.p}</p>
          <a className='btn btn-primary text-white' href={data.link}>{data.link_text}</a>
        </div>
      </div>
      {data.img_lower3er && 
      <div className='lower3er d-flex justify-content-end'>
        <img className='lower3erImg px-5 py-3' src={`/images/${data.img_lower3er}.png`} />
      </div>
      }
      <style jsx>{`
            // specific styling
            section{height: ${islower3er ? '700px' : '500px'}}
            
            .bgImage{
                background-image: url('/images/index/${data.bgimage}.png');
                background-size: cover;
                background-position: center;
            }
            .lower3er{background-color: #ffffffc7; position: absolute; bottom: 0; width:100%}
            .lower3erImg{height: 150px}
            `}</style>
    </section>
  )
}