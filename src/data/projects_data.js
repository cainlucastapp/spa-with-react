const projects = [
  {
    id: 1,
    title: "Pokebub",
    description: "Train and fight your Bubs. Not just another Pokemon rip off, THE Pokemon rip off. Don't sue me Nintendo, its not real.",
    image: "src/assets/pokebub.png",
    category: ["RPG", "Adventure", "Monster Collector"],
    releaseDate: "2024-03-15",
    createdAt: new Date("2024-01-10").toISOString(),
    updatedAt: new Date("2024-03-14").toISOString(),
  },
  {
    id: 2,
    title: "Karen Versus The Manager: Black Friday Edition",
    description: "It's Black Friday. Battle underpaid employees, belittle other customers, and demand to talk to the manager.",
    image: "src/assets/karenverusthemanager.png",
    category: ["Action", "Comedy", "Simulation"],
    releaseDate: "2024-11-20",
    createdAt: new Date("2024-09-05").toISOString(),
    updatedAt: new Date("2024-11-18").toISOString(),
  },
  {
    id: 3,
    title: "Ping Pong With King Kong",
    description: "Unoffical King Kong table tennis game. Play as King Kong against Godzilla, Jet Jaguar, and Gamera.",
    image: "src/assets/pingpongwithkingkong.png",
    category: ["Sports", "Arcade", "Multiplayer"],
    releaseDate: "2024-07-04",
    createdAt: new Date("2024-05-20").toISOString(),
    updatedAt: new Date("2024-07-03").toISOString(),
  },
];

export default projects;