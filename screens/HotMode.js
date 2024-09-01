import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const initialQuestions = [
    "Je n'ai jamais triché au bac.",
    "Je n'ai jamais fait semblant d'être malade pour éviter d'aller en cours.",
    "Je n'ai jamais embrassé quelqu'un du même sexe.",
    "Je n'ai jamais menti à un ami pour éviter de le voir.",
    "Je n'ai jamais été ivre en public.",
    "Je n'ai jamais envoyé un message embarrassant à la mauvaise personne.",
    "Je n'ai jamais dormi pendant un film au cinéma.",
    "Je n'ai jamais été renvoyé de classe.",
    "Je n'ai jamais embrassé quelqu'un lors d'une soirée.",
    "Je n'ai jamais été amoureux d'un(e) prof.",
    "Je n'ai jamais menti à mes parents sur où j'étais.",
    "Je n'ai jamais pleuré en regardant un dessin animé.",
    "Je n'ai jamais mangé toute une pizza tout seul.",
    "Je n'ai jamais pris un taxi sans avoir de quoi payer.",
    "Je n'ai jamais été arrêté par la police.",
    "Je n'ai jamais pris l'avion.",
    "Je n'ai jamais eu un coup de foudre.",
    "Je n'ai jamais fait de fugue.",
    "Je n'ai jamais regretté d'avoir embrassé quelqu'un.",
    "Je n'ai jamais oublié le prénom de quelqu'un juste après qu'il me l'ait dit.",
    "Je n'ai jamais fait du stop.",
    "Je n'ai jamais menti sur mon âge.",
    "Je n'ai jamais été à un festival de musique.",
    "Je n'ai jamais envoyé de nudes.",
    "Je n'ai jamais dragué quelqu'un juste pour m'amuser.",
    "Je n'ai jamais participé à une manifestation.",
    "Je n'ai jamais eu de coup de soleil atroce.",
    "Je n'ai jamais dormi dehors.",
    "Je n'ai jamais été en garde à vue.",
    "Je n'ai jamais vomi dans un lieu public.",
    "Je n'ai jamais embrassé un inconnu.",
    "Je n'ai jamais menti sur mes compétences dans un CV.",
    "Je n'ai jamais pris la voiture sans permis.",
    "Je n'ai jamais volé quelque chose.",
    "Je n'ai jamais pleuré pour éviter une amende.",
    "Je n'ai jamais eu une relation d'un soir.",
    "Je n'ai jamais essayé de hacker un compte.",
    "Je n'ai jamais eu de surnom embarrassant.",
    "Je n'ai jamais cassé quelque chose dans un magasin et fait comme si de rien n'était.",
    "Je n'ai jamais regretté un achat impulsif.",
    "Je n'ai jamais chanté sous la douche.",
    "Je n'ai jamais participé à une bagarre.",
    "Je n'ai jamais fait semblant de connaître quelqu'un alors que ce n'était pas le cas.",
    "Je n'ai jamais eu une expérience paranormale.",
    "Je n'ai jamais trompé quelqu'un.",
    "Je n'ai jamais fait de bêtise en étant ivre.",
    "Je n'ai jamais joué à un jeu d'alcool.",
    "Je n'ai jamais laissé quelqu'un copier sur moi en cours.",
    "Je n'ai jamais embrassé quelqu'un dans une piscine.",
    "Je n'ai jamais été tatoué.",
    "Je n'ai jamais été amoureux de la copine/du copain d'un ami.",
    "Je n'ai jamais été dans un club de strip-tease.",
    "Je n'ai jamais regretté de ne pas avoir dit quelque chose.",
    "Je n'ai jamais dormi pendant un cours.",
    "Je n'ai jamais triché lors d'un jeu de société.",
    "Je n'ai jamais passé toute une journée sans sortir de chez moi.",
    "Je n'ai jamais perdu de l'argent en pariant.",
    "Je n'ai jamais failli me faire virer.",
    "Je n'ai jamais dansé sur une table.",
    "Je n'ai jamais changé de vêtements en public.",
    "Je n'ai jamais dragué quelqu'un dans un bar.",
    "Je n'ai jamais embrassé quelqu'un que je n'aimais pas.",
    "Je n'ai jamais eu de coupure de courant au mauvais moment.",
    "Je n'ai jamais menti sur mes goûts musicaux pour impressionner quelqu'un.",
    "Je n'ai jamais eu une discussion profonde à 3 heures du matin.",
    "Je n'ai jamais oublié l'anniversaire de quelqu'un d'important.",
    "Je n'ai jamais pris de décision radicale en pleine nuit.",
    "Je n'ai jamais été à un rendez-vous amoureux désastreux.",
    "Je n'ai jamais embrassé quelqu'un de plus âgé.",
    "Je n'ai jamais mangé de la nourriture que j'avais fait tomber par terre.",
    "Je n'ai jamais triché pendant un examen en ligne.",
    "Je n'ai jamais couru pour attraper un bus ou un train.",
    "Je n'ai jamais été si fatigué que j'ai dormi debout.",
    "Je n'ai jamais menti sur un réseau social.",
    "Je n'ai jamais embrassé quelqu'un dans un ascenseur.",
    "Je n'ai jamais eu de panne d'essence.",
    "Je n'ai jamais sauté dans une piscine tout habillé.",
    "Je n'ai jamais dit \"je t'aime\" sans le penser.",
    "Je n'ai jamais fait un karaoké en public.",
    "Je n'ai jamais prétendu comprendre quelque chose alors que ce n'était pas le cas.",
    "Je n'ai jamais été à un rendez-vous arrangé.",
    "Je n'ai jamais volé quelque chose dans un restaurant.",
    "Je n'ai jamais été déçu par un cadeau de Noël.",
    "Je n'ai jamais été surpris en train de faire quelque chose d'embarrassant.",
    "Je n'ai jamais annulé des plans à la dernière minute pour rester chez moi.",
    "Je n'ai jamais été bourré à un mariage.",
    "Je n'ai jamais été réveillé par une alarme incendie.",
    "Je n'ai jamais eu une coupure d'eau en plein milieu d'une douche.",
    "Je n'ai jamais été en retard à un entretien important.",
    "Je n'ai jamais fait de faux pas mode embarrassant.",
    "Je n'ai jamais oublié un mot de passe important.",
    "Je n'ai jamais regretté une coupe de cheveux.",
    "Je n'ai jamais pris un médicament sans lire la notice.",
    "Je n'ai jamais refusé un câlin alors que j'en avais vraiment besoin.",
    "Je n'ai jamais participé à une fête qui a dégénéré.",
    "Je n'ai jamais été en retenue.",
    "Je n'ai jamais détesté un cadeau au point de le rendre.",
    "Je n'ai jamais eu de mauvaises rencontres en ligne.",
    "Je n'ai jamais fait quelque chose de totalement fou par amour.",
    "Je n'ai jamais ri si fort que j'en ai pleuré.",
    "Je n'ai jamais séché un cours pour dormir.",
    "Je n'ai jamais pleuré à cause du stress des examens.",
    "Je n'ai jamais triché lors d'un quiz en ligne.",
    "Je n'ai jamais eu une gueule de bois le jour d'un examen.",
    "Je n'ai jamais fait une all-nighter pour finir un projet.",
    "Je n'ai jamais été à un cours sans avoir fait mes devoirs.",
    "Je n'ai jamais fait semblant de comprendre quelque chose en cours.",
    "Je n'ai jamais oublié de remettre un devoir à temps.",
    "Je n'ai jamais été à une soirée sans connaître l'hôte.",
    "Je n'ai jamais envoyé un message embarrassant en étant ivre.",
    "Je n'ai jamais dormi en cours.",
    "Je n'ai jamais rendu un devoir en retard en inventant une excuse.",
    "Je n'ai jamais participé à un concours de boisson.",
    "Je n'ai jamais perdu mon téléphone en soirée.",
    "Je n'ai jamais demandé les notes de quelqu'un sans lui rendre la pareille.",
    "Je n'ai jamais menti sur mes notes à mes parents.",
    "Je n'ai jamais fait une nuit blanche pour finir une série.",
    "Je n'ai jamais essayé de cuisiner et complètement raté.",
    "Je n'ai jamais eu de colocataire difficile.",
    "Je n'ai jamais oublié le nom de mon professeur.",
    "Je n'ai jamais eu de crush sur quelqu'un de ma classe.",
    "Je n'ai jamais porté le même vêtement deux jours de suite.",
    "Je n'ai jamais pleuré à cause d'une mauvaise note.",
    "Je n'ai jamais changé de sujet lors d'un exposé pour éviter une question difficile.",
    "Je n'ai jamais volé de la nourriture à un colocataire.",
    "Je n'ai jamais passé tout un week-end en pyjama.",
    "Je n'ai jamais fait semblant d'être au téléphone pour éviter quelqu'un.",
    "Je n'ai jamais échoué à un examen important.",
    "Je n'ai jamais été à un cours uniquement pour signer la feuille de présence.",
    "Je n'ai jamais raté un cours à cause d'une gueule de bois.",
    "Je n'ai jamais demandé une extension de délai pour un devoir.",
    "Je n'ai jamais raté un examen à cause d'une mauvaise gestion du temps.",
    "Je n'ai jamais oublié de faire une partie d'un projet de groupe.",
    "Je n'ai jamais eu un crush sur un professeur.",
    "Je n'ai jamais participé à un bizutage.",
    "Je n'ai jamais été la personne ivre embarrassante d'une soirée.",
    "Je n'ai jamais triché en demandant les réponses pendant un examen.",
    "Je n'ai jamais quitté une soirée en douce sans dire au revoir.",
    "Je n'ai jamais laissé un groupe de travail faire tout le boulot.",
    "Je n'ai jamais dragué quelqu'un pendant une soirée étudiante.",
    "Je n'ai jamais assisté à un cours en pyjama.",
    "Je n'ai jamais oublié de remettre un livre à la bibliothèque.",
    "Je n'ai jamais passé un examen sans avoir révisé.",
    "Je n'ai jamais eu un fou rire en cours.",
    "Je n'ai jamais commandé de la nourriture à minuit.",
    "Je n'ai jamais utilisé une fausse excuse pour rater un cours.",
    "Je n'ai jamais regretté une soirée le lendemain matin.",
    "Je n'ai jamais eu une panne d'oreiller le jour d'un examen.",
    "Je n'ai jamais fait semblant de lire un livre pour un examen.",
    "Je n'ai jamais envoyé de message en classe.",
    "Je n'ai jamais eu une mauvaise expérience en colocation.",
    "Je n'ai jamais laissé une assiette sale traîner trop longtemps.",
    "Je n'ai jamais copié une partie de devoir sur Internet.",
    "Je n'ai jamais eu de conflit avec un professeur.",
    "Je n'ai jamais regretté d'être sorti la veille d'un examen.",
    "Je n'ai jamais fait un marathon de révisions de dernière minute.",
    "Je n'ai jamais chanté au karaoké pendant une soirée étudiante.",
    "Je n'ai jamais eu une dispute avec un colocataire à cause du ménage.",
    "Je n'ai jamais oublié de payer un abonnement étudiant.",
    "Je n'ai jamais dormi pendant une réunion de groupe.",
    "Je n'ai jamais oublié un projet jusqu'à la veille de sa remise.",
    "Je n'ai jamais eu un crush sur quelqu'un rencontré en bibliothèque.",
    "Je n'ai jamais regretté un achat impulsif en ligne.",
    "Je n'ai jamais été viré d'une soirée.",
    "Je n'ai jamais caché une mauvaise note à mes parents.",
    "Je n'ai jamais eu un fou rire incontrôlable en public.",
    "Je n'ai jamais eu une mauvaise expérience avec une banque en tant qu'étudiant.",
    "Je n'ai jamais mangé de la nourriture d'un inconnu par accident.",
    "Je n'ai jamais été en retard à un examen important.",
    "Je n'ai jamais fait un cours en ligne sans être habillé correctement.",
    "Je n'ai jamais eu de colocataire qui mangeait ma nourriture.",
    "Je n'ai jamais oublié mon mot de passe pour un examen en ligne.",
    "Je n'ai jamais été expulsé d'une classe pour bavardage.",
    "Je n'ai jamais pleuré à cause de la pression scolaire.",
    "Je n'ai jamais manqué de budget à la fin du mois.",
    "Je n'ai jamais fait du shopping pour éviter de réviser.",
    "Je n'ai jamais eu une expérience de volontariat mémorable.",
    "Je n'ai jamais eu un crush sur quelqu'un rencontré lors d'une soirée.",
    "Je n'ai jamais menti sur un événement pour m'en sortir.",
    "Je n'ai jamais eu un rêve embarrassant impliquant quelqu'un que je connais.",
    "Je n'ai jamais envoyé un message à la mauvaise personne en parlant d'elle.",
    "Je n'ai jamais eu de problème avec ma connexion Internet pendant un examen.",
    "Je n'ai jamais regretté un tatouage ou un piercing.",
    "Je n'ai jamais été à une fête universitaire.",
    "Je n'ai jamais chanté dans la douche en sachant que quelqu'un m'entendait.",
    "Je n'ai jamais demandé de l'aide pour faire un devoir sans y participer vraiment.",
    "Je n'ai jamais assisté à un cours en étant complètement perdu.",
    "Je n'ai jamais passé un examen sans dormir la veille.",
    "Je n'ai jamais été pris en flagrant délit de tricherie.",
    "Je n'ai jamais regretté d'avoir pris une matière.",
    "Je n'ai jamais eu de conflit avec un voisin bruyant.",
    "Je n'ai jamais traiter Davis de gros macaque",
    "Je n'ai jamais été guetter par la calvasse (Turquie)",
    "Je n'ai jamais pris de Kasteel taille 4",
    "Je n'ai jamais demandé ph a 18h ",
    "Je n'ai jamais été recale du R",
    "Je n'ai jamais pris de bacardi framboise",
    "Je n'ai jamais été en embrouille avec la serveuse du gold",
    "Je n'ai jamais frapper de policier",
    "Je n'ai jamais mis le flash pour que quelqu'un cul sec",
    "Je n'ai jamais vomi au gold",
    "Je n'ai jamais regretter une kasteel",
    "Je n'ai jamais manger pepe chicken",
    "Je n'ai jamais pris une cuisse de poulet après le gold",
];

