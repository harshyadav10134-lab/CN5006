const dateofBrith = "12/12/1980"

const getStudentName = () =>
{
    return "Jim"
}
const getCampusName = () =>
{
    return ("UEL Campus")
}
//exporying function & variable outside the module
exports.getName = getStudentName
exports.Location = getCampusName
exports.dob = dateofBrith

// How to export function with parameters 

exports.Studentgrade=(marks)=>{
    if(marks>50 && marks<70) return ("B grade")
    else{
        return("A grade")

    }
}