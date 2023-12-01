import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
describe('Testing Action Creators', () => {
  it('test selectCourse Action', () => {
    const action = selectCourse(1);
    const expected = { type: SELECT_COURSE, index: 1 };
    expect(action).toEqual(expected);
  });

  it('test unSelectCourse Action', () => {
    const action = unSelectCourse(1);
    const expected = { type: UNSELECT_COURSE, index: 1 };
    expect(action).toEqual(expected);
  });
});
