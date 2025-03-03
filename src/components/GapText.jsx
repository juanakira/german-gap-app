import React from 'react';

function GapText({ texts, glossary }) {
  const [selectedText, setSelectedText] = React.useState(0);
  const [mode, setMode] = React.useState('teil1');
  const [userAnswers, setUserAnswers] = React.useState({});
  const [showResults, setShowResults] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [processedText, setProcessedText] = React.useState([]);
  const [sharedOptions, setSharedOptions] = React.useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = React.useState([]);

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
    
    // Log important words to console for instructors/developers
    console.log(`Important words for "${currentText.title}":`);
    if (currentText.isFixedGapTest) {
      console.log(currentText.fixedGaps.map(gap => gap.word));
    } else {
      console.log(currentText.importantWords);
    }
    
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
  }, [selectedText, mode, texts]);

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
    setIncorrectAnswers([]);
  };

  // Check answers and calculate score
  const checkAnswers = () => {
    let correctCount = 0;
    const wrongAnswers = [];
    
    processedText.forEach(token => {
      if (token.type === 'gap') {
        const userAnswer = userAnswers[token.id];
        if (userAnswer && userAnswer.toLowerCase() === token.word.toLowerCase()) {
          correctCount++;
        } else {
          wrongAnswers.push({
            id: token.id,
            correctWord: token.word,
            userAnswer: userAnswer || ''
          });
        }
      }
    });
    
    setScore(correctCount);
    setIncorrectAnswers(wrongAnswers);
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

  // Render glossary for incorrect answers
const renderGlossaryHelp = () => {
  if (!showResults || incorrectAnswers.length === 0) return null;

  return (
    <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
      <h3 className="text-lg font-medium mb-2">Vocabulary Help:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {incorrectAnswers.map((item) => {
          const word = item.correctWord;
          // Use toLowerCase() for the lookup to ensure case-insensitive matching
          const translation = glossary[word.toLowerCase()] || "translation not available";
          
          return (
            <div key={item.id} className="flex">
              <span className="font-semibold">{word}:</span>
              <span className="ml-2 italic">{translation}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

  return (
    <div>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block mb-2">Selecciona Texto:</label>
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
            <label className="block mb-2">Selecciona Modo:</label>
            <select 
              className="w-full p-2 border rounded"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="teil1">Teil 1 (3 opciones por hueco)</option>
              <option value="teil2">Teil 2 (opciones comunes)</option>
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
              Resetear/Nuevo Ejercicio
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
          Comprobar Respuestas
        </button>
        
        {showResults && (
          <div className="p-4 rounded bg-gray-100">
            <p className="font-medium">
              Tu puntuación: <span className="text-lg">{score}</span> / {
                processedText.filter(token => token.type === 'gap').length
              }
            </p>
            {score === processedText.filter(token => token.type === 'gap').length ? (
              <p className="text-green-600 font-medium">¡Perfecto! Todas las respuestas son correctas.</p>
            ) : (
              <p>¡Sigue practicando, chambal! Las respuestas incorrectas están marcadas en rojo.</p>
            )}
          </div>
        )}
      </div>
      
      {/* Vocabulary Help section with glossary translations */}
      {renderGlossaryHelp()}
    </div>
  );
}

export default GapText;