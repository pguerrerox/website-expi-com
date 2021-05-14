//exporting component
export default function Index_section (props){
    let data = props.data;
    let islower3er = props.data.lower3er;

    return(
        <section>
            <img />
            <div>
                <div>
                    <h1>{data.h1}</h1>
                    <p>{data.p}</p>
                    <a>{data.link_text}</a>
                </div>
            </div>
            <div className={islower3er ? '' : 'hidden'}>
                <h2>dimeloxxxx</h2>
            </div>
            <style jsx>{`
            .hidden {display: none;}
            `}</style>
        </section>
    )
}