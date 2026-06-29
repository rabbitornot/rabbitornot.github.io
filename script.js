const exercises = [
  {
    title: "Identifier la classe grammaticale",
    prompt: "Dans la phrase \"Le roman ancien captive les lecteurs.\", quel est le mot qui est un adjectif qualificatif ?",
    answer: "\"ancien\" est l'adjectif qualificatif. Il qualifie le nom \"roman\".",
  },
  {
    title: "Fonction d'un groupe nominal",
    prompt: "Dans la phrase \"Les élèves de la classe préparent un exposé.\", quelle est la fonction de \"un exposé\" ?",
    answer: "\"un exposé\" est le COD du verbe \"préparent\".",
  },
  {
    title: "Type et forme de phrase",
    prompt: "Que vaut la phrase \"Ne t'en fais pas, tu y arriveras.\" ? (type + forme)",
    answer: "C'est une phrase déclarative affirmative avec une négation partielle. Elle exprime un encouragement et utilise la forme négative sur le premier groupe verbal. ",
  },
  {
    title: "Nature de la proposition",
    prompt: "Dans la phrase \"Je sais que tu viens demain.\", quelle est la nature de \"que tu viens demain\" ?",
    answer: "\"que tu viens demain\" est une proposition subordonnée conjonctive complétive. Elle complète le verbe \"sais\".",
  },
  {
    title: "Valeur du temps",
    prompt: "Dans la phrase \"Il lisait souvent des poèmes quand il était jeune.\", quelle valeur a l'imparfait ?",
    answer: "L'imparfait indique une action habituelle et un arrière-plan. Il décrit un cadre régulier dans le passé.",
  },
  {
    title: "Discours rapporté",
    prompt: "Transforme en discours indirect : \"Elle dit : 'Je vais partir.'\"",
    answer: "Elle dit qu'elle allait partir. (ou : Elle a dit qu'elle allait partir.)",
  },
  {
    title: "Pronom relatif et fonction",
    prompt: "Dans la phrase \"Le professeur dont je parle est exigeant.\", quel est le pronom relatif et quelle est sa fonction ?",
    answer: "Le pronom relatif est \"dont\". Sa fonction est complément du nom \"professeur\" dans la subordonnée relative.",
  },
  {
    title: "Complément circonstanciel",
    prompt: "Dans la phrase \"Ils partent en voyage demain matin.\", quel est le complément circonstanciel et quelle information donne-t-il ?",
    answer: "\"demain matin\" est un complément circonstanciel de temps. Il indique le moment de l'action.",
  },
  {
    title: "Mise en relief",
    prompt: "Dans la phrase \"C'est Paul qui a trouvé la réponse.\", quel procédé syntaxique est utilisé ?",
    answer: "C'est le présentatif / la mise en relief. L'élément mis en relief est \"Paul\".",
  },
  {
    title: "Concordance des temps",
    prompt: "Quelle est la bonne concordance dans la phrase indirecte : \"Il disait qu'il (venir) demain.\" ?",
    answer: "Il disait qu'il viendrait demain. (Le futur direct devient conditionnel présent après un verbe au passé.)",
  }
];

const exerciseList = document.getElementById('exercise-list');

function createExerciseCard(exercise, index) {
  const card = document.createElement('div');
  card.className = 'exercise-card';

  const title = document.createElement('h3');
  title.textContent = `${index + 1}. ${exercise.title}`;
  card.appendChild(title);

  const prompt = document.createElement('p');
  prompt.textContent = exercise.prompt;
  card.appendChild(prompt);

  const actions = document.createElement('div');
  actions.className = 'exercise-actions';

  const showButton = document.createElement('button');
  showButton.textContent = 'Afficher la correction';
  showButton.addEventListener('click', () => toggleAnswer(answerBox, showButton));
  actions.appendChild(showButton);

  card.appendChild(actions);

  const answerBox = document.createElement('div');
  answerBox.className = 'answer';
  answerBox.textContent = exercise.answer;
  card.appendChild(answerBox);

  return card;
}

function toggleAnswer(answerBox, button) {
  const visible = answerBox.classList.toggle('visible');
  button.textContent = visible ? 'Masquer la correction' : 'Afficher la correction';
}

function renderExercises() {
  exercises.forEach((exercise, index) => {
    const card = createExerciseCard(exercise, index);
    exerciseList.appendChild(card);
  });
}

renderExercises();
