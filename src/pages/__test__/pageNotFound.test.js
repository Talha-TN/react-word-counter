import { getByAltText, getByTestId, render } from "@testing-library/react"
import {PageNotFound} from "../PageNotFound.js"
describe("testing page not found page",()=>{
    test("test page not found component",()=>{
       const {getByTestId,getByAltText}=render(<PageNotFound/>)
       
    })
})