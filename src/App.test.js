import { render, screen } from '@testing-library/react';
import App from './App';

test('render add more to be in the document', () => {
  render(<App />);
  const Element = screen.getByTestId("addmore");
  expect(Element).toBeInTheDocument();
});

test('render submit to be in the document', () => {
  render(<App />);
  const Element = screen.getByTestId("submit");
  expect(Element).toBeInTheDocument();
});