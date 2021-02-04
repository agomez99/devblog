import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node.slug}`} className="uk-link-reset" style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
    }}>
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <Img
            fixed={article.node.image.childImageSharp.fixed}
            imgStyle={{ position: "static" }}
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase" style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--textNormal)',
          }}>
            {article.node.category.name}
          </p>
          <p id="title" className="uk-text-large" style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--textNormal)',
          }}>
            {article.node.title}
          </p>
          <div>
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.node.author.picture && (
                  <Img
                    fixed={article.node.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom" style={{
                  backgroundColor: 'var(--bg)',
                  color: 'var(--textNormal)',
                }}>
                  {article.node.author.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default Card; 