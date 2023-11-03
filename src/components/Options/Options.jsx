import React from "react";

import '../Options/options.css';

const Options = (props) => {
  const options = [
    { text: "Sobre a empresa Aqcion Digital",
    handler: props.actionProvider.about, 
    id: 1
    },
    { text: "Contatar empresa",
      handler: props.actionProvider.Contatar, 
      id: 2
    },
    { text: "Suporte Técnico",
      handler: props.actionProvider.Suporte, 
      id: 3
    },
    { text: "Serviços",
      handler: props.actionProvider.Servicos, 
      id: 4
    },
    { text: "Orçamentos e Prazos",
      handler: props.actionProvider.Orcamentoeprazos, 
      id: 5
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
