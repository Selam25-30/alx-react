import PropTypes from 'prop-types';

function CourseListRow({ isHeader=false, textFirstCell, textSecondCell=null }) {
    return (
        <tr>
            {isHeader ?
                <>
                    <th colSpan={textSecondCell == null ? 2 : 1}>{textFirstCell}</th>
                    {textSecondCell == null &&
                        <th>{textSecondCell}</th>
                    }
                </> :
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            }
        </tr>
    )
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.string,
};

export default CourseListRow;
