import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
/* import { textAlign } from "@mui/system"; */

const CustomerExperiences = () => {
  return (
    <ImageList sx={{ width: "80%", height: "80%", margin: "10%" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Sitter: {item.sitter}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: "https://horsesport.com/wp-content/uploads/2020/04/apr7-featured-image.jpg",
    title: "Loren's House, Squamish, British Columbia",
    sitter: "Felix Almada",
  },
  {
    img: "https://i.pinimg.com/564x/32/e5/72/32e5722ce86670c4e07cba2ee47906ad.jpg",
    title: "Peter's House, Vernon, British Columbia",
    sitter: "Lourence Hill",
  },
  {
    img: "https://remax-listingphotos-ca5.imgix.net/rets-images-vancouver-can/24a88a9cf529aadb5ea4b694acfe31bd4adae3a5-1-large.jpeg",
    title: "Charle's House, Pemberton, British Columbia",
    sitter: "Mike Towels",
  },
  {
    img: "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/01/dogs-in-snow-768x512.jpeg",
    title: "Lara's dog, Squamish, British Columbia",
    sitter: "Nicolas Lombardi",
  },
  {
    img: "https://photos.zillowstatic.com/fp/0ffba2b1b1b168c5a28187df39989f60-p_e.jpg",
    title: "Cami's House, Whistler, British Columbia",
    sitter: "Thomas Campbel",
  },
  {
    img: "https://www.dogster.com/wp-content/uploads/2017/02/iStock-dog-snow.jpg.optimal.jpg",
    title: "Max's dog, Whistler, British Columbia",
    author: "Florencia Gimenez",
  },
  /*{
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  }, */
];

export default CustomerExperiences;
