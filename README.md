# German Gap Text App

## A web application for practicing German language skills through gap-filling exercises. This app helps users practice vocabulary and grammar in context by filling in blanks in German texts.

## Features

- Multiple German text examples: Railway-focused technical texts and general TELC exam examples
- Two exercise modes:
  - **Teil 1**: Each gap has 3 specific options (one correct, two distractors)
  - **Teil 2**: All gaps share the same pool of answer options
- Automatic scoring and feedback
- Spanish-German glossary for important vocabulary
- Console logging of important terminology for instructors/developers

## Technology Stack

- **Frontend**: React 19 with hooks for state management
- **Styling**: Tailwind CSS for responsive design 
- **Build Tool**: Vite for fast development and optimized production builds
- **Language**: Modern JavaScript (ES6+) with JSX

## Project Structure

```
german-gap-app/
├── public/            # Static assets
├── src/               # Source code
│   ├── components/    # React components
│   │   ├── App.jsx    # Main application component
│   │   ├── GapText.jsx # Gap text exercise component
│   │   ├── Glossary.jsx # Glossary page component
│   │   └── ...
│   ├── data/          # Text and glossary data
│   │   └── texts.js   # Text examples and vocabulary data
│   ├── assets/        # Images and other assets
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
   git clone https://github.com/yourusername/german-gap-app.git
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

1. Select a text from the dropdown menu
2. Choose an exercise mode (Teil 1 or Teil 2)
3. Fill in the gaps by selecting words from the dropdown options
4. Click "Check Answers" to see your score and feedback
5. Click "Reset/New Exercise" to start over with a new set of gaps
6. Click "View Glossary" to see a comprehensive list of important vocabulary with Spanish translations

## Educational Context

This app is designed for German language learners at the B1-B2 level, with a focus on vocabulary relevant to railway operations and technical contexts, plus general language practice. It follows the format of the TELC exams, making it useful for exam preparation.

## Styling
This application uses colors and typography based on the Deutsche Bahn design system. 
DB UI colors are used for reference only and Deutsche Bahn retains all rights to their brand elements.

## Favicon

Using the favicon from [Voxel Tycoon Calculator](https://voxeltycoon-calculator.com/en/vehicles/detail/id/passenger_electric_engine_1/name/DB+Class+423)

## License

MIT
