import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import Social from "../components/SocialShare";
import SEO from "../components/seo";

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt
      image {
        publicURL
        childImageSharp {
          fixed {
            src
          }
        }
      }
      author {
        name
        picture {
          childImageSharp {
            fixed(width: 30, height: 30) {
              src
            }
          }
        }
      }
    }
  }
`;

const Article = ({ data }) => {
  const article = data.strapiArticle;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout seo={seo}>
      <SEO title="My Amazing Gatsby App" />
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
        >
        </div>

        <div className="uk-section">
        <h1 className="article-title"  style={{
            color: 'var(--p)',
              }}>{article.title}</h1>

          <div className="uk-container uk-container-small" style={{
            color: 'var(--p)',
              }}>
            <Markdown source={article.content} escapeHtml={false} 
          />
            <Social />
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.author.picture && (
                  <Img
                    fixed={article.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  By {article.author.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Article;