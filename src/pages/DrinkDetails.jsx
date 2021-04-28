import { shape, string } from 'prop-types';
import React from 'react';

export default function DrinkDetails({ match: { params: { id } } }) {
  return <h1>{`Página de detalhes da bebida de id ${id}`}</h1>;
}

DrinkDetails.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;
