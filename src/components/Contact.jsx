import './Contact.css';
import SectionName from './SectionName';
import { useForm } from 'react-hook-form';
import { MdSend } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { RiMapPin5Fill } from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);

  const mail = 'hello@sandymarrone.com';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_2fe6bra',
        'template_nj9q7k5',
        form.current,
        'bmxQ0Xtmm688IkO8F'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      {/* <SectionName title={'Contacto'} number={'3'} /> */}

      <p className="contact__subTitle subTitle">¿Te interesa mi trabajo?</p>
      <h3 className="contact__titleSection titleSection">
        Construyamos algo{' '}
        <span className="titleSection__outline outline">juntos</span>
      </h3>
      <p className="contact__textInfo">
        Completa este formulario o comunícate conmigo directamente:{' '}
        <button
          className="contact__mail"
          onClick={() => navigator.clipboard.writeText(mail)}
        >
          hello@sandymarrone.com
        </button>
      </p>

      <div className="contact__formContainer">
        <form className="contact__form form" ref={form} onSubmit={sendEmail}>
          <div className="form__inputGroup">
            <label className="form__label">
              Primer Nombre
              <input
                className="form__input"
                {...register('firtsName')}
                name="firstName"
              />
              <span className="form__input--border"></span>
            </label>

            <label className="form__label">
              Primer Apellido
              <input
                className="form__input"
                {...register('lastName')}
                name="surName"
              />
              <span className="form__input--border"></span>
            </label>
          </div>

          <div className="form__inputGroup">
            <label className="form__label">
              Email
              <input
                className="form__input"
                {...register('email')}
                name="userEmail"
              />
              <span className="form__input--border"></span>
            </label>

            <label className="form__label">
              Empresa (opcional)
              <input
                className="form__input"
                {...register('companyName')}
                name="userCompany"
              />
              <span className="form__input--border"></span>
            </label>
          </div>

          <label className="form__label">
            ¿En qué te puedo ayudar?
            <textarea
              className="form__input form__input--textArea"
              {...register('reason')}
              rows="4"
              name="userMessage"
            />
            <span className="form__input--border"></span>
          </label>

          <button className="form__button" type="submit">
            <MdSend
              className="generalIcon"
              style={{ position: 'relative', top: '2.5px' }}
            />{' '}
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
