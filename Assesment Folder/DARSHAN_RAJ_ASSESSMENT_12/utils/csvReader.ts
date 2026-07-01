import * as fs from 'fs'
import * as path from 'path'
import {parse} from "csv-parse/sync"

export interface RegisterData{
    firstname : string
    lastname : string
    email : string
    telephone : string
    password : string
    cpassword : string
}

export function readData() : RegisterData[] {
    const filepath = path.resolve(__dirname,"../testdata/registerData.csv")
    const content = fs.readFileSync(filepath,'utf-8')
    return parse(content,{
        columns:true,
        skip_empty_lines:true,
        trim:true
    }) as RegisterData[]
}