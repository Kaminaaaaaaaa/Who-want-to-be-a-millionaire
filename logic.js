const QUESTIONS = [
    {
      text: "Какая планета является самой большой в Солнечной системе?",
      answers: ["Меркурий", "Венера", "Земля", "Юпитер"],
      rightIndex: 3,
    },
    {
      text: "Кто написал роман 'Преступление и наказание'?",
      answers: ["Лев Толстой", "Иван Тургенев", "Федор Достоевский", "Александр Пушкин"],
      rightIndex: 2,
    },
    {
      text: "В каком году началась Первая мировая война?",
      answers: ["1914", "1916", "1918", "1920"],
      rightIndex: 0,
    },
    {
      text: "Какой год считается началом Великой депрессии?",
      answers: ["1929", "1932", "1935", "1940"],
      rightIndex: 0,
    },
    {
      text: "Кто был первым президентом США?",
      answers: ["Томас Джефферсон", "Джордж Вашингтон", "Джон Адамс", "Авраам Линкольн"],
      rightIndex: 1,
    },
    {
      text: "Сколько костей в человеческом теле?",
      answers: ["206", "210", "212", "215"],
      rightIndex: 0,
    },
    {
      text: "Какая страна является самой маленькой по площади?",
      answers: ["Монако", "Ватикан", "Лихтенштейн", "Сан-Марино"],
      rightIndex: 1,
    },
    {
      text: "Какое самое длинное река в мире?",
      answers: ["Нил", "Амазонка", "Янцзы", "Миссисипи"],
      rightIndex: 1,
    },
    {
      text: "Какое животное является символом силы для США?",
      answers: ["Буйвол", "Орёл", "Лев", "Медведь"],
      rightIndex: 1,
    },
    {
      text: "В каком году произошло вторжение на Нормандию во время Второй мировой войны?",
      answers: ["1942", "1943", "1944", "1945"],
      rightIndex: 2,
    },
    {
      text: "Кто написал произведение 'Гамлет'?",
      answers: ["Уильям Шекспир", "Шарль Бодлер", "Гомер", "Данте Алигьери"],
      rightIndex: 0,
    },
    {
      text: "Какая картина является самой известной работой Леонардо да Винчи?",
      answers: ["Тайная вечеря", "Мадонна Литтская", "Проповедь Иоанна Крестителя", "Мона Лиза"],
      rightIndex: 3,
    },
    {
      text: "Какой самый высокий горный хребет на Земле?",
      answers: ["Анды", "Альпы", "Гималаи", "Кавказ"],
      rightIndex: 2,
    },
    {
      text: "Какое животное является символом Австралии?",
      answers: ["Кенгуру", "Коала", "Дельфин", "Эму"],
      rightIndex: 0,
    },
    {
      text: "Как называется жидкость, которая приводит к тому, что термометр показывает температуру?",
      answers: ["Ртуть", "Спирт", "Нефть", "Вода"],
      rightIndex: 0,
    },
    {
      text: "Кто изобрел телефон?",
      answers: ["Томас Эдисон", "Александр Грэм Белл", "Никола Тесла", "Генри Форд"],
      rightIndex: 1,
    },
    {
      text: "В каком году произошло крушение Титаника?",
      answers: ["1910", "1912", "1914", "1916"],
      rightIndex: 1,
    },
    {
      text: "Какой год считается началом Революции во Франции?",
      answers: ["1787", "1789", "1791", "1793"],
      rightIndex: 1,
    },
    {
      text: "Кто был первым космонавтом?",
      answers: ["Юрий Гагарин", "Нил Армстронг", "Баз Алдерин", "Юджин Сернан"],
      rightIndex: 0,
    },
    {
      text: "Какой газ является самым распространенным в атмосфере Земли?",
      answers: ["Кислород", "Азот", "Углекислый газ", "Аргон"],
      rightIndex: 1,
    },
    {
      text: "Как называется самый большой океан на Земле?",
      answers: ["Тихий", "Атлантический", "Индийский", "Северный Ледовитый"],
      rightIndex: 0,
    },
    {
      text: "Как называется молекула, которая передает генетическую информацию?",
      answers: ["ДНК", "РНК", "АДНК", "РНК"],
      rightIndex: 0,
    },
    {
      text: "В каком году завершилась Вторая мировая война?",
      answers: ["1943", "1945", "1947", "1949"],
      rightIndex: 1,
    },
    {
      text: "Кто написал 'Войну и мир'?",
      answers: ["Лев Толстой", "Федор Достоевский", "Иван Тургенев", "Александр Пушкин"],
      rightIndex: 0,
    },
    {
      text: "Какая страна первой отправила человека в космос?",
      answers: ["США", "СССР", "Франция", "Китай"],
      rightIndex: 1,
    }
  ];
  
  
  const MONEY_NODES = document.querySelectorAll(".money");
  const START_GAME_BUTTONS = document.querySelectorAll(".start-game");
  const SCREEN_NODES = document.querySelectorAll(".screen");
  const ANSWER_NODES = document.querySelectorAll(".answer");
  const PRIZE_FOR_RIGHT_ANSWER = 5000;
  const HIGHLIGHT_TIMEOUT_MS = 1500;
  
  let activeQuestionIndex = 0;
  let money = 0;
  
  START_GAME_BUTTONS.forEach((button) =>
    button.addEventListener("click", startNewGame)
  );
  
  function startNewGame() {
    if (QUESTIONS.length === 0) {
      console.error('Заполните массив с вопросами');
      return;
    }
  
    updateMoneyDisplay(0);
    setActiveQuestion(0);
    showScreen(1);
  }
  
  function updateMoneyDisplay(newMoney) {
    money = newMoney;
  
    MONEY_NODES.forEach((moneyNode) => (moneyNode.textContent = money));
  }
  
  function setActiveQuestion(index) {
    activeQuestionIndex = index;
  
    const QUESTION_NODE = document.querySelector(".question");
    const activeQuestion = QUESTIONS[index];
  
    QUESTION_NODE.textContent = activeQuestion.text;
  
    activeQuestion.isChecking = false;
  
    setupAnswers(activeQuestion);
  }
  
  function showScreen(index) {
    SCREEN_NODES.forEach((screen, i) => {
      screen.classList.toggle("visible", i === index);
    });
  }
  
  function setupAnswers(question) {
    if (question.answers.length !== 4 ) {
      console.error('Укажите 4 варианта ответа для вопросов');
      return;
    }
  
    ANSWER_NODES.forEach((answerNode, index) => {
      const letters = ["A", "B", "C", "D"];
  
      answerNode.textContent = `${letters[index]}. ${question.answers[index]}`;
  
      answerNode.addEventListener("click", () =>
        handleAnswerClick(answerNode, question)
      );
    });
  }
  
  async function handleAnswerClick(answerNode, question) {
    if (question.isChecking) {
      return;
    }
  
    question.isChecking = true;
  
    await highlightAnswer(answerNode, "active", HIGHLIGHT_TIMEOUT_MS);
  
    const rightAnswerNode = ANSWER_NODES[question.rightIndex];
  
    const isRightAnswer = answerNode.textContent === rightAnswerNode.textContent;
  
    await highlightAnswer(rightAnswerNode, "right", HIGHLIGHT_TIMEOUT_MS);
  
    if (!isRightAnswer) {
      gameOver("lose");
      return;
    }
  
    const isLastQuestion = activeQuestionIndex === QUESTIONS.length - 1;
  
    if (isLastQuestion) {
      gameOver("win");
    } else {
      setActiveQuestion(activeQuestionIndex + 1);
    }
  
    updateMoneyDisplay(money + PRIZE_FOR_RIGHT_ANSWER);
  }
  
  async function highlightAnswer(answerNode, type, timeoutMs) {
    answerNode.classList.add(type);
  
    if (timeoutMs) {
      await timeout(timeoutMs);
    }
  
    clearClassnamesFromQuestionNode(answerNode);
  }
  
  function gameOver(status) {
    if (status === "win") {
      showScreen(3);
    }
  
    if (status === "lose") {
      updateMoneyDisplay(0);
      showScreen(2);
    }
  }
  
  function clearClassnamesFromQuestionNode(answerNode) {
    ["active", "right", "wrong"].forEach((className) =>
      answerNode.classList.remove(className)
    );
  }
  
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }