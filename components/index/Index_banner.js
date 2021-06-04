//exporting component
export default function Index_banner (props){
    let data = props.data;

    return(
        <section className='Index_banner container-xl py-5 bg-alternate border-top-1 border-bot-1'>
            <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-around'>
                <h1 className='align-self-center text-center text-uppercase font-trajan'>
                    <span className='text-redish'>{data.span1}</span>
                    <br/>
                    <span className='text-blueish'>{data.span2}</span>
                </h1>
                <img className='section1logo' src={`/images/${data.imgBanner}.png`}/>
            </div>
        </section>
    )
}