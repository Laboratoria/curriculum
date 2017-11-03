function whatToWear(season) {
  if (season === 'spring') {
    return 'Bring an umbrella.';
  } else if (season === 'summer') {
    return 'Wear sunglasses.';
  } else if (season === 'autumn') {
    return 'Wear a light jacket.';
  } else if (season === 'winter') {
    return 'Bring a hat and gloves.';
  } else {
    return 'Please enter a valid season.';
  }
}

/**
 * ¿Cuál fue el problema con el código?
 *
<<<<<<< HEAD
 * ESCRIBA SU RESPUESTA AQUÍ.
=======
 * Usaba operador de asignación en vez de comparación.
>>>>>>> 45863fa08bf5d26ca45f8b314f1ba0cbd008be12
 */

module.exports = whatToWear;
