import React from 'react';
// import '../css/style.css';
import moment from 'moment';
import { formatDate } from '../../helpers/env';

const SpecComponent = ({ spec, campaign, onViewSpec }) => {
  //TODO: Enviar los datos a monstrar uno por uno, y no el objeto global completo
  return (
    <div className="spec-component">
      <section className="button-container">
        <button onClick={() => onViewSpec(-1)}>Cerrar</button>
      </section>
      <section className="spec">
        <h3>Campaña</h3>
        <p>{campaign.name}</p>
      </section>
      <section className="spec">
        <h3>Medio</h3>
        <p>{spec.content.creative.adFormat.medium.name}</p>
      </section>
      <section className="spec">
        <h3>Formato</h3>
        <p>{spec.content.creative.adFormat.name}</p>
      </section>
      <section className="spec">
        <h3>Creativo</h3>
        <p>{spec.content.creative.name}</p>
      </section>
      <section className="spec">
        <h3>Tipo de contenido</h3>
        <p>{spec.content.contentFormat.contentType.name}</p>
      </section>
      <section className="spec">
        <h3>Formato de contenido</h3>
        <p>{spec.content.contentFormat.name}</p>
      </section>
      <section className="spec">
        <h3>Tamaño</h3>
        <p>{spec.content.size}</p>
      </section>
      <section className="spec">
        <h3>Peso</h3>
        <p>{spec.content.weight}</p>
      </section>
      <section className="spec">
        <h3>Texto</h3>
        <p>{spec.content.creative.text}</p>
      </section>
      <section className="spec">
        <h3>Titulo</h3>
        <p>{spec.content.creative.title}</p>
      </section>
      <section className="spec">
        <h3>Descripción</h3>
        <p>{spec.content.creative.description}</p>
      </section>
      {(spec && spec.content && spec.content.length) ? (
        <section className="spec">
          <h3>Duración del video</h3>
          <p>{spec.content.length}</p>
        </section>) : ``}
      <section className="spec">
        <h3>Observaciones</h3>
        <p>{spec.content.observation}</p>
      </section>
      <section className="spec">
        <h3>Imagen de ejemplo</h3>
        <p></p>
      </section>
      <section className="spec">
        <h3>Fecha</h3>
        <p>{moment(spec.date).format(formatDate)}</p>
      </section>
    </div>
  );
};

export default SpecComponent;