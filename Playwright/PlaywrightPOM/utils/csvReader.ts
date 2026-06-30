import fs from 'fs'
import path from 'path'
import {parse} from 'csv-parse/sync'

export interface LoginUser {
    type : string
    username : string
    password : string
}

export function readLoginData() {
    const filepath = path.resolve(__dirname,'../testdata/LoginDatas.csv')
    const fileContent = fs.readFileSync(filepath,'utf-8')
    return parse(fileContent,{
        columns : true,
        skip_empty_lines: true,
        trim : true
    }) as LoginUser[]
}