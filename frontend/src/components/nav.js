import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import SocialFollow from "./SocialFollow"
import "../assets/css/main.css"
import Toggler from '../components/Toggler'



const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}

    render={(data) => (

      <div>
        <div>
          <nav className="uk-navbar-container" data-uk-navbar
            style={{
              backgroundColor: 'var(--textNormal)',
              color: 'var(--textNormal)',
            }}>
            <div className="uk-navbar-left">
              <li>
                <Link to="/">{data.strapiGlobal.siteName}</Link>{" "}
              </li>
                <li className="cat-button">
                  <button
                    className="uk-button uk-button-default uk-margin-left"
                    type="button">
                    Categories
                  </button>
                  <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                    <ul className="uk-nav uk-dropdown-nav" style={{ fontSize: "1.7rem" }}>
                      {data.allStrapiCategory.edges.map((category, i) => (
                        <li key={`category__${category.node.slug}`}>
                          <Link to={`/category/${category.node.slug}`}>
                            {category.node.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
            </div>
            <div className="uk-navbar-right" style={{ marginRight: "5%" }}>
              <ul className="uk-navbar-nav">
                <li>
                  <SocialFollow />
                </li>
                <li >
                  <Toggler
                    style={{
                      backgroundColor: 'var(--bg)',
                      color: 'var(--textNormal)',
                      transition: 'color 0.2s ease-out, background 0.2s ease-out',
                    }} />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )}
  />
);

export default Nav;