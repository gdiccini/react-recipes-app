import { shape, string } from 'prop-types';
import React from 'react';

export default function Details({ match: { params: { id } } }) {
  return <h1>{`Página de detalhes da receita de id ${id}`}</h1>;
}

Details.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;
