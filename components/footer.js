// exporting component
export default function Footer(props) {
  let top = props.data.topFooter;
  let bot = props.data.botFooter;

  return (
    <footer className='container-xl bg-secondary px-0'>
      <div className='d-flex flex-column justify-content-center text-light px-0'>
        <div className='footerTop container py-5 bg-secondary text-center'>
          <div className="footerBorders row col px-0 mx-0">
            {top.map((item, index) =>
              <div className='footerItems col-md-6 col-lg-3' key={index}>
                <h5 className='text-primary'>{item.h5}</h5>
                {!item.img ?
                  <p><a className='text-light' href={item.link}>{item.p}</a></p> :
                  <a href={item.link}><img className='redesLogo' src={`/images/${item.img}.png`} /></a>
                }
              </div>
            )}
          </div>
        </div>
        <div className='footerBot py-2 px-0 bg-dark small d-flex flex-column align-items-center '>
          <span>{bot.copyright}</span>
          <span>{bot.developer.uno}<a href={bot.developer.link} className='bold'> {bot.developer.dos}</a></span>
        </div>
      </div>
    </footer>
  )
}