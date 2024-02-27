import { Button, Container, Form } from "react-bootstrap";
// import { crearProducto } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearRecetaAPI } from "../../helpers/queries";

const NuevoProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const productoValidado = async (receta) => {
    console.log(receta);
    const respuesta = await crearRecetaAPI(receta);
    if (respuesta.status === 201) {
      Swal.fire({
        title: "Producto Creado",
        text: `El ${receta.nombreReceta} se guardó correctamente`,
        icon: "success",
      });
      reset();
    } else {
      Swal.fire({
        title: "Error al Crear el Producto",
        text: `El ${receta.nombreReceta} no pudo ser cargado. Intente nuevamente`,
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Container>
        <section className=" bg-white shadow rounded-5  p-3 my-4">
          <Form onSubmit={handleSubmit(productoValidado)}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Nombre de la Receta
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Tacos de Pollo, Espaguetis a la Carbonara, Ensalada César, Sopa de Tomate, Paella, etc."
                {...register("nombreReceta", {
                  required: "El Nombre la Receta es Obligatoria",
                  minLength: {
                    value: 4,
                    message:
                      "El nombre de la Receta debe tener como minimo 4 caracteres",
                  },
                  maxLength: {
                    value: 40,
                    message:
                      "El nombre del producto debe tener como máximo 40 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.nombreReceta?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Ingredientes
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 2 pechugas de pollo, 1 cucharadita de comino, 1/2 taza de salsa, etc."
                {...register("ingredientes", {
                  required: "Los Ingredientes son Obligatorios",
                  minLength: {
                    value: 3,
                    message:
                      "El Ingrediente debe tener como minimo 3 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message:
                      "El Ingrediente debe tener como máximo 100 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.ingredientes?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Imagen URL
              </Form.Label>
              <Form.Control
                type="url"
                placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
                {...register("url", {
                  required: "La Imagen es obligatoria",
                  pattern: {
                    value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                    message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">{errors.url?.message}</Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Categoría
              </Form.Label>
              <Form.Select
                {...register("categoria", {
                  required: "Selecciona una Categoría",
                })}
              >
                <option value="" hidden>
                  -- Seleccione una Opción --
                </option>
                <option value="platoPrincipal">Plato Principal</option>
                <option value="entrada">Entradas</option>
                <option value="postre">Postre</option>
                <option value="desayuno">Desayuno</option>
                <option value="apertivo">Aperitivo</option>
                <option value="sopas">Sopa</option>
                <option value="vegetariano">Vegetariano</option>
                <option value="sinGluten">Sin Gluten</option>
                <option value="vegano">Vegano</option>
              </Form.Select>
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Dificultad
              </Form.Label>
              <Form.Select
                {...register("dificultad", {
                  required: "Selecciona una Categoría",
                })}
              >
                <option value="" hidden>
                  -- Seleccione una Opción --
                </option>
                <option value="facil">Fácil</option>
                <option value="intermedio">Intermedio</option>
                <option value="dificil">Difícil</option>
              </Form.Select>
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.dificultad?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Descripción Breve
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ej: Tacos de carne asada: deliciosos tacos mexicanos rellenos de jugosa carne asada, cebolla, cilantro y salsa."
                className="w-100"
                {...register("descrpcionBreve", {
                  required: "La Descripcion Breve es Obligatoria",
                  minLength: {
                    value: 5,
                    message:
                      "La Descripcion Breve del producto debe tener como minimo 25 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "La Descripcion Breve del producto debe tener como máximo 120 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.descrpcionBreve?.message}
            </Form.Text>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder fst-normal">
                Descripción Amplia
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ej: Los tacos de carne asada son una deliciosa especialidad mexicana que combina sabores intensos y frescos. La carne asada..."
                className="w-100"
                {...register("descripcionAmplia", {
                  required: "La Descripcion Amplia es Obligatoria",
                  minLength: {
                    value: 50,
                    message:
                      "La Descripcion Amplia del producto debe tener como minimo 25 caracteres",
                  },
                  maxLength: {
                    value: 300,
                    message:
                      "La Descripcion Amplia del producto debe tener como máximo 120 caracteres",
                  },
                })}
              />
            </Form.Group>

            <Form.Text className="text-danger">
              {errors.descripcionAmplia?.message}
            </Form.Text>

            <Button
              type="submit"
              className="w-100 my-2 fw-bold bgNavFooter"
              variant="success"
            >
              Guardar
            </Button>
          </Form>
        </section>
      </Container>
    </div>
  );
};

export default NuevoProducto;
