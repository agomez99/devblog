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

      <div className="nav-div">
        <div>
          <nav className="uk-navbar-container" data-uk-navbar
            style={{
              backgroundColor: 'var(--bg)',
              color: 'var(--textNormal)',
            }}>
            <div className="uk-navbar-left"
              style={{
                backgroundColor: 'var(--bg)',
                color: 'var(--textNormal)',
              }}>
              <li style={{
                backgroundColor: 'var(--bg)',
                color: 'var(--textNormal)',
                listStyle:'none',
              }}>
                <Link to="/"
                  style={{
                    backgroundColor: 'var(--bg)',
                    color: 'var(--textNormal)',
                  }}>{data.strapiGlobal.siteName}
                </Link>{" "}
              </li>
              <li className="cat-button" style={{listStyle:'none'}}>
                <button style={{
                  backgroundColor: 'var(--bg)',
                  color: 'var(--textNormal)',
                }}
                  className="uk-button uk-button-default uk-margin-left"
                  type="button"
                >
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
            <div className="uk-navbar-right"
              style={{
                backgroundColor: 'var(--bg)',
                color: 'var(--textNormal)',
              }}>
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