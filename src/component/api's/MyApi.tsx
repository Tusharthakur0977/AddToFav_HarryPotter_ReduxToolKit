export const fetchData = async () => {
  try {
    let response = await fetch('https://hp-api.onrender.com/api/characters');
    let result = await response.json();
    return result.slice(0, 24);
  } catch (error) {
    console.error(error);
  }
};
