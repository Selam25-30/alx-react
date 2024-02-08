import { selectCourse, unSelectCourse, fetchCourses, setCourses } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

  it("verify that the fetch is working correctly", function () {
    const store = mockStore({});
    fetchMock.restore();

    fetchMock.get("./courses.json", "{}");

    return store.dispatch(fetchCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(setCourses({}));
    });
  });
});
