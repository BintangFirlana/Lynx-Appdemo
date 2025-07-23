import Gallery from "./Gallery.js";
import {furnituresPictures} from "../Pictures/furnitures/furnituresPictures.js";
import {root} from "@lynx-js/react";

function AddNiceScrollbar() {
    return <Gallery
         pictureData={furnituresPictures} />
}

root.render(<AddNiceScrollbar />);