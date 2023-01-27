import { render, screen,fireEvent, act } from '@testing-library/react';
import BookingForm from "src/components/BookingForm/BookingForm.jsx"

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
})