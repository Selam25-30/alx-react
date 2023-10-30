import CourseListRow from "./CourseListRow";
import './CourseList.css';
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

function CourseList({ listCourses }) {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow isHeader={true} textFirstCell='Available courses' />
                <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell='Credit' />
            </thead>
            <tbody>
                {!listCourses.length ?
                    <CourseListRow textFirstCell='No course available yet.' /> :
                    listCourses.map((val) => {
                        return <CourseListRow textFirstCell={val.name}
                            textSecondCell={String(val.credit)} key={val.id}
                        />;
                    })
                }
            </tbody>
        </table>
    );
}

CourseList.defaultProps = {
    listCourses: [],
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}

export default CourseList;
