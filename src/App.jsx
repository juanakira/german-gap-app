import React from 'react';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import { texts, glossary } from './data/texts';
import GapText from './components/GapText';
import GlossaryPage from './components/GlossaryPage';

// Root layout component
function Layout() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen">
      <header className="bg-blue-600 text-white p-4 rounded-lg mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Eisenbahn Lückentexte</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Ejercicios</Link>
          <Link to="/glossary" className="hover:underline">Glosario</Link>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer className="mt-6 pt-4 border-t border-gray-300 text-center text-gray-600">
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
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;