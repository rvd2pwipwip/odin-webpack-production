import _ from 'lodash';
import './style.css';
import Bckg from './thumbnail.png';
import Note from './data.xml';
import Channels from './data.csv';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myBckg = new Image();
  myBckg.src = Bckg;
  element.appendChild(myBckg);

  console.log(Note);
  console.log(Channels);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
