import React from 'react';
import styles from './projects.module.scss';
import { useContent } from '../../controllers/states/hooks';
export default function Projects() {
  const content = useContent()[0];

  return (
    <main className={styles.container}>
      <h1 className={styles.headline}>
        {content.projects.headline}
      </h1>
      <ul className={styles.list_projects}>
        {
          content.projects.list.map((project) => (
            <li className={styles.item}
              key={project.id}
            >
              <a className={styles.link}
                href={project.link}
              >
                <img className={styles.image}
                  src={project.img_url}
                  alt={project.name}
                  title={project.name}
                />
                <img className={styles.image_hover}
                  src={project.img_url_hover}
                  alt={project.name}
                  title={project.name}
                />
              </a>
            </li>
          ))
        }
      </ul>
    </main>
  );
}