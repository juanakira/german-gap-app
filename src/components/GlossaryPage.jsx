import React from 'react';
import { Link } from 'react-router-dom';

function GlossaryPage({ texts, glossary }) {
  const [selectedText, setSelectedText] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  // Get list of words for a specific text
  const getWordsForText = (textIndex) => {
    const text = texts[textIndex];
    if (text.isFixedGapTest) {
      return text.fixedGaps.map(gap => gap.word);
    } else {
      return text.importantWords;
    }
  };

  // Get all words from all texts
  const getAllWords = () => {
    let allWords = {};
    
    texts.forEach((text, index) => {
      const textWords = getWordsForText(index);
      textWords.forEach(word => {
        if (!allWords[word.toLowerCase()]) {
          allWords[word.toLowerCase()] = {
            word: word,
            texts: [index]
          };
        } else if (!allWords[word.toLowerCase()].texts.includes(index)) {
          allWords[word.toLowerCase()].texts.push(index);
        }
      });
    });
    
    return allWords;
  };

  // Filter words based on search term and selected text
  const getFilteredWords = () => {
    const allWords = getAllWords();
    
    // Convert to array for easier sorting and filtering
    let wordsList = Object.values(allWords);
    
    // Filter by selected text if not "all"
    if (selectedText !== 'all') {
      const textIndex = parseInt(selectedText, 10);
      wordsList = wordsList.filter(item => item.texts.includes(textIndex));
    }
    
    // Filter by search term if provided
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      wordsList = wordsList.filter(item => 
        item.word.toLowerCase().includes(term) || 
        (glossary[item.word.toLowerCase()] && 
         glossary[item.word.toLowerCase()].toLowerCase().includes(term))
      );
    }
    
    // Sort alphabetically
    return wordsList.sort((a, b) => a.word.localeCompare(b.word));
  };

  const filteredWords = getFilteredWords();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Glosario Alemán - Español</h1>
        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Vuelta a Ejercicios
        </Link>
      </div>
      
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="textFilter" className="block mb-2">Filtrar por Texto:</label>
          <select 
            id="textFilter"
            className="w-full p-2 border rounded"
            value={selectedText}
            onChange={(e) => setSelectedText(e.target.value)}
          >
            <option value="all">Todos los Textos</option>
            {texts.map((text, index) => (
              <option key={index} value={index}>
                {text.title}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="searchTerm" className="block mb-2">Buscar:</label>
          <input
            id="searchTerm"
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Busca palabras o traducciones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="mb-4">
        <p>Mostrando {filteredWords.length} términos</p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded border">
        {filteredWords.length === 0 ? (
          <p className="text-center py-4 text-gray-500">No se han encontrado palabras según este criterio.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            {filteredWords.map((item, index) => {
              const translation = glossary[item.word.toLowerCase()] || "translation not available";
              
              return (
                <div key={index} className="flex flex-col border-b pb-2 mb-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">{item.word}</span>
                    <span className="text-sm text-gray-500">
                      {item.texts.map(textIndex => (
                        <span key={textIndex} className="mr-1 px-1 bg-gray-200 rounded text-xs">
                          {texts[textIndex].title.slice(0, 10)}...
                        </span>
                      ))}
                    </span>
                  </div>
                  <span className="italic">{translation}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default GlossaryPage;