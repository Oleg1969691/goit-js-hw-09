'use strict'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        { small: "./img/plan.jpg", large: "./img/plan.jpg", alt: "Image plan" },
        { small: "./img/bulb.jpg", large: "./img/bulb.jpg", alt: "Image bulb" },
        { small: "./img/phone.jpg", large: "./img/phone.jpg", alt: "Image phone" },
        { small: "./img/room.jpg", large: "./img/room.jpg", alt: "Image room" },
        { small: "./img/restroom.jpg", large: "./img/restroom.jpg", alt: "Image restroom" },
        { small: "./img/office.jpg", large: "./img/office.jpg", alt: "Image office" },
        { small: "./img/work-area.jpg", large: "./img/work-area.jpg", alt: "Image work area" },
        { small: "./img/employee.jpg", large: "./img/employee.jpg", alt: "Image employee" },
        { small: "./img/meeting.jpg", large: "./img/meeting.jpg", alt: "Image meeting" },
    ];

    const gallery = document.querySelector(".gallery");

    images.forEach(image => {
        const galleryItem = document.createElement("li");
        galleryItem.classList.add("gallery-item");

        const link = document.createElement("a");
        link.classList.add("gallery-link");
        link.href = image.large;

        const img = document.createElement("img");
        img.classList.add("gallery-image");
        img.src = image.small;
        img.alt = image.alt;

        link.appendChild(img);
        galleryItem.appendChild(link);
        gallery.appendChild(galleryItem);
    });

    const lightbox = new SimpleLightbox(".gallery a.gallery-link", {
        captionsData: "alt",
        captionDelay: 250
    });
});
