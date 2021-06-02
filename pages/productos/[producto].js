// importing node modules
import fs from 'fs';
import path from 'path';

// importing nextjs/API
import { useRouter } from 'next/router'

// importing components
import Prods_banner from '../../components/prods/Prods_banner';
import Prods_productos from '../../components/prods/Prods_producto';
import Lineas_bottom from '../../components/lineas/Lineas_bottom';
import Productos_Banner from '../../components/productos/Productos_banner';


export default function Prods(props) {
  const router = useRouter()
  const { productos } = router.query

  let data = props.data;
  let lang = props.lang;
  let componentsProps = data[lang];

  console.log()
  return (
    <>
      {
        componentsProps.banner.imgBanner ?
          <Prods_banner {...componentsProps.banner} /> :
          <Productos_Banner {...componentsProps.banner.banner} />
      }
      {
        componentsProps.productos.map((prod, key) => {
          return (
            <Prods_productos {...prod} eID={key} sku={props.title} key={key} />
          )
        })
      }
      <Lineas_bottom />
    </>
  )
}


// staticpath function required on dynamic paths
export async function getStaticPaths() {
  return {
    paths: [
      { params: { producto: 'rottis' } },
      { params: { producto: 'nauj' } },
      { params: { producto: 'costero' } },
      { params: { producto: 'baruk' } },
      { params: { producto: 'tilda' } },
    ],
    fallback: false
  };
}

// fetching initial data
export async function getStaticProps(context) {
  const basepath = path.join(process.cwd(), 'data/productos');

  const query = context.params.producto
  const filepath = path.join(basepath, `${query}.json`);
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  return {
    props: {
      title: `${query}`,
      data
    }
  }
}