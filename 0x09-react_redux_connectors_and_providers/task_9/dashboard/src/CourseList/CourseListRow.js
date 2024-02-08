import React, { useState } from 'react';
import PropType from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell, isChecked}) {
  const headerStyle = {backgroundColor: '#deb5b545'};
  const rowStyle = {backgroundColor: '#f5f5f5ab'};
  const selected_style = isHeader ? headerStyle : rowStyle;

  const handleCheckChange = (e) => {
    onChangeRow(id, !isChecked);
  };

  return (
    <tr style={selected_style} className={isChecked ? css(rowsStyles.rowChecked) : ''}>
      {isHeader ?
        textSecondCell === null ?
          <th colSpan="2" className={css(rowsStyles.thcenter)}>{textFirstCell}</th>
        :
          <>
            <th className={css(rowsStyles.th)}>{textFirstCell}</th>
            <th className={css(rowsStyles.th)}>{textSecondCell}</th>
          </>
      :
        <>
          <td className={css(rowsStyles.td)}>
            <input type="checkbox" onChange={handleCheckChange}/>
            {textFirstCell}</td>
          <td className={css(rowsStyles.td)}>{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

const rowsStyles = StyleSheet.create({
  thcenter: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'center'
  },
  th: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'left'
  },
  td: {
    paddingLeft: 3
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

CourseListRow.defaultProps = {
  id: null,
  isHeader: false,
  textSecondCell: null,
  isChecked: false,
  onChangeRow: () => {},
};

CourseListRow.propTypes = {
  id: PropType.oneOfType([PropType.string, PropType.number]),
  isHeader: PropType.bool,
  textFirstCell: PropType.string.isRequired,
  textSecondCell: PropType.oneOfType([PropType.string, PropType.number]),
  isChecked: PropType.bool,
  onChangeRow: PropType.func,
};

export default CourseListRow;