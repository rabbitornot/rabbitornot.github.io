const flashcards = [
  {
    front: "Qu'est-ce qu'un complément d'objet direct (COD) ?",
    back: "Un COD est un complément du verbe sans préposition. Il répond à la question \"qui ?\" ou \"quoi ?\" après le verbe. Exemple : \"Elle mange <strong>une pomme</strong>\".",
  },
  {
    front: "Quel mot est un pronom relatif dans cette phrase : \"Le livre que j'ai lu était passionnant.\" ?",
    back: "\"que\" est un pronom relatif. Il introduit la subordonnée relative \"que j'ai lu\" et remplace l'antécédent \"le livre\".",
  },
  {
    front: "Donne un exemple de phrase interrogative indirecte.",
    back: "Exemple : \"Je me demande quand il arrivera.\" La subordonnée \"quand il arrivera\" est interrogative indirecte.",
  },
  {
    front: "Quelle est la différence entre une conjonction de coordination et une conjonction de subordination ?",
    back: "La coordination relie des éléments de même niveau (et, mais, ou). La subordination introduit une proposition dépendante (que, lorsque, parce que).",
  },
  {
    front: "Définis une proposition subordonnée conjonctive.",
    back: "Une subordonnée conjonctive est introduite par un mot subordonnant et dépend d'une principale. Exemple : \"Je sais <strong>que tu viens</strong>\".",
  },
  {
    front: "Qu'est-ce qu'un groupe adjectival ?",
    back: "Un groupe adjectival a pour noyau un adjectif. Exemple : \"<strong>très heureux</strong> de partir\".",
  },
  {
    front: "Donne un exemple de négation totale.",
    back: "Exemple : \"Je ne vois personne.\" Toute l'information est niée.",
  },
  {
    front: "Quelle est la valeur de l'imparfait dans \"Elle lisait quand je suis arrivé.\" ?",
    back: "L'imparfait est une action de second plan ou un arrière-plan. Il décrit une action en cours dans le passé.",
  },
  {
    front: "Qu'est-ce qu'une épithète détachée ?",
    back: "C'est un adjectif qualifiant le nom, séparé par une virgule. Exemple : \"Paul, <strong>fatigué</strong>, s'est arrêté.\".",
  },
  {
    front: "Donne un connecteur logique de cause et un connecteur logique de concession.",
    back: "Cause : \"parce que\". Concession : \"bien que\".",
  },
  {
    front: "Quelle est la fonction d'une proposition subordonnée relative ?",
    back: "Elle peut être sujet, COD, complément du nom, complément de l'adjectif ou complément circonstanciel. Exemple : \"Le livre qui brille est à moi.\".",
  },
  {
    front: "Comment reconnaît-on un complément circonstanciel de but ?",
    back: "Il répond à la question \"pourquoi ?\" ou \"dans quel but ?\". Exemple : \"Il travaille pour réussir.\".",
  },
  {
    front: "Qu'est-ce que la mise en relief ?",
    back: "C'est un procédé qui met un élément en valeur, souvent avec \"c'est... qui\", \"voici\", \"voilà\". Exemple : \"C'est lui qui a gagné.\".",
  },
  {
    front: "Donne un exemple de proposition infinitive.",
    back: "Exemple : \"Je préfère rester ici.\" La proposition infinitive est \"rester ici\".",
  },
  {
    front: "Qu'est-ce qu'un groupe prépositionnel ?",
    back: "C'est un groupe introduit par une préposition, comme \"à cause de la pluie\" ou \"en raison de l'absence\".",
  },
  {
    front: "Quelle est la valeur du futur dans \"Si tu viens, je te prêterai mon livre.\" ?",
    back: "Le futur exprime une conséquence ou un engagement dans une proposition principale liée à une condition.",
  }
];

