/* import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Coments() {
  const comentarios = [];

  function addComent(valores) {
    console.log("Submit", valores);
  }
  return (
    <div>
      <Formik
      validationSchema={comentValidationSchema}
        onSubmit={addComent}
        initialValues={{ name: "", email: "", coment: "" }}
      >
        {() => (
          <Form>
            <div>
              <div>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Nome"
              ></Field>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="e-mail"
              ></Field>
              </div>
              <div>
              <Field
                id="coment"
                name="coment"
                type="text"
                placeholder="Comentários"
              ></Field>
              </div>
              <button type="submit">Adicionar comentário</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Coments;

const comentValidationSchema = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório"),
  comentario: Yup.string().required("Campoobrigatório"),
  email: Yup.string().required("Campoobrigatório")
})
 */