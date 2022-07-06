/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {

  const {
    location,
    current,

  } = data;

  return (

        <div className="bg-white font-bold mt-10 rounded-lg shadow-lg p-10">
          <div className="text-center">
              <span className="block text-xl text-slate-700">{location.name}</span>
              <span className="text-slate-500 text-sm font-medium">
                {`${location.region}, ${location.country}`}
              </span>
          </div>

          <div className="flex mt-3 mb-2 justify-center">
            <span className="text-6xl font-bold text-slate-600 text-center">{current.temp_c}</span>
            <span className="text-2xl text-slate-600 mt-2">°C</span>
          </div>

          <div className="text-center flex flex-col items-center">
            <img src={current.condition.icon} alt="" className="flex justify-center" />
            <span className="text-slate-600 font-medium">{current.condition.text}</span>
          </div>

        </div>

  );

}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;