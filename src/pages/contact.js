import React, { Component } from 'react';
import Layout from '../components/layout';
import styles from './contact.module.css';
import q_icon from '../images/q.svg';

const ContactPage = () => (
  <Layout>
    <div className={styles.contactWrap}>
      <div style={{ textAlign: 'center' }}>
        <img src={q_icon} alt="question_icon" style={{ width: 100 }} />
        {/* <div>
          <h2>Turite klausimų?</h2>
          <h2>Norite užsisakyti produkcijos?</h2>
        </div> */}
      </div>
      <h2>Susisiekite su mumis:</h2>
      <div className={styles.cInfo}>
        <p>Telefonu: (370) 687 50650</p>
        <p>El. paštu: uabodliva@gmail.com</p>
      </div>
      <Form />
    </div>
  </Layout>
);

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'name') {
      this.setState({ name: event.target.value });
    } else if (event.target.name === 'email') {
      this.setState({ email: event.target.value });
    } else if (event.target.name === 'phone') {
      this.setState({ phone: event.target.value });
    } else if (event.target.name === 'desc') {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = Object.assign({}, ...this.state);
    console.log(payload);
    //real thing
    // const url = `https://xbd5m5kx9f.execute-api.us-east-1.amazonaws.com/dev/email/send`;
    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(payload),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(msg => console.log(msg))
    //   .error(error => console.log(error));
  }

  render() {
    return (
      <>
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
                value="Siūsti"
                tabIndex="5"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default ContactPage;
