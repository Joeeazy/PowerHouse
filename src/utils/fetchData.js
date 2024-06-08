export const exerciseOptions = {
  method: "GET",
  //   url: "https://exercisedb.p.rapidapi.com/status",
  headers: {
    "x-rapidapi-key": "e212caff04msh122f91a76763448p14bc96jsnc8a29aafbedb",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  //if you use fetch and not axios convert it to json
  const data = await response.json();

  return data;
};
