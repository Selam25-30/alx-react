import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
  // if (page1 === page2) return List(page2.valueSeq().toArray());
  const mergedobj = Map(page1).merge(Map(page2));
  // return List(mergedobj.valueSeq().toArray());
  return mergedobj;
}
