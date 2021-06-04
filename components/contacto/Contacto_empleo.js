// importing modules
import React, { Component } from 'react';

class Contacto_empleo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      attachFile: '',
      statusShow: false, //display the form or not
      statusMsg: null
    };

    // binding handlers
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    console.log(e.target);
    e.preventDefault();
    const data = new FormData(e.target);

    fetch('https://static-email.herokuapp.com/empleo/expi', {
      method: 'POST',
      body: data
    })
      .then(res => {
        if (res.status === 404) {
          this.setState(st => ({
            statusShow: true,
            statusMsg: false
          }))
        }
        else {
          this.setState(st => ({
            statusShow: true,
            statusMsg: true
          }))
        }
      })
      .catch(err => {
        console.log(err);
      })

    this.setState(st => (
      {
        nombre: '',
        email: '',
        attachFile: '',
      }
    ))
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const data = this.props,
      fields = this.props.fields,
      texto = this.props.texto;
    const referrer = 'http://expi.com.do';

    let displayNone = { display: "none" }
    let displayAll = { display: "" }
    let statusGood = 'text-success'
    let statusError = 'text-danger'

    return (
      <section className='mt-5 py-5 container-xl' style={{"background": `url('/images/contacto/${texto.bgimage}.png')`, "backgroundSize" : "cover", "backgroundPosition" : "center" }}>
        <div className=''>
          <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row'>            
            <div className='col-10 col-lg-6 text-white d-flex flex-column' style={{"textShadow": "7px 7px 14px black"}}>
              <h2 className='text-center bold'>{texto.h2}</h2>
              <p className='text-justify'>{texto.p1} {texto.p2}</p>
            </div>

            <div className="col p-0" id='form'>
              {
                this.state.statusShow
                ?
                <div className={(this.state.statusMsg ? statusGood : statusError) + ' p-3 text-center font-weight-bold w-100 h-100 display-4 d-flex align-items-center'}>
                  <div>
                    {this.state.statusMsg ? data.status.success : data.status.fail}
                  </div>
                </div>
                :
                <form className='m-4 px-5 py-4 bg-light rounded' style={this.state.statusShow ? displayNone : displayAll} action="?" method="POST" onSubmit={this.handleSubmit}>
                  <input type="hidden" name="referrer" value={referrer} />
                  {
                    Object.keys(fields).map((key, i) => {
                      let id = fields[key].id,
                        label = fields[key].label,
                        placeholder = fields[key].placeholder,
                        type = fields[key].type;

                      let accept = fields[key].accept ? fields[key].accept : null;

                      return (
                        <div className='form-group' key={i}>
                          <label className='text-primary font-weight-bold' htmlFor={id}>{label + ":"}</label>
                          <input className='form-control' type={type} id={id} name={id} placeholder={placeholder} value={this.state[id]} onChange={this.handleChange} accept={accept} required />
                        </div>
                      )
                    })
                  }
                  <div className='text-center'>
                    <div className='g-recaptcha d-flex justify-content-center my-3 mx-auto' data-sitekey='6Le71csUAAAAAPue6urY3ZnYIlGNhM0A0W4iPvRI'></div>
                    <button className='btn btn-primary btn-md text-uppercase w-100' type='submit'>{data.button.text}</button>
                    <div className='p-2'>
                      <span className='text-dark'>This site is protected by reCAPTCHA and the Google</span>
                      <a className='text-danger' href="https://policies.google.com/privacy"> Privacy Policy</a>
                      <span className='text-dark'>  and</span>
                      <a className='text-danger' href="https://policies.google.com/terms"> Terms of Service</a>
                      <span className='text-dark'> apply.</span>
                    </div>
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

// exporting component
export default Contacto_empleo