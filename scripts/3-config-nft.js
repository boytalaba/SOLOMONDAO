import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x9A895B6e94E53d7A241A7e0b1447A7b388463e54");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Solomon the Seaferer",
        description: "This NFT will give you access to be a god of SEA!",
        image: readFileSync("scripts/assets/seaferer.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();