const college = {
    name:`VNC`,
    class:['11','12','13','14'],
    events : [`Science Fair`,`Math Olympiad`,"Bijoy dibos"],
    unique:{
        color : "blue",
        result:{
            gpa : 5,
            position:"top"
        }
    }

}
console.log(college);
console.log(college.name);
console.log(college.unique);
console.log(college.unique.color);
console.log(college.unique.result);
console.log(college.unique.result.position);

college[`unique`].result.position = `top top top-most`;
console.log(college);
console.log(college.events);
college.events[2]="16 december";
console.log(college) ;
delete college.class;
console.log(college) ;
// delete college.gpa;
// delete college.result;
delete college.unique.result.gpa;
console.log(college) ;