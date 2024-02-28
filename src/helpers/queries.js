const URL_Recetas = import.meta.env.VITE_API_RECETAS;

const leerRecetasAPI = async () => {
  try {
    const respuesta = await fetch(URL_Recetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

const crearRecetaAPI = async (recetaNueva) => {
  try {
    const respuesta = await fetch(URL_Recetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const editarReceta = async (recetaModificada, id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaModificada),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const obtenerRecetasAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const borrarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${id}`, {
      method: "DELETE" });
    console.log(respuesta)
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export { leerRecetasAPI, crearRecetaAPI, editarReceta, obtenerRecetasAPI, borrarRecetaAPI };
