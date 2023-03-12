import { fromJS, getIn } from 'immutable';

export default function accessImmutableObject(object, array) {
  const obj = fromJS(object);
  return getIn(obj, array);
}
