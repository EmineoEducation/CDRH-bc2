// ══════════════════════════════════════════════════════════════
//  DATA · PAC BC2 · Chargé de développement des ressources humaines
//  Signal d'alarme chez Lumio Health : entre burn-out silencieux et première négociation CSE · 14 mars 2025
//  Schéma : mailbox[] · dossiers[] · notes[] · guide · finder · calendar · slack
//  ⚠️  Remplacer les [À COMPLÉTER] par le contenu narratif réel du bloc.
//  ⚠️  Les placeholders {{PRENOM}} {{NOM}} {{EMAIL_ETUDIANT}} sont substitués à la connexion.
// ══════════════════════════════════════════════════════════════

window.LUMIO_DATA = {
  "student": {
    "name": "{{PRENOM}} {{NOM}}",
    "role": "Consultant·e externe",
    "email": "{{EMAIL_ETUDIANT}}",
    "company": "Indépendant·e",
    "initial": "?"
  },
  "mailbox": [
    {
      "id": "DOC-01",
      "from": "Théo Marczak (CEO)",
      "fromEmail": "theo.marczak@lumio-health.com",
      "subject": "Urgence RH — situation sociale dégradée + élections CSE imminentes",
      "date": "14 mars 2025",
      "preview": "Absentéisme à 11 %, pétition Slack, CSE dans 45 jours : plan d'action attendu pour le 28 mars.",
      "body": "Bonjour,\n\nJe vais être direct : on a un problème sérieux et on a besoin d'un plan opérationnel sous 15 jours.\n\nTrois signaux que je ne peux plus ignorer. Premier point : le taux d'absentéisme est passé de 4 % à 11 % en six mois. Trois ingénieurs ont démissionné sans vrai entretien de sortie — on n'a aucune donnée propre sur les causes. Deuxième point : une pétition circule sur un canal Slack non officiel, elle vise l'équipe Content et cite des « pratiques managériales toxiques ». Je n'ai pas encore de noms, mais ça ne restera pas confidentiel longtemps. Troisième point : les élections CSE doivent se tenir d'ici 45 jours et on n'a strictement rien formalisé — ni protocole d'accord préélectoral, ni calendrier, ni rien.\n\nEn parallèle — et c'est une contrainte que je vous demande de ne pas perdre de vue — Jakob Rein attend de nous une politique RSE documentée et communicable avant la revue contractuelle Northgate du trimestre. Ce n'est pas accessoire : c'est une condition de renouvellement.\n\nCe que j'attends de vous pour le 28 mars au plus tard : un plan d'action structuré couvrant la prévention des RPS, une démarche QVCT crédible (pas un kit de cohésion avec du yoga), les obligations légales CSE avec le calendrier exact, et des éléments RSE qu'on puisse défendre sérieusement face à un investisseur. Sonia et Camille ont des visions qui divergent sur les priorités — je vous laisse les consulter, mais c'est vous qui arbitrez la méthode.\n\nJe suis disponible vendredi 21 mars pour un point de cadrage si vous en avez besoin.\n\nThéo Marczak\nCEO, Lumio Health\ntheo.marczak@lumiohealth.fr | +33 6 12 34 56 78",
      "avatar": "TM",
      "avatarColor": "#134547",
      "unread": true,
      "flagged": true,
      "tags": [
        "Mission"
      ]
    },
    {
      "id": "DOC-05",
      "from": "Jakob Rein (Northgate Investments)",
      "fromEmail": "jakob.rein@lumio-health.com",
      "subject": "Renouvellement partenariat Lumio Health — Due diligence RSE requise avant échéance contractuelle",
      "date": "14 mars 2025",
      "preview": "Jakob conditionne le renouvellement du partenariat à un rapport RSE complet attendu pour le 14 avril — trois axes non négociables.",
      "body": "Théo,\n\nNous approchons de l'échéance de renouvellement de notre partenariat, et je dois être direct avec toi : Northgate Capital a renforcé ses exigences ESG en début d'année. Tout contrat B2B supérieur à 500 k€ annuels est désormais conditionné à la fourniture d'un rapport RSE conforme à nos standards internes.\n\nJe t'en informe formellement aujourd'hui : j'attends de Lumio Health un document structuré d'ici le 14 avril 2025 au plus tard. Ce rapport devra couvrir trois axes sans exception : (1) votre politique bien-être et prévention des risques psychosociaux — avec des indicateurs mesurables, pas des intentions ; (2) vos actions environnementales, même à l'échelle d'une medtech de votre taille ; (3) vos données de diversité et d'inclusion, a minima sur les postes de direction et les recrutements 2024.\n\nJe sais que vous êtes en phase de croissance rapide. C'est précisément pour ça que cette base documentaire compte : nos LPs la scrutent, et une lacune RSE sur un partenaire santé serait difficile à justifier lors de notre prochain reporting trimestriel.\n\nSi le document n'est pas reçu dans les délais, nous serons contraints de suspendre la discussion de renouvellement. Je préfère qu'on évite d'en arriver là.\n\nDis-moi qui pilote ce chantier côté Lumio. Je suis disponible pour un call de cadrage la semaine du 17 mars si nécessaire.\n\nCordialement,\nJakob Rein\nPartner — Northgate Capital\njakob.rein@northgate-capital.eu | +33 1 44 XX XX XX",
      "avatar": "JR",
      "avatarColor": "#5b3a8a",
      "unread": false,
      "flagged": true
    }
  ],
  "dossiers": [
    {
      "id": "DOC-02",
      "type": "rich",
      "tab": "TABLEAU",
      "title": "Tableau de bord RH — Indicateurs sociaux T4 2024",
      "accent": "#1b4f8a",
      "runningHead": "TABLEAU DE BORD RH",
      "pages": [
        {
          "kicker": "BDESE — EXTRAIT CONFIDENTIEL",
          "title": "Indicateurs sociaux T4 2024 — Lumio Health",
          "byline": "Service RH Lumio Health · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Le présent extrait BDESE couvre la période octobre–décembre 2024 (87 salariés au 31/12/2024). Il constitue la base factuelle transmise au futur CSE dans le cadre des élections prévues au 28 avril 2025, et alimente la cartographie des risques psychosociaux en cours de formalisation. Les données ci-dessous sont issues du SIRH Lucca, des relevés de paie et des entretiens de sortie menés par le service RH."
            },
            {
              "type": "h2",
              "text": "1. Absentéisme et santé au travail"
            },
            {
              "type": "p",
              "text": "Le taux d'absentéisme global est passé de 4,0 % (T4 2023) à 11,0 % (T4 2024), soit une progression de 7 points en douze mois. Cette hausse est portée principalement par l'équipe Content & Marketing (+14,3 %) et, dans une moindre mesure, par l'équipe Ingénierie produit (+9,1 %). Deux arrêts maladie longue durée (supérieurs à 90 jours) sont en cours : l'un déclaré en novembre 2024, l'autre en janvier 2025. Les pathologies déclarées relèvent du champ anxio-dépressif selon les attestations de prolongation transmises par la CPAM. Aucun accident du travail n'a été enregistré sur la période."
            },
            {
              "type": "callout",
              "text": "⚠ ALERTE — Taux d'absentéisme T4 2024 : 11 % (seuil d'alerte sectoriel medtech : 6 %). Écart de +5 points au-dessus de la moyenne du secteur. Action corrective urgente requise."
            },
            {
              "type": "h2",
              "text": "2. Turnover et démissions"
            },
            {
              "type": "p",
              "text": "Trois démissions d'ingénieurs seniors ont été enregistrées entre septembre et décembre 2024 (postes : Lead Embedded Systems, Ingénieur firmware, Data Engineer capteurs). Les entretiens de sortie font état de surcharge de travail, de manque de visibilité sur les orientations produit post-partenariat Northgate, et d'un déficit de reconnaissance managériale. Le coût de remplacement estimé (recrutement + onboarding + montée en compétences) est évalué à 45 000 € par poste, soit 135 000 € d'impact direct sur l'exercice 2025. Le taux de turnover annualisé atteint 8,4 %, contre 3,1 % en 2023."
            },
            {
              "type": "h2",
              "text": "3. Engagement et climat social"
            },
            {
              "type": "p",
              "text": "Le score eNPS (Employee Net Promoter Score) mesuré en décembre 2024 via l'outil Elevo s'établit à -12 (promoteurs : 18 %, passifs : 52 %, détracteurs : 30 %). Il était à +8 en juin 2024. La baisse de 20 points en six mois constitue un signal de dégradation rapide du climat interne. Une pétition anonyme diffusée sur un canal Slack non officiel (#lumio-confidences, ~40 membres identifiés) dénonce des pratiques managériales décrites comme « pression constante » et « objectifs inatteignables » au sein de l'équipe Content. Ce canal n'a fait l'objet d'aucune réponse institutionnelle à ce jour."
            },
            {
              "type": "callout",
              "text": "📉 eNPS décembre 2024 : -12 (vs +8 en juin 2024). Chute de 20 points en 6 mois. Corrélation directe avec la montée en charge post-partenariat Northgate (juillet 2024) et les signaux RPS identifiés en équipe Content."
            },
            {
              "type": "h2",
              "text": "4. Répartition des effectifs par genre et service"
            },
            {
              "type": "p",
              "text": "Sur 87 salariés au 31/12/2024 : 54 hommes (62 %) et 33 femmes (38 %). L'équipe Ingénierie (31 personnes) compte 84 % d'hommes ; l'équipe Content & Marketing (12 personnes) compte 75 % de femmes. La direction (4 personnes) est composée de 3 hommes et 1 femme. L'index égalité professionnelle 2024 (calcul en cours) est estimé à 72/100, en deçà du seuil de publication obligatoire de 75. Un plan de rattrapage salarial ciblant 4 collaboratrices de l'équipe Ingénierie sera soumis à validation lors du premier CSE. À noter : un salarié bénéficie d'une RQTH (équipe Content), sans aménagement de poste formalisé à ce jour — point à régulariser en priorité."
            },
            {
              "type": "callout",
              "text": "📋 POINTS D'ACTION PRIORITAIRES — (1) Déclenchement du plan de prévention RPS équipe Content avant le 31 mars 2025. (2) Convocation des organisations syndicales pour protocole électoral CSE avant le 24 mars 2025. (3) Formalisation de l'aménagement de poste RQTH sous 15 jours. (4) Transmission de la BDESE complète aux futurs représentants du personnel dès validation des listes électorales."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-03",
      "type": "rich",
      "tab": "CAPTURE",
      "title": "Pétition interne — surcharge et management toxique équipe Content",
      "accent": "#1a6641",
      "runningHead": "CAPTURE D'ÉCRAN SLACK",
      "pages": [
        {
          "kicker": "SIGNAL D'ALARME RPS — CANAL NON OFFICIEL",
          "title": "#lumio-vérité — Pétition interne : ce qui se passe vraiment dans l'équipe Content",
          "byline": "Anonyme · 14 mars 2025 · 23h47",
          "blocks": [
            {
              "type": "p",
              "text": "📌 Ce message est posté anonymement. Nous sommes plusieurs à avoir décidé de mettre des mots sur ce que tout le monde voit mais que personne n'ose dire à voix haute. Ce n'est pas un coup de gueule. C'est une alerte."
            },
            {
              "type": "h2",
              "text": "Ce qui se passe concrètement"
            },
            {
              "type": "p",
              "text": "Depuis octobre 2024, l'équipe Content tourne à flux tendu. Les briefs arrivent le vendredi soir pour le lundi matin. Les délais ont été compressés deux fois en trois mois sans que personne n'ait demandé si c'était tenable. Yassine encaisse tout sans se plaindre — et c'est justement ça le problème. Il absorbe la pression, il ne la redistribue pas, il disparaît le week-end et revient le lundi avec les livrables. Mais on voit bien qu'il ne va pas bien. Les cernes, les messages à 1h du matin sur Teams, les 'c'est bon je gère' qui sonnent creux. On ne dit pas que c'est un mauvais manager. On dit que le système le broie, et qu'il broie avec lui les deux personnes qui travaillent avec lui."
            },
            {
              "type": "callout",
              "text": "🚨 SIGNAL CONCRET : Au moins 3 membres de l'équipe Content ont consulté un médecin pour des troubles du sommeil ou de l'anxiété entre janvier et mars 2025. Deux d'entre eux ont demandé un aménagement de poste qui n'a jamais reçu de réponse formelle."
            },
            {
              "type": "h2",
              "text": "Ce qu'on demande — pas ce qu'on exige"
            },
            {
              "type": "p",
              "text": "On ne réclame pas une réunion de plus. On ne veut pas un séminaire cohésion avec un consultant qui ne connaît ni nos outils ni nos contraintes. Ce qu'on veut : (1) que quelqu'un de la direction reconnaisse officiellement que la charge de travail de l'équipe Content est anormale depuis au moins 5 mois ; (2) qu'un audit de charge soit conduit par quelqu'un d'externe à l'équipe ; (3) que Yassine soit protégé — pas écarté, protégé. Il a une RQTH. Il a des droits. Est-ce que quelqu'un sait seulement ce que ça implique côté employeur ?"
            },
            {
              "type": "callout",
              "text": "✍️ Cette pétition a recueilli 14 signatures anonymes en moins de 6 heures. Nous représentons des équipes différentes : Content, Product, Ops. Le problème dépasse l'équipe Content — c'est le signal que le reste de la boîte surveille ce qui va se passer ici pour savoir si Lumio est une entreprise qui protège ses gens ou pas."
            },
            {
              "type": "h2",
              "text": "Un mot sur le timing"
            },
            {
              "type": "p",
              "text": "On sait que les élections CSE approchent. On sait aussi que Théo veut afficher une belle politique RSE pour Northgate. Très bien. Mais une politique RSE qui commence par ignorer une pétition interne sur des conditions de travail dégradées, c'est une politique RSE pour les slides, pas pour les gens. On espère que quelqu'un lira ce message avant que la prochaine démission arrive — parce que c'est en cours, et tout le monde le sait."
            },
            {
              "type": "callout",
              "text": "📎 Ce message sera transmis à la DRH, au futur CSE dès son installation, et conservé comme élément de contexte si aucune action n'est engagée avant le 28 mars 2025."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-06",
      "type": "rich",
      "tab": "CONVOCAT",
      "title": "Convocation à la négociation du protocole d'accord préélectoral — CSE Lumio Health",
      "accent": "#7a756c",
      "runningHead": "CONVOCATION LÉGALE",
      "pages": [
        {
          "kicker": "DOCUMENT OFFICIEL — CONFIDENTIEL INTERNE",
          "title": "Invitation à négocier le protocole d'accord préélectoral en vue des élections du Comité Social et Économique",
          "byline": "Direction Lumio Health · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Conformément aux articles L.2314-5 et suivants du Code du travail, la Direction de Lumio Health invite l'ensemble des organisations syndicales représentatives et tout syndicat souhaitant participer au processus électoral à une réunion de négociation du protocole d'accord préélectoral (PAP). Cette convocation marque le lancement officiel du processus électoral en vue de la mise en place du Comité Social et Économique (CSE) de l'entreprise."
            },
            {
              "type": "h2",
              "text": "Informations relatives à l'entreprise et au scrutin"
            },
            {
              "type": "p",
              "text": "Raison sociale : Lumio Health SAS — Siège social : 12 rue du Faubourg Saint-Antoine, 75011 Paris. Effectif au 14 mars 2025 : 87 salariés (équivalent temps plein). Conformément au tableau de l'article R.2314-1 du Code du travail, un effectif compris entre 76 et 99 salariés impose la mise en place d'un CSE composé de 4 titulaires et 4 suppléants. Le nombre de collèges électoraux sera fixé d'un commun accord lors de la réunion de négociation, en tenant compte de la répartition des catégories professionnelles au sein de l'entreprise."
            },
            {
              "type": "callout",
              "text": "DATE LIMITE IMPÉRATIVE — Les élections doivent se tenir au plus tard le 28 avril 2025 (J+45). La réunion de négociation du protocole d'accord préélectoral est convoquée le vendredi 21 mars 2025 à 14h00, en salle de réunion principale du siège social. Tout syndicat souhaitant participer doit confirmer sa présence avant le 18 mars 2025."
            },
            {
              "type": "h2",
              "text": "Ordre du jour de la réunion de négociation"
            },
            {
              "type": "p",
              "text": "Les points suivants seront abordés lors de la séance du 21 mars 2025 : (1) Détermination du nombre et de la composition des collèges électoraux ; (2) Répartition du personnel et des sièges entre les collèges ; (3) Modalités pratiques du scrutin (vote électronique ou à l'urne, lieu, horaires) ; (4) Arrêt du calendrier électoral précis, incluant les dates de dépôt des listes de candidats, d'affichage et de tenue du scrutin pour les premier et second tours ; (5) Modalités de la propagande électorale. Un projet de protocole sera transmis aux organisations syndicales conviées au plus tard le 19 mars 2025."
            },
            {
              "type": "h2",
              "text": "Destinataires et modalités de convocation"
            },
            {
              "type": "p",
              "text": "La présente convocation est adressée, par lettre recommandée avec accusé de réception et par voie électronique, à toutes les organisations syndicales reconnues représentatives dans la branche des industries et commerces en gros des équipements de bureau et systèmes d'information, ainsi qu'à tout syndicat ayant notifié sa volonté de constituer une section syndicale au sein de Lumio Health. À ce jour, aucune organisation syndicale n'est implantée dans l'entreprise. La Direction rappelle néanmoins son obligation d'invitation et reste ouverte à toute demande de participation formulée dans les délais susmentionnés."
            },
            {
              "type": "callout",
              "text": "POINT D'ATTENTION LÉGAL — En l'absence de syndicats implantés et si aucune organisation ne répond à la présente convocation avant le 18 mars 2025, la Direction établira unilatéralement le protocole préélectoral dans le strict respect des dispositions légales (art. L.2314-5 al. 4 du Code du travail). Le calendrier électoral sera dans ce cas affiché dès le 24 mars 2025."
            },
            {
              "type": "p",
              "text": "Pour toute question relative à ce processus, les salariés et représentants syndicaux peuvent contacter la Direction des Ressources Humaines à l'adresse rh@lumiohealth.fr ou se présenter directement au service RH, bureau 204. La Direction de Lumio Health réaffirme son engagement à conduire ce processus électoral dans la transparence, le respect des délais légaux et le dialogue avec l'ensemble des parties prenantes.\n\nFait à Paris, le 14 mars 2025.\n\nThéo Marczak, Président-Directeur Général, Lumio Health SAS."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-07",
      "type": "rich",
      "tab": "COMPTE",
      "title": "CR réunion managers — retours terrain conditions de travail",
      "accent": "#134547",
      "runningHead": "COMPTE RENDU DE RÉUNION",
      "pages": [
        {
          "kicker": "COMPTE RENDU INTERNE — CONFIDENTIEL",
          "title": "Réunion managers : retours terrain sur les conditions de travail — équipes commerciales et content",
          "byline": "Camille Ott, Responsable partenariats B2B · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Réunion tenue le 14 mars 2025, 9h30–11h15, salle Jade (siège Paris 11e). Présents : Camille Ott (B2B), Yassine Morel (Content), Sonia Ferracci (DirMkt, observatrice), et deux managers terrain de l'équipe commerciale (Marc Delval, Priya Nanthan). Objet : recueillir les remontées managers avant le lancement de l'enquête climat social et formaliser les premiers éléments de diagnostic RPS. CR rédigé par Camille Ott à l'issue de la séance."
            },
            {
              "type": "h2",
              "text": "1. Équipe commerciale — remontées Marc Delval et Priya Nanthan"
            },
            {
              "type": "p",
              "text": "Les deux managers signalent une désorganisation croissante depuis la signature du partenariat Northgate en septembre 2024. Verbatim Priya Nanthan : « On reçoit des briefs clients le vendredi à 17h pour un lundi matin. Les commerciaux ne savent plus quoi prioriser entre les comptes historiques et les nouvelles cibles hospitalières. » Marc Delval confirme une absence totale de réunion de cadrage hebdomadaire depuis janvier 2025 : « Les objectifs trimestriels ont changé trois fois en deux mois sans explication formelle. Les équipes avancent à vue. » Trois départs enregistrés sur la période (dont deux seniors) sont directement corrélés, selon les exit interviews informels, à ce manque de lisibilité stratégique."
            },
            {
              "type": "h2",
              "text": "2. Équipe Content — remontées Yassine Morel"
            },
            {
              "type": "p",
              "text": "Yassine Morel a pris la parole avec une franchise inhabituelle. Il décrit une charge de travail structurellement mal calibrée depuis le recrutement de deux alternants en février, dont l'intégration n'a été accompagnée d'aucun onboarding formalisé. Verbatim : « Je gère les livrables, les révisions de Théo en dernière minute, et l'encadrement des deux alternants en même temps. Il n'y a pas de feedback structuré, juste des retours Slack à 22h que je dois traiter le lendemain matin. » Il mentionne également des réunions planifiées après 19h à deux reprises en février, sans préavis. Il n'a pas évoqué sa situation RQTH, mais a signalé une fatigue chronique et des difficultés de concentration depuis six semaines. Point à traiter en entretien individuel RH dans les prochains jours."
            },
            {
              "type": "callout",
              "text": "SIGNAUX CONVERGENTS À DOCUMENTER : (1) Objectifs changeants sans communication descendante — source de désengagement mesurable. (2) Absence de rituels managériaux (1-to-1, réunion d'équipe hebdo) dans au moins deux services. (3) Réunions tardives récurrentes — potentiel facteur RPS à qualifier. (4) Situation Yassine Morel : surcharge + RQTH non accompagnée → à traiter en priorité, en lien avec le référent handicap."
            },
            {
              "type": "h2",
              "text": "3. Points de friction entre directions"
            },
            {
              "type": "p",
              "text": "Sonia Ferracci a relevé que les priorités RH sont actuellement arbitrées au fil des urgences opérationnelles, sans instance dédiée. Elle souhaite intégrer les résultats de cette réunion dans la grille d'entretien climat social. Camille Ott note que les équipes B2B ressentent une forme d'abandon managérial depuis que Théo Marczak concentre son attention sur les négociations Northgate. Il n'existe à ce jour ni politique de feedback formalisée, ni calendrier de réunion d'équipe stabilisé pour le T1 2025."
            },
            {
              "type": "h2",
              "text": "4. Suites immédiates recommandées"
            },
            {
              "type": "p",
              "text": "Les éléments recueillis ce jour alimenteront directement : (a) la grille d'entretien individuel pour l'enquête climat social (à lancer avant le 28 mars), (b) le document de cadrage méthodologique RPS transmis au chargé(e) de développement RH, (c) une note d'alerte à Théo Marczak sur la situation Yassine Morel — à traiter hors process collectif. Prochaine étape : validation du périmètre d'enquête en CODIR le 17 mars. Diffusion du présent CR restreinte à : DirMkt, RH, CEO."
            },
            {
              "type": "callout",
              "text": "POINT D'ATTENTION CSE : Aucun des managers présents n'a été informé du calendrier électoral CSE (J-45). Deux d'entre eux ignoraient l'obligation légale de mise en place. Ce déficit d'information interne doit être corrigé avant toute communication externe sur la politique RSE."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-08",
      "type": "rich",
      "tab": "ORDRE",
      "title": "Réunion préparatoire CSE #1 — Ordre du jour et questions anticipées",
      "accent": "#1b4f8a",
      "runningHead": "ORDRE DU JOUR PROJET",
      "pages": [
        {
          "kicker": "NOTE INTERNE CONFIDENTIELLE",
          "title": "Réunion préparatoire CSE #1 — Ordre du jour et questions anticipées des futurs élus",
          "byline": "Théo Marczak, CEO · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "À : Chargé(e) de développement RH\nCc : Sonia Ferracci, Camille Ott\n\nLes élections CSE se tiennent dans 45 jours. La première réunion préparatoire est fixée au mardi 18 mars 2025, 14h00, salle Volta (site Marais). Objectif : cadrer le protocole électoral, valider le calendrier et — point crucial — anticiper les sujets brûlants que les futurs élus vont inévitablement soulever. Je vous demande de préparer des éléments de réponse solides sur chacun des points listés ci-dessous. On ne peut pas arriver les mains vides, surtout avec la pétition qui circule sur Slack."
            },
            {
              "type": "h2",
              "text": "1. Ordre du jour officiel de la réunion du 18 mars"
            },
            {
              "type": "p",
              "text": "1.1 Présentation du protocole d'accord préélectoral (PAP) — périmètre, collèges, calendrier\n1.2 Fixation du nombre de sièges titulaires et suppléants (seuil 87 salariés : 8 titulaires, 8 suppléants)\n1.3 Présentation des modalités de vote (vote électronique ou physique — décision à confirmer avant le 20 mars)\n1.4 Rappel des obligations légales de l'employeur : affichage, liste électorale, crédit d'heures\n1.5 Point d'information sur la démarche QVCT en cours"
            },
            {
              "type": "h2",
              "text": "2. Questions probables des futurs élus — à préparer impérativement"
            },
            {
              "type": "p",
              "text": "Q1 — Équipe Content / surcharge de travail\n« Trois ingénieurs ont quitté l'entreprise en six mois et l'absentéisme est passé de 4 % à 11 %. Quelles mesures concrètes l'employeur a-t-il prises pour identifier les causes et protéger les salariés encore en poste, notamment dans l'équipe Content ? »\n→ Préparer : état des lieux RPS formalisé, calendrier du plan de prévention, actions déjà engagées (ou à engager d'urgence).\n\nQ2 — Situation individuelle sensible\n« Un salarié RQTH de l'équipe Content présente des signes visibles de surmenage. Quel suivi spécifique a été mis en place par le management et la RH ? »\n→ Préparer : politique d'aménagement de poste, contact médecine du travail, confidentialité du dossier.\n\nQ3 — Politique de télétravail\n« Il n'existe pas de charte télétravail formalisée. Les pratiques varient selon les managers. Quand un accord collectif sera-t-il négocié ? »\n→ Préparer : état des pratiques actuelles, calendrier de négociation, position de la direction.\n\nQ4 — Bilan social\n« Le CSE a droit à la communication du bilan social (entreprises ≥ 300 salariés) ou, en deçà, à la base de données économiques, sociales et environnementales (BDESE). Quand sera-t-elle accessible et à jour ? »\n→ Préparer : accès BDESE, données clés à consolider avant la première réunion ordinaire du CSE.\n\nQ5 — Démarche RSE / pression investisseur\n« La direction affiche une politique RSE à destination de ses partenaires B2B. Quels engagements concrets s'appliquent en interne pour les salariés de Lumio Health ? »\n→ Préparer : lien entre démarche QVCT et engagements RSE communicables, sans que ça ressemble à du greenwashing social."
            },
            {
              "type": "callout",
              "text": "PRIORITÉ ABSOLUE avant le 18 mars : formaliser a minima (1) un premier diagnostic RPS écrit, (2) un accès BDESE opérationnel, (3) une position claire de la direction sur le télétravail. Sans ces trois éléments, la réunion tourne mal et on perd la confiance des futurs élus dès le départ."
            },
            {
              "type": "h2",
              "text": "3. Ce que j'attends de vous"
            },
            {
              "type": "p",
              "text": "Préparez une fiche de réponse argumentée par question (format synthétique, 10–15 lignes chacune), avec les références légales applicables et la position que nous défendrons. Transmettez-moi le tout avant le vendredi 15 mars, 18h00, pour que je puisse valider avant la réunion. Sonia et Camille seront en copie lecture — elles ne valident pas, c'est vous qui portez le dossier."
            },
            {
              "type": "callout",
              "text": "Rappel calendrier électoral : liste électorale affichée au plus tard le 25 mars — dépôt des listes de candidatures : du 28 mars au 4 avril — premier tour : 28 avril — délai légal de contestation : 3 jours. Tout retard sur le PAP nous expose à une annulation du scrutin et à un contentieux prud'homal."
            }
          ]
        }
      ]
    }
  ],
  "notes": [
    {
      "id": "DOC-04",
      "title": "Priorités RH vues du Marketing — stop aux enquêtes, focus performance",
      "date": "14 mars 2025",
      "preview": "Sonia Ferracci demande d'interrompre l'enquête climat social et de prioriser les campagnes produit avant mi-avril.",
      "kicker": "NOTE INTERNE — USAGE RESTREINT",
      "render": "plain",
      "body": "Théo, je te fais remonter une préoccupation directe avant qu'on perde encore deux semaines.\n\nDepuis début mars, l'équipe RH pousse une enquête « climat social » auprès de l'ensemble des 87 salariés. Je comprends l'intention, mais le timing est mauvais : nous avons trois campagnes produit à boucler avant le 15 avril, un brief agence bloqué faute de validation Content, et Yassine est déjà sous l'eau. Ajouter un questionnaire de 40 minutes dans ce contexte, c'est amplifier exactement ce qu'on prétend mesurer.\n\nMa position est simple : si on veut parler de performance sociale, parlons chiffres. Le taux d'absentéisme à 11 % et trois départs en six mois sont déjà des indicateurs. On n'a pas besoin d'une enquête supplémentaire pour savoir que l'équipe Content est en tension — on le voit tous les jours. Ce qu'il faut, c'est une décision managériale rapide sur la charge et les priorités, pas un diagnostic de plus qui hystérise la situation et alimente les discussions sur le canal Slack.\n\nJe propose qu'on recadre : soit on confie à RH un mandat clair et court (deux semaines max, périmètre limité à l'équipe Content), soit on suspend la démarche jusqu'après le sprint avril. Dans tous les cas, les campagnes produit ne peuvent pas pâtir d'un agenda social non planifié.",
      "byline": "Sonia Ferracci (DirMkt) · 14 mars 2025"
    }
  ],
  "guide": {
    "title": "Guide de mission · Gérer l'environnement professionnel et les relations sociales",
    "intro": "Ce guide est là si tu te sens bloqué. Il ne donne pas les réponses — il indique où chercher.",
    "tips": [
      {
        "titre": "2.1 — Gestion des conditions de travail et de l'environnement professionnel",
        "body": "Commencez par ancrer votre réponse dans les chiffres fournis (absentéisme 4 % → 11 %, 3 démissions). Votre DUER doit être suffisamment détaillé pour montrer que vous distinguez risques physiques et psychosociaux. Ne négligez pas la procédure d'alerte : elle doit être réaliste pour une structure de 87 salariés. Pour le plan QVCT, nommez explicitement chaque partie prenante (direction, managers, représentants du personnel) et associez chaque action à un indicateur mesurable."
      },
      {
        "titre": "2.2 — Contribution à la politique Responsabilité Sociétale des Entreprises (RSE) et Développement Durable (DD)",
        "body": "Reliez explicitement la politique RSE à l'activité de Lumio Health (wearables de gestion du stress) : c'est une opportunité narrative forte. Différenciez bien communication interne et externe. Pour la marque employeur, montrez comment les actions RSE peuvent contribuer à réduire le turnover constaté. Citez au moins une source juridique ou normative récente (ex. loi Pacte, reporting extra-financier CSRD)."
      },
      {
        "titre": "2.3 — Organisation du dialogue social et des relations collectives",
        "body": "Pour le calendrier électoral, soyez précis sur les délais légaux (invitation à négocier le PAP, affichage, dépôt des candidatures). Distinguez clairement consultation obligatoire et réunion d'information. Pour l'oral de mise en situation, préparez une posture : restez factuel, calme, et montrez que vous maîtrisez les arguments sans être défensif face aux représentants du personnel."
      }
    ],
    "footer": "Ce guide est disponible à tout moment via le bouton ? en bas à gauche du desktop."
  },
  "notepad": {
    "title": "Mes notes — mission",
    "placeholder": "Tes pensées au fil de l'eau pendant que tu lis le dossier."
  },
  "finder": {
    "folders": {
      "guide": {
        "title": "Guide",
        "sidebar": "⌘ Guide",
        "icon": "📕",
        "items": [
          {
            "kind": "pdf",
            "name": "Guide de mission",
            "app": "pdf",
            "props": {}
          }
        ]
      },
      "acte1": {
        "title": "Acte 1",
        "sidebar": "Acte 1",
        "icon": "📁",
        "items": [
          {
            "kind": "mail",
            "name": "Urgence RH — situation",
            "app": "mail",
            "props": {
              "docId": "DOC-01"
            }
          },
          {
            "kind": "pdf",
            "name": "Indicateurs sociaux T4 2024",
            "app": "pdf",
            "props": {
              "docId": "DOC-02"
            }
          }
        ]
      },
      "acte2": {
        "title": "Acte 2",
        "sidebar": "Acte 2",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Pétition interne — surcharge",
            "app": "pdf",
            "props": {
              "docId": "DOC-03"
            }
          },
          {
            "kind": "note",
            "name": "Priorités RH vues du",
            "app": "notes",
            "props": {
              "docId": "DOC-04"
            }
          },
          {
            "kind": "mail",
            "name": "Due diligence RSE —",
            "app": "mail",
            "props": {
              "docId": "DOC-05"
            }
          }
        ]
      },
      "acte3": {
        "title": "Acte 3",
        "sidebar": "Acte 3",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Invitation à négocier le",
            "app": "pdf",
            "props": {
              "docId": "DOC-06"
            }
          },
          {
            "kind": "pdf",
            "name": "CR réunion managers —",
            "app": "pdf",
            "props": {
              "docId": "DOC-07"
            }
          }
        ]
      },
      "acte5": {
        "title": "Acte 5",
        "sidebar": "Acte 5",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Réunion préparatoire CSE #1",
            "app": "pdf",
            "props": {
              "docId": "DOC-08"
            }
          }
        ]
      }
    },
    "order": [
      "guide",
      "acte1",
      "acte2",
      "acte3",
      "acte5"
    ]
  },
  "calendar": {
    "monthLabel": "Mars",
    "todayLabel": "Jour 1 / 18",
    "countdownLabel": "AVANT ÉCHÉANCE",
    "startDay": 14,
    "daysInMonth": 31,
    "startOffset": 0,
    "deadlineDay": 31,
    "boardDay": null,
    "legend": [
      {
        "label": "Réunion",
        "color": "#3a7bd5"
      },
      {
        "label": "Production",
        "color": "#c4420f"
      },
      {
        "label": "Échéance",
        "color": "#a83232"
      }
    ],
    "events": {
      "14": [
        {
          "label": "Kick-off · Signal d'alarme chez Lumio Health : entre burn-out silencieux et première négociation CSE",
          "bg": "#3a7bd5",
          "color": "#fff",
          "bold": true
        }
      ],
      "31": [
        {
          "label": "Livrable final",
          "bg": "#a83232",
          "color": "#fff",
          "bold": true
        }
      ]
    },
    "footer": "<em>1 jour fictif ≈ 11 minutes réelles · ratio ×74</em>"
  },
  "trash": {
    "title": "La corbeille est vide.",
    "body": "Mais l'idée est bonne. La plupart des consultants commencent par jeter quelque chose."
  },
  "slack": {
    "workspace": "Lumio Health",
    "channels": [
      {
        "id": "general",
        "name": "general"
      },
      {
        "id": "projet-bc2",
        "name": "projet-bc2"
      }
    ],
    "dms": [
      {
        "id": "commanditaire",
        "name": "Théo Marczak",
        "avatar": "TM",
        "color": "#134547",
        "status": "online",
        "isCommanditaire": true
      }
    ],
    "seed": {
      "commanditaire": [
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:14",
          "text": "Bon, tu es officiellement dans la boucle sur tout ce qui se passe côté RH — absentéisme, la pétition Slack, les élections CSE qui arrivent dans 45 jours, tout ça en même temps"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:17",
          "text": "je vais pas te mentir, c'est le bazar et jakob me souffle dans le cou pour qu'on affiche une vraie politique RSE avant le renouvellement Northgate"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:21",
          "text": "j'ai besoin d'un plan structuré d'ici vendredi — prévention RPS, QVCT, agenda social CSE, et quelque chose de communicable pour les partenaires — priorités, étapes, qui fait quoi : sois précis(e)"
        }
      ]
    }
  },
  "slackPrompts": {
    "commanditaire": "Tu es Théo Marczak, CEO de Lumio Health chez Lumio Health. Tu réponds à {{PRENOM}}, consultant·e externe sur la mission \"Signal d'alarme chez Lumio Health : entre burn-out silencieux et première négociation CSE\". Tu évalues sans expliquer, tu relances sans donner la réponse, tu simules la pression hiérarchique. Tu réponds en 2-3 messages courts séparés par ---SPLIT---. Pas de longs développements.",
    "commanditaireLivrable": "Tu es Théo Marczak. Tu viens de recevoir le livrable de {{PRENOM}}. Tu réagis en 2-3 messages courts séparés par ---SPLIT---. Tu pointes ce qui te paraît juste et ce qui te paraît faible, sans expliquer comment corriger."
  },
  "pressArticles": [
    {
      "id": "a1",
      "source": "L'Usine Digitale",
      "host": "usine-digitale.fr",
      "url": "usine-digitale.fr/medtechs-hypercroissance-risques-psychosociaux-collectif-travail",
      "author": "Margaux Tellier",
      "date": "11 mars 2025",
      "headline": "Medtechs en hypercroissance : quand l'accélération industrielle fracture le collectif de travail",
      "lede": "Entre levées de fonds record et injonctions à scaler vite, les startups de la santé numérique affrontent une crise silencieuse : l'effondrement progressif du bien-être au travail. Un angle mort qui commence à coûter cher.",
      "illustration": "PHOTO ILLUSTRATIVE",
      "body": "En 2024, le secteur medtech français a enregistré plus de 1,2 milliard d'euros de financements privés, selon le bilan annuel de France Biotech. Derrière les annonces enthousiastes, une réalité moins flatteuse émerge dans les couloirs de plusieurs scale-ups : turnover en hausse, signaux de surmenage ignorés, et relations sociales laissées en jachère au nom de la vitesse d'exécution.\n\nSelon une étude publiée en janvier 2025 par l'ANACT, 62 % des entreprises technologiques de moins de 200 salariés n'ont pas de plan formalisé de prévention des risques psychosociaux. Chez celles qui dépassent 50 salariés, l'obligation de mettre en place un CSE est pourtant bien réelle — mais souvent traitée comme une formalité administrative plutôt que comme un levier de gouvernance sociale.\n\n« La pression des investisseurs crée une forme d'amnésie réglementaire », résume Frédéric Aulas, consultant en droit social spécialisé dans les startups, joint par L'Usine Digitale. « On signe un term sheet un jeudi, on recrute vingt personnes le mois suivant, et personne ne pense à la mise à jour du document unique ou à l'agenda des élections professionnelles. »\n\nLes conséquences sont documentées. Une enquête de Malakoff Humanis parue en février 2025 révèle que le taux d'absentéisme dans les entreprises tech de 50 à 250 salariés a bondi de 3,8 points en dix-huit mois, atteignant en moyenne 9,4 % — contre 6,2 % dans les secteurs industriels traditionnels sur la même période.\n\nLes équipes créatives et techniques semblent particulièrement exposées. Chefs de projet, développeurs, content managers : ces profils, souvent recrutés dans l'urgence et managés à distance partielle, cumulent charge cognitive élevée, objectifs flottants et absence de reconnaissance formelle. Plusieurs DRH interrogés évoquent une « dette sociale » accumulée en période de croissance, qui remonte brutalement à la surface lors d'un premier signal fort — pétition interne, démission en cascade, ou alerte d'un médecin du travail.\n\nCôté RSE, la tentation est grande d'afficher une politique de qualité de vie au travail à destination des clients institutionnels et des investisseurs, sans que les fondations internes soient posées. « Vendre du bien-être quand vos propres équipes vacillent, c'est un risque réputationnel sous-estimé, en particulier dans la healthtech où la cohérence de marque est scrutée », souligne Inès Cavallo, directrice associée du cabinet Erevan Conseil.\n\nPlusieurs acteurs du secteur commencent néanmoins à changer de posture. Certaines startups intègrent désormais des indicateurs QVCT dans leurs tableaux de bord trimestriels présentés aux boards, aux côtés du MRR et du churn rate. Une évolution encore minoritaire, mais qui traduit une prise de conscience progressive que le capital humain n'est pas une variable d'ajustement.\n\nPour les experts, la fenêtre d'action est étroite. Passé un certain seuil d'usure collective, les dispositifs classiques — baromètre social, ateliers bien-être, coaching managérial — peinent à produire des effets. « La prévention primaire, c'est maintenant ou jamais », tranche Frédéric Aulas. « Attendre le premier contentieux prud'homal pour se poser les bonnes questions, c'est souvent trop tard. »"
    }
  ],
  "fausseUne": {
    "source": "Les Échos",
    "host": "lesechos.fr",
    "rubrique": "Économie & Entreprises",
    "kicker": "Santé au travail",
    "date": "14 mars 2025",
    "headline": "Burn-out en medtech : quand les fabricants de wearables anti-stress maltraitent leurs propres salariés",
    "chapeau": "Plusieurs startups françaises spécialisées dans la mesure du bien-être au travail se retrouvent épinglées pour des conditions sociales dégradées en interne. Un paradoxe qui commence à alerter investisseurs et clients B2B, et qui pourrait coûter cher en contrats.",
    "body": "C'est le comble de l'ironie industrielle. Des entreprises qui vendent à prix d'or des solutions de détection du stress à des groupes du CAC 40 et des réseaux hospitaliers se retrouvent, selon plusieurs témoignages recueillis par Les Échos, à gérer en urgence des vagues de démissions, des pics d'absentéisme et des alertes internes sur leurs propres plateformes. Dans le secteur des health tech parisiens, trois acteurs auraient enregistré une hausse de leur turnover supérieure à 30 % sur les douze derniers mois. 'Le discours RSE affiché en vitrine ne résiste pas à une due diligence sociale sérieuse', confie un partner d'un fonds de capital-risque sous couvert d'anonymat. Le timing est particulièrement délicat : la directive européenne CSRD impose depuis janvier 2025 aux entreprises de plus de 50 salariés une transparence accrue sur leurs indicateurs sociaux. Or plusieurs de ces acteurs n'ont toujours pas constitué de CSE en bonne et due forme, s'exposant à des sanctions prud'homales et à une mise en cause de leur crédibilité RSE. Des clients grand compte, notamment dans le secteur hospitalier, auraient d'ores et déjà inscrit des clauses de conformité sociale dans leurs appels d'offres 2025. 'On ne peut pas acheter une solution de prévention du burn-out à une boîte qui brûle elle-même ses équipes', résume brutalement un directeur des achats d'un CHU francilien. La question est désormais sur la table : jusqu'où le paradoxe est-il tenable ?"
  }
};

window.PAC_CONFIG = {
  "bloc": "bc2",
  "titre": "Gérer l'environnement professionnel et les relations sociales",
  "epreuve": "Évaluation 5, 6",
  "deadline": "14 mars 2025 · 18h00",
  "commanditaire": "Théo Marczak",
  "entreprise": "Lumio Health",
  "dispositif": "PAC",
  "note_reflexive": false,
  "temps": [
    {
      "n": 1,
      "label": "Ancrage terrain",
      "debut": 0,
      "fin": 20,
      "couleur": "#7a756c"
    },
    {
      "n": 2,
      "label": "Entrée dans l'affaire",
      "debut": 20,
      "fin": 50,
      "couleur": "#1b4f8a"
    },
    {
      "n": 3,
      "label": "Diagnostic",
      "debut": 50,
      "fin": 95,
      "couleur": "#1a6641"
    },
    {
      "n": 4,
      "label": "Production",
      "debut": 95,
      "fin": 175,
      "couleur": "#c4420f"
    },
    {
      "n": 5,
      "label": "Réflexion",
      "debut": 175,
      "fin": 210,
      "couleur": "#7a756c"
    }
  ],
  "competences": [
    {
      "code": "2.1",
      "label": "Gestion des conditions de travail et de l'environnement professionnel",
      "libelle": "Gestion des",
      "rncp": "Mettre en œuvre une politique de prévention des risques professionnels en respectant le cadre réglementaire en matière de Santé et Sécurité au Travail (SST) afin d'identifier les situations à risque et d'éviter les accidents ou maladies. Construire un plan de prévention des RPS avec les représentants du personnel ou avec les collaborateurs en identifiant les facteurs de risques, en planifiant des actions de prévention, en élaborant une procédure sur la conduite à tenir en cas de situation difficile et en établissant une procédure d'alerte pour protéger les collaborateurs. Évaluer le climat social de l'entreprise dans une démarche de prévention primaire, en rencontrant les collaborateurs et les managers et en centralisant leurs retours d'expériences liés aux pratiques managériales, aux relations interpersonnelles, à l'organisation et aux transformations du travail, pour préparer des actions de médiation. Conduire des plans d'action QVCT en veillant au respect des enjeux de toutes les parties prenantes pour améliorer les conditions de travail, favoriser l'engagement et accroître la performance collective de l'entreprise.",
      "placeholder": "À partir de la situation de Lumio Health (absentéisme en hausse, démissions, pétition anonyme), vous rédigerez : (1) une cartographie des risques professionnels et psychosociaux intégrant les indicateurs sociaux disponibles et le cadre SST applicable ; (2) un plan de prévention des RPS structuré avec facteurs de risque identifiés, actions de prévention hiérarchisées et procédure d'alerte opérationnelle ; (3) la description de votre méthodologie d'enquête du climat social (outils, indicateurs, grille d'entretien) ; (4) un plan d'action QVCT détaillé avec parties prenantes, actions argumentées et indicateurs de suivi.",
      "min": 600,
      "motsCles": [
        "DUER",
        "RPS",
        "SST",
        "prévention primaire",
        "facteurs de risque",
        "procédure d'alerte",
        "QVCT",
        "climat social",
        "absentéisme",
        "indicateurs de suivi",
        "médiation",
        "parties prenantes",
        "engagement",
        "performance collective"
      ],
      "conseil": "Commencez par ancrer votre réponse dans les chiffres fournis (absentéisme 4 % → 11 %, 3 démissions). Votre DUER doit être suffisamment détaillé pour montrer que vous distinguez risques physiques et psychosociaux. Ne négligez pas la procédure d'alerte : elle doit être réaliste pour une structure de 87 salariés. Pour le plan QVCT, nommez explicitement chaque partie prenante (direction, managers, représentants du personnel) et associez chaque action à un indicateur mesurable."
    },
    {
      "code": "2.2",
      "label": "Contribution à la politique Responsabilité Sociétale des Entreprises (RSE) et Développement Durable (DD)",
      "libelle": "Contribution à",
      "rncp": "Contribuer à la mise en œuvre de la politique RSE/RTE et DD en menant une veille de l'environnement juridique et en intégrant les aspects techniques et sociaux propres à l'entreprise pour accompagner les parties prenantes dans la recherche et la mise en œuvre de solutions concrétisant l'engagement sociétal et environnemental de l'entreprise.",
      "placeholder": "Jakob Rein (Northgate) exige un livrable RSE avant le renouvellement du contrat. Vous présenterez : (1) une analyse des enjeux RSE spécifiques à Lumio Health avec identification des parties prenantes internes et externes ; (2) au moins deux actions de sensibilisation aux enjeux RSE (modalités, cibles, justification) ; (3) au moins deux actions de communication (une interne, une externe) avec objectif, message, canal et public cible ; (4) l'articulation entre ces actions, la marque employeur et l'image de Lumio Health auprès de Northgate.",
      "min": 350,
      "motsCles": [
        "RSE",
        "développement durable",
        "parties prenantes",
        "sensibilisation",
        "marque employeur",
        "communication interne",
        "communication externe",
        "enjeux sociaux",
        "engagement sociétal",
        "image de l'entreprise",
        "veille juridique",
        "Northgate"
      ],
      "conseil": "Reliez explicitement la politique RSE à l'activité de Lumio Health (wearables de gestion du stress) : c'est une opportunité narrative forte. Différenciez bien communication interne et externe. Pour la marque employeur, montrez comment les actions RSE peuvent contribuer à réduire le turnover constaté. Citez au moins une source juridique ou normative récente (ex. loi Pacte, reporting extra-financier CSRD)."
    },
    {
      "code": "2.3",
      "label": "Organisation du dialogue social et des relations collectives",
      "libelle": "Organisation du",
      "rncp": "Maintenir à jour les données en réalisant une veille des évolutions du droit social au moyen de sources d'informations diversifiées et en rédigeant des notes de synthèse organisées par contenu (RSE - RTE, Qualité de Vie et des Conditions de Travail, inclusion) à destination de la direction et des collaborateurs pour assurer la bonne information de toutes les parties prenantes de l'entreprise. Organiser les élections du CSE, en respectant les obligations et échéanciers légaux, en s'assurant que chaque collaborateur ait la capacité d'exprimer son vote, afin de garantir l'intérêt de chacun et le climat social. Planifier l'agenda social avec la direction et les instances représentatives du personnel, en respectant la réglementation en vigueur et en accompagnant les membres élus et les délégués syndicaux désignés, pour préparer les négociations collectives. Participer aux négociations avec les partenaires sociaux, en identifiant les thèmes des négociations obligatoires (organisation du travail, diversité et égalité, handicap, GEPP, etc.), en préparant des éléments de réponses aux questions du CSE et en assurant le suivi des réunions afin de contribuer à l'animation d'un dialogue social constructif.",
      "placeholder": "Les élections du CSE se tiennent dans 45 jours chez Lumio Health. Vous produirez : (1) une note de synthèse de veille droit social ciblée sur les thématiques QVCT, inclusion et RPS, avec sources identifiées et données récentes ; (2) le calendrier électoral du CSE conforme aux obligations légales (étapes, délais, règles d'éligibilité, calcul des sièges pour 87 salariés) ; (3) un agenda social annuel avec réunions d'information et de consultation distinguées ; (4) un exemple d'ordre du jour et de procès-verbal de réunion CSE ; (5) la préparation d'arguments pour répondre aux questions probables du CSE sur les RPS et la charge de travail.",
      "min": 570,
      "motsCles": [
        "CSE",
        "élections professionnelles",
        "agenda social",
        "veille droit social",
        "note de synthèse",
        "BDESE",
        "négociation collective",
        "ordre du jour",
        "procès-verbal",
        "heures de délégation",
        "protocole d'accord préélectoral",
        "NAO",
        "dialogue social",
        "représentants du personnel"
      ],
      "conseil": "Pour le calendrier électoral, soyez précis sur les délais légaux (invitation à négocier le PAP, affichage, dépôt des candidatures). Distinguez clairement consultation obligatoire et réunion d'information. Pour l'oral de mise en situation, préparez une posture : restez factuel, calme, et montrez que vous maîtrisez les arguments sans être défensif face aux représentants du personnel."
    }
  ],
  "gabarits": {},
  "questionsPositionnement": [],
  "juryPrompt": "Tu es le jury certifiant du bloc bc2 (Chargé de développement des ressources humaines).\nContexte : Signal d'alarme chez Lumio Health : entre burn-out silencieux et première négociation CSE · 14 mars 2025.\nTu évalues une production étudiante aux critères RNCP stricts. Sois exigeant mais juste.\nCritères éliminatoires :\n- Absence de cartographie formalisée des risques professionnels et psychosociaux (aucun document de type DUER ou équivalent produit ou décrit)\n- Rôles et responsabilités des parties prenantes non différenciés : direction, managers, représentants du personnel et RH doivent être explicitement distingués dans le plan d'action QVCT et l'agenda social\n- Absence d'indicateurs d'impact mesurables et chiffrés pour au moins deux actions du plan QVCT ou de la politique RSE\n- Calendrier électoral CSE non conforme aux obligations légales (délais erronés, étapes manquantes, règles de calcul des sièges absentes pour 87 salariés)\n- Actions RSE et actions de communication non distinguées entre périmètre interne et externe, sans objectif ni public cible définis\n- Procédure d'alerte RPS absente ou non opérationnelle (pas de déclencheur défini, pas d'acteur désigné, pas de circuit d'escalade)\n- Lors de la mise en situation orale : posture non professionnelle, incapacité à répondre aux questions du CSE sur les RPS ou la charge de travail, ou confusion entre réunion d'information et réunion de consultation\n\nRéponds EXACTEMENT dans ce format :\n### 2.1 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### 2.2 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### 2.3 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n## Niveau global\n**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**\n\n## Question de jury\nUne question dérangeante que tu poserais à l'oral.",
  "livrableMinMots": 520,
  "noteReflexiveMinMots": 100
};
// Alias de compatibilité
window.PASS_CONFIG = window.PAC_CONFIG;
