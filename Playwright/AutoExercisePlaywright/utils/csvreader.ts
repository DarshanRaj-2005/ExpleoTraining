import * as fs from "fs";
import * as path from "path";
import {parse} from 'csv-parse/sync'

export interface RegisterData {
    name:string
    email:string
    password:string
    firstname:string
    lastname:string
    address:string
    state:string
    city:string
    zipcode:string
    mobile:string
}

export function readRegisterData() : RegisterData[] {
    const filepath = path.resolve(__dirname,"../testdata/registerdata.csv")
    const content = fs.readFileSync(filepath,'utf-8')
    return parse(content,{
        skip_empty_lines:true,
        trim:true,
        columns:true
    }) as RegisterData[]
}