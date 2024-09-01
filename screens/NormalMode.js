import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const initialQuestions = [
    "Qui est le plus susceptible de se perdre en rentrant chez lui ?",
    "Qui est le plus fêtard ?",
    "Qui est le plus susceptible de chanter en public après quelques verres ?",
    "Qui est le plus susceptible de faire une déclaration d'amour en étant ivre ?",
    "Qui est le plus susceptible de faire un karaoké embarrassant ?",
    "Qui est le plus susceptible de pleurer en regardant un film triste ?",
    "Qui est le plus susceptible de s'endormir pendant une soirée ?",
    "Qui est le plus susceptible de finir son verre en premier ?",
    "Qui est le plus susceptible de commencer une danse embarrassante ?",
    "Qui est le plus susceptible de flirter avec le barman/la barmaid ?",
    "Qui est le plus susceptible de dire la vérité sous l'effet de l'alcool ?",
    "Qui est le plus susceptible de faire des achats impulsifs en ligne après une soirée ?",
    "Qui est le plus susceptible de faire une blague douteuse ?",
    "Qui est le plus susceptible de se réveiller avec un tatouage ?",
    "Qui est le plus susceptible de tomber en descendant les escaliers ?",
    "Qui est le plus susceptible de raconter un secret embarrassant sur quelqu'un ici ?",
    "Qui est le plus susceptible de dire 'je t'aime' à tout le monde ce soir ?",
    "Qui est le plus susceptible de prendre une photo embarrassante ?",
    "Qui est le plus susceptible de s'incruster dans une fête inconnue ?",
    "Qui est le plus susceptible de danser sur la table ?",
    "Qui est le plus susceptible d'oublier de payer ses consommations ?",
    "Qui est le plus susceptible de commander à manger pour tout le monde ?",
    "Qui est le plus susceptible de faire une proposition indécente ?",
    "Qui est le plus susceptible de se réveiller sans souvenirs de la soirée ?",
    "Qui est le plus susceptible de partir sans dire au revoir ?",
    "Qui est le plus susceptible de raconter une histoire embarrassante sur lui-même ?",
    "Qui est le plus susceptible de se retrouver dans une situation gênante ce soir ?",
    "Qui est le plus susceptible de finir la soirée en boîte de nuit ?",
    "Qui est le plus susceptible de perdre son téléphone ce soir ?",
    "Qui est le plus susceptible de partager des vidéos gênantes le lendemain ?",
    "Qui est le plus susceptible de faire une promesse qu'il ne tiendra jamais ?",
    "Qui est le plus susceptible de ne pas se souvenir des prénoms des gens le lendemain ?",
    "Qui est le plus susceptible de chanter une chanson d'amour en duo avec quelqu'un ici ?",
    "Qui est le plus susceptible de dire 'Je ne boirai plus jamais' demain matin ?",
    "Qui est le plus susceptible de draguer quelqu'un de complètement inapproprié ?",
    "Qui est le plus susceptible d'avoir un fou rire incontrôlable ?",
    "Qui est le plus susceptible de commander la boisson la plus chère au bar ?",
    "Qui est le plus susceptible de se faire refuser l'entrée dans un bar ?",
    "Qui est le plus susceptible de raconter des mensonges incroyables ?",
    "Qui est le plus susceptible de se ridiculiser ce soir ?",
    "Qui est le plus susceptible de finir la soirée en pyjama ?",
    "Qui est le plus susceptible d'oublier son sac ou portefeuille quelque part ?",
    "Qui est le plus susceptible de dire 'Je t'aime' à quelqu'un ce soir ?",
    "Qui est le plus susceptible de se réveiller dans un endroit inattendu ?",
    "Qui est le plus susceptible de dormir sur le canapé ce soir ?",
    "Qui est le plus susceptible de faire une story Instagram embarrassante ?",
    "Qui est le plus susceptible de se mettre à nu (dans tous les sens du terme) ce soir ?",
    "Qui est le plus susceptible de dire quelque chose qu'il regrettera demain ?",
    "Qui est le plus susceptible de faire une gaffe monumentale ?",
    "Qui est le plus susceptible d'appeler un ex en plein milieu de la nuit ?",
    "Qui est le plus susceptible d'embrasser quelqu'un ce soir ?",
    "Qui est le plus susceptible de commander un shot pour tout le monde ?",
    "Qui est le plus susceptible de faire un pari stupide ?",
    "Qui est le plus susceptible de finir en duo inattendu ce soir ?",
    "Qui est le plus susceptible de faire un strip-tease improvisé ?",
    "Qui est le plus susceptible de danser toute la nuit ?",
    "Qui est le plus susceptible d'avoir des regrets demain ?",
    "Qui est le plus susceptible de devenir le DJ de la soirée ?",
    "Qui est le plus susceptible de raconter une blague qui tombe à plat ?",
    "Qui est le plus susceptible de se faire larguer ce soir ?",
    "Qui est le plus susceptible de pleurer pour rien ce soir ?",
    "Qui est le plus susceptible de finir par marcher pieds nus ?",
    "Qui est le plus susceptible d'avoir des souvenirs flous de la soirée ?",
    "Qui est le plus susceptible de se réveiller avec des courbatures inattendues ?",
    "Qui est le plus susceptible de faire une déclaration embarrassante ?",
    "Qui est le plus susceptible de finir avec des marques de rouge à lèvres sur le visage ?",
    "Qui est le plus susceptible de faire un saut dans la piscine tout habillé ?",
    "Qui est le plus susceptible de finir la soirée en couple ?",
    "Qui est le plus susceptible de raconter une histoire incroyable ce soir ?",
    "Qui est le plus susceptible d'oublier de rentrer chez lui ?",
    "Qui est le plus susceptible de faire une vidéo TikTok gênante ?",
    "Qui est le plus susceptible de demander un câlin collectif ?",
    "Qui est le plus susceptible de se faire gronder par un voisin ?",
    "Qui est le plus susceptible de se faire refuser un service dans un bar ?",
    "Qui est le plus susceptible de se lancer dans un défi fou ce soir ?",
    "Qui est le plus susceptible de danser sur le bar ?",
    "Qui est le plus susceptible d'envoyer un message embarrassant ?",
    "Qui est le plus susceptible de finir la soirée avec un mal de tête terrible ?",
    "Qui est le plus susceptible d'oublier ce qui s'est passé hier soir ?",
    "Qui est le plus susceptible de draguer le/la coloc de quelqu'un ici ?",
    "Qui est le plus susceptible de s'attirer des ennuis ce soir ?",
    "Qui est le plus susceptible de tomber amoureux ce soir ?",
    "Qui est le plus susceptible de se faire virer d'un endroit ?",
    "Qui est le plus susceptible d'aller à l'aventure dans un endroit inconnu ?",
    "Qui est le plus susceptible de danser en solo au milieu de la piste ?",
    "Qui est le plus susceptible de finir avec un numéro de téléphone inconnu ?",
    "Qui est le plus susceptible de rester le dernier debout ce soir ?",
    "Qui est le plus susceptible de chanter une chanson triste ?",
    "Qui est le plus susceptible de ne plus vouloir rentrer chez lui ?",
    "Qui est le plus susceptible d'oublier quelque chose d'important demain ?",
    "Qui est le plus susceptible de se tromper de maison en rentrant ?",
    "Qui est le plus susceptible de faire un gâteau en pleine nuit ?",
    "Qui est le plus susceptible de faire une vidéo YouTube embarrassante ?",
    "Qui est le plus susceptible de terminer son verre en dernier ?",
    "Qui est le plus susceptible d'oublier son mot de passe de téléphone ce soir ?",
    "Qui est le plus susceptible de se retrouver sans chaussures à la fin de la soirée ?",
    "Qui est le plus susceptible de demander à quelqu'un de danser ?",
    "Qui est le plus susceptible de raconter une anecdote gênante sur lui-même ?",
    "Qui de nous pourrait partir à l'aventure sur une île déserte sans prévenir ?",
    "Qui de nous pourrait devenir célèbre du jour au lendemain ?",
    "Qui de nous pourrait se perdre dans son propre quartier ?",
    "Qui de nous pourrait manger un plat bizarre juste pour le fun ?",
    "Qui de nous pourrait danser sous la pluie sans se soucier du monde ?",
    "Qui de nous pourrait faire un road trip improvisé ce soir ?",
    "Qui de nous pourrait adopter un animal sur un coup de tête ?",
    "Qui de nous pourrait vivre sans téléphone pendant une semaine ?",
    "Qui de nous pourrait oublier un rendez-vous important ?",
    "Qui de nous pourrait devenir influenceur sur les réseaux sociaux ?",
    "Qui de nous pourrait se lancer dans un défi sportif fou ?",
    "Qui de nous pourrait participer à une émission de télé-réalité ?",
    "Qui de nous pourrait tout quitter pour faire le tour du monde ?",
    "Qui de nous pourrait faire un saut en parachute sans hésiter ?",
    "Qui de nous pourrait passer une nuit entière à regarder des films ?",
    "Qui de nous pourrait changer de look radicalement du jour au lendemain ?",
    "Qui de nous pourrait organiser une soirée mémorable ?",
    "Qui de nous pourrait écrire un livre sur sa vie ?",
    "Qui de nous pourrait devenir végétarien du jour au lendemain ?",
    "Qui de nous pourrait se retrouver accidentellement sur une scène en public ?",
    "Qui de nous pourrait passer une journée entière sans parler ?",
    "Qui de nous pourrait démarrer un business farfelu ?",
    "Qui de nous pourrait apprendre une nouvelle langue en un temps record ?",
    "Qui de nous pourrait faire un trek en montagne sans préparation ?",
    "Qui de nous pourrait se déguiser pour faire une surprise à quelqu'un ?",
    "Qui de nous pourrait se faire tatouer sur un coup de tête ?",
    "Qui de nous pourrait faire une déclaration d'amour publique ?",
    "Qui de nous pourrait vivre dans une tiny house en pleine nature ?",
    "Qui de nous pourrait adopter un style de vie minimaliste ?",
    "Qui de nous pourrait se faire des amis en cinq minutes dans un bar ?",
    "Qui de nous pourrait devenir un expert en quelque chose de complètement aléatoire ?",
    "Qui de nous pourrait acheter quelque chose de totalement inutile ?",
    "Qui de nous pourrait s'inviter à un mariage où il ne connaît personne ?",
    "Qui de nous pourrait survivre à une apocalypse zombie ?",
    "Qui de nous pourrait changer de carrière du jour au lendemain ?",
    "Qui de nous pourrait oublier ses clés et se retrouver coincé dehors ?",
    "Qui de nous pourrait faire une crise de panique dans un ascenseur ?",
    "Qui de nous pourrait préparer un repas gastronomique ?",
    "Qui de nous pourrait survivre sans Internet pendant un mois ?",
    "Qui de nous pourrait faire du camping sauvage seul ?",
    "Qui de nous pourrait lancer un podcast sur un sujet inattendu ?",
    "Qui de nous pourrait devenir ami avec une célébrité ?",
    "Qui de nous pourrait dormir pendant une journée entière ?",
    "Qui de nous pourrait passer une nuit blanche à jouer à un jeu vidéo ?",
    "Qui de nous pourrait chanter l'hymne national dans un stade plein ?",
    "Qui de nous pourrait vivre en colocation avec des inconnus ?",
    "Qui de nous pourrait se retrouver en Une des journaux pour une raison bizarre ?",
    "Qui de nous pourrait découvrir une nouvelle passion complètement par hasard ?",
    "Qui de nous pourrait rejoindre une secte sans s'en rendre compte ?",
    "Qui de nous pourrait se lancer dans un projet DIY extravagant ?",
    "Qui de nous pourrait inventer une danse virale ?",
    "Qui de nous pourrait se tromper de train et finir dans une autre ville ?",
    "Qui de nous pourrait créer une recette qui deviendrait un classique ?",
    "Qui de nous pourrait réaliser un court-métrage sur sa vie ?",
    "Qui de nous pourrait passer une journée dans un spa sans rien faire ?",
    "Qui de nous pourrait devenir végétalien juste pour un pari ?",
    "Qui de nous pourrait acheter un billet d'avion sur un coup de tête ?",
    "Qui de nous pourrait transformer une maison en œuvre d'art ?",
    "Qui de nous pourrait faire du stop pour traverser le pays ?",
    "Qui de nous pourrait se lancer dans la création d'une marque de vêtements ?",
    "Qui de nous pourrait oublier de se réveiller pour un vol important ?",
    "Qui de nous pourrait collectionner quelque chose de totalement absurde ?",
    "Qui de nous pourrait transformer un hobby en carrière ?",
    "Qui de nous pourrait se marier à Las Vegas ?",
    "Qui de nous pourrait survivre dans la jungle pendant une semaine ?",
    "Qui de nous pourrait faire du bénévolat dans un endroit improbable ?",
    "Qui de nous pourrait se lancer dans la course aux élections locales ?",
    "Qui de nous pourrait écrire une chanson à succès ?",
    "Qui de nous pourrait se perdre dans une bibliothèque ?",
    "Qui de nous pourrait créer un meme qui deviendrait viral ?",
    "Qui de nous pourrait organiser une fête sur un bateau ?",
    "Qui de nous pourrait avoir une collection de chaussures complètement démesurée ?",
    "Qui de nous pourrait se déguiser en super-héros pour aller faire les courses ?",
    "Qui de nous pourrait se lancer dans le stand-up ?",
    "Qui de nous pourrait dormir dans une cabane dans les arbres pendant une semaine ?",
    "Qui de nous pourrait faire une retraite silencieuse ?",
    "Qui de nous pourrait convaincre tout le monde d'adopter une nouvelle mode bizarre ?",
    "Qui de nous pourrait se faire un piercing inhabituel ?",
    "Qui est le plus susceptible de raconter une anecdote gênante sur lui-même ?",
    "Qui est le top 1 con",
    "Qui est le plus susceptible de partir au MCDO",
    "Qui est le plus susceptible de prendre une KASTEEL Taille 4",
    "Qui est le plus noir ?",
    "Qui est le plus bourré actuellement",
    "Qui est le plus haut niveau sur fortnite ?",
    "Qui est le plus susceptible de prendre une cuisse de poulet",
    "Qui est le plus susceptible d'aller au gold cette semaine",
    "Qui est le plus accro au sexe",
    "Qui est le plus connu du gold",
    "Qui est le plus susceptible de faire un envoi de bouteille",
    "Qui est le plus susceptible de devenir musulman",
    "Qui est le plus susceptible de prendre indouliprane",
    "Qui est le plus susceptible de frapper des collègues",
];

function getRandomQuestion(availableQuestions) {
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const randomSips = Math.floor(Math.random() * 5) + 1;
  return { question: availableQuestions[randomIndex], sips: randomSips, index: randomIndex };
}

export default function NormalMode() {
  const [availableQuestions, setAvailableQuestions] = useState([...initialQuestions]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (availableQuestions.length > 0) {
      const newQuestion = getRandomQuestion(availableQuestions);
      setCurrentQuestion(newQuestion);
    } else {
      navigation.navigate('Home');
    }
  }, [availableQuestions, navigation]);

  const handleNextQuestion = () => {
    if (availableQuestions.length > 1) {
      const updatedQuestions = availableQuestions.filter((_, index) => index !== currentQuestion.index);
      setAvailableQuestions(updatedQuestions);
    } else {
      navigation.navigate('Home');
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
