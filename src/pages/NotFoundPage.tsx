import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Página não encontrada
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        A página que você está procurando pode ter sido removida, renomeada ou
        está temporariamente indisponível.
      </p>
      <Link to="/" className="px-4 py-2 bg-primary-light text-white rounded-md hover:bg-primary-dark transition-colors">
        Voltar para a página inicial
      </Link>
    </div>;
};