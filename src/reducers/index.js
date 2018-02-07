import name from './name';
import presenceFilter from './presenceFilter';
import animals from './animals';
import { combineReducers } from 'redux';

const zoo = combineReducers({
  name,
  presenceFilter,
  animals,
});

export {
  name,
  presenceFilter,
  animals
};

export default zoo;
