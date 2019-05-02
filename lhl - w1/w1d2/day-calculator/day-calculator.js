function calculateDayInYear(date) {
  var splitDate = date.split('/');
  var year = Number(splitDate[0]);
  var month = Number(splitDate[1]);
  var day = Number(splitDate[2]);
  // console.log(year, month, day); //Good!
  var febDays = daysInFeb(year);
  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //good
  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
  } else {
    console.log("Invalid date");
  }
  //good
  function validMonth(month) {
    return month && month >= 1 && month <= 12;
  }
  //good
  function validDay(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1];
  }
  //good
  function calculateDayNumber(month, day) {
    var dayOfYear = 0;

    for (var i = 1; i < month; i++) {
      dayOfYear += DAYS_IN_MONTH[i - 1];
    }

    dayOfYear += day;

    return dayOfYear;
  }
  //good
  function daysInFeb(year) {
    if (!isLeapYear(year)) return 28;
    return 29;
  }
  //good
  function isLeapYear(year) {
    return isMultiple(year, 400) || (!isMultiple(year, 100) && isMultiple(year, 4));
  }
  //good
  return ":)";

}
//good
function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}
//good
var date = process.argv[2];
//good
if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}




// console.log( (calculateDayInYear('2016/1/1'), '2016/1/1 is day 1 of the year 2016'), '\n' );
// console.log( (calculateDayInYear('2015/12/31'), '2015/12/31 is day 365 of the year 2015'), '\n' );
// console.log( (calculateDayInYear('2000/3/2'), '2000/3/2 is day 62 of the year 2000'), '\n' );
// console.log( (calculateDayInYear('1900/3/2'), '1900/3/2 is day 61 of the year 1900'), '\n' );
// console.log( (calculateDayInYear('2012/2/29'), '2012/2/29 is day 60 of the year 2012'), '\n' );