const exercises = [
  {
    title: "Identifier la classe grammaticale",
    prompt: "Dans la phrase \"Le roman ancien captive les lecteurs.\", quel est l'adjectif qualificatif ?",
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
    answer: "C'est une phrase déclarative affirmative avec une négation partielle. Elle utilise une première négation dans le style de l'encouragement.",
  },
  {
    title: "Nature de la proposition",
    prompt: "Dans la phrase \"Je sais que tu viens demain.\", quelle est la nature de \"que tu viens demain\" ?",
    answer: "\"que tu viens demain\" est une proposition subordonnée conjonctive complétive car elle complète le verbe \"sais\".",
  },
  {
    title: "Valeur du temps",
    prompt: "Dans la phrase \"Il lisait souvent des poèmes quand il était jeune.\", quelle valeur a l'imparfait ?",
    answer: "L'imparfait indique une habitude dans le passé et un arrière-plan descriptif.",
  },
  {
    title: "Discours rapporté",
    prompt: "Transforme en discours indirect : \"Elle dit : 'Je vais partir.'\"",
    answer: "Elle dit qu'elle allait partir. (ou : Elle a dit qu'elle allait partir.)",
  },
  {
    title: "Pronom relatif et fonction",
    prompt: "Dans la phrase \"Le professeur dont je parle est exigeant.\", quel est le pronom relatif et fonction ?",
    answer: "Le pronom relatif est \"dont\". Sa fonction est complément du nom \"professeur\" dans la subordonnée relative.",
  },
  {
    title: "Complément circonstanciel",
    prompt: "Dans la phrase \"Ils partent en voyage demain matin.\", quel est le complément circonstanciel ?",
    answer: "\"demain matin\" est un complément circonstanciel de temps. Il précise le moment de l'action.",
  },
  {
    title: "Mise en relief",
    prompt: "Dans la phrase \"C'est Paul qui a trouvé la réponse.\", quel procédé est utilisé ?",
    answer: "C'est une mise en relief (présentatif) : l'élément mis en avant est \"Paul\".",
  },
  {
    title: "Concordance des temps",
    prompt: "Complète : \"Il disait qu'il (venir) demain.\"",
    answer: "Il disait qu'il viendrait demain. Le futur direct devient conditionnel présent après un verbe au passé.",
  },
  {
    title: "Type de phrase et forme",
    prompt: "Analyse : \"Pourquoi n'es-tu pas venu ?\"",
    answer: "Phrase interrogative directe et négative. Le sens demande une raison, donc elle est totale et directe.",
  },
  {
    title: "Forme passive",
    prompt: "Transforme en phrase passive : \"Le professeur corrige les copies.\"",
    answer: "Les copies sont corrigées par le professeur.",
  },
  {
    title: "Proposition relative",
    prompt: "Dans \"La maison où j'ai grandi est loin.\", quel est le pronom relatif et sa fonction ?",
    answer: "Le pronom relatif est \"où\". Sa fonction est complément circonstanciel de lieu de la subordonnée relative.",
  },
  {
    title: "Fonction du complément",
    prompt: "Dans \"Il parle souvent de ses voyages.\", quelle est la fonction de \"de ses voyages\" ?",
    answer: "C'est un COI : il répond à la question \"de quoi ?\" après le verbe \"parle\".",
  },
  {
    title: "Groupe verbal",
    prompt: "Dans \"Elle a réussi l'examen.\", quel est le noyau du groupe verbal ?",
    answer: "Le noyau du GV est le verbe composé \"a réussi\".",
  },
  {
    title: "Forme passive",
    prompt: "Transforme en phrase passive : \"Le professeur corrige les copies.\"",
    answer: "Les copies sont corrigées par le professeur.\"",
  },
  {
    title: "Complément de l'adjectif",
    prompt: "Dans \"fière de sa réussite\", quel est le complément de l'adjectif ?",
    answer: "\"de sa réussite\" est le complément de l'adjectif \"fière\".",
  },
  {
    title: "Subordonnée infinitive",
    prompt: "Dans \"Il veut partir demain.\", quelle est la nature de \"partir demain\" ?",
    answer: "C'est une proposition infinitive qui dépend du verbe \"veut\".",
  },
  {
    title: "Types de subordination",
    prompt: "Quel type de subordonnée est \"si tu viens\" dans \"Je viendrai si tu viens\" ?",
    answer: "C'est une subordonnée conjonctive conditionnelle.",
  },
  {
    title: "Procédé syntaxique",
    prompt: "Quel procédé est utilisé dans \"Il rit, il pleure, il soupire.\" ?",
    answer: "Il s'agit d'une énumération et d'une accumulation.",
  },
  {
    title: "Groupe prépositionnel",
    prompt: "Dans \"en raison de la pluie\", quel est le noyau du groupe prépositionnel ?",
    answer: "Le noyau est la préposition \"en\". Le groupe entier forme un complément circonstanciel de cause.",
  },
  {
    title: "Discours indirect libre",
    prompt: "Quel type de discours est \"Il partirait demain, pensa-t-il.\" ?",
    answer: "C'est du discours indirect libre : pensée rapportée sans marqueur introductif explicite.",
  },
  {
    title: "Négation partielle",
    prompt: "Dans \"Il n'a que deux amis\", est-ce une négation totale ou partielle ?",
    answer: "C'est une négation partielle. Elle limite l'information à deux amis.",
  },
  {
    title: "Proposition juxtaposée",
    prompt: "Identifie le lien entre les propositions : \"Je travaille, je progresse.\"",
    answer: "Les propositions sont juxtaposées ; elles sont séparées par une virgule sans mot de liaison.",
  },
  {
    title: "Antécédent et relatif",
    prompt: "Dans \"L'étudiant qui pose la question est sérieux\", donne l'antécédent et le pronom relatif.",
    answer: "L'antécédent est \"L'étudiant\". Le pronom relatif est \"qui\".",
  }
];

const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const flashcardCard = document.getElementById('flashcard-card');
const flashcardNext = document.getElementById('flashcard-next');
const flashcardShuffle = document.getElementById('flashcard-shuffle');
const exerciseList = document.getElementById('exercise-list');

let currentCardIndex = 0;
let shuffled = false;

function renderFlashcard(index) {
  const card = flashcards[index];
  flashcardFront.innerHTML = card.front;
  flashcardBack.innerHTML = card.back;
  flashcardCard.classList.remove('flipped');
}

function nextFlashcard() {
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  renderFlashcard(currentCardIndex);
}

function shuffleFlashcards() {
  for (let i = flashcards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
  }
  currentCardIndex = 0;
  renderFlashcard(currentCardIndex);
}

flashcardCard.addEventListener('click', () => {
  flashcardCard.classList.toggle('flipped');
});
flashcardNext.addEventListener('click', nextFlashcard);
flashcardShuffle.addEventListener('click', shuffleFlashcards);

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
  answerBox.innerHTML = exercise.answer;
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

renderFlashcard(currentCardIndex);
renderExercises();
