import { render, screen } from "@testing-library/react";

// import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { Reservation } from "@/components/reservations/Reservation";

test("reservation page shows correct number of available seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});

test("reservation page shows 'sold out' and NO purchase button", async () => {
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);

  const soldOutMessage = await screen.findByRole("heading", {
    name: /sold out/i,
  });
  expect(soldOutMessage).toBeInTheDocument();

  const purchaseButton = screen.queryByRole("button", {
    name: /purchase/i,
  });
  expect(purchaseButton).not.toBeInTheDocument();
});
