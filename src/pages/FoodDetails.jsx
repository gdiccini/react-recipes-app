import { shape, string } from 'prop-types';
import React from 'react';

export default function FoodDetails({ match: { params: { id } } }) {
  return <h1>{`Página de detalhes da comida de id ${id}`}</h1>;
}

FoodDetails.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;
