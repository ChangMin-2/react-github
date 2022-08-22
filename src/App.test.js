import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

//처음 testid count값이 0인지 테스트
test("count", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0)
});
// + 버튼의 내용이 +이 맞는지 테스트
test("plus btn text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+")
});
// + 버튼 클릭시 count값이 1이 되는지 테스트
test("plus btn pressed", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1)
});
// - 버튼의 내용이 -가 맞는지 테스트
test("minus btn text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+")
});
// - 버튼 클릭 시 count 값이 -1 이 되는지 테스트
test("minus btn pressed", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1)
});