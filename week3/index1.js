function EmployeeInfo(name,SAlary)
{
    console.log("Wellcome"+ name + "Your monthly salaryis "+EmpSalary)

}
console.log("This is my frist programme")

var EmpName="John"
var EmpSalary= 50000

//calling of the function EmployeeInfo
EmployeeInfo(EmpName,EmpSalary)

//code for second exercise strats form here:
const EmpSkills = (Skills) =>{
    console.log("Expert in "+Skills)
}
EmpSkills("java")


const Student =require('./StudentInfo')
const person = require('./Person')
// because getName is the function so we use()
console.log("Student Name :" + Student.getName() )
console.log(Student.Location())
console.log(Student.dob)

// because bob is a variable so we do not use ()
console.log(Student.Studentgrade())
console.log("garde is" + Student.Studentgrade(55))

// creating new person 

person1 = new person("Jim" , "USA" , "myeamil.com")
console.log("using Preson Module ", person1.getPersonInfo())
console.log("Programe ended")


os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")