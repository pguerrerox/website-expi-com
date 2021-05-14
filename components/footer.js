// exporting component
export default function Footer(props) {
  let top = props.data.topFooter;
  let bot = props.data.botFooter;

  return (
    <footer className='container-fluid px-0 bg-secondary d-flex flex-column justify-content-center'>
      <div className='footerTop container py-5 px-0 bg-secondary text-center'>
        <div className="footerBorders row">
          {top.map((item, index) =>
            <div className='col-md-6 col-lg-3' key={index}>
              <h5>{item.h5}</h5>
              {!item.img ? 
              <p>{item.p}</p> :
              <img src={`/image/${item.img}`}/>
              }
            </div>
          )}
        </div>
      </div>
      <div className='footerBot py-2 px-0 bg-dark small d-flex flex-column align-items-center '>
        <span>{bot.copyright}</span>
        <span>{bot.developer.uno}<a href={bot.developer.link} className='bold'>{bot.developer.dos}</a></span>
      </div>
    </footer>
  )
}