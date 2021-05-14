// importing node modules
import fs from 'fs';
import path from 'path';

// importing componets
import Index_banner from '../components/index/Index_banner';
import Index_section from '../components/index/Index_section';

export default function HomePage(props) {
  let data = props.data[props.lang]

  return (
    <>
    <Index_banner data={data.banner}/>
    <Index_section data={data.section1}/>
    <Index_section data={data.section2}/>
    </>
  )
}

// fetching data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');

  // index data
  const filepath = path.join(basepath, 'index.json');
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  return {
    props: {
      title: "Inicio",
      data
    }
  }
}