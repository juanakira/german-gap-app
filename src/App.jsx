import React from 'react';

function App() {
  const [selectedText, setSelectedText] = React.useState(0);
  const [mode, setMode] = React.useState('teil1');
  const [userAnswers, setUserAnswers] = React.useState({});
  const [showResults, setShowResults] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [processedText, setProcessedText] = React.useState([]);
  const [sharedOptions, setSharedOptions] = React.useState([]);

  // Text data - Railway texts first, then TELC examples
  const texts = [
    {
      title: "Tätigkeiten am Zug",
      text: "Bahnfahrzeuge können sowohl gezogen als auch geschoben werden, dafür ist es meistens notwendig, sie zu kuppeln. Es handelt sich um einen Vorgang, der mit Gefahren für Rangierer und andere Personen verbunden ist. Um diese Arbeit sicher durchzuführen, begibt sich der Rangierer in den Freiraum zwischen den zu kuppelnden Fahrzeugen, dem 'Berner Raum'. Dieser Abstand entsteht durch das Zusammentreffen der Seitenpuffer. Die Verbindung beider Fahrzeuge wird meistens durch eine Schraubenkupplung - auch UIC-Kupplung - hergestellt, indem der Kupplungsbügel des einen Fahrzeugs über den Zughaken des anderen gelegt wird. Um die Verbindung zu sichern, wird sie mit der Spindel angezogen bzw. gespannt. Anschließend bedient der Rangierer die Hauptluft- und ggf. auch die Hauptluftbehälterleitung und öffnet die Absperrhähne. Heiz- und Steuerstromleitungen werden zuletzt verbunden. Der Rangierer kann sich während des gesamten Abstands im 'Berner Raum' aufhalten. Er darf den Berner Raum erst dann betreten, wenn das Fahrzeug zum Stillstand gekommen ist. Beim Abkuppeln wird der beschriebene Ablauf nach Stillstand der Fahrzeuge in umgekehrter Reihenfolge durchgeführt. Achten Sie beim Kuppeln und Entkuppeln auf Hindernisse und Gefahren, z.B. Weichen, Kreuzungen, Gleisbremsen oder Gruben. Elektrische Verbindungen mit gefährlicher Spannung, z.B. Zugsammelschienen, dürfen Sie nur im spannungsfreien Zustand kuppeln oder entkuppeln. Mit den Arbeiten dürfen Sie erst beginnen, wenn Ihnen der Tf die 'Spannungsfreiheit' bestätigt hat.",
      importantWords: [
        "gezogen", "geschoben", "kuppeln", "Gefahren", "sicher", "Rangierer", "Berner Raum", 
        "Seitenpuffer", "Schraubenkupplung", "UIC-Kupplung", "Kupplungsbügel", "Zughaken", 
        "Spindel", "Hauptluft", "Hauptluftbehälterleitung", "Absperrhähne", "Heiz", 
        "Steuerstromleitungen", "Stillstand", "Abkuppeln", "umgekehrter", "Reihenfolge", 
        "Hindernisse", "Weichen", "Kreuzungen", "Gleisbremsen", "Gruben", "Zugsammelschienen", 
        "spannungsfreien", "Spannungsfreiheit"
      ],
      isFixedGapTest: false,
      isTelcExample: false
    },
    {
      title: "Sicherung mit Hemmschuh",
      text: "Ein Eisenbahnfahrzeug muss mithilfe von Festlegemitteln gesichert werden, wenn es abgestellt wird. Auch beim Rangieren ist diese Maßnahme erforderlich. Sichern gegen unbeabsichtigte Bewegung oder nur kurz 'Sichern' ist das Verhindern unbeabsichtigter Bewegungen von Eisenbahnfahrzeugen, Zügen oder Zugteilen. In einigen Regelwerken (Ril) wird statt des Begriffs 'Sichern gegen unbeabsichtigte Bewegung' der Begriff 'Festlegen' verwendet. Beim Abstellen muss darauf geachtet werden, dass dies in einem geeigneten Bereich des Gleises passiert. Der Verantwortliche für diese Aufgabe ist in der Regel der Triebfahrzeugführer (Tf), aber es gibt auch Ausnahmen. Je nach Fahrzeugtyp gibt es unterschiedliche Geräte und Einrichtungen, mit denen Triebfahrzeuge und Wagen festgelegt werden können, dazu gehören der Hemmschuh, Radvorleger (auch doppelseitig), Handbremse, Federspeicherbremse und die durchgehende Druckluftbremse. Mit dem Hemmschuh können Fahrzeuge auch in Bewegung abgebremst und gesichert werden. Hier wird zwischen 'Festlegemitteln' und 'Feststellbremsen' unterschieden. Den Hemmschuh legt der Rangierer auf die Schiene und das rollende Eisenbahnfahrzeug fährt mit dem Rad darauf, sodass es sich nicht mehr drehen kann. Um die Sicherung gegen ein Wegrollen zu verstärken, kann der Rangierer einen zweiten Hemmschuh hinter das Rad legen, der durch Beidrücken beim Zurückrollen ebenfalls festgesetzt wird. Da die Hemmschuhe direkt auf der Schiene liegen, ist ihre Form den unterschiedlichen Modellen angepasst. Daher muss der Rangierer darauf achten, immer den passenden Hemmschuh für die entsprechende Schiene zu verwenden. Sie sind jeweils farblich gekennzeichnet.",
      importantWords: [
        "Eisenbahnfahrzeug", "Festlegemitteln", "gesichert", "abgestellt", "Rangieren", 
        "Sichern", "unbeabsichtigte", "Bewegung", "Bewegungen", "Eisenbahnfahrzeugen", 
        "Zügen", "Zugteilen", "Regelwerken", "Festlegen", "Abstellen", "Gleises", 
        "Triebfahrzeugführer", "Fahrzeugtyp", "festgelegt", "Hemmschuh", "Radvorleger", 
        "Handbremse", "Federspeicherbremse", "Druckluftbremse", "abgebremst", 
        "Feststellbremsen", "Rangierer", "Schiene", "Rad", "Wegrollen", "Beidrücken", 
        "Zurückrollen", "festgesetzt", "Hemmschuhe"
      ],
      isFixedGapTest: false,
      isTelcExample: false
    },
    {
      title: "Triebfahrzeug prüfen",
      text: "Ein Triebfahrzeugführer hat einen vorgeplanten Schichtablauf, der sich aus vielen einzelnen Schritten zusammensetzt, die sich täglich wiederholen. Außerdem können immer plötzlich Zwischenfälle auftreten, für die eine plausible Lösung gefunden werden muss. Diese Dokumente und Gegenstände muss er im Dienst mit sich führen: Personalausweis, Dienstausweis, Vierkantschlüssel, richtig zeigende Uhr, persönliche Schutzausrüstung (PSA), Tfz-Führerschein, dienstliches Mobiltelefon, Handleuchte (weiß und rot leuchtend), Schlüssel DB 21, Schlüssel für Tfz, Nachweis der Streckenkunde (Streckenkarte), Tablet. Wenn der Tf einen Zug übernimmt, hat er u.a. die Aufgabe, vom Führerraum aus die Betriebsbremsung zu testen, der 'technischer Vorbereitungsdienst' genannt wird, denn auf diese Weise wird die Sicherheit des Eisenbahnverkehrs mitgeholfen. Bevor die Fahrt starten kann, stellt deshalb der Tf die Fahrbereitschaft des Triebfahrzeugs her. Es ist vorgesehen, bestimmte technische Einrichtungen zu prüfen bzw. Funktionsfähigkeit hin zu überprüfen. Dabei vergewissert sich der Tf, dass die Bremsen sowie die Kommunikations- und die Sicherheitseinrichtungen einwandfrei eingesetzt werden können. Er ist ebenfalls dafür verantwortlich, bei auftretenden Fehlfunktionen die Ursachen zu ermitteln und ggf. Abhilfemaßnahmen zu ergreifen. Sind alle Betriebsvorschriften in korrektem Zustand, meldet der Tf der Betriebsstelle über Funk die Fahrbereitschaft und das Ziel seiner Fahrt.",
      importantWords: [
        "Triebfahrzeugführer", "Schichtablauf", "Zwischenfälle", "plausible", "Lösung",
        "Personalausweis", "Dienstausweis", "Vierkantschlüssel", "Schutzausrüstung", 
        "Tfz-Führerschein", "Mobiltelefon", "Handleuchte", "Schlüssel", "Streckenkunde", 
        "Streckenkarte", "Tablet", "Führerraum", "Betriebsbremsung", "technischer", 
        "Vorbereitungsdienst", "Sicherheit", "Eisenbahnverkehrs", "Fahrbereitschaft", 
        "Triebfahrzeugs", "Einrichtungen", "Funktionsfähigkeit", "Bremsen", "Kommunikations", 
        "Sicherheitseinrichtungen", "einwandfrei", "Fehlfunktionen", "Ursachen", 
        "Abhilfemaßnahmen", "Betriebsvorschriften", "Betriebsstelle", "Funk", "Fahrt"
      ],
      isFixedGapTest: false,
      isTelcExample: false
    },
    {
      title: "Bremsen testen",
      text: "Die Bremsprobe (Brpr) ist ein Teil des Vorbereitungsdienstes eines Zuges auf den nächsten Einsatz. Dabei wird das Bremssystem im Stand durch Anlegen und Lösen der Bremsen auf seine Funktionsfähigkeit geprüft. Entsprechend der Umstände, kann eine Führerraumbremsprobe, eine vereinfachte Bremsprobe oder volle Bremsprobe durchgeführt werden. Auf dem Bremszettel lassen sich die entsprechenden Angaben über den Zug und die Bremse ablesen. Die Führerraumbremsprobe wird dann durchgeführt, wenn es in der Zeit des Schichtwechsels nur wenig Änderungen gegeben hat, oder wenn z.B. nicht mehr als eine Stunde nach dem Abstellen des Zuges vergangen ist. Es handelt sich hierbei um einen Funktionstest, mit dem die Bedieneinrichtungen der Bremsen geprüft werden und sichergestellt wird, dass die Einrichtungen der Bremsanlage aktiv sind. Die vereinfachte Bremsprobe findet statt, wenn der Zug z.B. zwischen einer und 24 Stunden abgestellt war. Diese besteht darin, festzustellen, dass der Tf mit dem Führerbremsventil alle Bremsen ordnungsgemäß anlegen und lösen kann und die Hauptluftleitung durchgehend gekuppelt ist. Letztere dient dazu, die Fahrzeuge mit der notwendigen Druckluft zu versorgen. Um diese Funktion sicher zu stellen, wird eine Durchgangsprüfung am letzten Fahrzeug vorgenommen. Wenn der Ablauf vorschriftsmäßig funktioniert hat, meldet der Tf dies über Funk mit einem 'Bremsen in Ordnung' (i.O.). Die volle Bremsprobe wird bei größeren Änderungen, bzw. nach längeren Abstellzeiten durchgeführt, z.B. wenn der Zug länger als 24 Stunden abgestellt war, bei einem neu zusammengestellten Zug, im Falle aufgetretener Unregelmäßigkeiten, usw.",
      importantWords: [
        "Bremsprobe", "Vorbereitungsdienstes", "Bremssystem", "Anlegen", "Lösen", 
        "Funktionsfähigkeit", "Führerraumbremsprobe", "vereinfachte", "volle", 
        "Bremszettel", "Angaben", "Schichtwechsels", "Änderungen", "Abstellen", 
        "Funktionstest", "Bedieneinrichtungen", "Bremsanlage", "aktiv", "ordnungsgemäß", 
        "Hauptluftleitung", "gekuppelt", "Druckluft", "Durchgangsprüfung", "vorschriftsmäßig", 
        "Bremsen in Ordnung", "größeren", "Abstellzeiten", "zusammengestellten", 
        "Unregelmäßigkeiten", "Führerbremsventil"
      ],
      isFixedGapTest: false,
      isTelcExample: false
    },
    {
      title: "Liebe Marita (TELC Example)",
      text: "Lieben Dank für deine letzte Mail. Sorry, dass ich dir erst jetzt antworten kann, ich bin immer noch total im Prüfungsstress. Ich hatte dir doch geschrieben, dass ich am kommenden Samstag meine große Abschlussprüfung habe. Obwohl ich jeden Tag mindestens zwei Stunden lerne, habe ich das Gefühl, dass ich bis jetzt nicht gut vorbereitet bin. Meine Freunde hier sagen, dass ich zu nervös bin und überall Probleme sehe. Denkst du das auch? Ich erzähle dir einfach mal, wie ich mich bisher vorbereitet habe. Dann kannst du mir vielleicht noch ein paar gute Tipps geben oder mich beruhigen. Zuerst habe ich eine Liste mit allen Themen geschrieben. Mit dieser Liste habe ich einen guten Überblick und kann abhaken, was ich bereits bearbeitet habe. Ich nehme mir jeden Tag ein bestimmtes Thema vor und bearbeite es dann systematisch. In den Texten markiere ich wichtige Informationen und mache mir Notizen. Am Abend mache ich aber meistens eine Pause. Ich kann abends nicht so gut lernen, dann bin ich nicht konzentriert genug und kann mir die Inhalte gar nicht merken. Deshalb nutze ich die Zeit zum Entspannen. Manchmal treffe ich mich auch mit meinen Freunden oder ich gehe ins Kino und sehe mir einen guten Film an. Das lenkt mich ein wenig ab und ich mache mir nicht so viele Sorgen. Im Grunde habe ich bereits alle Themen bearbeitet und habe auch keine Fragen dazu. Trotzdem bin ich immer noch so nervös! Hast du Tipps für mich? Wie kann ich mich noch mehr entspannen? Ich freue mich auf deine Antwort. Nach der Prüfung müssen wir uns unbedingt treffen! Viele liebe Grüße Juliana",
      fixedGaps: [
        { word: "erst", alternateOptions: ["schon", "noch"] },
        { word: "Obwohl", alternateOptions: ["Trotzdem", "Weil"] },
        { word: "bin", alternateOptions: ["habe", "werde"] },
        { word: "wie", alternateOptions: ["wann", "ob"] },
        { word: "dieser", alternateOptions: ["die", "den"] },
        { word: "vor", alternateOptions: ["mit", "bei"] },
        { word: "den", alternateOptions: ["die", "denen"] },
        { word: "zum", alternateOptions: ["für", "wegen"] },
        { word: "ab", alternateOptions: ["an", "ein"] },
        { word: "dazu", alternateOptions: ["damit", "deswegen"] }
      ],
      isFixedGapTest: true,
      isTelcExample: true
    },
    {
      title: "Unfassbarer Kunstraub (TELC Example)",
      text: "Wie die Leitung der Galerie Martiné am Morgen bestätigte, haben sich unbekannte Täter in der vergangenen Nacht auf bisher ungeklärte Weise Zutritt zur Galerie verschafft und dort wichtige Stücke der Sammlung von Fürst Albert entwendet. Als der Wachmann die gesicherten Türen am Morgen öffnete, konnte er zunächst nichts Ungewöhnliches feststellen. Wie am Abend zuvor waren alle Fenster des Gebäudes noch immer fest verschlossen und es gab auch an der schweren Sicherheitstür keinerlei Hinweise auf einen Einbruch. Alle Schlösser waren noch völlig intakt und unversehrt. Jedoch musste der Wachmann bei seinem täglichen Morgenrundgang wenig später feststellen, dass eine der Vitrinen in der Nacht geöffnet worden sein musste, da die Tür offen stand und der gesamte Inhalt fehlte. Es handelt sich bei dem Diebesgut angeblich um die wertvolle Halskette, die Fürst Alberts Mutter bei ihrer Vermählung mit Fürst Archibald im Jahr 1958 getragen hat, und die dazu passenden Ohrringe mit Rubinen. Außerdem sei vermutlich auch die Diamantbrosche, die Fürst Archibald seiner Frau zum 70. Geburtstag schenkte, unter den entwendeten Gegenständen, wie ein Polizeisprecher unserer Zeitung gegenüber andeutete. Diese Schmuckstücke haben nicht nur einen enormen materiellen, sondern besonders für die Fürstenfamilie auch einen emotionalen Wert, der sich nicht in Worte fassen lässt. Die Familie und die Galeriebesitzer haben demjenigen, der ihnen die Stücke zurückbringt, eine hohe Belohnung versprochen. Die Polizei bitten um sachdienliche Hinweise.",
      fixedGaps: [
        { word: "bestätigte", alternateOptions: ["mitteilte", "erklärte"] },
        { word: "bisher", alternateOptions: ["eine", "völlig"] },
        { word: "konnte", alternateOptions: ["musste", "wollte"] },
        { word: "es", alternateOptions: ["man", "dort"] },
        { word: "intakt", alternateOptions: ["unversehrt", "unbeschädigt"] },
        { word: "Jedoch", alternateOptions: ["Trotzdem", "Dennoch"] },
        { word: "geöffnet", alternateOptions: ["aufgebrochen", "beschädigt"] },
        { word: "angeblich", alternateOptions: ["vermutlich", "offenbar"] },
        { word: "sei", alternateOptions: ["ist", "wäre"] },
        { word: "Wert", alternateOptions: ["Bedeutung", "Charakter"] }
      ],
      isFixedGapTest: true,
      isTelcExample: true
    }
  ];

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Process text and create gap elements with preserved punctuation
  // and no duplicate gap words
  const processTextWithGaps = React.useCallback(() => {
    const currentText = texts[selectedText];
    
    // Analyze text and tokenize it while preserving punctuation
    // This regex tokenizes the text into words, spaces, and punctuation
    const tokenRegex = /([a-zäöüßA-ZÄÖÜ0-9]+)([.,;:!?())"'\-]*)|\s+|([.,;:!?())"'\-]+)/g;
    let match;
    const tokens = [];
    
    while ((match = tokenRegex.exec(currentText.text)) !== null) {
      if (match[0].trim() === '') {
        // Space token
        tokens.push({ type: 'space', content: match[0] });
      } else if (match[1]) {
        // Word token (potentially with punctuation)
        tokens.push({ 
          type: 'word', 
          content: match[1], 
          punctuation: match[2] || '',
          position: match.index
        });
      } else if (match[3]) {
        // Standalone punctuation token
        tokens.push({ type: 'punctuation', content: match[3] });
      }
    }
    
    // Create a list of all unique words in the text
    const wordTokens = tokens.filter(token => token.type === 'word');
    
    // Choose words to replace with gaps
    let gapWords = [];
    
    if (currentText.isFixedGapTest) {
      // For fixed tests, use the predefined gaps
      gapWords = currentText.fixedGaps.map(gap => gap.word.toLowerCase());
      
      // Prepare options for Teil 2 mode
      if (mode === 'teil2') {
        const allWords = currentText.fixedGaps.map(gap => gap.word);
        const allAlternateOptions = currentText.fixedGaps.flatMap(gap => gap.alternateOptions);
        
        // Combine all words and some alternates, then sort alphabetically
        const options = [...allWords, ...allAlternateOptions.slice(0, 5)];
        setSharedOptions(options.sort());
      }
    } else {
      // For dynamic tests, we need to ensure we only select each word once
      // Group words by their lowercase form to avoid duplicates
      const wordsByLowercase = {};
      
      for (const word of currentText.importantWords) {
        const lowercase = word.toLowerCase();
        if (!wordsByLowercase[lowercase]) {
          wordsByLowercase[lowercase] = word;
        }
      }
      
      // Get unique important words
      const uniqueImportantWords = Object.values(wordsByLowercase);
      
      // Randomly select 10 words (or fewer if not enough unique words)
      const selectedWords = shuffleArray([...uniqueImportantWords])
        .slice(0, Math.min(10, uniqueImportantWords.length));
      
      gapWords = selectedWords.map(word => word.toLowerCase());
      
      // Prepare options for Teil 2 mode
      if (mode === 'teil2') {
        const remainingWords = uniqueImportantWords.filter(word => 
          !selectedWords.includes(word)
        );
        
        // Use all gap words plus some additional important words
        const options = [...selectedWords, ...remainingWords.slice(0, 5)];
        setSharedOptions(options.sort());
      }
    }
    
    // Create a map to track which words we've already made into gaps
    // This ensures we only create one gap per unique word (case-insensitive)
    const usedGapWords = new Set();
    
    // Process tokens and create gap elements
    const processedContent = [];
    let gapIndex = 0;
    
    tokens.forEach((token, index) => {
      if (token.type === 'word' && 
          gapWords.includes(token.content.toLowerCase()) && 
          !usedGapWords.has(token.content.toLowerCase()) && 
          gapIndex < 10) {
        
        // This word should be a gap and hasn't been used yet
        const currentGapWord = token.content;
        const punctuation = token.punctuation;
        
        // Mark this word as used
        usedGapWords.add(currentGapWord.toLowerCase());
        
        // Find the matching gap definition for fixed tests
        let options = [];
        if (currentText.isFixedGapTest && mode === 'teil1') {
          const gapDef = currentText.fixedGaps.find(
            gap => gap.word.toLowerCase() === currentGapWord.toLowerCase()
          );
          if (gapDef) {
            options = shuffleArray([gapDef.word, ...gapDef.alternateOptions]);
          }
        } else if (!currentText.isFixedGapTest && mode === 'teil1') {
          // For dynamic tests in Teil 1 mode, generate options
          const otherWords = currentText.importantWords.filter(
            word => word.toLowerCase() !== currentGapWord.toLowerCase()
          );
          const distractors = shuffleArray(otherWords).slice(0, 2);
          options = shuffleArray([currentGapWord, ...distractors]);
        }
        
        // Create gap element
        processedContent.push({
          type: 'gap',
          id: gapIndex,
          word: currentGapWord,
          punctuation: punctuation,
          options: mode === 'teil1' ? options : [] // For Teil 2, we'll use shared options
        });
        
        gapIndex++;
      } else {
        // Regular token
        processedContent.push(token);
      }
    });
    
    setProcessedText(processedContent);
  }, [selectedText, mode]);

  // Effect to reset and process text when text or mode changes
  React.useEffect(() => {
    resetExercise();
    processTextWithGaps();
  }, [selectedText, mode, processTextWithGaps]);

  // Handle answer selection
  const handleAnswerChange = (gapId, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [gapId]: value
    }));
  };

  // Reset exercise
  const resetExercise = () => {
    setUserAnswers({});
    setShowResults(false);
    setScore(0);
  };

  // Check answers and calculate score
  const checkAnswers = () => {
    let correctCount = 0;
    
    processedText.forEach(token => {
      if (token.type === 'gap') {
        const userAnswer = userAnswers[token.id];
        if (userAnswer && userAnswer.toLowerCase() === token.word.toLowerCase()) {
          correctCount++;
        }
      }
    });
    
    setScore(correctCount);
    setShowResults(true);
  };

  // Render the text with gaps
  const renderTextWithGaps = () => {
    if (processedText.length === 0) {
      return <p>Loading...</p>;
    }

    return processedText.map((token, index) => {
      if (token.type === 'space' || token.type === 'punctuation') {
        // Render spaces and standalone punctuation
        return <span key={index}>{token.content}</span>;
      } else if (token.type === 'word') {
        // Render regular words with their punctuation
        return <span key={index}>{token.content}{token.punctuation}</span>;
      } else if (token.type === 'gap') {
        // Render gap dropdown
        const options = mode === 'teil1' ? token.options : sharedOptions;
        
        // Check if answer is correct
        const isCorrect = userAnswers[token.id] && 
          userAnswers[token.id].toLowerCase() === token.word.toLowerCase();
        
        return (
          <React.Fragment key={index}>
            <select
              value={userAnswers[token.id] || ''}
              onChange={(e) => handleAnswerChange(token.id, e.target.value)}
              disabled={showResults}
              className={`p-1 border rounded ${
                showResults 
                  ? isCorrect
                    ? 'bg-green-100 border-green-500' 
                    : 'bg-red-100 border-red-500'
                  : 'border-gray-300'
              }`}
            >
              <option value="">___</option>
              {options.map((option, j) => (
                <option key={j} value={option}>{option}</option>
              ))}
            </select>
            
            {/* Render the punctuation separately */}
            {token.punctuation}
            
            {showResults && !isCorrect && (
              <span className="text-xs ml-1 text-red-600">
                ({token.word})
              </span>
            )}
          </React.Fragment>
        );
      }
      
      return null;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-center">German Gap Text App</h1>
      
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block mb-2">Select Text:</label>
            <select 
              className="w-full p-2 border rounded"
              value={selectedText}
              onChange={(e) => setSelectedText(Number(e.target.value))}
            >
              {texts.map((text, index) => (
                <option 
                  key={index} 
                  value={index}
                  className={text.isTelcExample ? 'italic' : ''}
                >
                  {text.title}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block mb-2">Select Mode:</label>
            <select 
              className="w-full p-2 border rounded"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="teil1">Teil 1 (3 options per gap)</option>
              <option value="teil2">Teil 2 (shared options)</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button 
              className="w-full bg-gray-200 p-2 rounded hover:bg-gray-300"
              onClick={() => {
                resetExercise();
                processTextWithGaps();
              }}
            >
              Reset/New Exercise
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className={`text-xl font-bold mb-2 ${texts[selectedText].isTelcExample ? 'italic' : ''}`}>
          {texts[selectedText].title}
        </h2>
        <div className="mb-4 leading-relaxed">
          {renderTextWithGaps()}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <button 
          className={`px-4 py-2 rounded font-medium ${
            showResults 
              ? 'bg-blue-300 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          onClick={checkAnswers}
          disabled={showResults}
        >
          Check Answers
        </button>
        
        {showResults && (
          <div className="p-4 rounded bg-gray-100">
            <p className="font-medium">
              Your score: <span className="text-lg">{score}</span> / {
                processedText.filter(token => token.type === 'gap').length
              }
            </p>
            {score === processedText.filter(token => token.type === 'gap').length ? (
              <p className="text-green-600 font-medium">Perfect! All answers are correct.</p>
            ) : (
              <p>Keep practicing! Incorrect answers are marked in red.</p>
            )}
          </div>
        )}
      </div>
      
      {/* Information about important words count */}
      <div className="mt-6 bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Important Words Count</h3>
        <ul className="list-disc pl-5">
          {texts.map((text, index) => (
            <li key={index}>
              <strong>{text.title}:</strong> {
                text.isFixedGapTest 
                  ? text.fixedGaps.length 
                  : text.importantWords.length
              } words
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;