import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

export const GalleryComponent = () => {
    return (
        <Gallery photos={photos} />
    )
}

