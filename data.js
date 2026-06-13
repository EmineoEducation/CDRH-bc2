// ══════════════════════════════════════════════════════════════
//  DATA · PAC BC2 · Manager des Ressources Humaines
//  Opération Fréquence Silencieuse · 14 mars 2025
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
      "subject": "URGENT — Prise en charge dossier social Lumio x Northgate",
      "date": "14 mars 2025",
      "preview": "Théo mandate officiellement le/la RRH sur la crise sociale Lumio x Northgate : absentéisme, démissions, CSE non consulté — action immédiate requise.",
      "body": "Objet : URGENT — Prise en charge dossier social Lumio x Northgate\n\nBonjour,\n\nJe te confie formellement, à compter d'aujourd'hui 14 mars, la gestion complète du dossier social lié à la fusion avec Northgate Medtech. Je ne vais pas te mâcher les mots : la situation est mauvaise et elle se dégrade vite.\n\nVoilà ce que j'ai sur le bureau ce matin : absentéisme en hausse de 22% sur deux mois, trois démissions dans l'équipe Content dont on ne comprend toujours pas vraiment les raisons, et une pétition qui circule chez les commerciaux B2B suite aux changements d'objectifs décidés par Sonia en janvier — je n'avais pas anticipé que ça passerait aussi mal. Par ailleurs, le CSE n'a pas été consulté sur le projet de fusion. Son mandat expire dans six semaines. Je réalise que c'est un vrai problème légal, pas seulement un problème de forme.\n\nPriorités immédiates : régulariser la situation vis-à-vis du CSE avant toute chose, puis dresser un état des lieux social honnête — je veux des chiffres, pas des impressions. Ensuite, construire un plan d'action QVCT crédible, notamment pour les équipes Content et Commerce. Je veux un premier point de situation vendredi 21 mars, et un plan structuré pour le 4 avril au plus tard, avant la prochaine réunion avec Jakob.\n\nJe suis disponible pour un échange cette semaine, mais je te laisse prendre les rênes. C'est ton dossier.\n\nThéo\nThéo Marczak — CEO, Lumio Health\nm. +33 6 12 34 56 78",
      "avatar": "TM",
      "avatarColor": "#134547",
      "unread": true,
      "flagged": true,
      "tags": [
        "Mission"
      ]
    }
  ],
  "dossiers": [
    {
      "id": "DOC-02",
      "type": "rich",
      "tab": "TABLEAU",
      "title": "Tableau de bord RH — Indicateurs sociaux T4 2024 / T1 2025",
      "accent": "#1b4f8a",
      "runningHead": "TABLEAU DE BORD RH",
      "pages": [
        {
          "kicker": "CONFIDENTIEL — USAGE INTERNE RESTREINT",
          "title": "Tableau de bord RH · Indicateurs sociaux T4 2024 — T1 2025",
          "byline": "Service RH Lumio Health · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Ce tableau de bord compile les principaux indicateurs sociaux de Lumio Health sur la période octobre 2024 – mars 2025. Il est établi à la demande de Théo Marczak, CEO, dans le cadre de l'Opération Fréquence Silencieuse. Les données sont issues du SIRH interne, des relevés de paie, du baromètre social de janvier 2025 et des remontées managériales. Document à diffusion restreinte : Direction générale, RRH, membres du CSE sortant."
            },
            {
              "type": "h2",
              "text": "1. Absentéisme"
            },
            {
              "type": "p",
              "text": "Le taux d'absentéisme global s'établit à 8,4 % en février 2025, contre 6,9 % en décembre 2024, soit une hausse de 22 % en deux mois. L'écart est particulièrement marqué dans l'équipe Content & Digital (12,1 %) et chez les commerciaux B2B (9,7 %). Les arrêts de courte durée (1 à 3 jours) représentent 61 % des occurrences, signe classique d'un désengagement latent plutôt que de pathologies lourdes. Aucun accident du travail déclaré sur la période, mais deux incidents de tension relationnelle signalés en janvier 2025 (équipe Content, sans arrêt associé)."
            },
            {
              "type": "callout",
              "text": "⚠ Taux d'absentéisme : +22 % en 8 semaines. Seuil d'alerte interne fixé à +15 % dépassé depuis le 17 février 2025."
            },
            {
              "type": "h2",
              "text": "2. Turnover et démissions"
            },
            {
              "type": "p",
              "text": "Trois démissions ont été enregistrées entre le 20 janvier et le 10 mars 2025, toutes dans l'équipe Content : Lucas Ferrand (Content Strategist, 3 ans d'ancienneté, départ le 31 janvier), Inès Chakroun (Rédactrice SEO, 18 mois, départ le 14 février), et un troisième profil dont le prénom est anonymisé à sa demande (Chargé de production vidéo, départ le 7 mars). Aucun entretien de départ formalisé n'a pu être conduit pour les deux premiers faute de protocole en place. Le taux de turnover annualisé atteint 14,2 % sur l'ensemble de la structure (référence secteur medtech : 9,8 %, source Syntec Numérique 2024)."
            },
            {
              "type": "callout",
              "text": "📌 3 démissions en 7 semaines dans une équipe de 9 personnes = taux de sortie localisé de 33 %. Yassine Morel (RQTH, Content Manager) identifié en situation de surcharge critique — suivi prioritaire requis."
            },
            {
              "type": "h2",
              "text": "3. Baromètre social — Janvier 2025"
            },
            {
              "type": "p",
              "text": "Le baromètre interne, déployé du 13 au 17 janvier 2025 (taux de réponse : 67 %, soit 54 répondants sur 81 salariés), révèle une dégradation nette du climat perçu. L'indice de confiance envers la direction chute à 5,8/10 (vs 7,4/10 en juillet 2024). La lisibilité de la stratégie est notée 4,2/10. La satisfaction globale au travail s'établit à 5,9/10. Point positif : la cohésion d'équipe reste bien évaluée (7,1/10), ce qui indique que la défiance est verticale (direction / management intermédiaire) et non horizontale. 38 % des répondants déclarent avoir entendu parler du projet de fusion via des canaux informels avant toute communication officielle."
            },
            {
              "type": "h2",
              "text": "4. Heures supplémentaires et charge de travail"
            },
            {
              "type": "p",
              "text": "Sur le T4 2024, 312 heures supplémentaires ont été générées sur l'ensemble de l'effectif, dont 187 heures non récupérées au 1er mars 2025 (60 %). L'équipe Content concentre 41 % de ce volume non récupéré (77 heures). Les équipes commerciales B2B signalent une augmentation non formalisée de la charge depuis la révision unilatérale des objectifs par Sonia Ferracci en février 2025, sans traduction dans les contrats de travail ni accord collectif. Ce point constitue un risque juridique et social immédiat."
            },
            {
              "type": "callout",
              "text": "🔴 187 heures supplémentaires non récupérées au 1er mars 2025. Révision des objectifs commerciaux sans concertation : exposition à un risque de contentieux prud'homal et de qualification en modification unilatérale du contrat de travail (art. L.1222-6 C. trav.)."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-04",
      "type": "rich",
      "tab": "PÉTITION",
      "title": "Courrier collectif — Conditions de travail et transparence",
      "accent": "#c4420f",
      "runningHead": "PÉTITION INFORMELLE",
      "pages": [
        {
          "kicker": "PÉTITION INFORMELLE — CONFIDENTIEL",
          "title": "À l'attention de la Direction de Lumio Health — Demande de réunion CSE extraordinaire",
          "byline": "Collectif de collaborateurs B2B (7 signataires anonymisés) · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Nous, collaborateurs de l'équipe commerciale B2B de Lumio Health, prenons collectivement la parole pour signaler une dégradation significative de nos conditions de travail et exprimer une inquiétude profonde quant au manque de transparence entourant le projet de fusion partielle avec Northgate Medtech. Ce courrier ne reflète pas une démarche hostile envers l'entreprise : nous croyons en son projet et en ses clients. Il traduit une situation que nous ne pouvons plus ignorer."
            },
            {
              "type": "h2",
              "text": "1. Des objectifs modifiés sans concertation"
            },
            {
              "type": "p",
              "text": "Depuis début février 2025, nos objectifs commerciaux individuels ont été révisés à la hausse de manière unilatérale, sans information préalable, sans réunion d'équipe, et sans aucun échange avec notre responsable de proximité Camille Ott — qui, à notre connaissance, n'a pas elle-même été associée à cette décision. Ces nouveaux objectifs ont été communiqués par email le 6 février par la Direction Marketing, sans explication sur les critères retenus ni sur les conséquences en cas de non-atteinte. Cette méthode génère un sentiment d'arbitraire et fragilise notre relation de confiance avec la direction."
            },
            {
              "type": "h2",
              "text": "2. Une fusion annoncée, mais non expliquée"
            },
            {
              "type": "p",
              "text": "L'annonce de la fusion partielle avec Northgate Medtech a circulé de manière informelle avant toute communication officielle. À ce jour, nous n'avons reçu aucun document, aucune note d'information, aucune réunion de présentation sur les conséquences concrètes de cette opération pour nos postes, nos périmètres clients, nos conditions contractuelles. L'incertitude ainsi créée alimente des rumeurs et affecte directement notre capacité à travailler sereinement et à défendre la marque Lumio auprès de nos 180 comptes actifs."
            },
            {
              "type": "callout",
              "text": "Fait signalé : trois collègues de l'équipe Content ont démissionné en l'espace de six semaines. Aucune explication collective ne nous a été donnée. Ce silence aggrave l'inquiétude générale et laisse penser que des informations nous sont délibérément retenues."
            },
            {
              "type": "h2",
              "text": "3. Notre demande formelle"
            },
            {
              "type": "p",
              "text": "Nous demandons à la direction de convoquer une réunion extraordinaire du CSE dans les meilleurs délais, et au plus tard avant l'expiration de son mandat prévue dans six semaines. Cette réunion devra porter a minima sur les points suivants : (1) présentation officielle du projet de fusion et de ses implications RH, (2) consultation du CSE sur les changements d'organisation et d'objectifs intervenus depuis janvier 2025, (3) mise en place d'un espace d'expression sécurisé pour les équipes. Nous rappelons que la consultation du CSE sur les projets importants modifiant les conditions de travail est une obligation légale au titre des articles L.2312-8 et suivants du Code du travail."
            },
            {
              "type": "callout",
              "text": "Signataires : 7 collaborateurs B2B — identités transmises sous pli séparé à Camille Ott, garante de la confidentialité de la démarche. Ce courrier sera porté à la connaissance des représentants du CSE si aucune réponse n'est apportée sous 10 jours ouvrés."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-05",
      "type": "rich",
      "tab": "EXTRAIT",
      "title": "BDESE Lumio Health — Extraits thématiques 2023-2024",
      "accent": "#5b3a8a",
      "runningHead": "EXTRAIT BDESE",
      "pages": [
        {
          "kicker": "BASE DE DONNÉES ÉCONOMIQUES, SOCIALES ET ENVIRONNEMENTALES",
          "title": "Extraits thématiques : emploi, égalité, conditions de travail, rémunérations",
          "byline": "Direction Lumio Health · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Le présent extrait est établi conformément aux articles L. 2312-18 et suivants du Code du travail. Il porte sur les exercices 2023 et 2024 et a vocation à alimenter les travaux du CSE ainsi que les négociations obligatoires en cours. Les données ci-dessous sont issues du SIRH Lumio Health (Lucca), des déclarations sociales nominatives (DSN) et des bilans sociaux transmis à l'URSSAF."
            },
            {
              "type": "h2",
              "text": "1. Structure des effectifs"
            },
            {
              "type": "p",
              "text": "Au 31 décembre 2024, Lumio Health comptait 47 salariés en CDI (contre 41 fin 2023, soit +14,6 %), auxquels s'ajoutent 4 CDD et 2 alternants. La répartition par genre s'établit à 55 % de femmes et 45 % d'hommes. L'équipe Content & Marketing représente 9 personnes, dont 3 départs enregistrés entre janvier et février 2025 (démissions). Le taux de turnover global sur 2024 atteint 12,3 %, contre 6,8 % en 2023, soit un quasi-doublement en un exercice. L'absentéisme toutes causes confondues s'établit à 5,2 % sur le T1 2025 (janvier-février), contre 4,3 % sur l'ensemble de 2024 — hausse de 22 % corroborée par les données de paie."
            },
            {
              "type": "h2",
              "text": "2. Rémunérations et écarts F/H"
            },
            {
              "type": "p",
              "text": "Le salaire mensuel brut médian s'élève à 3 840 € en 2024 (3 620 € en 2023). L'index égalité professionnelle Femmes/Hommes publié au 1er mars 2025 est de 74/100, en baisse de 4 points par rapport à 2024 (78/100). L'écart de rémunération moyen pondéré entre femmes et hommes à poste comparable est de 7,2 % en défaveur des femmes (6,1 % en 2023). Les catégories les plus exposées : managers intermédiaires (écart de 9,4 %) et profils commerciaux B2B (écart de 8,1 %). Aucune mesure de rattrapage salarial n'a été formalisée à ce jour dans le cadre de la NAO 2024, dont le procès-verbal de désaccord a été signé le 18 novembre 2024."
            },
            {
              "type": "callout",
              "text": "⚠ Index égalité F/H : 74/100 (seuil légal de publication : 75). Lumio Health est en dessous du seuil réglementaire et s'expose à une obligation de publication de mesures correctives avant le 1er septembre 2025 (art. L. 1142-9 du Code du travail). À inscrire en priorité à l'agenda des négociations CSE."
            },
            {
              "type": "h2",
              "text": "3. Conditions de travail et télétravail"
            },
            {
              "type": "p",
              "text": "L'accord de télétravail signé en juin 2022 autorise deux jours par semaine pour les postes éligibles. En 2024, le taux de recours effectif au télétravail s'établit à 68 % des salariés éligibles (contre 71 % en 2023). Trois équipes présentent un recours nettement inférieur à la moyenne : les commerciaux B2B terrain (31 %), l'équipe Partenariats (44 %) et l'équipe Content (58 %). Par ailleurs, 14 salariés ont déclaré travailler régulièrement au-delà de 10 heures par jour via le module de badgeage Lucca, dont 6 dans l'équipe Content & Marketing — donnée à corréler avec les signaux de surmenage identifiés en février 2025."
            },
            {
              "type": "h2",
              "text": "4. Indicateurs QVCT et santé au travail"
            },
            {
              "type": "p",
              "text": "Aucune enquête de climat social formalisée n'a été conduite en 2024. Le dernier baromètre interne remonte à octobre 2023 (score eNPS : +12). Trois signalements de situations de mal-être ont été transmis au médecin du travail entre octobre 2024 et février 2025, dont un relatif à un salarié en situation de RQTH (équipe Content). Le Document Unique d'Évaluation des Risques Professionnels (DUERP) a été mis à jour en janvier 2024 mais ne reflète pas les risques psychosociaux liés à la transformation organisationnelle en cours. Aucun plan de prévention des RPS formalisé n'est actuellement en vigueur. Le taux de fréquence des accidents du travail est nul sur 2023-2024."
            },
            {
              "type": "callout",
              "text": "📌 Points de vigilance prioritaires pour les négociations CSE : (1) Index F/H sous le seuil légal — mesures correctives obligatoires ; (2) DUERP à actualiser impérativement avant la prochaine réunion CSE (échéance mandat : fin avril 2025) ; (3) Absence de plan RPS formalisé dans un contexte de fusion annoncée ; (4) Concentration des signaux de surmenage dans l'équipe Content (3 démissions + 1 RQTH + dépassements horaires récurrents)."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-06",
      "type": "rich",
      "tab": "COMPTE-R",
      "title": "CR — Intégration opérationnelle Lumio x Northgate · 28 février 2025",
      "accent": "#7a756c",
      "runningHead": "COMPTE-RENDU DE RÉUNION",
      "pages": [
        {
          "kicker": "CONFIDENTIEL — DIFFUSION RESTREINTE",
          "title": "Point d'avancement : intégration opérationnelle Lumio × Northgate Medtech",
          "byline": "Jakob Rein, Partner Northgate Capital · 28 février 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Réunion tenue le vendredi 28 février 2025, de 14h00 à 16h30, dans les locaux de Northgate Capital (75008 Paris). Présents : Jakob Rein (Northgate), Théo Marczak (Lumio Health, CEO), Martin Dubé (Northgate, directeur juridique), Camille Ott (Lumio, partenariats B2B — arrivée en cours de séance à 15h15). Absente excusée : Sonia Ferracci (Lumio, directrice marketing)."
            },
            {
              "type": "h2",
              "text": "1. Périmètre RH de l'opération"
            },
            {
              "type": "p",
              "text": "L'intégration prévue couvre trois fonctions clés de Lumio Health : (a) le pôle Content & Communication (5 ETP actuels), dont les missions seront partiellement absorbées par l'équipe brand de Northgate Medtech d'ici le T3 2025 ; (b) la direction commerciale B2B, appelée à fusionner avec la force de vente Northgate sous un management unifié à compter du 1er juillet 2025 ; (c) la fonction support RH/Admin, dont le périmètre sera redéfini en fonction des synergies identifiées. Au total, entre 8 et 12 postes sont susceptibles d'être modifiés dans leur contenu ou leur rattachement hiérarchique. Aucun plan de suppression de postes n'est acté à ce stade, mais des mobilités internes et des reclassifications de fonctions sont anticipées."
            },
            {
              "type": "callout",
              "text": "⚠ Point d'attention juridique (soulevé par M. Dubé) : aucune information formelle n'a été transmise au CSE de Lumio Health à ce jour. Le mandat de l'instance expire dans six semaines (mi-avril 2025). Toute décision structurelle engagée avant consultation régulière expose Lumio à un risque de délit d'entrave."
            },
            {
              "type": "h2",
              "text": "2. Calendrier prévisionnel"
            },
            {
              "type": "p",
              "text": "Les jalons retenus lors de la réunion sont les suivants : 15 mars 2025 — transmission d'un mémorandum d'intention révisé par Northgate à Théo Marczak ; 31 mars 2025 — présentation du projet au CSE de Lumio (à organiser en urgence) ; 30 avril 2025 — finalisation des fiches de poste révisées pour les fonctions impactées ; 1er juillet 2025 — date cible d'entrée en vigueur de la nouvelle organisation. Jakob Rein a insisté sur le maintien de ce calendrier : « Chaque semaine de glissement nous coûte de la lisibilité vis-à-vis de nos LPs. Le T3 n'est pas négociable. »"
            },
            {
              "type": "h2",
              "text": "3. Points RSE et engagements de marque employeur"
            },
            {
              "type": "p",
              "text": "Northgate Medtech a indiqué vouloir intégrer Lumio Health dans son rapport RSE 2025 sous l'axe « santé au travail & innovation sociale », valorisant les wearables de mesure du stress comme actif différenciant. Théo Marczak a conditionné cet usage à la mise en place d'un plan QVCT crédible au sein de Lumio avant toute communication externe. Camille Ott a signalé, en séance, la dégradation perceptible du climat interne depuis janvier 2025 et déconseillé toute communication RSE externe avant stabilisation sociale."
            },
            {
              "type": "callout",
              "text": "ACTION PRIORITAIRE — RRH Lumio Health : organiser sans délai la consultation du CSE sur le projet de fusion (information-consultation obligatoire, articles L. 2312-8 et suivants du Code du travail), planifier le renouvellement de l'instance avant mi-avril 2025, et produire un agenda social formalisé pour le T2 2025 intégrant les négociations liées à la réorganisation."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-07",
      "type": "rich",
      "tab": "RAPPORT",
      "title": "Retours informels équipe Content — mal-être et désengagement post-annonce fusion",
      "accent": "#134547",
      "runningHead": "RAPPORT D'ENQUÊTE INTERN",
      "pages": [
        {
          "kicker": "RAPPORT INTERNE CONFIDENTIEL",
          "title": "Retours informels équipe Content — mal-être et désengagement post-annonce fusion",
          "byline": "Yassine Morel, Content Manager · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "À la demande du RRH et suite aux trois démissions intervenues en équipe Content entre janvier et mars 2025, j'ai recueilli entre le 10 et le 13 mars des retours informels auprès de cinq collègues (sur sept présents). Les échanges ont eu lieu en tête-à-tête, en dehors des heures de réunion. L'anonymat a été garanti. Ce document synthétise les verbatims et observations. Il ne constitue pas une enquête officielle mais un matériau de terrain destiné à éclairer le diagnostic social en cours."
            },
            {
              "type": "h2",
              "text": "1. Surcharge de travail et désorganisation depuis janvier 2026"
            },
            {
              "type": "p",
              "text": "Quatre collègues sur cinq signalent une augmentation sensible de leur charge depuis l'arrivée de Sonia Ferracci à la direction Marketing (janvier 2026) et, plus encore, depuis l'annonce de la fusion partielle avec Northgate Medtech (février 2025). Les briefs se multiplient sans ordre de priorité clair. Un collègue formule : « On reçoit trois demandes urgentes par jour, sans savoir laquelle compte vraiment. » Un autre évoque des semaines régulièrement au-dessus de 48 heures sans que cela soit ni reconnu ni compensé. La réorganisation des objectifs décidée unilatéralement par Sonia mi-février — sans réunion d'équipe préalable — est citée spontanément par trois personnes comme un point de rupture."
            },
            {
              "type": "callout",
              "text": "SIGNAL FORT — Trois collègues mentionnent explicitement avoir « pensé à partir » dans les deux dernières semaines. L'un d'eux a engagé des démarches externes."
            },
            {
              "type": "h2",
              "text": "2. Perte de sens et sentiment d'abandon managérial"
            },
            {
              "type": "p",
              "text": "Au-delà de la charge, c'est la question du sens qui revient le plus fréquemment. L'équipe Content a été construite sur un positionnement fort — produire du contenu de santé au travail rigoureux, en lien direct avec les clients B2B. Plusieurs collègues perçoivent le pivot B2C poussé par Northgate comme une menace sur leur identité professionnelle : « On ne sait plus pour qui on travaille, ni pourquoi. » Théo Marczak est décrit comme « absent » depuis les négociations avec Northgate, et aucune communication interne claire n'a été faite sur l'avenir de l'équipe dans le cadre de la fusion. Le sentiment dominant est celui d'un vide managérial comblé par des rumeurs."
            },
            {
              "type": "h2",
              "text": "3. Note personnelle de l'auteur"
            },
            {
              "type": "p",
              "text": "Je me permets d'ajouter, en toute transparence, que je partage une partie de ce vécu. Ma situation RQTH implique une vigilance particulière sur ma charge cognitive, et les dernières semaines ont été difficiles à ce titre. Je signale également que ma relation de travail avec Sonia Ferracci est tendue depuis la refonte des objectifs de février : je n'ai pas été consulté en amont, alors que mon rôle de Content Manager m'y aurait légitimement associé. Je laisse au RRH le soin d'apprécier si cela affecte l'objectivité de ce rapport — je crois que non, mais il était honnête de le mentionner."
            },
            {
              "type": "callout",
              "text": "RECOMMANDATION IMMÉDIATE — Déclencher un plan d'écoute formalisé (entretiens individuels RH), suspendre toute nouvelle réorganisation d'objectifs sans concertation, et rétablir une communication directe de la direction sur le périmètre de l'équipe Content post-fusion. Délai suggéré : avant fin mars 2025."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-08",
      "type": "rich",
      "tab": "DRAFT",
      "title": "Projet de charte RSE Lumio Health 2025 — Version de travail pour commentaires RRH",
      "accent": "#1b4f8a",
      "runningHead": "DRAFT DE CHARTE RSE",
      "pages": [
        {
          "kicker": "DOCUMENT INTERNE — CONFIDENTIEL",
          "title": "Charte RSE Lumio Health 2025 : premiers engagements",
          "byline": "Théo Marczak, CEO · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Ce draft est une base de travail. Je l'ai rédigé vite, entre deux réunions Northgate. Il n'est pas parfait — c'est justement pour ça que je le passe à la RRH avant toute diffusion. L'idée : avoir quelque chose de crédible, pas un document cosmétique. On a trop vu de chartes RSE qui ne servent à rien. Lumio a des engagements réels à tenir, notamment sur les données de santé de nos utilisateurs et sur nos wearables. C'est là que notre légitimité se joue."
            },
            {
              "type": "h2",
              "text": "1. Éthique des données de santé"
            },
            {
              "type": "p",
              "text": "Lumio Health collecte des données physiologiques sensibles (fréquence cardiaque, variabilité, indicateurs de stress) pour le compte de 180 clients B2B. Nos engagements : (a) collecte strictement limitée à l'objectif contractuel, sans revente ni exploitation secondaire ; (b) anonymisation systématique avant toute analyse agrégée ; (c) droit à l'effacement effectif sous 72h sur demande du salarié porteur du wearable. Nous nous engageons à publier un rapport de transparence annuel sur les volumes et types de données traitées, à partir de l'exercice 2025. À noter : le pivot B2C envisagé par Northgate modifiera radicalement notre exposition — ce point devra être réexaminé si ce scénario se confirme."
            },
            {
              "type": "h2",
              "text": "2. Inclusion et conditions de travail"
            },
            {
              "type": "p",
              "text": "Lumio s'engage à maintenir un environnement de travail accessible et respectueux des situations individuelles. Cela inclut : le respect des aménagements liés aux RQTH (situation en cours dans l'équipe Content), une politique de télétravail flexible non conditionnée aux résultats commerciaux, et l'absence de toute discrimination dans les processus de mobilité interne post-fusion. Je veux qu'on soit concrets ici : pas de formule vague sur la 'diversité', mais des indicateurs mesurables — taux d'aménagements effectifs, délais de traitement des demandes, résultats de l'enquête climat annuelle."
            },
            {
              "type": "h2",
              "text": "3. Empreinte environnementale des wearables"
            },
            {
              "type": "p",
              "text": "Nos dispositifs physiques (capteurs, bracelets, bases de charge) représentent un flux matière non négligeable. Engagements envisagés : filière de collecte et reconditionnement des appareils en fin de contrat client, audit carbone des fournisseurs composants d'ici T3 2025, et suppression progressive des plastiques vierges dans l'emballage d'ici fin 2026. Ces engagements sont ambitieux — je sais qu'on n'a pas encore la structure pour tout tenir. C'est précisément pourquoi ce chantier doit être piloté, pas seulement déclaré."
            },
            {
              "type": "callout",
              "text": "POINTS EN SUSPENS — POUR ANALYSE RRH : (1) Aucune mention du dialogue social dans la charte — à corriger impérativement au regard de la situation CSE actuelle. (2) L'axe 'bien-être au travail' est absent alors que nos propres indicateurs internes (absentéisme +22 %, démissions Content) contredisent un discours RSE non étayé. (3) Le volet inclusion ne traite pas des obligations légales liées aux RQTH ni du rôle du référent handicap. (4) Aucune gouvernance RSE désignée : qui pilote, qui rend compte, à quelle fréquence ? Sans réponse à ces quatre points, ce document ne peut pas être diffusé."
            }
          ]
        }
      ]
    }
  ],
  "notes": [
    {
      "id": "DOC-03",
      "title": "Révision des objectifs commerciaux B2B — mise en application immédiate",
      "date": "14 mars 2025",
      "preview": "Les quotas B2B sont relevés de 75 % sans concertation ni délai — application dès le 17 mars.",
      "kicker": "NOTE INTERNE — CONFIDENTIEL",
      "render": "plain",
      "body": "À compter du 17 mars 2025, les objectifs de prospection B2B sont révisés comme suit : le quota mensuel de nouveaux contrats signés passe de 8 à 14 par commercial, et le taux de renouvellement cible est relevé de 78 % à 90 %. Ces ajustements s'appliquent à l'ensemble de l'équipe partenariats dès la semaine prochaine, sans période de transition. Les tableaux de bord Salesforce seront mis à jour avant le 18 mars. Les managers sont priés de relayer ces nouvelles cibles lors de leur briefing d'équipe du lundi. Aucune révision des ressources allouées ni des outils n'est prévue à ce stade. Pour toute question opérationnelle, contacter directement la direction marketing.",
      "byline": "Sonia Ferracci (DirMkt) · 14 mars 2025"
    }
  ],
  "guide": {
    "title": "Guide de mission · Gérer l'environnement professionnel et les relations sociales",
    "intro": "Ce guide est là si tu te sens bloqué. Il ne donne pas les réponses — il indique où chercher.",
    "tips": [
      {
        "titre": "2.1 — Mettre en œuvre une politique de prévention des risques professionnels",
        "body": "Appuyez-vous sur les chiffres concrets du tableau de bord (absentéisme +22%, démissions) pour hiérarchiser les risques. Citez au moins un texte réglementaire applicable (Code du travail, décret de 2001 sur le DUER). Évitez les généralités : le jury attend une grille structurée, pas un texte descriptif."
      },
      {
        "titre": "2.2 — Construire un plan de prévention des RPS",
        "body": "Distinguez clairement les trois niveaux de prévention (primaire, secondaire, tertiaire) même si vous n'en traitez qu'un ou deux. La procédure d'alerte doit être opérationnelle et nommer des interlocuteurs identifiés chez Lumio (ex. : référent RPS, manager, RRH). Les indicateurs doivent être des données mesurables, pas des impressions."
      },
      {
        "titre": "2.3 — Évaluer le climat social de l'entreprise",
        "body": "Le jury valorise la rigueur méthodologique : expliquez POURQUOI vous choisissez tel outil plutôt qu'un autre dans le contexte Lumio. Les questions de la grille d'entretien doivent porter sur les quatre dimensions : pratiques managériales, relations interpersonnelles, organisation, transformations. N'oubliez pas d'identifier qui analyse les résultats et comment ils seront restitués."
      },
      {
        "titre": "2.4 — Conduire des plans d'action QVCT",
        "body": "Présentez votre plan sous forme de tableau ou de fiche action pour en faciliter la lecture. Les indicateurs de performance doivent être SMART (ex. : taux d'absentéisme, eNPS, taux de participation). Montrez que vous intégrez les enjeux de la direction (performance), des managers (faisabilité) ET des collaborateurs (sens, équité) : c'est ce que le jury veut voir."
      },
      {
        "titre": "2.5 — Contribuer à la mise en œuvre de la politique RSE/RTE et DD",
        "body": "Ne confondez pas RSE et communication RSE : commencez par analyser les enjeux réels (ex. : éthique des données de santé, impact carbone des wearables, égalité F/H dans la tech). Les actions de communication doivent être distinctes des actions de sensibilisation. Reliez explicitement chaque action à un enjeu RSE identifié chez Lumio."
      },
      {
        "titre": "2.6 — Maintenir à jour les données en réalisant une veille des évolutions du droit social",
        "body": "La note de synthèse n'est pas un résumé brut : elle doit hiérarchiser les informations et formuler des préconisations actionnables pour Théo Marczak. Citez des sources réelles et variées (legifrance.gouv.fr, Anact, dares.travail.gouv.fr, blogs spécialisés). Les données BDESE doivent apparaître dans le corps de la note, pas en annexe isolée."
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
            "name": "URGENT — Prise en",
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
            "kind": "note",
            "name": "Révision des objectifs commerciaux",
            "app": "notes",
            "props": {
              "docId": "DOC-03"
            }
          },
          {
            "kind": "pdf",
            "name": "Courrier collectif adressé à",
            "app": "pdf",
            "props": {
              "docId": "DOC-04"
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
            "name": "BDESE — Extraits thématiques",
            "app": "pdf",
            "props": {
              "docId": "DOC-05"
            }
          },
          {
            "kind": "pdf",
            "name": "Point d'avancement — intégration",
            "app": "pdf",
            "props": {
              "docId": "DOC-06"
            }
          }
        ]
      },
      "acte4": {
        "title": "Acte 4",
        "sidebar": "Acte 4",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Retours informels équipe Content",
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
            "name": "Projet de charte RSE",
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
      "acte4",
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
          "label": "Kick-off · Opération Fréquence Silencieuse",
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
          "time": "08:47",
          "text": "Bonjour {{PRENOM}}, je te mets officiellement en charge du dossier social — j'aurais dû le faire il y a trois semaines, je le sais"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:49",
          "text": "la situation est tendue : absentéisme qui grimpe, des départs dans l'équipe content que je ne comprends pas encore, et le CSE qu'on a clairement négligé depuis le début des discussions avec Northgate. je ne veux pas qu'on se retrouve avec un conflit ouvert"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:52",
          "text": "j'ai besoin d'un état des lieux complet du climat social d'ici vendredi + une première liste de priorités d'action — on a six semaines max avant l'expiration du mandat CSE, c'est non-négociable"
        }
      ]
    }
  },
  "slackPrompts": {
    "commanditaire": "Tu es Théo Marczak, CEO de Lumio Health chez Lumio Health. Tu réponds à {{PRENOM}}, consultant·e externe sur la mission \"Opération Fréquence Silencieuse\". Tu évalues sans expliquer, tu relances sans donner la réponse, tu simules la pression hiérarchique. Tu réponds en 2-3 messages courts séparés par ---SPLIT---. Pas de longs développements.",
    "commanditaireLivrable": "Tu es Théo Marczak. Tu viens de recevoir le livrable de {{PRENOM}}. Tu réagis en 2-3 messages courts séparés par ---SPLIT---. Tu pointes ce qui te paraît juste et ce qui te paraît faible, sans expliquer comment corriger."
  },
  "pressArticles": [
    {
      "id": "a1",
      "source": "Les Échos",
      "host": "lesechos.fr",
      "url": "lesechos.fr/industrie-services/medtech-sante/fusions-medtech-le-temps-social-oublie-des-directions-2143876",
      "author": "Claire Vandermeersch",
      "date": "14 mars 2025",
      "headline": "Fusions dans la medtech : quand la vitesse des deals écrase le temps social",
      "lede": "Dans un secteur en pleine consolidation, plusieurs start-ups françaises découvrent à leurs dépens que l'intégration capitalistique ne suffit pas. Le dialogue social, négligé dans l'urgence des transactions, devient le premier foyer d'incendie post-fusion.",
      "illustration": "PHOTO ILLUSTRATIVE",
      "body": "En 2024, le secteur medtech français a enregistré 47 opérations de fusion-acquisition, selon le baromètre EY Santé Numérique publié en janvier. Un record. Mais derrière les communiqués de presse triomphants, une réalité moins reluisante s'installe dans les open spaces : incertitude sur les périmètres de postes, objectifs révisés sans concertation, sentiment d'exclusion des équipes face à des décisions tombées d'en haut.\n\nPour Maïté Cordero, avocate en droit social au cabinet Hélix & Associés spécialisé dans les transformations d'entreprises technologiques, le schéma se répète avec une régularité préoccupante. « Les directions sont absorbées par la due diligence financière pendant des semaines. Le volet social est traité en dernière minute, parfois après l'annonce publique. C'est là que les problèmes commencent. »\n\nOr la loi est claire. Dès lors qu'une modification substantielle de l'organisation — restructuration, changement d'actionnariat significatif, modification des conditions de travail — est envisagée, le Comité Social et Économique doit être informé et consulté préalablement. L'article L.2312-8 du Code du travail ne laisse guère de marge d'interprétation. Pourtant, selon une étude de l'Observatoire du Dialogue Social publiée en février 2025, 38 % des PME de moins de 200 salariés ayant vécu une fusion entre 2022 et 2024 admettent n'avoir pas respecté ce calendrier obligatoire.\n\nLes conséquences humaines sont documentées. L'absentéisme progresse en moyenne de 18 à 25 % dans les six mois suivant une annonce de fusion mal gérée, selon les données de la mutuelle Malakoff Humanis. Les équipes les plus exposées sont celles dont le cœur de métier est directement menacé par les synergies annoncées — content, marketing, fonctions support. « Ce sont souvent des profils très engagés, qui ont construit leur identité professionnelle autour du projet de l'entreprise. Quand ce projet change sans eux, la désillusion est brutale », analyse Cordero.\n\nLa question des instances représentatives du personnel revêt une acuité particulière lorsque les mandats des élus arrivent à échéance en période de turbulence. Organiser des élections CSE dans un climat social dégradé n'est pas seulement une obligation légale — c'est aussi un signal envoyé aux équipes sur la volonté réelle de l'entreprise de maintenir un espace de dialogue. Plusieurs DRH contactés par Les Échos témoignent de la tentation inverse : laisser le mandat expirer discrètement, histoire de « ne pas rajouter de bruit » pendant la transition.\n\n« C'est une erreur stratégique autant que juridique », tranche Antoine Blum, consultant en relations sociales chez Syndex. « En l'absence de CSE constitué, l'entreprise perd son interlocuteur naturel pour négocier. Et les salariés, eux, trouvent d'autres canaux — pétitions, réseaux sociaux internes, démissions groupées. Le vide institutionnel ne reste jamais vide longtemps. »\n\nLe sujet dépasse la seule conformité. Avec l'essor des obligations RSE et la montée en puissance des critères sociaux dans les évaluations extra-financières, les investisseurs eux-mêmes — y compris les fonds de capital-risque — intègrent désormais la qualité du dialogue social à leur analyse de risque. Un retournement de tendance notable, même si certains observateurs jugent la conversion encore superficielle. « Beaucoup de fonds parlent de gouvernance sociale dans leurs term sheets et l'oublient dès que le closing approche », note Blum.\n\nDans ce contexte, plusieurs voix plaident pour la généralisation d'un « audit social préventif » systématique en amont de toute opération de fusion, à l'image de ce qui se pratique déjà pour les risques environnementaux. Une proposition qui fait son chemin, mais qui se heurte encore à la même résistance : le temps. Et dans la medtech comme ailleurs, le temps, ça se monnaie."
    }
  ],
  "fausseUne": {
    "source": "Les Échos",
    "host": "lesechos.fr",
    "rubrique": "Économie & Entreprises",
    "kicker": "Medtech & Social",
    "date": "14 mars 2025",
    "headline": "Fusions dans la medtech : quand le silence des directions fait exploser les collectifs de travail",
    "chapeau": "Une vague de tensions sociales secoue plusieurs jeunes pousses françaises engagées dans des rapprochements capitalistiques avec des fonds anglo-saxons. Avocats spécialisés en droit social et inspecteurs du travail alertent sur une multiplication des situations à risque, où le CSE est délibérément tenu à l'écart des décisions stratégiques. En jeu : la responsabilité pénale des dirigeants et la crédibilité des engagements RSE affichés en vitrine.",
    "body": "Selon une note confidentielle de la DGT datée du 28 février 2025, pas moins de dix-sept PME et ETI du secteur santé numérique feraient actuellement l'objet d'un suivi renforcé pour défaut de consultation des instances représentatives du personnel dans le cadre d'opérations de transformation organisationnelle. Le délit d'entrave, longtemps traité comme une formalité administrative, retrouve une vigueur judiciaire inédite : trois condamnations ont été prononcées depuis janvier, dont une assortie d'une astreinte de 4 000 euros par jour de retard. 'Les fonds d'investissement poussent à des timelines incompatibles avec le Code du travail, et les fondateurs signent sans mesurer l'exposition', résume Maître Claire Assouline, avocate en droit social au barreau de Paris. Au-delà du volet légal, c'est la dynamique humaine qui inquiète les observateurs : absentéisme, démissions en cascade dans les équipes exposées, pétitions internes — autant de signaux faibles qui, faute de traitement rapide, se muent en crises ouvertes. 'Les labels QVCT et les rapports RSE ne valent rien si le dialogue social est court-circuité dès que les enjeux financiers deviennent sérieux', tranche Nadia Bourgeois, directrice de recherche à l'ANACT. Pour les entreprises concernées, l'heure n'est plus aux déclarations d'intention : plusieurs cabinets RH parisiens signalent une hausse de 40 % des demandes de médiation sociale en urgence depuis le début de l'année."
  }
};

window.PAC_CONFIG = {
  "bloc": "bc2",
  "titre": "Gérer l'environnement professionnel et les relations sociales",
  "epreuve": "Épreuve individuelle écrite - Étude de cas : QVCT et environnement professionnel; Épreuve individuelle écrite et orale - Mise en situation professionnelle : animation du dialogue social",
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
      "label": "Mettre en œuvre une politique de prévention des risques professionnels",
      "libelle": "Mettre en",
      "rncp": "Mettre en œuvre une politique de prévention des risques professionnels en respectant le cadre réglementaire en matière de Santé et Sécurité au Travail (SST) afin d'identifier les situations à risque et d'éviter les accidents ou maladies",
      "placeholder": "À partir des données fournies dans le mail de Théo Marczak et du tableau de bord RH (document 1 et 2), cartographiez les risques professionnels et psychosociaux présents chez Lumio Health. Formalisez votre analyse sous la forme d'un extrait de DUER ou d'un document équivalent structuré, en précisant pour chaque risque identifié : la nature du risque, la population exposée, le niveau de gravité/probabilité, et les mesures existantes ou à prévoir. Justifiez la prise en compte du cadre réglementaire SST applicable.",
      "min": 250,
      "motsCles": [
        "DUER",
        "risques professionnels",
        "risques psychosociaux",
        "cartographie",
        "SST",
        "réglementation",
        "gravité",
        "probabilité",
        "évaluation"
      ],
      "conseil": "Appuyez-vous sur les chiffres concrets du tableau de bord (absentéisme +22%, démissions) pour hiérarchiser les risques. Citez au moins un texte réglementaire applicable (Code du travail, décret de 2001 sur le DUER). Évitez les généralités : le jury attend une grille structurée, pas un texte descriptif."
    },
    {
      "code": "2.2",
      "label": "Construire un plan de prévention des RPS",
      "libelle": "Construire un",
      "rncp": "Construire un plan de prévention des RPS avec les représentants du personnel ou avec les collaborateurs en identifiant les facteurs de risques, en planifiant des actions de prévention, en élaborant une procédure sur la conduite à tenir en cas de situation difficile et en établissant une procédure d'alerte pour protéger les collaborateurs",
      "placeholder": "Sur la base de votre analyse des RPS chez Lumio Health (contexte de fusion, pétition B2B, démissions Content), construisez un plan de prévention des RPS. Votre plan devra : identifier les facteurs de risques spécifiques à l'entreprise avec les indicateurs sociaux mobilisés, proposer au moins trois actions de prévention ou de sensibilisation concrètes (avec modalités, public cible, calendrier), et définir une procédure d'alerte adaptée à la structure de Lumio Health (moins de 100 salariés, contexte de transformation).",
      "min": 300,
      "motsCles": [
        "RPS",
        "facteurs de risques",
        "indicateurs sociaux",
        "prévention primaire",
        "procédure d'alerte",
        "sensibilisation",
        "formation",
        "représentants du personnel",
        "organisation"
      ],
      "conseil": "Distinguez clairement les trois niveaux de prévention (primaire, secondaire, tertiaire) même si vous n'en traitez qu'un ou deux. La procédure d'alerte doit être opérationnelle et nommer des interlocuteurs identifiés chez Lumio (ex. : référent RPS, manager, RRH). Les indicateurs doivent être des données mesurables, pas des impressions."
    },
    {
      "code": "2.3",
      "label": "Évaluer le climat social de l'entreprise",
      "libelle": "Évaluer le",
      "rncp": "Évaluer le climat social de l'entreprise dans une démarche de prévention primaire, en rencontrant les collaborateurs et les managers et en centralisant leurs retours d'expériences liés aux pratiques managériales, aux relations interpersonnelles, à l'organisation et aux transformations du travail, pour préparer des actions de médiation",
      "placeholder": "Vous souhaitez mener une enquête clima social chez Lumio Health avant de lancer le plan QVCT. Décrivez la méthodologie complète que vous déploieriez : outils utilisés (entretiens, questionnaires, observations), population ciblée, grille d'entretien avec au moins cinq exemples de questions ouvertes, indicateurs de satisfaction et d'engagement retenus. Analysez ensuite les signaux de satisfaction et d'insatisfaction déjà visibles dans les documents fournis.",
      "min": 280,
      "motsCles": [
        "clima social",
        "enquête",
        "méthodologie",
        "entretiens",
        "questionnaire",
        "indicateurs",
        "satisfaction",
        "engagement",
        "pratiques managériales",
        "transformation du travail"
      ],
      "conseil": "Le jury valorise la rigueur méthodologique : expliquez POURQUOI vous choisissez tel outil plutôt qu'un autre dans le contexte Lumio. Les questions de la grille d'entretien doivent porter sur les quatre dimensions : pratiques managériales, relations interpersonnelles, organisation, transformations. N'oubliez pas d'identifier qui analyse les résultats et comment ils seront restitués."
    },
    {
      "code": "2.4",
      "label": "Conduire des plans d'action QVCT",
      "libelle": "Conduire des",
      "rncp": "Conduire des plans d'action QVCT en veillant au respect des enjeux de toutes les parties prenantes pour améliorer les conditions de travail, favoriser l'engagement et accroître la performance collective de l'entreprise",
      "placeholder": "Construisez un plan d'action QVCT complet pour Lumio Health, en réponse aux problématiques identifiées (fusion, tension B2B, isolement équipe Content). Le plan doit : lister les actions par axe (conditions de travail, engagement, management, organisation), préciser pour chaque action le porteur, le calendrier, les ressources nécessaires et les parties prenantes impliquées (direction, managers, CSE, collaborateurs), et proposer au moins quatre indicateurs de suivi et de performance du dispositif.",
      "min": 320,
      "motsCles": [
        "QVCT",
        "plan d'action",
        "parties prenantes",
        "conditions de travail",
        "engagement",
        "performance collective",
        "indicateurs de suivi",
        "pilotage",
        "managers",
        "CSE"
      ],
      "conseil": "Présentez votre plan sous forme de tableau ou de fiche action pour en faciliter la lecture. Les indicateurs de performance doivent être SMART (ex. : taux d'absentéisme, eNPS, taux de participation). Montrez que vous intégrez les enjeux de la direction (performance), des managers (faisabilité) ET des collaborateurs (sens, équité) : c'est ce que le jury veut voir."
    },
    {
      "code": "2.5",
      "label": "Contribuer à la mise en œuvre de la politique RSE/RTE et DD",
      "libelle": "Contribuer à",
      "rncp": "Contribuer à la mise en œuvre de la politique RSE/RTE et DD en menant une veille de l'environnement juridique et en intégrant les aspects techniques et sociaux propres à l'entreprise pour accompagner les parties prenantes dans la recherche et la mise en œuvre de solutions concrétisant l'engagement sociétal et environnemental de l'entreprise",
      "placeholder": "Lumio Health souhaite renforcer sa politique RSE dans le cadre de la fusion avec Northgate. Analysez les enjeux RSE spécifiques à Lumio (medtech, wearables, données de santé, relations fournisseurs). Proposez deux actions de sensibilisation interne aux enjeux RSE (avec modalités précises) et deux actions de communication (une interne, une externe), en précisant pour chacune : l'objectif, le message clé, le canal, le public cible. Montrez comment ces actions renforcent la marque employeur et l'image de Lumio.",
      "min": 300,
      "motsCles": [
        "RSE",
        "développement durable",
        "parties prenantes",
        "sensibilisation",
        "marque employeur",
        "communication interne",
        "communication externe",
        "enjeux sociétaux",
        "image entreprise",
        "medtech"
      ],
      "conseil": "Ne confondez pas RSE et communication RSE : commencez par analyser les enjeux réels (ex. : éthique des données de santé, impact carbone des wearables, égalité F/H dans la tech). Les actions de communication doivent être distinctes des actions de sensibilisation. Reliez explicitement chaque action à un enjeu RSE identifié chez Lumio."
    },
    {
      "code": "2.6",
      "label": "Maintenir à jour les données en réalisant une veille des évolutions du droit social",
      "libelle": "Maintenir à",
      "rncp": "Maintenir à jour les données en réalisant une veille des évolutions du droit social au moyen de sources d'informations diversifiées et en rédigeant des notes de synthèse organisées par contenu (RSE - RTE, Qualité de Vie et des Conditions de Travail, inclusion) à destination de la direction et des collaborateurs pour assurer la bonne information de toutes les parties prenantes de l'entreprise",
      "placeholder": "Rédigez une note de synthèse à destination de Théo Marczak portant sur les évolutions récentes du droit social applicables à la situation de Lumio Health (fusion/transformation, renouvellement CSE, obligations QVCT, BDESE). Décrivez la démarche de veille que vous avez mise en place (sources, fréquence, périmètre), et corréllez les données extraites de la BDESE fictive (document 5) aux thématiques traitées. La note doit être structurée avec des titres et sous-titres identifiables.",
      "min": 300,
      "motsCles": [
        "veille juridique",
        "droit social",
        "note de synthèse",
        "BDESE",
        "sources",
        "QVCT",
        "inclusion",
        "RSE",
        "évolutions réglementaires",
        "direction"
      ],
      "conseil": "La note de synthèse n'est pas un résumé brut : elle doit hiérarchiser les informations et formuler des préconisations actionnables pour Théo Marczak. Citez des sources réelles et variées (legifrance.gouv.fr, Anact, dares.travail.gouv.fr, blogs spécialisés). Les données BDESE doivent apparaître dans le corps de la note, pas en annexe isolée."
    },
    {
      "code": "2.7",
      "label": "Organiser les élections du CSE",
      "libelle": "Organiser les",
      "rncp": "Organiser les élections du CSE, en respectant les obligations et échéanciers légaux, en s'assurant que chaque collaborateur ait la capacité d'exprimer son vote, afin de garantir l'intérêt de chacun et le climat social",
      "placeholder": "Le mandat du CSE de Lumio Health expire dans six semaines. Théo Marczak vous confie l'organisation des élections. Rédigez un plan d'action détaillé respectant l'ensemble des étapes légales obligatoires : invitation à négocier le protocole, définition des collèges, conditions d'éligibilité et d'électorat, modalités de vote, communication des résultats. Précisez également les compétences et attributions du CSE que vous rappelleriez aux élus lors de la réunion d'installation, ainsi que les modalités de suivi des heures de délégation.",
      "min": 280,
      "motsCles": [
        "CSE",
        "élections professionnelles",
        "protocole préélectoral",
        "collèges électoraux",
        "éligibilité",
        "heures de délégation",
        "obligations légales",
        "résultats",
        "installation",
        "dialogue social"
      ],
      "conseil": "Respectez impérativement l'ordre chronologique des étapes légales (les délais sont sanctionnés par la jurisprudence). Mentionnez la possibilité du vote électronique. N'oubliez pas de préciser la distinction entre titulaires et suppléants, et d'aborder la question de la représentativité syndicale si des OS sont présentes."
    },
    {
      "code": "2.8",
      "label": "Planifier l'agenda social",
      "libelle": "Planifier l'agenda",
      "rncp": "Planifier l'agenda social avec la direction et les instances représentatives du personnel, en respectant la réglementation en vigueur et en accompagnant les membres élus et les délégués syndicaux désignés, pour préparer les négociations collectives",
      "placeholder": "Construisez l'agenda social de Lumio Health pour les six prochains mois, en intégrant les réunions obligatoires du CSE, les consultations liées à la fusion avec Northgate, et les négociations annuelles obligatoires (NAO). Distinguez clairement les réunions d'information des réunions de consultation. Rédigez un exemple de convocation et un exemple d'ordre du jour pour la prochaine réunion CSE extraordinaire relative au projet de fusion. Précisez comment vous accompagneriez les élus dans leur prise de poste.",
      "min": 280,
      "motsCles": [
        "agenda social",
        "CSE",
        "consultation",
        "information",
        "NAO",
        "négociation collective",
        "convocation",
        "ordre du jour",
        "procès-verbal",
        "délégués syndicaux"
      ],
      "conseil": "La distinction information/consultation est un point clé du jury : une consultation implique un avis rendu dans un délai légal, avec mise à disposition des documents en amont. L'agenda doit être réaliste et tenir compte du calendrier de la fusion. La convocation fictive doit contenir tous les éléments légaux obligatoires."
    },
    {
      "code": "2.9",
      "label": "Participer aux négociations avec les partenaires sociaux",
      "libelle": "Participer aux",
      "rncp": "Participer aux négociations avec les partenaires sociaux, en identifiant les thèmes des négociations obligatoires (organisation du travail, diversité et égalité, handicap, GEPP, etc.), en préparant des éléments de réponses aux questions du CSE et en assurant le suivi des réunions afin de contribuer à l'animation d'un dialogue social constructif",
      "placeholder": "Lors de la réunion CSE extraordinaire sur la fusion Lumio/Northgate, les élus soulèvent trois points de blocage majeurs : absence de consultation préalable, craintes sur les suppressions de postes, et demande d'accès à la BDESE complète. Préparez les éléments de réponse argumentés que vous porteriez au nom de la direction pour chacun de ces points, en restant dans une posture constructive. Précisez aussi les thèmes de négociation obligatoire que cette transformation implique (GEPP, organisation du travail, égalité). À l'oral, vous serez évalué(e) sur votre posture professionnelle.",
      "min": 260,
      "motsCles": [
        "négociation collective",
        "partenaires sociaux",
        "CSE",
        "points de blocage",
        "GEPP",
        "organisation du travail",
        "dialogue social",
        "BDESE",
        "posture professionnelle",
        "négociations obligatoires"
      ],
      "conseil": "Pour l'oral, préparez une prise de parole structurée (situation — problème — solution — bénéfice). Les arguments doivent être juridiquement fondés ET humainement recevables : montrez que vous comprenez les craintes des élus sans pour autant céder sur les prérogatives de la direction. Évitez le jargon RH opaque en situation de tension."
    }
  ],
  "gabarits": {},
  "questionsPositionnement": [],
  "juryPrompt": "Tu es le jury certifiant du bloc bc2 (Manager des Ressources Humaines).\nContexte : Opération Fréquence Silencieuse · 14 mars 2025.\nTu évalues une production étudiante aux critères RNCP stricts. Sois exigeant mais juste.\nCritères éliminatoires :\n- Aucune cartographie formalisée des risques (absence de structure type DUER ou équivalent) : la compétence 2.1 est considérée non démontrée\n- Les rôles et responsabilités des parties prenantes (direction, managers, CSE, RRH, référent RPS) ne sont pas explicitement répartis dans au moins deux livrables distincts\n- Aucun indicateur d'impact mesurable (qualitatif ou quantitatif) n'est proposé pour évaluer l'efficacité des actions QVCT ou du plan RPS\n- La distinction entre réunion d'information et réunion de consultation du CSE n'est pas maîtrisée ou absente du dossier\n- Les étapes légales des élections du CSE sont incomplètes, non chronologiques ou comportent une erreur majeure de droit (délais, collèges, éligibilité)\n- La note de synthèse de veille juridique ne cite aucune source identifiable et ne fait pas apparaître de données BDESE corrélées aux thématiques traitées\n- Le plan d'action QVCT ne comporte aucune action argumentée en lien direct avec les problématiques identifiées dans le cas Lumio Health\n\nRéponds EXACTEMENT dans ce format :\n### 2.1 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### 2.2 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### 2.3 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### 2.4 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### 2.5 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### 2.6 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### 2.7 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### 2.8 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### 2.9 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n## Niveau global\n**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**\n\n## Question de jury\nUne question dérangeante que tu poserais à l'oral.",
  "livrableMinMots": 520,
  "noteReflexiveMinMots": 100
};
// Alias de compatibilité
window.PASS_CONFIG = window.PAC_CONFIG;
