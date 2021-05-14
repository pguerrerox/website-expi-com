//exporting component
export default function Index_banner (props){
    let data = props.data;

    return(
        <section>
            <div>
                <h1>
                    <span>{data.span1}</span>
                    <br/>
                    <span>{data.span2}</span>
                </h1>
                <img src={`/images/${data.imgBanner}.png`}/>
            </div>
        </section>
    )
}