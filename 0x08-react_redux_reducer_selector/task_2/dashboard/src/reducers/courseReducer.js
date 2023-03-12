import * as actions from '../actions/courseActionTypes';

export function courseReducer(state=[], action={type: null}) {
  switch(action.type) {
    case actions.FETCH_COURSE_SUCCESS:
      return action.data.map((item) => ({...item, isSelected: false}));

    case actions.SELECT_COURSE:
      return state.map((item) => item.id == action.index ? {...item, isSelected: true} : {...item});

    case actions.UNSELECT_COURSE:
      return state.map((item) => item.id == action.index ? {...item, isSelected: false} : {...item});
  
    default:
      return state;
  }
}
