import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { multipleChoiceQuestions } from '../data/questions';

function MultipleChoiceQuiz() {
  // State management
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [questionCount, setQuestionCount] = useState(10);
  const [shuffleAnswers, setShuffleAnswers] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [categories, setCategories] = useState([]);

  // Extract unique categories from questions
  useEffect(() => {
    const uniqueCategories = [...new Set(multipleChoiceQuestions.map(q => q.category))];
    setCategories(uniqueCategories.sort());
  }, []);

  // Select questions based on filters
  useEffect(() => {
    let filteredQuestions = [...multipleChoiceQuestions];
    
    // Filter by category if not 'all'
    if (selectedCategory !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => q.category === selectedCategory);
    }
    
    // Process questions - shuffle them and potentially their answers
    const processQuestions = (questions) => {
      // Always create a copy to avoid mutating original
      let processedQuestions = JSON.parse(JSON.stringify(questions));
      
      // Shuffle questions order
      if (questionCount !== 'all' || selectedCategory !== 'all') {
        processedQuestions.sort(() => 0.5 - Math.random());
      }
      
      // Shuffle answer options if enabled
      if (shuffleAnswers) {
        processedQuestions.forEach(question => {
          question.options = [...question.options].sort(() => 0.5 - Math.random());
        });
      }
      
      return processedQuestions;
    };
    
    // If user wants all questions or filtered questions are fewer than requested count
    if (questionCount === 'all' || filteredQuestions.length <= questionCount) {
      setCurrentQuestions(processQuestions(filteredQuestions));
    } else {
      // Randomly select the specified number of questions, then process them
      const selectedQuestions = [...filteredQuestions]
        .sort(() => 0.5 - Math.random())
        .slice(0, parseInt(questionCount));
      
      setCurrentQuestions(processQuestions(selectedQuestions));
    }
    
    // Reset answers and results when questions change
    setUserAnswers({});
    setShowResults(false);
    setScore(0);
  }, [selectedCategory, questionCount, shuffleAnswers]);

  // Handle answer selection
  const handleAnswerChange = (questionId, answer) => {
    if (showResults) return; // Prevent changing answers after submission
    
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Check answers and calculate score
  const checkAnswers = () => {
    let correctCount = 0;
    
    currentQuestions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setShowResults(true);
  };

  // Reset the quiz
  const resetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
    setScore(0);
    
    // Generate a new set of questions
    let filteredQuestions = [...multipleChoiceQuestions];
    
    if (selectedCategory !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => q.category === selectedCategory);
    }
    
    // Process questions - shuffle them and potentially their answers
    const processQuestions = (questions) => {
      // Create a deep copy to avoid modifying original data
      let processedQuestions = JSON.parse(JSON.stringify(questions));
      
      // Shuffle question order
      processedQuestions.sort(() => 0.5 - Math.random());
      
      // Shuffle answer options if enabled
      if (shuffleAnswers) {
        processedQuestions.forEach(question => {
          question.options = [...question.options].sort(() => 0.5 - Math.random());
        });
      }
      
      return processedQuestions;
    };
    
    if (questionCount === 'all' || filteredQuestions.length <= questionCount) {
      // Process all filtered questions
      setCurrentQuestions(processQuestions(filteredQuestions));
    } else {
      // Select a subset, then process them
      const selectedQuestions = [...filteredQuestions]
        .sort(() => 0.5 - Math.random())
        .slice(0, parseInt(questionCount));
      
      setCurrentQuestions(processQuestions(selectedQuestions));
    }
  };

  return (
    <div>
      <div className="bg-white p-4 rounded-md shadow-md mb-4 db-card">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-db-cool-gray-800">
            Bahnbetrieb Fragenbogen
          </h1>
          <Link to="/" className="bg-db-cool-gray-200 text-db-cool-gray-700 px-4 py-2 rounded-md hover:bg-db-cool-gray-300 db-btn">
            Zurück zu Übungen
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block mb-2 text-db-cool-gray-700">Kategorie:</label>
            <select 
              className="w-full p-2 border rounded db-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Alle Kategorien</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block mb-2 text-db-cool-gray-700">Anzahl der Fragen:</label>
            <select 
              className="w-full p-2 border rounded db-select"
              value={questionCount}
              onChange={(e) => setQuestionCount(e.target.value)}
            >
              <option value="5">5 Fragen</option>
              <option value="10">10 Fragen</option>
              <option value="20">20 Fragen</option>
              <option value="all">Alle Fragen</option>
            </select>
          </div>
          
          <div className="flex flex-col items-start justify-between h-full">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="shuffle-answers"
                checked={shuffleAnswers}
                onChange={() => setShuffleAnswers(!shuffleAnswers)}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="shuffle-answers" className="text-db-cool-gray-700 cursor-pointer">
                Antwortoptionen mischen
              </label>
            </div>
            
            <button 
              className="w-full bg-db-cool-gray-200 p-2 rounded hover:bg-db-cool-gray-300 text-db-cool-gray-700 db-btn"
              onClick={resetQuiz}
            >
              Neue Fragen
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-md shadow-md mb-4 db-card">
        <h2 className="text-xl font-bold mb-6 text-db-cool-gray-800 border-b pb-2">
          {selectedCategory === 'all' ? 'Alle Kategorien' : selectedCategory} - {questionCount === 'all' ? 'Alle' : questionCount} Fragen
        </h2>
        
        {currentQuestions.map((question, index) => {
          const isCorrect = showResults && userAnswers[question.id] === question.correctAnswer;
          const isWrong = showResults && userAnswers[question.id] !== question.correctAnswer;
          
          return (
            <div 
              key={question.id} 
              className={`mb-8 p-4 rounded-md ${
                showResults 
                  ? isCorrect 
                    ? 'bg-db-light-green-100 border border-db-light-green-300' 
                    : isWrong 
                      ? 'bg-red-50 border border-red-200' 
                      : ''
                  : 'bg-db-cool-gray-50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-db-cool-gray-800">
                  {index + 1}. {question.question}
                </h3>
                <span className="text-sm bg-db-cool-gray-200 px-2 py-1 rounded text-db-cool-gray-700">
                  {question.category}
                </span>
              </div>
              
              <div className="ml-4 space-y-2 mt-3">
                {question.options.map((option, optIndex) => (
                  <div 
                    key={optIndex}
                    className={`flex items-center p-2 rounded ${
                      showResults && option === question.correctAnswer
                        ? 'bg-db-light-green-100 border border-db-light-green-300'
                        : showResults && option === userAnswers[question.id] && option !== question.correctAnswer
                          ? 'bg-red-100 border border-red-200'
                          : 'hover:bg-db-cool-gray-100'
                    }`}
                  >
                    <input 
                      type="radio"
                      id={`q${question.id}-opt${optIndex}`}
                      name={`question-${question.id}`}
                      value={option}
                      checked={userAnswers[question.id] === option}
                      onChange={() => handleAnswerChange(question.id, option)}
                      disabled={showResults}
                      className="mr-2"
                    />
                    <label 
                      htmlFor={`q${question.id}-opt${optIndex}`}
                      className={`flex-grow cursor-pointer ${
                        showResults && option === question.correctAnswer
                          ? 'font-medium text-db-success'
                          : ''
                      }`}
                    >
                      {option}
                    </label>
                    
                    {showResults && option === question.correctAnswer && (
                      <span className="ml-2 text-db-success">✓</span>
                    )}
                    
                    {showResults && option === userAnswers[question.id] && option !== question.correctAnswer && (
                      <span className="ml-2 text-db-error">✗</span>
                    )}
                  </div>
                ))}
              </div>
              
              {showResults && isWrong && (
                <div className="mt-3 p-3 bg-db-blue-100 rounded text-db-cool-gray-700 text-sm">
                  <strong className="text-db-blue-600">Erklärung:</strong> {question.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <button 
          className={`px-6 py-3 rounded-md font-medium db-btn ${
            showResults || Object.keys(userAnswers).length < currentQuestions.length
              ? 'bg-db-cool-gray-300 cursor-not-allowed text-db-cool-gray-500' 
              : 'bg-db-red hover:bg-db-red-600 text-white db-btn-primary'
          }`}
          onClick={checkAnswers}
          disabled={showResults || Object.keys(userAnswers).length < currentQuestions.length}
        >
          Antworten prüfen
        </button>
        
        {showResults && (
          <div className="p-4 rounded-md bg-db-cool-gray-100">
            <p className="font-medium text-db-cool-gray-700">
              Ergebnis: <span className="text-lg text-db-cool-gray-800">{score}</span> / {currentQuestions.length} korrekt
              ({Math.round((score / currentQuestions.length) * 100)}%)
            </p>
            {score === currentQuestions.length ? (
              <p className="text-db-success font-medium">Perfekt! Alle Antworten richtig.</p>
            ) : score >= currentQuestions.length * 0.7 ? (
              <p className="text-db-blue-600 font-medium">Gut gemacht! Weiter so.</p>
            ) : (
              <p className="text-db-cool-gray-600">Bitte sieh dir die Erklärungen bei den falschen Antworten an.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MultipleChoiceQuiz;