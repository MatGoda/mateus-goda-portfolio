import React from 'react';
import styles from './curriculum.module.scss';
import { useContent } from '../../controllers/states/hooks';

export default function Curriculum() {
  const content = useContent()[0];

  return (
    <main className={styles.container}>
      <h1 className={styles.headline}>
        {content.curriculum.headline}
      </h1>
      {
        content.curriculum.sections.map((section) => (
          <section className={styles.section} key={section.id}>
            <h2 className={styles.title}>
              {section.title}
            </h2>
            <ul className={styles.list}>
              {section.information.map((item) => (
                <li className={styles.item} key={item.id}>
                  <div className={styles.box}>
                    <h3 className={styles.subtitle}>
                      {item.subtitle}
                    </h3>
                    {item.descriptions.map((subitem) => (
                      <p className={styles.description} key={subitem}>
                        {subitem}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))
      }
    </main>
  );
}