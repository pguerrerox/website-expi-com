// importing node modules
import fs from 'fs';
import path from 'path';

const userInstagram = require("user-instagram");


// importing componets
// import Productos_Banner from '../components/productos/Productos_banner';

export default function Novedades(props) {

  // Gets informations about a user
  userInstagram('https://www.instagram.com/expi.rd/') // Same as getUserData()
    .then(console.log)
    .catch(console.error);




  return (
    <>
      <div>Novedades</div>
    </>
  )
}

// fetching initial data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');

  // index data
  const filepath = path.join(basepath, 'novedades.json');
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  return {
    props: {
      title: "Novedades",
      data
    }
  }
}