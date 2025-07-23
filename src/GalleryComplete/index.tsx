import Gallery from "./Gallery.js";
import {furnituresPictures} from "../Pictures/furnitures/furnituresPictures.js";
import {root} from "@lynx-js/react";

function GalleryComplete() {
    return <Gallery pictureData={furnituresPictures} />
}

root.render(<GalleryComplete />);