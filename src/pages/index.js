import * as React from 'react';
import PropTypes from 'prop-types';
import {StaticImage} from 'gatsby-plugin-image';
import * as styles from './style.module.scss';

class Background extends React.Component {
  render() {
    return <StaticImage
      className={styles.backgroundImage}
      src="../images/sunset.jpg"
      quality={100}
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
  link: PropTypes.string,
  text: PropTypes.string,
};

class Content extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1>Alex Hadley</h1>
        <nav>
          <NavItem
            link="/Resume.pdf"
            text="Resume"
          />
          <NavItem
            link="https://www.linkedin.com/in/alexhadley/"
            text="LinkedIn"
          />
          <NavItem
            link="https://github.com/alexhad6"
            text="GitHub"
          />
          <NavItem
            link="https://photos.alexhadley.net"
            text="Photos"
          />
          <NavItem
            link="mailto:ahadley@g.hmc.edu"
            text="Contact"
          />
        </nav>
      </div>
    );
  }
}

export default class Page extends React.Component {
  render() {
    return (
      <main>
        <Background />
        <Content />
      </main>
    );
  }
};
