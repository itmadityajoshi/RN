// Find return only the first matching elements




const students = [
    {id:1, name: "Johsn"},
    {id:2, name: "Mausam"},
    {id:3, name: "Miruta"},
]

const result = students.find((student)=>student.id ===2);
console.log(result);

/* Notice something important
    filter() returns an array.
    find() -> returns a single object (or undefined if nothing matches)
*/