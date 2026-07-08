import * as fs from 'fs'
import * as path from 'path'
import {parse} from "csv-parse/sync"

export function readData(filename:string) {
    let filepath = path.resolve(__dirname,"../../../testdata/",filename)
    let content = fs.readFileSync(filepath,'utf-8')
    return parse(content, {
        columns:true,
        skip_empty_lines:true,
        trim:true
    })
}