// importing node modules
import fs from 'fs';
import path from 'path';

// importing componets
import Top from '../components/contacto/Contacto_top';
import Gracias from '../components/contacto/Contacto_gracias';
import Form from '../components/contacto/Contacto_form';
import Informacion from '../components/contacto/Contacto_info';
import Empleo from '../components/contacto/Contacto_empleo';

export default function Contacto(props) {
  let data = props.data[props.lang];

  return (
    <>
    <Top {...data.top}/>
    <Gracias {...data.gracias}/>
    <div className='container'>
      <div className='row my-3'>
        <Form {...data.form}/>
        <Informacion {...data.info}/>
      </div>
    </div>
    <Empleo {...data.empleo}/>
    </>
  )
}

// fetching initial data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');

  // index data
  const filepath = path.join(basepath, 'contacto.json');
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  return {
    props: {
      title: "Contacto",
      data
    }
  }
}