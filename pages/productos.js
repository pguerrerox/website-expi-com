// importing node modules
import fs from 'fs';
import path from 'path';

// importing componets
import Productos_Banner from '../components/productos/Productos_banner';
import Productos_ads from '../components/productos/Productos_ads';

export default function Productos(props) {
  let data = props.data[props.lang];
  let productos = data.productos;

  return (
    <>
    <Productos_Banner {...data.banner}  />
    {
        productos.map((x) => {
            return(
                <h1 className='font-primary'>{x.nombre}</h1>
                // <Productos_ads />
            )
        })
    }
    </>
  )
}

// fetching initial data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');

  // index data
  const filepath = path.join(basepath, 'productos.json');
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  return {
    props: {
      title: "Nuestros Productos",
      data
    }
  }
}