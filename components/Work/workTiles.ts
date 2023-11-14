export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `I've worked on`,
    title: `Handy Hub`,
    image: {
      src: '/static/images/handyHub.jpeg',
      width: 600,
      height: 770,
    },
  },
  {
    description: "I've created",
    title: 'Image Gallery',
    image: {
      src: '/static/images/ImageGallery.jpeg',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I've pair Programmed on`,
    title: 'Project Anniverse',
    image: {
      src: '/static/images/ProjectAnniverse.jpeg',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I've created`,
    title: 'SpaceX',
    image: {
      src: '/static/images/Spacex.jpeg',
      width: 600,
      height: 717,
    },
  },
];
