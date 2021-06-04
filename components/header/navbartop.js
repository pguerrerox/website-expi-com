// exporting component
export default function NavbarTop(props) {
  return (
    <section className='HeaderTop container-xl fixedTop'>
      <div className='d-flex justify-content-right py-2'>
        <button className="btn btn-sm btn-primary ml-auto" onClick={props.langChange}>{props.lang === "en" ? "Español" : "English"}</button>
      </div>
    </section>
  )
}