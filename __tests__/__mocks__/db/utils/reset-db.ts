import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

import { readFakeData } from "../../fakeData";

export const resetDB = async () => {
  // filesafe against resetting production db
  const safeToReset = process.env.NODE_ENV === "test" || process.env.CYPRESS;
  if (!safeToReset) {
    // eslint-disable-next-line no-console
    console.log("WARNING:database reset unavailable outside test environment");
    return;
  }

  const { fakeShows, fakeBands, fakeReservations, fakeUsers } =
    await readFakeData();

  // fakeDataの中身をJSONファイルに書き込む
  await Promise.all([
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
};
