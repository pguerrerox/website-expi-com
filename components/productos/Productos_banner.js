//exporting component
export default function Productos_banner(props){
    // let data = props.data;

    return(
        <section className='Productos_banner py-5 bg-alternate border-top-1 border-bot-1'>
            <div className='container d-flex flex-column justify-content-center align-items-center text-center'>
                <h3 className='text-secondary text-capitalize mb-0'>{props.h3}</h3>
                <h1 className='text-primary font-markinson'>{props.h1}</h1>
                <h3 className='text-redish font-trajan '>{props.slogan}</h3>
            </div>
        </section>
    )
}