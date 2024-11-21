export async function readSets() {
  const response = await fetch("https://api.magicthegathering.io/v1/sets");
  const sets = await response.json();
  return sets;
}

export async function readExpansion() {
  const response = await fetch("https://api.magicthegathering.io/v1/sets/mom");
  const expansion = await response.json();
  return expansion;
}
