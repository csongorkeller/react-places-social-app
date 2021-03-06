import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/JrYpHTzbE9qSu85id9CSkQhs7dM=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65018226/151006_19_00_22_5DSR9489.0.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lon: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/JrYpHTzbE9qSu85id9CSkQhs7dM=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65018226/151006_19_00_22_5DSR9489.0.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lon: -73.9878531,
    },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/JrYpHTzbE9qSu85id9CSkQhs7dM=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65018226/151006_19_00_22_5DSR9489.0.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lon: -73.9878531,
    },
    creator: "u3",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId); //filter out places belong to the user
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
