//exporting component
export default function Index_banner (props){
    let data = props.data;

    return(
        <section className='py-5 bg-alternate border-top-1 border-bot-1'>
            <div className='container d-flex flex-row justify-content-around'>
                <h1 className='align-self-center text-center'>
                    <span className='font-primary text-uppercase'>{data.span1}</span>
                    <br/>
                    <span className='font-secondary text-uppercase'>{data.span2}</span>
                </h1>
                <img className='section1logo' src={`/images/${data.imgBanner}.png`}/>
            </div>
        </section>
    )
}