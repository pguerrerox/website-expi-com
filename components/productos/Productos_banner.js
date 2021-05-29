//exporting component
export default function Productos_banner(props){
    // let data = props.data;

    return(
        <section className='py-5 bg-alternate border-top-1 border-bot-1'>
            <div className='container d-flex flex-column justify-content-center align-items-center'>
                <h3 className='font-secondary'>{props.h3}</h3>
                <h1 className='font-primary'>{props.h1}</h1>
                <h3 className='font-secondary'>{props.slogan}</h3>
            </div>
        </section>
    )
}