import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";

import BandComponent from "../../pages/bands/[bandId]";

test("band component displays band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent error={null} band={fakeBands[0]} />);
  const heading = screen.getByRole("heading", {
    name: "The Wandering Bunnies",
  });
  expect(heading).toBeInTheDocument();
});
