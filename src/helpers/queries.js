const crearProducto = async () => {};

const editarReceta = async (recetaModificada, id) => {
  try {
    const respuesta = await fetch(`${NOMBRE_VARIABLE}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaModificada),
    });

    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export { crearProducto, editarReceta };
