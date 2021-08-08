import { Teacher,promote } from "./teacher"
const newteacher = new Teacher('teachername',55,'MTECH')
console.log(newteacher)
newteacher.teach()
newteacher.walk()
promote()
//objects defined in a module is private by default,so they must be exported to get accessible from outside

//we also have default export,it is the main object that is exported from a module
//default export -> import ___ from '';
//named export  ->  import {___,___} from '';
//named + default -> import default ,{named,named }from ''