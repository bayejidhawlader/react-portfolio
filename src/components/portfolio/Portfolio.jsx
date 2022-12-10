import React from 'react';
// import IMG1 from '../../assets/bookstore.png';
import IMG1 from '../../assets/kenno.png';
// import IMG2 from '../../assets/todo.png';
import IMG2 from '../../assets/dental.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
// import IMG4 from '../../assets/study.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Kenno Store',
      img: IMG1,
      description:
        'Kenno Store app that user can buy second hand mobile phones',
      technologies: 'JavaScript | React',
      link: 'https://assinment-12-e4680.web.app/',
      github: 'https://github.com/bayejidhawlader/assignment-12-kenno-resale-website-client',
    },
    {
      id: 2,
      title: 'FakeStore',
      img: IMG4,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'JavaScript | React',
      link: 'https://fakestore-metrics.netlify.app/',
      github: '#',
    },
    {
      id: 3,
      title: 'Grand Dental',
      img: IMG2,
      description: 'User can Know about Dentist Services',
      technologies: 'JavaScript | React',
      link: 'https://assinment-lawyer-website.web.app/',
      github: 'https://github.com/bayejidhawlader/grand-dental-client-11',
    },
    // {
    //   id: 4,
    //   title: 'Shelter',
    //   img: IMG3,
    //   description:
    //     'Fully responsive interactive website built based on Figma design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
    //   github: 'https://github.com/Meri-MG/shelter',
    // },
    // {
    //   id: 5,
    //   title: 'World News',
    //   img: IMG5,
    //   description:
    //     'Fully responsive interactive website built based on Adobe XD design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/Meri-MG/Unilab-world-news',
    // },
    // {
    //   id: 6,
    //   title: 'Math Resource',
    //   img: IMG6,
    //   description:
    //     'Real-world group project which is still in progress and will provide educational platform for future young developers',
    //   technologies: 'JavaScript | Scss | Python',
    //   link: 'https://lukinoo.github.io/math-resource/',
    //   github: 'https://github.com/lukinoo/math-resource',
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
