# German Gap Text App

A web application for practicing German language skills through gap-filling exercises and multiple-choice quizzes. This app helps users practice vocabulary and grammar in context by filling in blanks in German texts and answering railway-related questions.

## Features

- Multiple German text examples: Railway-focused technical texts and general TELC exam examples
- Two exercise modes:
  - **Teil 1**: Each gap has 3 specific options (one correct, two distractors)
  - **Teil 2**: All gaps share the same pool of answer options
- Multiple-choice quiz with railway terminology questions:
  - Filter questions by category
  - Choose number of questions (5, 10, 20, or all)
  - Option to shuffle answer choices 
  - Detailed explanations for incorrect answers
- Automatic scoring and feedback
- Spanish-German glossary for important vocabulary
- Console logging of important terminology for instructors/developers

## Technology Stack

- **Frontend**: React 19 with hooks for state management
- **Routing**: React Router for navigation between features
- **Styling**: Tailwind CSS for responsive design 
- **Build Tool**: Vite for fast development and optimized production builds
- **Language**: Modern JavaScript (ES6+) with JSX

## Project Structure

```
german-gap-app/
├── public/            # Static assets
│   ├── br423.png      # Favicon
│   └── _redirects     # SPA routing configuration for deployment
├── src/               # Source code
│   ├── components/    # React components
│   │   ├── App.jsx    # Main application component
│   │   ├── GapText.jsx # Gap text exercise component
│   │   ├── GlossaryPage.jsx # Glossary page component
│   │   └── MultipleChoiceQuiz.jsx # Quiz component
│   ├── data/          # Data files
│   │   ├── questions.js # Multiple-choice questions data
│   │   └── texts.js   # Text examples and glossary data
│   ├── assets/        # Images and other assets
│   ├── db-styles.css  # Deutsche Bahn specific styles
│   ├── index.css      # Global styles
│   └── main.jsx       # Application entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Project dependencies and scripts
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/juanakira/german-gap-app.git
   cd german-gap-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Usage

### Gap Text Exercises

1. Select a text from the dropdown menu
2. Choose an exercise mode (Teil 1 or Teil 2)
3. Fill in the gaps by selecting words from the dropdown options
4. Click "Check Answers" to see your score and feedback
5. Click "Reset/New Exercise" to start over with a new set of gaps

### Multiple-Choice Quiz

1. Select a category or "All Categories"
2. Choose the number of questions (5, 10, 20, or all)
3. Optionally enable "Shuffle Answers" for randomized answer options
4. Select your answers for each question
5. Click "Check Answers" to see your score and explanations for incorrect answers
6. Click "New Questions" to generate a new set of quiz questions

### Glossary

1. Click "View Glossary" to see a comprehensive list of important vocabulary
2. Filter by text or search terms
3. Spanish translations are provided for each German term

## Educational Context

This app is designed for German language learners at the B1-B2 level, with a focus on vocabulary relevant to railway operations and technical contexts, plus general language practice. It follows the format of the TELC exams, making it useful for exam preparation.

## Styling
This application uses colors and typography based on the Deutsche Bahn design system. 
DB UI colors are used for reference only and Deutsche Bahn retains all rights to their brand elements.

## Favicon

Using the favicon from [Voxel Tycoon Calculator](https://voxeltycoon-calculator.com/en/vehicles/detail/id/passenger_electric_engine_1/name/DB+Class+423).

## License

MIT
