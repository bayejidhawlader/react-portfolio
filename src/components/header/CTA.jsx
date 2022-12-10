import React from 'react';
// import CV from '../../assets/cv_meri_gogichashvili.pdf';
import CV from '../../assets/bayejidhawlader-resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
         Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
