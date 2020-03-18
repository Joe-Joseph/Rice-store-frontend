import ReactDOM from 'react-dom';
import renderToDOM from '../src/index';


ReactDOM.render = jest.fn();
document.body.innerHTML = '<div id="app"></div> ';
describe('test index', () => {
  it('should call ReactDOM.render', () => {
    renderToDOM();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
