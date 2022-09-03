const main = document.querySelector("main");

const sections = [
  {
    id: "hero",
    title: "when i have a camera in my hand, i know no fear",
    description: "-Alfred eisenstaedt-",
    images: ["assets/unsplash_xX2aYSBsyKo.png"],
  },
  {
    id: "airplane",
    title: "I think good dreaming is what leads to good photographs",
    images: ["assets/second-section.png"],
  },
  {
    id: "portraits",
    title: "photography helps people to see",
    images: [
      "assets/third-section/first-image.png",
      "assets/third-section/second-image.png",
      "assets/third-section/third-image.png",
    ],
  },
  {
    id: "people",
    title: "You just have to live and life will give you pictures",
    images: [
      "assets/fourth-section/first-image.png",
      "assets/fourth-section/second-image.png",
    ],
  },
  {
    id: "nature",
    title: "photography is a language more universal than words",
    images: [
      "assets/fifth-section/first-image.png",
      "assets/fifth-section/second-image.png",
      "assets/fifth-section/third-image.png",
    ],
  },
];

const createSection = ({id, title, images, description }) => {
  const section = document.createElement("section");
  section.id = id;

  const headLine = document.createElement("h2");
  headLine.innerText = title.toUpperCase();

  const container = document.createElement("div");
  container.classList.add("container");

  container.append(headLine);

  if (description !== undefined) {
    const descr = document.createElement("p");
    descr.innerText = description;

    container.append(descr);
  }

  const list = document.createElement("ul");

  for (const image of images) {
    const item = document.createElement("li");
    const img = document.createElement("img");

    img.src = image;

    item.append(img);
    list.append(item);
  }

  const button = document.createElement("button");
  button.innerText = "View more";

  container.append(list, button);
  section.append(container);

  return section;
};

main.append(...sections.map(createSection));
