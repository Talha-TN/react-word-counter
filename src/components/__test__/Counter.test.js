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
import { render } from "@testing-library/react";
import { Counter } from "../Counter.js";
test("testing for render the textarea", () => {
  const { getByPlaceholderText } = render(<Counter />);
  const textArea = getByPlaceholderText("Type or paste your text");
  expect(textArea).toBeTruthy();
});
// note here the test case is case sensitive mean it will also checks if the alphabet is capital or small
