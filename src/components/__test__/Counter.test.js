// test by gettestid
// import { render } from "@testing-library/react";
// import { Counter } from "../Counter.js";
// test("testing for render the textarea", () => {
//   const { getByTestId } = render(<Counter />);
//   const textArea = getByTestId("textArea");
//   expect(textArea).toBeTruthy();
// });
/////////////////////////////////////////////////
// test by placeholder
import {  render,screen } from "@testing-library/react";
import { Counter } from "../Counter.js";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
// use descript to keep your all test cases in a single place
describe("testing counter component", () => {
  test("testing for render the textarea", () => {
    const { getByPlaceholderText } = render(<Counter />);
    const textArea = getByPlaceholderText("Type or paste your text");
    expect(textArea).toBeTruthy();
  });
  // note here the test case is case sensitive mean it will also checks if the alphabet is capital or small

  test("test for character  result", () => {
    const { getByTestId } = render(<Counter />);
    const charLength = getByTestId("charLength");
    expect(charLength.innerHTML).toBe("Character: 0");
  });
  it("test for word result", () => {
    const { getByTestId } = render(<Counter />);
    const wordLength = getByTestId("wordLength");
    expect(wordLength.innerHTML).toBe("Word: 0");
  });
  // it is works same as test its your choice to use which one boths works same 
  test("render the word result using screen method",()=>{
    render(<Counter/>)
    const wordLength= screen.getByTestId("wordLength")
    expect(wordLength).toBeTruthy()
  })
  // test elements visible on screen
  test("see the provided text is on screen or not",()=>{
    render(<Counter/>)
    const wordLength= screen.getByText("Word: 0")
    expect(wordLength).toBeInTheDocument()
  })
  /// test case for a specific text,  if user write in text area then test wordCount and charCount 
  test("testing text area input",()=>{
    render(<Counter/>)
    const textArea = screen.getByTestId("textArea")
    const charLength = screen.getByTestId("charLength")
    const wordLength = screen.getByTestId("wordLength")
    // userEvent.type(textArea,"talha");
    userEvent.type(textArea,"talha nawaz")// space is a also a character here
    expect(charLength.innerHTML).toBe("Character: 11")
    expect(wordLength.innerHTML).toBe("Word: 2")
  })
  // test for clearing textarea and test word count and char count
  test("testing for clearing text area",()=>{
    render(<Counter/>)
    const textArea = screen.getByTestId("textArea")
    const charLength = screen.getByTestId("charLength")
    const wordLength = screen.getByTestId("wordLength")
    const clearBtn = screen.getByTestId("clearBtn")
    userEvent.click(clearBtn)
    expect(charLength.innerHTML).toBe("Character: 0")
    expect(wordLength.innerHTML).toBe("Word: 0")


  })
});
