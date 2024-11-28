import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.magicthegathering.io/v1/cards?ktk"
        );
        const data = await response.json();
        console.log(data); // This logs the API response to the console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the function when the component mounts
  }, []); // Empty dependency array ensures it only runs once on mount

  return <div>Check the console for API response</div>;
}
