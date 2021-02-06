import React from "react";
import Card from "./card";
import Social from "./SocialShare";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true" style={{marginLeft:"0px"}}>
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.node.slug}`}
              />
            );

          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__right__${article.node.slug}`}
                />
              );
            })}
          </div>
        </div>
        <Social/>

      </div>
    </div>
  );
};

export default Articles;