function getRandomQuestion(availableQuestions) {
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const randomSips = Math.floor(Math.random() * 5) + 1;
  return { question: availableQuestions[randomIndex], sips: randomSips, index: randomIndex };
}

export default function HotMode() {
  const [availableQuestions, setAvailableQuestions] = useState([...initialQuestions]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (availableQuestions.length > 0) {
      const newQuestion = getRandomQuestion(availableQuestions);
      setCurrentQuestion(newQuestion);
    } else {
      navigation.navigate('HomeScreen');
    }
  }, [availableQuestions, navigation]);

  const handleNextQuestion = () => {
    if (availableQuestions.length > 1) {
      const updatedQuestions = availableQuestions.filter((_, index) => index !== currentQuestion.index);
      setAvailableQuestions(updatedQuestions);
    } else {
      navigation.navigate('HomeScreen');
    }
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
      <View style={styles.card}>
        <ImageBackground source={require('../assets/bg-card.jpg')} style={styles.cardBackground}>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{currentQuestion.question}</Text>
            <Text style={styles.sips}>Nombre de gorgées: {currentQuestion.sips}</Text>
          </View>
        </ImageBackground>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
        <Text style={styles.buttonText}>Prochaine question</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    padding: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  cardBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    padding: 40,
  },
  sips: {
    fontSize: 20,
    color: '#ff6347',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: '#ff6347',
    elevation: 3,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
