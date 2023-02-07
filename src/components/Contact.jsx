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
      <SectionName title={'Contacto'} number={'3'} />

      <p className="contact__subTitle subTitle">¿Te interesa mi trabajo?</p>
      <h3
        className="contact__titleSection titleSection"
        style={{ marginBottom: '0' }}
      >
        Construyamos algo{' '}
        <span className="titleSection__outline outline">juntos</span>
      </h3>
      <p className="contact__textInfo">
        Completa este <span>formulario</span> o comunícate conmigo directamente:{' '}
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

          {/* <div className="form__inputGroup inputGroup">
            <label className="form__label">
              Empresa (opcional)
              <input className="form__input" {...register('companyName')} />
              <span className="form__input--border"></span>
            </label>

            <label className="form__label">
              ¿Cómo llegaste acá? (opcional)
              <select
                className="form__input form__input--select"
                {...register('discover')}
              >
                <option value="">Selecionar...</option>
                <option value="Buscador">Buscador</option>
                <option value="Redes sociales">Redes sociales</option>
                <option value="Recomendación">Recomendación</option>
                <option value="Otro">Otro</option>
              </select>
              <i></i>
              <span className="form__input--border"></span>
            </label>
          </div> */}

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

      {/* <div className="contact__extraInfo extraInfo">
        <div className="extraInfo__phoneNumber extraInfo__container">
          <RiWhatsappFill size={40} />
          <div className="extraInfo__container_info">
            <p>0412-8684096</p>
            <a href="#">Enviar mensaje</a>
          </div>
        </div>
        <div className="extraInfo__address extraInfo__container">
          <RiMapPin5Fill size={40} />
          <div className="extraInfo__container_info">
            <p>Venezuela, Edo. Anzoátegui, El Tigre.</p>
            <a href="#">Abrir mapa</a>
          </div>
        </div>
      </div> */}
    </section>
  );
}
