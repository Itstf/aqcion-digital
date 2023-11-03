class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage(
        'Em que podemos ajudar? Clique em uma das opções.',
        {
          widget: "options",
        }
      );
      this.addMessageToState(message);
    };
  
    // Contacts = () => {
    //   const message = this.createChatBotMessage(
    //     "Vias de Contato",
    //   );
    //   const message2 = this.createChatBotMessage(
    //     "Instagram: @OpenMind.Connect",
    //   );
    //   const message3 = this.createChatBotMessage(
    //     "Tel: (19) 99423-8412",
    //   );
    //   const message4 = this.createChatBotMessage(
    //     "Email: openConnect@gmail.com",
    //   );

    //   this.addMessageToState(message);
    //   this.addMessageToState(message2);
    //   this.addMessageToState(message3);
    //   this.addMessageToState(message4);
    // };

    Contatar = () => {
      const message = this.createChatBotMessage(
        "Selecione o meio de contato desejado",
        {
          widget: "duvidasQuiz",
        }
      );
  
      this.addMessageToState(message);
    };
      Email = () => {
        const message = this.createChatBotMessage(
          "aqciondigi@gmail.com",
        );
    
        this.addMessageToState(message);
      };

      Whatsapp = () => {
        const message = this.createChatBotMessage(
          "(19) 99423-8412",
        );
    
        this.addMessageToState(message);
      };

      RedesSociais = () => {
        const message = this.createChatBotMessage(
          "@aqcion.digital",
        );
    
        this.addMessageToState(message);
      };

    about = () => {
      const message = this.createChatBotMessage(
        'Sobre a empresa',
        {
          widget: "javascriptQuiz",
        }
      );
      this.addMessageToState(message);
    };

    Servicos = () => {
      const message = this.createChatBotMessage(
        "Oferecemos serviços de desenvolvimento personalizados. Podemos ajudar com desenvolvimento web, desenvolvimento de aplicativos móveis e muito mais.",
      );
  
      this.addMessageToState(message);
    };

    Suporte = () => {
      const message = this.createChatBotMessage(
        "Para obter suporte técnico, por favor, descreva o problema com mais detalhes ou entre em contato com nossa equipe de suporte através do email aqciondigi@gmail.com ou pelo telefone 19 99423-8412.",
      );
  
      this.addMessageToState(message);
    };

    Orcamentoeprazos = () => {
      const message = this.createChatBotMessage(
        "O custo e o prazo de entrega de um projeto de desenvolvimento de site dependem de vários fatores, como complexidade, recursos necessários e escopo do projeto. Seria útil obter mais informações sobre suas necessidades específicas para fornecer um orçamento e prazo mais precisos.",
      );
  
      this.addMessageToState(message);
    };

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;