let games = [
    {
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      platform: ["Nintendo Switch", "Wii U"],
    },
    {
      id: 2,
      title: "The Witcher 3: Wild Hunt",
      platform: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
    },
    {
      id: 3,
      title: "God of War",
      platform: ["PS4"],
    },
  ];
  
  let reviews = [
    {
      id: 1,
      rating: 10,
      content: "An amazing open-world adventure!",
      author_id: 1,
      game_id: 1,
    },
    {
      id: 2,
      rating: 8,
      content: "Great story and characters.",
      author_id: 2,
      game_id: 2,
    },
    {
      id: 3,
      rating: 7,
      content: "Good, but a bit repetitive.",
      author_id: 3,
      game_id: 3,
    },
  ];
  
  let authors = [
    {
      id: 1,
      name: "John Doe",
      verified: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      verified: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      verified: true,
    },
  ];
  
  let db = {
    games,
    reviews,
    authors,
  };
  
  export default db;
  