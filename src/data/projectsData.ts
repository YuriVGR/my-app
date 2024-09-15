export interface dataType {
  id: string;
  title: string;
  description: string;
  languages: string[];
  version: number;
  image: string;
}

export const projectData: dataType[] = [
  {
    id: "1",
    title: "Project 1",
    description: "test",
    languages: ["Typescript", "Javascript"],
    version: 1,
    image:
      "/exampleimage.jpg",
  },
  {
    id: "2",
    title: "Project 2",
    description: "test",
    languages: ["test"],
    version: 1,
    image: "/exampleimage.jpg",
  },
  {
    id: "3",
    title: "Project 3",
    description: "test",
    languages: ["test"],
    version: 1,
    image: "/exampleimage.jpg",
  },
  {
    id: "4",
    title: "Project 4",
    description: "test",
    languages: ["test"],
    version: 1,
    image: "/exampleimage.jpg",
  },
  {
    id: "5",
    title: "Project 5",
    description: "test",
    languages: ["test"],
    version: 1,
    image: "/exampleimage.jpg",
  },
];


