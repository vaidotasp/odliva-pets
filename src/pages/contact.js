import React, { Component } from 'react'
import Layout from '../components/layout'
import styles from './contact.module.css'
import q_icon from '../images/q.svg'

const ContactPage = () => (
  <Layout>
    <div className={styles.contactWrap}>
      <div style={{ textAlign: 'center' }}>
        <img src={q_icon} alt="question_icon" style={{ width: 100 }} />
      </div>
      <h2>Susisiekite su mumis:</h2>
      <div className={styles.cInfo}>
        <p>Telefonu: (370) 687 50650</p>
        <p>El. paštu: uabodliva@gmail.com</p>
      </div>
      <Form />
    </div>
  </Layout>
)

export class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      sending: false,
      modalShow: false,
      isSuccess: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeModal = this.removeModal.bind(this)
  }

  removeModal() {
    this.setState({
      modalShow: false,
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  handleChange(event) {
    if (event.target.name === 'name') {
      this.setState({ name: event.target.value })
    } else if (event.target.name === 'email') {
      this.setState({ email: event.target.value })
    } else if (event.target.name === 'phone') {
      this.setState({ phone: event.target.value })
    } else if (event.target.name === 'desc') {
      this.setState({ message: event.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const payload = Object.assign({}, ...this.state)
    this.setState({ sending: true })
    const url = `https://ajj64zurh1.execute-api.us-east-1.amazonaws.com/prod/email/send`
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(msg => {
        console.log(msg)
        this.setState({ isSuccess: true, modalShow: true, sending: false })
      })
      .catch(error => {
        console.log(error)
        this.setState({ isSuccess: false, modalShow: true, sending: false })
      })
  }

  render() {
    return (
      <>
        <Modal
          show={this.state.modalShow}
          isSuccess={this.state.isSuccess}
          removeModal={this.removeModal}
        />
        <h2 className={styles.formTitle}>Arba parašykite žinutę</h2>
        <div className={styles.formWrap}>
          <form
            id="order-form"
            action=""
            method="post"
            onSubmit={this.handleSubmit}
          >
            <div>
              <label htmlFor="name" />
              <input
                type="text"
                name="name"
                id="name"
                required
                tabIndex="1"
                maxLength="100"
                placeholder="Vardas"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" />
              <input
                type="email"
                name="email"
                id="email"
                tabIndex="2"
                required
                maxLength="100"
                placeholder="El. paštas"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" />
              <input
                type="phone"
                name="phone"
                id="phone"
                tabIndex="3"
                maxLength="100"
                placeholder="Telefonas"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="desc">Žinutė</label>
              <textarea
                name="desc"
                id="desc"
                cols="30"
                rows="10"
                tabIndex="4"
                required
                minLength="3"
                maxLength="1000"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                className={styles.submitBtn}
                type="submit"
                value={this.state.sending ? 'Siunčiama...' : 'Siūsti'}
                tabIndex="5"
              />
            </div>
          </form>
        </div>
      </>
    )
  }
}

const Modal = props => {
  function toggleModal(e) {
    e.preventDefault()
    props.removeModal()
  }

  const display = props.show ? { display: 'block' } : { display: 'none' }
  const msg = props.isSuccess ? (
    <div>
      <p>Žinutė nusiųsta sėkmingai.</p>
      <p>Su jumis susisieksime netrukus!</p>
    </div>
  ) : (
    <p>
      Žinutės nusiųsti nepavyko, bandykite dar kartą arba susisiekite su mumis
      telefonu/el.paštu.
    </p>
  )
  return (
    <div className={styles.modal} style={display}>
      <div className={styles.modalMain}>
        {msg}
        <button className={styles.modalBtn} onClick={toggleModal}>
          OK
        </button>
      </div>
    </div>
  )
}

export default ContactPage
