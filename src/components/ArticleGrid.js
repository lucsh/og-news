import React from 'react';
import ArticleCard from './ArticleCard';

function ArticleGrid({ titulo, articles, mostrarCopete = false }) {
  return (
    <div className="grilla">
      <div className="text-xl font-bold ">{titulo}</div>
      <div className="flex flex-wrap">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} mostrarCopete={mostrarCopete} />
        ))}
      </div>
    </div>
  );
}

export default ArticleGrid;
