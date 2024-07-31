import _ from 'lodash';
import './style.css';
import Bckg from './thumbnail.png';
import Note from './data.xml';
import Channels from './data.csv';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myBckg = new Image();
  myBckg.src = Bckg;
  element.appendChild(myBckg);

  console.log(Note);
  console.log(Channels);

  return element;
}

document.body.appendChild(component());
