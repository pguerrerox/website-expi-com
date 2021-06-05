//exporting component
export default function Index_section(props) {
  let data = props.data;
  let islower3er = props.data.lower3er;



  // d-flex justify-content-center justify-content-lg-end
  // bg-white col-8 col-lg-6 p-4 d-flex flex-column justify-content-center text-center
  return (
    <section className='Index_section container-xl bgImage mt-4 position-relative d-flex justify-content-center justify-content-lg-end align-items-center p-0'>
      <div className='d-flex flex-column justify-content-center bg-white col-10 col-lg-5 mr-lg-5'>
        <div className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
          <h1 className='font-markinson text-primary'>{data.h1}</h1>
          <p className='py-3 col-11'>{data.p}</p>
          <a className='btn btn-md bg-primary text-white ' href={data.link}>{data.link_text}</a>
        </div>
      </div>

      {data.img_lower3er && 
      <div className='lower3er d-flex justify-content-end'>
        <img className='lower3erImg px-5 py-3' src={`/images/${data.img_lower3er}.png`} />
      </div>
      }
      <style jsx>{`
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