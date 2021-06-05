// importing modules
import React, { Component } from 'react';

// defining class component
class Contacto_form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      ciudad: '',
      asunto: '',
      tema: '',
      mensaje: '',
      statusShow: false, //display the form or not
      statusMsg: null
    };

    // binding handlers
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    fetch('https://static-email.herokuapp.com/contacto/expi', {
      method: 'POST',
      body: data
    })
      .then(res => {
        console.log(res.status)
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
        ciudad: '',
        asunto: '',
        tema: '',
        mensaje: '',
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
      fields = this.props.fields;
    const referrer = 'http://expi.com.do';

    let statusGood = 'text-success'
    let statusError = 'text-danger'

    return (
      <section className="d-flex justify-content-center p-0 col-lg-6" id='form'>
        <div className='content row m-0 h-100'>
          {
            this.state.statusShow
            ?
            <div className={(this.state.statusMsg ? statusGood : statusError) + ' p-3 text-center font-weight-bold w-100 h-100 display-4 d-flex align-items-center'}>
              <div>
                {this.state.statusMsg ? data.status.success : data.status.fail}
              </div>
            </div>
            :
            <form className='col m-4 px-5 py-4 bg-light rounded' action="?" method="POST" onSubmit={this.handleSubmit}>
              <input type="hidden" name="referrer" value={referrer} />
              {
                Object.keys(fields).map((key, i) => {
                  let id = fields[key].id,
                    label = fields[key].label,
                    placeholder = fields[key].placeholder,
                    type = fields[key].type;

                  return (
                    <div className='form-group' key={i}>
                      <label className='text-primary font-weight-bold' htmlFor={id}>{label + ":"}</label>
                      <input className='form-control' type={type} id={id} name={id} placeholder={placeholder} value={this.state[id]} onChange={this.handleChange} required />
                    </div>
                  )
                })
              }
              <div className='form-group'>
                <label className='text-primary font-weight-bold' htmlFor={data.message.id}>{data.message.label + ":"}</label>
                <textarea rows="4" className='form-control' type={data.message.type} id={data.message.id} name={data.message.id} placeholder={data.message.placeholder} value={this.state[data.message.id]} onChange={this.handleChange} required />
              </div>
              <div className='text-center'>
                <div className='g-recaptcha d-flex justify-content-center my-3 mx-auto' data-sitekey='6Le71csUAAAAAPue6urY3ZnYIlGNhM0A0W4iPvRI'></div>
                <button className='btn btn-primary btn-md text-uppercase w-100' type='submit'>{data.button.text}</button>
                <div className='p-3'>
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
      </section>
    )
  }
}

// exporting component
export default Contacto_form