export async function readSets() {
  const response = await fetch("https://api.magicthegathering.io/v1/sets");
  const sets = await response.json();
  console.log(sets);
  return sets;
}
