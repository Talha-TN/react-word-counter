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
import { getByTestId, render } from "@testing-library/react";
import { Counter } from "../Counter.js";
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
  test("test for word result", () => {
    const { getByTestId } = render(<Counter />);
    const wordLength = getByTestId("wordLength");
    expect(wordLength.innerHTML).toBe("Word: 0");
  });
});
