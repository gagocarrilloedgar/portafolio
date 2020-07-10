import React, { Component } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import * as emailjs from "emailjs-com";

class SurveyComponent extends Component {
  //Define Survey JSON

  json = {
    pages: [
      {
        questions: [
          {
            type: "dropdown",
            name: "Conocido",
            title: "¿Como ha encontrado o conocido Pportfolio?",
            choices: [
              {
                value: "item1",
                text: "Búsqueda en buscadores (Google, Firefox ...)",
              },
              {
                value: "item2",
                text: "Redes sociales (Facebook, Instagram ...)",
              },
              {
                value: "item3",
                text: "Recomendación",
              },
              {
                value: "item4",
                text: "No lo recuerdo",
              },
              {
                value: "item5",
                text: "Otros",
              },
            ],
          },
          {
            type: "matrix",
            name: "Feedback",
            title:
              "Por favor ayudenos a mejorar la experiencia de usuario puntuando las siguientes afirmaciones del 1 al 5 (Siendo 5 la mejor puntuación)",
            columns: [
              {
                value: 1,
                text: "1",
              },
              {
                value: 2,
                text: "2",
              },
              {
                value: 3,
                text: "3",
              },
              {
                value: 4,
                text: "4",
              },
              {
                value: 5,
                text: "5",
              },
            ],
            rows: [
              {
                value: "Simpleza",
                text: "Simplicidad de la web",
              },
              {
                value: "Diseño",
                text: "Interfaz de diseño del portafolio",
              },
              {
                value: "Predicitvidad",
                text: "Moverse por la página resulta predictivo",
              },
              {
                value: "Facilidad",
                text: "Facilidad de creación de proyectos en tu perfil",
              },
              {
                value: "Links",
                text: "El uso de Links para acceder a proyectos",
              },
            ],
          },
          {
            type: "rating",
            name: "satisfaction",
            title: "¿ Cual es tu nivel de satisfacción con Pportfolio?",
            isRequired: true,
            mininumRateDescription: "Nada satisfecho",
            maximumRateDescription: "Muy satisfecho",
          },
          {
            type: "rating",
            name: "recommend friends",
            visibleIf: "{satisfaction} > 3",
            title:
              "Recomendarías el uso de Pportfolio a un amigo/a o compañero/a?",
            mininumRateDescription: "No, no lo recomendaría",
            maximumRateDescription: "Si, lo voy a recomendar",
          },
          {
            type: "comment",
            name: "suggestions",
            visibleIf: "{satisfaction} < 3",
            title: "¿Hay algo en concreto que le haya disgustado en especial?",
          },
          {
            type: "comment",
            name: "suggestions",
            title:
              "¿Que haría que Pportfolio mejorase tu experiencia de usuario?",
          },
        ],
      },
      {
        questions: [
          {
            type: "rating",
            name: "Competencia",
            title: "¿Conoces alguna pagina web parecida a Pportfolio?",
            rateValues: [
              {
                value: 1,
                text: "Si",
              },
              {
                value: 2,
                text: "No",
              },
            ],
          },
          {
            type: "comment",
            name: "DescripcioCompetencia",
            visibleIf: "{Competencia} == 1",
            title:
              "Por favor hablenos sobre esa otra web que ofrece un servicio similar a Pportfolio",
          },
          {
            type: "rating",
            name: "ComparacionCompetencia",
            visibleIf: "{Competencia} == 1",
            title:
              "¿Considera que Pportfolio ofrece un mejor servicio que su competencia?",
            rateValues: [
              {
                value: 1,
                text: "Si",
              },
              {
                value: 2,
                text: "No",
              },
            ],
          },
          {
            type: "comment",
            name: "DiferenciaCompetencia",
            visibleIf: "{ComparacionCompetencia} == 2",
            title:
              "¿Que cambios deberia hacer Pportfolio para igualar o mejorar a su competencia?",
          },
        ],
      },
      {
        questions: [
          {
            type: "text",
            name: "email",
            title:
              "¡Muchas gracias por ayudarnos respondiendo esta encuesta!. Tu encuesta esta casi lista, por favor escribe tu e-mail en la cajita de debajo si quieres se te vayan notificando de nuevos cambios en Pportfolio, Después aprieta el botón 'Complete'. ",
          },
        ],
      },
    ],
  };

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    const texto = JSON.stringify(survey.data);
    console.log(texto);

    //Send a email to Nexelane email with the results of the survey
    let template_params = {
      survey: texto,
    };

    emailjs
      .send("gmail", "survey", template_params, "user_RQAYsbtAB6PWt92ICV4lv")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //Write survey results into browser console
    console.log("Survey results: " + JSON.stringify(survey.data));
  }

  render() {
    var model = new Survey.Model(this.json);
    return <Survey.Survey model={model} onComplete={this.onComplete} />;
  }
}
export default SurveyComponent;
