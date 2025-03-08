import React from 'react';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import { texts, glossary } from './data/texts';
import GapText from './components/GapText';
import GlossaryPage from './components/GlossaryPage';
import MultipleChoiceQuiz from './components/MultipleChoiceQuiz';
import './db-styles.css'; // Import our DB styles

// Root layout component
function Layout() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-db-cool-gray-100 min-h-screen">
      <header className="bg-db-red text-white p-4 rounded-md mb-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Title with word-break for long titles */}
          <h1 className="text-xl md:text-2xl font-black break-words hyphens-auto" 
              style={{fontFamily: "'DB Screen Head', 'Arial Black', sans-serif", maxWidth: "70%"}}>
            Eisenbahn&shy;grundkonzept&shy;einführungs&shy;prüfungs&shy;vorbereitungs&shy;hilfsmittel&shy;sammlung
          </h1>
          
          {/* Navigation links */}
          <nav className="flex gap-4 mt-2 md:mt-0">
            <Link to="/" className="hover:underline font-medium">Ejercicios</Link>
            <Link to="/quiz" className="hover:underline font-medium">Fragebogen</Link>
            <Link to="/glossary" className="hover:underline font-medium">Glosario</Link>
          </nav>
        </div>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer className="mt-6 pt-4 border-t border-db-cool-gray-300 text-center text-db-cool-gray-600">
        Hecho con ❤ y con Claude | 2025 | Para los Chambales
      </footer>
    </div>
  );
}

// App Component
function App() {
  // Define the router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <GapText texts={texts} glossary={glossary} />
        },
        {
          path: "glossary",
          element: <GlossaryPage texts={texts} glossary={glossary} />
        },
        {
          path: "quiz",
          element: <MultipleChoiceQuiz />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;