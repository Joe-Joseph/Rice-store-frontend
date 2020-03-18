/* eslint-disable no-undef */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';


configure({ adapter: new Adapter() });

global.fetch = require('unfetch');
