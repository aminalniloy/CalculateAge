function AgeCalculator() {
    var userinput = document.getElementById("DateOfBirth").value;
    if(userinput==null || userinput==''){
        document.getElementById("message").innerHTML="Choose a date!";
        return false;
    }
    var dob = new Date(userinput);

    var dobYear = dob.getFullYear();
    var dobMonth = dob.getMonth() + 1; // Adding 1 to fix off-by-one error
    var dobDate = dob.getDate();

    var now = new Date();
    var currentYear = now.getFullYear(); // Using getFullYear() instead of getYear()
    var currentMonth = now.getMonth() + 1;
    var currentDate = now.getDate();

    var age = {};
    var ageString = "";

    var yearAge = currentYear - dobYear;

    if (currentMonth >= dobMonth) {
        var monthAge = currentMonth - dobMonth;
    } else {
        yearAge--;
        var monthAge = 12 + currentMonth - dobMonth;
    }

    if (currentDate >= dobDate) {
        var dateAge = currentDate - dobDate;
    } else {
        monthAge--;
        var daysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // Getting the number of days in the current month
        var dateAge = daysInMonth + currentDate - dobDate;
        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };

    if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
        ageString = age.years + " years, "
            + age.months + " months, and "
            + age.days + " days old.";
    } else if ((age.years == 0) && (age.months == 0) && (age.days == 0)) {
        ageString = "Only " + age.days + " days old!";
    } else if ((age.years > 0) && (age.months == 0) && (age.days == 0)) {
        ageString = age.years +
            " years old. Happy Birthday!!"
    } else if ((age.years > 0) && (age.months > 0) && (age.days == 0)) {
        ageString = age.years + " years and "
            + age.months + " months old.";

    } else if ((age.years == 0) && (age.months > 0) && (age.days > 0)) {
        ageString = age.months + " months and " + age.days + " days old.";
    } else if ((age.years > 0) && (age.months == 0) && (age.days > 0)) {
        ageString = age.years + " years and " + age.days + " days old.";

    } else if ((age.years == 0) && (age.months > 0) && (age.days == 0)) {
        ageString = age.months + " months old.";
    } else {
        ageString = "Welcome to Earth"
    }
    document.getElementById("result").innerHTML = ageString;
}
