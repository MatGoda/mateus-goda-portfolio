import React, { useEffect } from 'react';
import styles from './menu.module.scss';
import ptbr from '../../controllers/languages/pt-br';
import enus from '../../controllers/languages/en-us';
import { useContent, useLanguage } from '../../controllers/states/hooks';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Menu() {
  const [currentLanguage, setLanguage] = useLanguage();
  const [content, setContent] = useContent();
  const path = useLocation();

  function addContent(language: string) {
    switch (language) {
    case 'pt-br':
      setContent(ptbr);
      break;
    case 'en-us':
      setContent(enus);
      break;
    default:
      setContent(ptbr);
      break;
    }
  }

  useEffect(() => {
    addContent(currentLanguage);
  },[currentLanguage]);

  return (
    <header className={styles.container}>
      <div className={styles.presentation}>
        <img className={styles.picture}
          src={content.menu.profile_picture.path}
          alt={content.menu.profile_picture.alt}
          title={content.menu.profile_picture.alt}
        />
        <div className={styles.box}>
          <img className={styles.logo}
            src={content.menu.logo.path}
            alt={content.menu.logo.alt}
            title={content.menu.logo.alt}
          />
          <p className={styles.profession}>
            {content.menu.profession}
          </p>
        </div>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {content.menu.pages.map((page) => (
            <li key={page.id} className={path.pathname === page.link ? styles.current_item : styles.item}>
              <NavLink className={
                ({ isActive }) => (
                  isActive ? styles.link_active : styles.link
                )
              }
              to={page.link}
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <ul className={styles.list_external_links}>
        {content.menu.external_links.map((external_link) => (
          <li key={external_link.id} className={styles.item}>
            <a className={styles.link}
              href={external_link.link}
            >
              <img className={styles.icon} src={external_link.path} alt={external_link.alt} title={external_link.alt} />
            </a>
          </li>
        ))}
      </ul>
      <ul className={styles.list_languages}>
        {
          content.menu.languages.map((lang) => (
            <li key={lang.id} className={styles.item}>
              <img className={currentLanguage === lang.name ? styles.flag_active : styles.flag}
                src={lang.flag_path}
                alt={lang.alt}
                title={lang.name}
                onClick={() => setLanguage(lang.name)}
              />
            </li>
          ))
        }
      </ul>
    </header>
  );
}