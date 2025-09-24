import { db } from "../db";
import { collectionsTable } from "../collections/collections.sql";

export function collectionsSeeder() {
  return db.insert(collectionsTable).values([
    {
      name: "Shanks Chase",
      series: "One Piece 939",
      sticker: "Chase / Big Apple Collectibles",
      condition: "Bad Box",
      pictures: [
        "https://drive.google.com/open?id=1f2Zuf_wiqyP36FiHlrHOcRtztWDxkong",
        "https://drive.google.com/open?id=1dPmoib0bPghw94IN3PhXgL4mJx5Bw8eS",
        "https://drive.google.com/open?id=1CSD7Xvcb6-Fw02BCXdPttlbVJGTp8nh4",
        "https://drive.google.com/open?id=1UUhYQE2WzTATRjYWSXn4MCCdUmSuwii0",
      ],
      remarks: null,
      stocks: 1,
      price: 9000,
      negotiable: true,
    },
    {
      name: "Shanks Regular",
      series: "One Piece 939",
      sticker: "Big Apple Collectibles",
      condition: "Mint",
      pictures: [
        "https://drive.google.com/open?id=1rglbF_6BfdPh7rNNXCVMvTJGhHcRVz5R",
      ],
      remarks: null,
      stocks: 5,
      price: 1500,
      negotiable: true,
    },
    {
      name: "Mickey The True Original",
      series: "01",
      sticker: "Funko Limited Edition",
      condition: "Mint",
      pictures: [
        "https://drive.google.com/open?id=19yAYtdMc85b_jZ3PcAS_zFi2tte2hr89",
      ],
      remarks: "Paint chip on nose",
      stocks: 1,
      price: 500,
      negotiable: true,
    },
    {
      name: "Mickey Mouse",
      series: "Disney",
      sticker: "Asia Pacific Exclusive",
      condition: "7 to 8",
      pictures: [
        "https://drive.google.com/open?id=1WwHSCKfk7edzwGRoLhaFcCTT7-IbMTFB",
        "https://drive.google.com/open?id=19Qqm3x3wRcWpuB4okR3spr6o6loBbsfZ",
      ],
      remarks: null,
      stocks: 1,
      price: 1000,
      negotiable: true,
    },
  ]);
}
