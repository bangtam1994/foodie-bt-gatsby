import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

// Yup validation
const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Champ obligatoire"),
  lastName: Yup.string().required("Champ obligatoire"),
  email: Yup.string()
    .email("Email non valide")
    .required("Champ obligatoire"),
  message: Yup.string().required("Champ obligatoire"),
})

const Contact = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }

  return (
    <Layout>
      <SEO title="Contact" />

      <h1>Contacts</h1>
      <h2>
        Do you have any questions, or requests ? Or maybe just want to leave me
        a message? Please fill the form :
      </h2>

      {/* FORM  */}

      <Formik
        initialValues={{
          ...initialValues,
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const questions = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            message: values.message,
          }
          alert(JSON.stringify(questions, null, 2))
          setSubmitting(false)
          resetForm()
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  {/* FIRSTNAME */}
                  <div css={{ display: "flex", flexDirection: "row" }}>
                    <label htmlFor="firstname">Prénom </label>
                  </div>
                  <Field type="text" placeholder="Prénom" name="firstName" />
                  <ErrorMessage
                    name="firstName"
                    render={msg => <div className="error">{msg}</div>}
                  />

                  {/* LASTNAME  */}
                  <div css={{ display: "flex", flexDirection: "row" }}>
                    <label htmlFor="lastName">Nom </label>
                  </div>
                  <Field type="text" placeholder="Nom Name" name="lastName" />
                  <ErrorMessage
                    name="lastName"
                    render={msg => <div className="error">{msg}</div>}
                  />

                  {/* EMAIL  */}
                  <div css={{ display: "flex", flexDirection: "row" }}>
                    <label htmlFor="email">Email </label>
                  </div>
                  <Field type="email" placeholder="Email" name="email" />
                  <ErrorMessage
                    name="email"
                    render={msg => <div className="error">{msg}</div>}
                  />

                  {/* MESSAGE  */}
                  <div css={{ display: "flex", flexDirection: "row" }}>
                    <label htmlFor="message">Tapez votre message ici : </label>
                  </div>
                  <Field
                    type="message"
                    placeholder="message"
                    name="message"
                    as="textarea"
                  />
                  <ErrorMessage
                    name="message"
                    render={msg => <div className="error">{msg}</div>}
                  />
                </div>
              </div>

              {/* BUTTON  */}
              <div>
                <button type="submit" disabled={isSubmitting}>
                  Envoyer le message
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </Layout>
  )
}

export default Contact
