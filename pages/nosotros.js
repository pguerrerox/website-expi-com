// importing node modules
import fs from 'fs';
import path from 'path';

// importing componets
// NONE

export default function Nosotros(props) {
  let data = props.data[props.lang];

  let sect1 = data.historia;
  let paragraph = sect1.p;

  let sect2 = data.estrategia;
  let sect3 = data.banner;

  return (
    <>
      {/* Seccion 1 */}
      <section>
        <div className='container overflow-hidden'>      
          <div className=''>
            <img className='float-right imgElDon' src={`/images/nosotros/${sect1.img}.png`} alt="" />
            <div className=''>
              <h2 className='text-center font-primary'>{sect1.h2}</h2>
              <h1 className='text-center font-primary'>{sect1.h1}</h1>
              {
                paragraph.map( (elem, index) => {
                  return(
                    <p className='font-secondary text-justify py-1' key={index}>{elem}</p>
                    )
                  })
                }                
            </div>
          </div>
        </div>
      </section>

      {/* Seccion 2 */}
      <section>
        <div className='border-top-2 border-bot-2 py-4'>
          <div className='container d-flex flex-row justify-content-between'>
            {
            sect2.map( (elem, index) => {
              return(
                <div className='col-3 py-4' key={index}>
                  <h1 className='text-center font-primary' > {elem.h1} </h1>
                  {!elem.p 
                  ?
                  <ul className='text-center list-unstyled'>
                    {elem.list.map( (li, index) => {
                      return(
                        <li className={index}> {li} </li>
                      )
                    })}
                  </ul> 
                  :
                  <p> {elem.p} </p>
                  }
                </div>
              )
            })
            }
          </div>
        </div>
      </section>

      {/* Seccion 3 */}
      <section>
        <div className='bgImage my-4'>
          <div className='container'>
            <div className="vertical3er row">
              <div className='vertical3erInner col-2 d-flex'>
                <img className='vertical3erImg px-1 align-self-center' src={`/images/${sect3.vertical3er}.png`}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* JSX styling */}
      <style jsx>{`
      // seccion 1
      .imgElDon{ height: 550px; shape-outside: url(${`/images/nosotros/${sect1.img}.png`}); shape-margin: 25px; margin-left: 25px; }

      // seccion 3
      .bgImage{
        background-image: url('/images/nosotros/${sect3.imgbg}.jpg');
        background-size: cover;
        background-position: center;
      }
      .vertical3er{ height: 600px; }
      .vertical3erInner{ background-color: #ffffffc7; }
      .vertical3erImg{ width: 100%;}
      `}</style>
    </>
  )
}

// feching initial data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');

  // nosotros data
  const filepath = path.join(basepath, 'nosotros.json');
  const data = JSON.parse(fs.readFileSync(filepath, 'utf-8'));

  return {
    props: {
      title: "Sobre Nosotros",
      data
    }
  }
}
