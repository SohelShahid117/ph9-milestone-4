const course = {
    subject :`Javascript`,
    duration:"2 month",
    credit:1.5
}
console.log(course);
console.log(course.subject);
console.log(course[`credit`]);

course.price = '$120';
console.log(course);
delete course.duration;
console.log(course);

course[`subject`]=`React`;
console.log(course);
