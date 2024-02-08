import React from 'react';
import PropType from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import {  StyleSheet, css } from 'aphrodite';
import { connect } from "react-redux";
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";
import { getListCourses } from "../selectors/courseSelector";

function onChangeRow(id, checked) {
  if (checked) {
    this.props.selectCourse(id);
  } else {
    this.props.unSelectCourse(id);
  }
}

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" cellPadding="0" cellSpacing="0" className={css(courseListStyles.table)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
      </thead>
      <tbody>
        {
        listCourses.length == 0 ?
          <CourseListRow isHeader={false} textFirstCell='No course available yet'/>
        : null
        }
        {listCourses &&
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                id={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
                isChecked={course.isSelected}
                onChangeRow={onChangeRow}
              />
            ))}
      </tbody>
    </table>
  );
}

const courseListStyles = StyleSheet.create({
	table: {
		display: 'table',
		border: '1px solid',
		borderCollapse: 'collapse',
		margin: '2rem auto 0 auto',
		width: '90%',
	}
});

CourseList.defaultProps = {
  listCourses: null,
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};

CourseList.propTypes = {
  listCourses: PropType.oneOfType([PropType.array, PropType.object]),
  fetchCourses: PropType.func,
  selectCourse: PropType.func,
  unSelectCourse: PropType.func,
};

export const mapStateToProps = (state) => {
  const coursesList = getListCourses(state);
  return {
    listCourses: coursesList,
  };
};

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
