// questions.js - Multiple choice questions for railway training

export const multipleChoiceQuestions = [
    {
      id: 1,
      question: "Was passt nicht? Warum wird rangiert?",
      options: [
        "um Züge zu bilden",
        "um Züge in der Anschlussstelle abzustellen",
        "zum Aussetzen schadhafter Wagen",
        "um Fahrzeuge der Werkstatt zuzuführen"
      ],
      correctAnswer: "um Züge in der Anschlussstelle abzustellen",
      explanation: "Rangieren wird zum Bilden von Zügen, zum Aussetzen schadhafter Wagen und zum Zuführen von Fahrzeugen zur Werkstatt durchgeführt, nicht jedoch zum Abstellen von Zügen in der Anschlussstelle.",
      category: "Rangierarbeiten"
    },
    {
      id: 2,
      question: "Welche der folgenden aufgeführten Tätigkeiten müssen Sie beim Kuppeln zuerst ausführen?",
      options: [
        "HL und HBL verbinden",
        "Absperrhähne öffnen",
        "Zugsammelschiene kuppeln",
        "Schraubenkupplung einhängen"
      ],
      correctAnswer: "Schraubenkupplung einhängen",
      explanation: "Beim Kuppeln muss zuerst die Schraubenkupplung eingehängt werden, bevor andere Verbindungen hergestellt werden können.",
      category: "Kuppelvorgang"
    },
    {
      id: 3,
      question: "Wer ist grundsätzlich für die Zugvorbereitung verantwortlich?",
      options: [
        "Der Fahrdienstleiter",
        "Der Lokrangierführer",
        "Der Wagenmeister",
        "Der Zugführer"
      ],
      correctAnswer: "Der Zugführer",
      explanation: "Der Zugführer trägt die grundsätzliche Verantwortung für die Vorbereitung des Zuges vor Abfahrt.",
      category: "Verantwortlichkeiten"
    },
    {
      id: 4,
      question: "In welcher Entfernung zu einem stehenden Fahrzeug darf ein Gleis überquert werden?",
      options: [
        "1,5 m",
        "2,5 m",
        "2,0 m",
        "5,0 m"
      ],
      correctAnswer: "2,0 m",
      explanation: "Die Mindestentfernung zum Überqueren eines Gleises vor einem stehenden Fahrzeug beträgt 2,0 Meter.",
      category: "Sicherheitsvorschriften"
    },
    {
      id: 5,
      question: "Welches der folgenden Rangiersignale wird nicht mit der Hand oder bei Nacht mit einer Lampe gegeben?",
      options: [
        "Wegfahren",
        "Zurückziehen",
        "Herkommen",
        "Aufdrücken"
      ],
      correctAnswer: "Zurückziehen",
      explanation: "Das Signal 'Zurückziehen' wird nicht als Handsignal oder Lichtsignal bei Nacht gegeben.",
      category: "Signale"
    },
    {
      id: 6,
      question: "Was ist nicht Teil eines Bahnhofs?",
      options: [
        "mindestens eine Weiche",
        "ein Haltepunkt",
        "ein durchgehendes Hauptgleis",
        "ein Bahnsteig"
      ],
      correctAnswer: "ein Haltepunkt",
      explanation: "Ein Haltepunkt ist keine Betriebsstelle, sondern lediglich ein Ort zum Ein- und Aussteigen von Reisenden ohne Weichen oder betriebliche Funktionen.",
      category: "Bahninfrastruktur"
    },
    {
      id: 7,
      question: "Warum ist ein Hemmschuh wichtig?",
      options: [
        "Als Ersatzschuh für Mitarbeiterinnen und Mitarbeiter",
        "Sie beteiligen Türstopper in miteinander verbundenen Büros",
        "Als Mediator in der Vermittlung bei Mitarbeiter-Konflikten",
        "Damit ein rollender Waggon abgebremst werden kann"
      ],
      correctAnswer: "Damit ein rollender Waggon abgebremst werden kann",
      explanation: "Der Hemmschuh ist ein wichtiges Sicherheitsmittel im Bahnbetrieb, um rollende Wagen abzubremsen und zu sichern.",
      category: "Sicherungseinrichtungen"
    },
    {
      id: 8,
      question: "Was ist die Regelspurweite?",
      options: [
        "1650 mm",
        "1435 mm",
        "1520 mm",
        "1150 mm"
      ],
      correctAnswer: "1435 mm",
      explanation: "Die Regelspurweite (Normalspur) beträgt 1435 mm und ist die am weitesten verbreitete Spurweite bei Eisenbahnen weltweit.",
      category: "Infrastruktur"
    },
    {
      id: 9,
      question: "Wenn es anfängt zu regnen, wird der Reibwert zwischen Rad und Schiene...",
      options: [
        "kleiner",
        "größer",
        "nicht verändert",
        "mal größer, mal kleiner"
      ],
      correctAnswer: "kleiner",
      explanation: "Durch Nässe wird der Reibwert zwischen Rad und Schiene verringert, was zu längeren Bremswegen führen kann.",
      category: "Betriebliche Bedingungen"
    },
    {
      id: 10,
      question: "Was ist Bahnbetrieb?",
      options: [
        "die Beratung von Kunden",
        "das Instandhalten von Fahrzeugen",
        "zum Bahnbetrieb gehört das Fahren von Zügen und das Rangieren",
        "das Erstellen von Dienst- und Einsatzplänen"
      ],
      correctAnswer: "zum Bahnbetrieb gehört das Fahren von Zügen und das Rangieren",
      explanation: "Der Bahnbetrieb umfasst primär das Fahren von Zügen und das Rangieren, also die eigentlichen Fahrvorgänge im Eisenbahnverkehr.",
      category: "Grundlagen"
    },
    {
      id: 11,
      question: "Welchen Abstand müssen Personen zu spannungsführenden Teilen der Oberleitung unbedingt einhalten?",
      options: [
        "2,5 m",
        "3,0 m",
        "1,5 m",
        "5,0 m"
      ],
      correctAnswer: "1,5 m",
      explanation: "Zu spannungsführenden Teilen der Oberleitung muss stets ein Mindestabstand von 1,5 m eingehalten werden, um elektrische Unfälle zu vermeiden.",
      category: "Sicherheitsvorschriften"
    },
    {
      id: 12,
      question: "Was passt nicht? Woraus bestehen Züge?",
      options: [
        "Aufzug",
        "nur Triebfahrzeuge",
        "Nebenfahrzeuge",
        "Triebfahrzeuge und Wagen"
      ],
      correctAnswer: "Aufzug",
      explanation: "Ein Aufzug (Lift) ist kein Bestandteil eines Zuges. Züge können aus Triebfahrzeugen, Nebenfahrzeugen sowie aus Kombinationen von Triebfahrzeugen und Wagen bestehen.",
      category: "Fahrzeugkunde"
    },
    {
      id: 13,
      question: "Welche Aussage über Vorsignale ist richtig?",
      options: [
        "Sie übermitteln die Zustimmung des Weichenwärters zur Rangierfahrt",
        "Sie signalisieren die Stellung der nächsten Weiche vor",
        "Sie signalisieren die Stellung des nächsten Hauptsignals vor",
        "Sie signalisieren die Stellung des nächsten Gleissperrsignals vor"
      ],
      correctAnswer: "Sie signalisieren die Stellung des nächsten Hauptsignals vor",
      explanation: "Vorsignale kündigen die Stellung des folgenden Hauptsignals an und ermöglichen dem Triebfahrzeugführer, rechtzeitig auf die entsprechende Signalstellung zu reagieren.",
      category: "Signale"
    },
    {
      id: 14,
      question: "Wie werden ungültige Signale gekennzeichnet?",
      options: [
        "durch ein weißes Kreuz mit schwarzem Rand oder sie sind verdeckt",
        "sie sind weggedreht",
        "durch ein Mastschild in Form eines mit der Spitze nach unten weisenden gelben Dreiecks",
        "durch ein weißes Licht"
      ],
      correctAnswer: "durch ein weißes Kreuz mit schwarzem Rand oder sie sind verdeckt",
      explanation: "Ungültige Signale werden entweder durch ein weißes Kreuz mit schwarzem Rand gekennzeichnet oder sie werden vollständig verdeckt.",
      category: "Signale"
    },
    {
      id: 15,
      question: "Welche Bedeutung hat bei KS-Signalen das zusätzliche rückstrahlende Mastschild in Form eines mit der Spitze nach unten weisenden gelben Dreiecks?",
      options: [
        "zur besseren Erkennbarkeit",
        "besitzt gleichzeitig Vorsignalfunktion",
        "als Nachtsignalzusatz des Hauptsignals",
        "im Anschluss befindet sich die Einfahrt in einen Bahnhof"
      ],
      correctAnswer: "besitzt gleichzeitig Vorsignalfunktion",
      explanation: "Das gelbe Dreieck mit der Spitze nach unten zeigt an, dass das KS-Signal gleichzeitig Vorsignalfunktion besitzt und somit die Stellung des nächsten Hauptsignals ankündigt.",
      category: "Signale"
    },
    {
      id: 16,
      question: "Welchem Zweck dient eine Betriebsbremsung?",
      options: [
        "Der Drosselung der Produktion eines Werkes in der Winterruhe",
        "Der Regulierung der Geschwindigkeit und dem Anhalten",
        "Die Belohnung erhöhter Produktivität durch Arbeitszeitabsenkung",
        "Zeit zum Nachdenken"
      ],
      correctAnswer: "Der Regulierung der Geschwindigkeit und dem Anhalten",
      explanation: "Die Betriebsbremsung dient zur planmäßigen Regulierung der Geschwindigkeit und zum normalen Anhalten des Zuges im regulären Betrieb.",
      category: "Bremssysteme"
    },
    {
      id: 17,
      question: "Was ist EBuLa?",
      options: [
        "Ein leckeres Gericht in der Betriebskantine",
        "Ein elektromechanisches Ventil",
        "Ein elektronischer Fahrplan für Lokführer",
        "Eine Sandstreueinrichtung für schlechte Schienen"
      ],
      correctAnswer: "Ein elektronischer Fahrplan für Lokführer",
      explanation: "EBuLa steht für 'Elektronischer Buchfahrplan und Langsamfahrstellen' und ist ein digitales System, das Lokführern alle notwendigen Fahrplaninformationen elektronisch zur Verfügung stellt.",
      category: "Betriebssysteme"
    },
    {
      id: 18,
      question: "Damit Fahrzeuge nicht mit Tunneln, Brücken oder Oberleitungsanlagen kollidieren, müssen Grenzmaße eingehalten werden.",
      options: [
        "Zugmaß",
        "Regellichtraum",
        "Mindestmaß",
        "Ladegrenze"
      ],
      correctAnswer: "Regellichtraum",
      explanation: "Der Regellichtraum definiert den Raum um das Gleis, der für die sichere Durchfahrt von Fahrzeugen freigehalten werden muss, um Kollisionen mit Infrastrukturelementen zu vermeiden.",
      category: "Infrastruktur"
    },
    {
      id: 19,
      question: "Was ist beim Ausfall der SiFa zu beachten?",
      options: [
        "Höchstgeschwindigkeit 80 km/h bis Tfz-Begleiter gestellt werden kann, BZ ist zu informieren",
        "sofort anhalten",
        "Höchstgeschwindigkeit 50 km/h...",
        "nur Meldung an die Betriebszentrale (BZ)"
      ],
      correctAnswer: "Höchstgeschwindigkeit 50 km/h...",
      explanation: "Beim Ausfall der Sicherheitsfahrschaltung (SiFa) darf nur noch mit maximal 50 km/h gefahren werden, und weitere Maßnahmen gemäß Vorschrift sind zu ergreifen.",
      category: "Sicherheitssysteme"
    },
    {
      id: 20,
      question: "Wie kann der Tf den Reibwert zwischen Rad und Schiene erhöhen?",
      options: [
        "bremsen",
        "beschleunigen",
        "sanden",
        "gar nicht"
      ],
      correctAnswer: "sanden",
      explanation: "Durch das Ausbringen von Sand auf die Schienen (Sanden) kann der Triebfahrzeugführer den Reibwert zwischen Rad und Schiene erhöhen, was besonders bei Nässe oder Laub auf den Schienen wichtig ist.",
      category: "Betriebstechnik"
    },
    {
      id: 21,
      question: "Welche ist keine Rangierart?",
      options: [
        "Abdrücken/Ablaufen",
        "Beidrücken",
        "Abstoßen",
        "Verschieben"
      ],
      correctAnswer: "Verschieben",
      explanation: "Verschieben ist keine definierte Rangierart. Im Rangierbetrieb werden Fahrzeuge abgedrückt/abgelaufen, beigedrückt oder abgestoßen.",
      category: "Rangierarbeiten"
    },
    {
      id: 22,
      question: "Welche der genannten Bahnanlagen ist keine Betriebsstelle?",
      options: [
        "Überleststelle",
        "Stellwerk",
        "Unterwerk",
        "Bahnübergang"
      ],
      correctAnswer: "Unterwerk",
      explanation: "Ein Unterwerk ist eine Anlage der Energieversorgung für elektrische Bahnen und keine Betriebsstelle im eigentlichen Sinne des Bahnbetriebs.",
      category: "Infrastruktur"
    },
    {
      id: 23,
      question: "Eine volle Bremsprobe ist in folgenden Fällen durchzuführen:",
      options: [
        "an einen unverändert gebliebenen Zug, der mehrere Tage wiederverwendet wird, einmal täglich",
        "an einem Zug, der von einer Mehrfachtraktion auf eine Einfachtraktion geschwächt wird",
        "an einen Zug, der von einer Einfachtraktion auf eine Mehrfachtraktion verstärkt wird",
        "an einem Zug, der 18 Stunden abgestellt war"
      ],
      correctAnswer: "an einen unverändert gebliebenen Zug, der mehrere Tage wiederverwendet wird, einmal täglich",
      explanation: "Eine volle Bremsprobe muss bei einem Zug, der mehrere Tage unverändert wiederverwendet wird, mindestens einmal täglich durchgeführt werden, um die Sicherheit zu gewährleisten.",
      category: "Bremssysteme"
    },
    {
      id: 24,
      question: "Welche Spannung führt die Oberleitung bei der Deutschen Bahn?",
      options: [
        "110 kV 50 Hz",
        "15 kV 16,7 Hz",
        "25 kV 60 Hz",
        "400 kV 16,7 Hz"
      ],
      correctAnswer: "15 kV 16,7 Hz",
      explanation: "Die Oberleitung der Deutschen Bahn führt eine Spannung von 15 kV mit einer Frequenz von 16,7 Hz (früher 16 2/3 Hz).",
      category: "Elektrotechnik"
    },
    {
      id: 25,
      question: "Welche Mitarbeiter gehören zum Zugpersonal?",
      options: [
        "Rangierer",
        "Örtliche Aufsicht",
        "Rangierbegleiter",
        "Triebfahrzeugbegleiter"
      ],
      correctAnswer: "Triebfahrzeugbegleiter",
      explanation: "Der Triebfahrzeugbegleiter ist Teil des Zugpersonals, während Rangierer, örtliche Aufsicht und Rangierbegleiter andere betriebliche Funktionen erfüllen.",
      category: "Personal"
    },
    {
      id: 26,
      question: "Der Triebfahrzeugführer muss vor Antritt der Fahrt im Besitz wovon sein?",
      options: [
        "Rail-in-Motion",
        "Befehl",
        "gültige La",
        "Lotse"
      ],
      correctAnswer: "gültige La",
      explanation: "Vor Antritt der Fahrt muss der Triebfahrzeugführer im Besitz der gültigen 'La' (Langsamfahrstellen) sein, die Informationen über temporäre Geschwindigkeitsbeschränkungen enthält.",
      category: "Betriebsvorschriften"
    },
    {
      id: 27,
      question: "Wo endet bei der Ausfahrt eines Zuges die am Ausfahrsignal durch Hp 2 angezeigte Geschwindigkeitsbeschränkung?",
      options: [
        "nach Vorbeifahrt mit Zugspitze am Signal",
        "hinter der letzten Weiche im Fahrweg",
        "es gibt keine Geschwindigkeitsbeschränkung",
        "mit der Vorbeifahrt der Spitze des Zuges am Signal"
      ],
      correctAnswer: "hinter der letzten Weiche im Fahrweg",
      explanation: "Die durch das Ausfahrsignal (Hp 2) angezeigte Geschwindigkeitsbeschränkung gilt bis hinter die letzte Weiche im Fahrweg des ausfahrenden Zuges.",
      category: "Signale"
    },
    {
      id: 28,
      question: "Was ist die Ril 301?",
      options: [
        "die Bekleidungsrichtlinie",
        "die Bremsvorschrift",
        "das Regelbuch für Mitarbeiter im Bahnbetrieb",
        "das Signalbuch"
      ],
      correctAnswer: "das Signalbuch",
      explanation: "Die Richtlinie 301 (Ril 301) ist das Signalbuch der Deutschen Bahn und enthält alle gültigen Signale und deren Bedeutung.",
      category: "Regelwerk"
    },
    {
      id: 29,
      question: "Was passt nicht? Nennen Sie die Arten von Fahrzeugbewegungen beim Rangieren!",
      options: [
        "Rangierfahrt",
        "Abdrücken/Ablaufen",
        "Beidrücken/Aufdrücken",
        "Einholen"
      ],
      correctAnswer: "Einholen",
      explanation: "Einholen ist keine definierte Fahrzeugbewegung beim Rangieren. Typische Rangierbewegungen sind Rangierfahrten, Abdrücken/Ablaufen und Beidrücken/Aufdrücken.",
      category: "Rangierarbeiten"
    },
    {
      id: 30,
      question: "Was ist nicht richtig? Welche Bedeutung haben die Ra-Signale?",
      options: [
        "Wegfahren",
        "Herkommen",
        "Aufrüsten",
        "Rangierhalt"
      ],
      correctAnswer: "Aufrüsten",
      explanation: "Aufrüsten ist kein definiertes Ra-Signal. Die gültigen Ra-Signale umfassen unter anderem 'Wegfahren', 'Herkommen' und 'Rangierhalt'.",
      category: "Signale"
    },
    {
      id: 31,
      question: "Was ist HBL?",
      options: [
        "eine Haupttriebfahrleitung",
        "eine Hauptluftleitung",
        "eine Bremsanzeigeeinrichtung",
        "eine Notbremsenüberbrückung"
      ],
      correctAnswer: "eine Hauptluftleitung",
      explanation: "HBL steht für Hauptluftleitung. Diese ist eine wesentliche Komponente des Bremssystems von Zügen und dient der Steuerung der Bremsen über den gesamten Zugverband.",
      category: "Bremssysteme"
    },
    {
      id: 32,
      question: "Was ist ein Gleisbogen?",
      options: [
        "eine Kurve im Schienenverkehr",
        "eine Bremskurve",
        "eine Signalmastkonstruktion über mehrere Gleis",
        "eine gleisverbindende Oberleitung"
      ],
      correctAnswer: "eine Kurve im Schienenverkehr",
      explanation: "Ein Gleisbogen ist eine Kurve im Schienenverkehr, also ein gekrümmter Abschnitt des Gleises.",
      category: "Infrastruktur"
    },
    {
      id: 33,
      question: "Was passt nicht? Was beinhaltet eine Rangiervereinbarung?",
      options: [
        "beteiligte Personen",
        "Ziel",
        "Zweck",
        "Besonderheiten"
      ],
      correctAnswer: "beteiligte Personen",
      explanation: "Eine Rangiervereinbarung beinhaltet typischerweise Ziel, Zweck und Besonderheiten des Rangiervorgangs, jedoch nicht notwendigerweise eine namentliche Auflistung der beteiligten Personen.",
      category: "Rangierarbeiten"
    },
    {
      id: 34,
      question: "Was gehört nicht zum Unterbau von Gleisanlagen?",
      options: [
        "Planum",
        "Untergrund",
        "Plankton",
        "Frostschutzschicht"
      ],
      correctAnswer: "Plankton",
      explanation: "Plankton ist ein Sammelbegriff für im Wasser schwebende Organismen und hat nichts mit dem Unterbau von Gleisanlagen zu tun. Zum Unterbau gehören das Planum, der Untergrund und die Frostschutzschicht.",
      category: "Infrastruktur"
    },
    {
      id: 35,
      question: "Wo stehen in der Regel die für das Gegengleis gültigen ortsfesten Signale auf der freien Strecke?",
      options: [
        "unmittelbar links vom Gleis oder über dem Gleis",
        "ein Gleis weiter links",
        "ein Gleis weiter rechts",
        "unmittelbar rechts vom Gleis oder über dem Gleis"
      ],
      correctAnswer: "unmittelbar links vom Gleis oder über dem Gleis",
      explanation: "Die für das Gegengleis gültigen ortsfesten Signale stehen in der Regel unmittelbar links vom Gleis oder über dem Gleis auf freier Strecke.",
      category: "Signale"
    },
    {
      id: 36,
      question: "Wer regelt die Durchführung von Zugfahrten?",
      options: [
        "Triebfahrzeugführer",
        "Rangierleiter",
        "Fahrdienstleiter",
        "Örtliche Aufsicht"
      ],
      correctAnswer: "Fahrdienstleiter",
      explanation: "Der Fahrdienstleiter regelt die Durchführung von Zugfahrten und ist für die sichere Abwicklung des Zugverkehrs verantwortlich.",
      category: "Verantwortlichkeiten"
    },
    {
      id: 37,
      question: "Was ist keine Zugmeldestelle?",
      options: [
        "Bahnhöfe",
        "Anschlussstellen",
        "Abzweigstellen",
        "Überleitstellen"
      ],
      correctAnswer: "Anschlussstellen",
      explanation: "Anschlussstellen sind keine Zugmeldestellen. Zugmeldestellen sind in der Regel Bahnhöfe, Abzweigstellen und Überleitstellen.",
      category: "Infrastruktur"
    },
    {
      id: 38,
      question: "Welche Art der Bremsung gehört nicht zur Eisenbahn?",
      options: [
        "Betriebsbremsung",
        "Vollbremsung",
        "Zwangsbremsung",
        "Witterungsbremsung"
      ],
      correctAnswer: "Witterungsbremsung",
      explanation: "Die 'Witterungsbremsung' ist kein Fachbegriff im Eisenbahnbetrieb. Bekannte Bremsarten sind Betriebsbremsung, Vollbremsung und Zwangsbremsung.",
      category: "Bremssysteme"
    },
    {
      id: 39,
      question: "Was stimmt nicht? Woraus besteht ein Gleis (Oberbau)?",
      options: [
        "Schienen",
        "Schwellen",
        "Planum",
        "Kleineisen"
      ],
      correctAnswer: "Planum",
      explanation: "Das Planum gehört zum Unterbau und nicht zum Oberbau eines Gleises. Der Oberbau besteht aus Schienen, Schwellen, Kleineisen (Befestigungsmittel) und Schotter.",
      category: "Infrastruktur"
    },
    {
      id: 40,
      question: "Wie kann Ihnen der Abfahrauftrag erteilt werden?",
      options: [
        "durch Hochhalten eines Armes",
        "durch Zeigen eines weißen Lichtes",
        "durch Zeigen eines grünen Lichtes",
        "durch Zeigen der orangefarbenen Zugbegleitermeldescheibe"
      ],
      correctAnswer: "durch Zeigen eines grünen Lichtes",
      explanation: "Der Abfahrauftrag kann durch Zeigen eines grünen Lichtes erteilt werden, was die Zustimmung zur Abfahrt signalisiert.",
      category: "Signale"
    },
    {
      id: 41,
      question: "Was bedeutet ein weißes Kennlicht an einem Lichtsignal an Stelle der sonst vorgesehenen Signalbilder?",
      options: [
        "das Lichtsignal ist zeitweise betrieblich abgeschaltet",
        "das Zusatzlicht bedeutet, dass ein Lichtvorsignal in einem um mehr als 5% verkürzten Bremsabstand steht",
        "Vorsignalwiederholer sind durch ein blinkendes Zusatzlicht gekennzeichnet",
        "das Zusatzlicht bedeutet, dass ein Lichtvorsignal in einem um mehr als 15% verkürzten Bremsabstand steht"
      ],
      correctAnswer: "das Lichtsignal ist zeitweise betrieblich abgeschaltet",
      explanation: "Ein weißes Kennlicht an einem Lichtsignal anstelle der regulären Signalbilder zeigt an, dass das Signal zeitweise betrieblich abgeschaltet ist.",
      category: "Signale"
    },
    {
      id: 42,
      question: "Welches ist kein Mastschild eines Lichthauptsignals?",
      options: [
        "weiß rot weiß",
        "gelbes Dreieck",
        "weiß gelb weiß gelb weiß",
        "Schleifleiste"
      ],
      correctAnswer: "Schleifleiste",
      explanation: "Eine Schleifleiste ist ein Bauteil an elektrischen Fahrzeugen zur Stromabnahme und kein Mastschild eines Lichthauptsignals.",
      category: "Signale"
    },
    {
      id: 43,
      question: "Welches ist kein Bauteil der Oberleitung?",
      options: [
        "Tragseil",
        "Auslegerrohr",
        "Fahrdraht",
        "Schleifleiste"
      ],
      correctAnswer: "Schleifleiste",
      explanation: "Die Schleifleiste ist ein Bauteil des Stromabnehmerpakets am Fahrzeug und gehört nicht zur Oberleitung. Zur Oberleitung gehören Tragseil, Auslegerrohr und Fahrdraht.",
      category: "Elektrotechnik"
    },
    {
      id: 44,
      question: "Welche Fahrzeuge gehören nicht zu den Regelfahrzeugen?",
      options: [
        "Triebzüge",
        "Lokomotiven",
        "Kleinwagen",
        "Steuerwagen"
      ],
      correctAnswer: "Kleinwagen",
    explanation: "Kleinwagen sind keine Regelfahrzeuge, sondern zählen zu den Nebenfahrzeugen. Triebzüge, Lokomotiven und Steuerwagen hingegen sind Regelfahrzeuge.",
    category: "Fahrzeugkunde"
  },
  {
    id: 45,
    question: "Welche Blickrichtung hat man im Gleisbereich?",
    options: [
      "möglichst in Blickrichtung zu erwartender Züge",
      "möglichst in Blickrichtung zum Fahrdienstleiter/Weichenwärter",
      "möglichst in Blickrichtung zum Bahnsteig",
      "möglichst in Blickrichtung zur Einfahrweiche"
    ],
    correctAnswer: "möglichst in Blickrichtung zu erwartender Züge",
    explanation: "Im Gleisbereich sollte man stets in Blickrichtung zu erwartender Züge schauen, um rechtzeitig auf herannahende Züge reagieren zu können und so die eigene Sicherheit zu gewährleisten.",
    category: "Sicherheitsvorschriften"
  },
  {
    id: 46,
    question: "Was ist nicht richtig? Welche persönliche Schutzausrüstung (PSA) verwenden Tf. bzw. Lrf.?",
    options: [
      "Warnweste",
      "Arbeitsschutzhelm oder Anstoßkappe",
      "Schutzhandschuhe",
      "Sportschuhe mit dunkler Sohle"
    ],
    correctAnswer: "Sportschuhe mit dunkler Sohle",
    explanation: "Sportschuhe mit dunkler Sohle gehören nicht zur persönlichen Schutzausrüstung von Triebfahrzeug- oder Lokrangierführern. Stattdessen sind Sicherheitsschuhe mit entsprechender Zertifizierung vorgeschrieben.",
    category: "Arbeitsschutz"
  },
  {
    id: 47,
    question: "Was passt nicht? Nennen Sie Bahnanlagen der freien Strecke.",
    options: [
      "Haltestellen / Haltepunkte",
      "Überleitstellen",
      "Abzweigstellen",
      "Ablaufberge"
    ],
    correctAnswer: "Ablaufberge",
    explanation: "Ablaufberge gehören nicht zu den Bahnanlagen der freien Strecke, sondern sind Teil von Rangierbahnhöfen. Haltestellen/Haltepunkte, Überleitstellen und Abzweigstellen können sich hingegen auf freier Strecke befinden.",
    category: "Infrastruktur"
  },
  {
    id: 48,
    question: "Wie hoch müssen Bremshundertstel mindestens sein?",
    options: [
      "mindestens so hoch, wie die zulässige Höchstgeschwindigkeit des Zuges",
      "mindestens so hoch, wie im Fahrplan angegeben",
      "mindestens den Wert 100 aus Bremsgewicht und tatsächlichem Zuggewicht haben",
      "mindestens 33% des Zuggewichts"
    ],
    correctAnswer: "mindestens so hoch, wie im Fahrplan angegeben",
    explanation: "Die erforderlichen Bremshundertstel müssen mindestens so hoch sein, wie im Fahrplan angegeben, um die sichere Bremsung des Zuges zu gewährleisten.",
    category: "Bremssysteme"
  },
  {
    id: 49,
    question: "Was ist kein 'Fahrplanhalt'?",
    options: [
      "Bedarfshalt",
      "Betriebshalt",
      "Halt zum Sichern eines Bahnübergangs",
      "Aufenthalt"
    ],
    correctAnswer: "Aufenthalt",
    explanation: "Der Begriff 'Aufenthalt' bezeichnet nicht einen spezifischen Fahrplanhalt. Fahrplanhalte können sein: Bedarfshalt, Betriebshalt oder ein Halt zum Sichern eines Bahnübergangs.",
    category: "Betriebsvorschriften"
  },
  {
    id: 50,
    question: "Wie kann die Leistungsfähigkeit einer Strecke erhöht werden?",
    options: [
      "durch durchgehende Hauptgleise",
      "durch mehrere Blockabschnitte",
      "der Rangierbegleiter",
      "der Wetterzustand"
    ],
    correctAnswer: "durch mehrere Blockabschnitte",
    explanation: "Die Leistungsfähigkeit einer Strecke kann durch Unterteilung in mehrere Blockabschnitte erhöht werden, da dadurch mehr Züge gleichzeitig auf der Strecke fahren können.",
    category: "Infrastruktur"
  },
  {
    id: 51,
    question: "Wer ist für die Zugfolge verantwortlich?",
    options: [
      "der Fahrdienstleiter",
      "der Weichenwärter",
      "der Rangierbegleiter",
      "Zugbereisteller/in"
    ],
    correctAnswer: "der Fahrdienstleiter",
    explanation: "Der Fahrdienstleiter ist für die Zugfolge verantwortlich und regelt die Reihenfolge, in der Züge auf einer Strecke fahren.",
    category: "Verantwortlichkeiten"
  },
  {
    id: 52,
    question: "Wer ist kein Mitarbeiter im Bahnbetrieb?",
    options: [
      "Fahrdienstleiter/in",
      "Rangierbegleiter/in",
      "Triebfahrzeugführer/in",
      "Zugbereisteller/in"
    ],
    correctAnswer: "Zugbereisteller/in",
    explanation: "Der Begriff 'Zugbereisteller/in' existiert im Bahnbetrieb nicht. Es gibt Fahrdienstleiter/innen, Rangierbegleiter/innen und Triebfahrzeugführer/innen als reguläre Mitarbeiter im Bahnbetrieb.",
    category: "Personal"
  },
  {
    id: 53,
    question: "Wie groß ist der Regelbremsabstand zwischen Vor- (Vs) und Hauptsignal (Hp) auf Hauptbahnen?",
    options: [
      "1000 m",
      "850 m",
      "700 m",
      "950 m"
    ],
    correctAnswer: "1000 m",
    explanation: "Der Regelbremsabstand zwischen Vorsignal und Hauptsignal beträgt auf Hauptbahnen 1000 Meter, um eine sichere Bremsung zu ermöglichen.",
    category: "Signale"
  },
  {
    id: 54,
    question: "Was passt nicht? Nennen Sie Arten von Gleisen im Bahnhof?",
    options: [
      "durchgehendes Hauptgleis",
      "Hauptgleis",
      "Anschlussgleis",
      "Nebengleis"
    ],
    correctAnswer: "Anschlussgleis",
    explanation: "Ein Anschlussgleis ist kein typisches Gleis im Bahnhof, sondern verbindet den Bahnhof mit externen Anlagen wie Industriebetrieben. Die typischen Gleisarten im Bahnhof sind durchgehende Hauptgleise, Hauptgleise und Nebengleise.",
    category: "Infrastruktur"
  },
  {
    id: 55,
    question: "Was ist der erste Schritt beim Kuppeln?",
    options: [
      "Absperrhähne öffnen",
      "elektrische Anschlüsse verbinden",
      "Schraubenkupplung einhängen",
      "Bremsschläuche kuppeln"
    ],
    correctAnswer: "Schraubenkupplung einhängen",
    explanation: "Der erste Schritt beim Kuppeln ist das Einhängen der Schraubenkupplung, um die mechanische Verbindung zwischen den Fahrzeugen herzustellen.",
    category: "Kuppelvorgang"
  },
  {
    id: 56,
    question: "Welchen Bestandteil hat die Bauart 'Feste Fahrbahn' im Vergleich zum Schotterbau nicht?",
    options: [
      "Schiene",
      "Schienenbefestigung",
      "Schwelle",
      "Schotterbettung"
    ],
    correctAnswer: "Schotterbettung",
    explanation: "Die 'Feste Fahrbahn' hat im Vergleich zum Schotterbau keine Schotterbettung, sondern die Schienen werden auf einem festen Unterbau (meist Beton) befestigt.",
    category: "Infrastruktur"
  },
  {
    id: 57,
    question: "Was passt nicht? Unter welchen Umständen ist mit einem verminderten Reibwert zwischen Rad und Schiene zu rechnen?",
    options: [
      "Schnee, Raureif und Eis",
      "Hauptleitungsdruck",
      "Regen, Tau und starker Laubfall",
      "verunreinigte Schienenköpfe, Industriestaub, Rost"
    ],
    correctAnswer: "Hauptleitungsdruck",
    explanation: "Der Hauptleitungsdruck hat keinen Einfluss auf den Reibwert zwischen Rad und Schiene. Wetterbedingte Faktoren wie Schnee, Raureif, Eis, Regen, Tau sowie Verunreinigungen wie Laub, Industriestaub oder Rost können hingegen den Reibwert vermindern.",
    category: "Betriebliche Bedingungen"
  }
];