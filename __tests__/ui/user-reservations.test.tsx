import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("Displays resercvations and 'purchase more' button when reservations exist", async () => {
  render(<UserReservations userId={0} />);

  const purchaseButton = await screen.findByRole("button", {
    name: /purchase tickets/i,
  });
  expect(purchaseButton).toBeInTheDocument();

  const ticketsHandling = screen.queryByRole("heading", {
    name: /your tickets/i,
  });
  expect(ticketsHandling).not.toBeInTheDocument();
});
