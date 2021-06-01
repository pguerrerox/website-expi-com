// importing node modules
import fs from 'fs';
import path from 'path';

// importing nextjs/API
import { useRouter } from 'next/router'

// importing components
import Lineas_banner from '../../components/lineas/Lineas_banner';
import Lineas_productos from '../../components/lineas/Lineas_productos';
import Lineas_bottom from '../../components/lineas/Lineas_bottom';

export default function Producto (props) {
  const router = useRouter()
  const { lineas } = router.query
  
  let data = props.data;
  let lang = props.lang;
  let componentsProps = data[lang];

  return(
    <>
      <Lineas_banner {...componentsProps.banner}/>
      {
        componentsProps.productos.map( (prod, key) => {
          return(
            <Lineas_productos {...prod} eID={key} key={key} />
          )
        })
      }
      <Lineas_bottom/>
    </>
  )
}


// staticpath function required on dynamic paths
export async function getStaticPaths() {
  return {
    paths: [
      {params: {linea: 'spices'}},
      {params: {linea: 'donjuan'}},
      {params: {linea: 'piloto'}},
      {params: {linea: 'rodriguez'}},
    ],
    fallback: false
  };
}

// fetching initial data
export async function getStaticProps(context) {
  const basepath = path.join(process.cwd(), 'data/lineas');
  const query = context.params.linea;

  const filepath = path.join(basepath, `${query}.json`);
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  return {
    props: {
      title: `${query}`,
      data
    }
  }
}