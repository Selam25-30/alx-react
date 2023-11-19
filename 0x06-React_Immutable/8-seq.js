import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const seq = Seq(obj);
  const students = seq.filter((val) => val.score > 70).toJS();

  Object.keys(students).map((key) => {
    const fn = students[key].firstName;
    const ln = students[key].lastName;

    students[key].firstName = fn.charAt(0).toUpperCase() + fn.slice(1);
    students[key].lastName = ln.charAt(0).toUpperCase() + ln.slice(1);
    return null;
  });

  console.log(students);
}
