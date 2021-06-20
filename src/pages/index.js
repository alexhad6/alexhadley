import * as React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {StaticImage} from 'gatsby-plugin-image';
import * as styles from './style.module.scss';

const navData = [
  {text: 'Resume', link: '/Resume.pdf'},
  {text: 'LinkedIn', link: 'https://www.linkedin.com/in/alexhadley/'},
  {text: 'GitHub', link: 'https://github.com/alexhad6'},
  {text: 'Photos', link: 'https://photos.alexhadley.net'},
  {text: 'Contact', link: 'mailto:ahadley@g.hmc.edu'},
];

class Background extends React.Component {
  render() {
    return <StaticImage
      className={styles.backgroundImage}
      src="../images/sunset.jpg"
      quality={100}
      style={{position: 'fixed'}}
    />;
  }
}

class NavItem extends React.Component {
  render() {
    return <a
      href={this.props.link}
      target="_blank"
      rel="noreferrer"
    >
      {this.props.text}
    </a>;
  }
}
NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

class Content extends React.Component {
  render() {
    const navElements = navData.map((data) => {
      return <NavItem key={data.text} link={data.link} text={data.text} />;
    });

    return (
      <div className={styles.content}>
        <h1>Alex Hadley</h1>
        <nav>{navElements}</nav>
      </div>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>Alex Hadley</title>
        </Helmet>
        <Background />
        <Content />
      </main>
    );
  }
};

export default Page;
