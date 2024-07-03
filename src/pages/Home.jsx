import React from 'react';
import { Link } from 'react-router-dom';
import sectionObjects from '../utilities/sectionObjects';
import Section from '../components/Section';

function Home() {
  return (
    <div className="home-wrap">
      <div className="sections-wrap">
        {sectionObjects.map((section) => (
          <Link to={section.path} key={section.id} className="section-item">
            <Section
              title={section.title}
              image={section.image}
              path={section.path}
              isPreview={true}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;