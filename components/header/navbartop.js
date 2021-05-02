// exporting component
export default function NavbarTop(props) {
    return (
      <section className='HeaderTop bg-primary'>
        <div className='container d-flex justify-content-center py-1'>
          <button className="btn btn-sm btn-secondary font-weight-bold ml-auto" onClick={props.langChange}>{props.lang === "en" ? "Español" : "English"}</button>
        </div>
      </section>
    )
  }