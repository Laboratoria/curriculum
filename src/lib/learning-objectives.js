import cssSvg from '../icons/css3.svg';
import gitSvg from '../icons/git.svg';
import htmlSvg from '../icons/html5.svg';
import jsSvg from '../icons/javascript.svg';
import reactSvg from '../icons/react.svg';
import angularSvg from '../icons/angular.svg';
import vueSvg from '../icons/vuedotjs.svg';
import nodeSvg from '../icons/nodedotjs.svg';
import browserSvg from '../icons/browser.svg';
import uxSvg from '../icons/ux.svg';
import firebaseSvg from '../icons/firebase.svg';
import httpSvg from '../icons/http.svg';
import expressSvg from '../icons/express.svg';
import dockerSvg from '../icons/docker.svg';
import authSvg from '../icons/auth.svg';
import dbSvg from '../icons/db.svg';
import phpSvg from '../icons/php.svg';
import wordpressSvg from '../icons/wordpress.svg';

const learningObjectivesIcons = {
  html: {
    color: '#E34F26',
    svg: htmlSvg,
  },
  css: {
    color: '#1572B6',
    svg: cssSvg,
  },
  js: {
    color: '#F7DF1E',
    svg: jsSvg,
  },
  browser: {
    color: '#000000',
    svg: browserSvg,
  },
  scm: {
    color: '#F05032',
    svg: gitSvg,
  },
  react: {
    color: '#61DAFB',
    svg: reactSvg,
  },
  angular: {
    color: '#DD0031',
    svg: angularSvg,
  },
  vue: {
    color: '#4FC08D',
    svg: vueSvg,
  },
  node: {
    color: '#339933',
    svg: nodeSvg,
  },
  ux: {
    color: '#56f89a',
    svg: uxSvg,
  },
  firebase: {
    color: '#FFCA28',
    svg: firebaseSvg,
  },
  http: {
    color: '#000000',
    svg: httpSvg,
  },
  express: {
    color: '#000000',
    svg: expressSvg,
  },
  webops: {
    color: '#2496ED',
    svg: dockerSvg,
  },
  auth: {
    color: 'gold',
    svg: authSvg,
  },
  db: {
    color: 'gray',
    svg: dbSvg,
  },
  php: {
    color: '#777BB4',
    svg: phpSvg,
  },
  wordpress: {
    color: '#21759B',
    svg: wordpressSvg,
  },
};

export const learningObjectiveToIcon = (key) => {
  return learningObjectivesIcons[key] || {};
};