import { useEffect, useState } from "react";
import SetName from "../Components/SetName";
import { readSets } from "../api";

export type SetProps = {
  set: string;
};

export default function FrontPage() {
  const [setName, setSetName] = useState<SetProps[]>();

  useEffect(() => {
    async function getSetNames() {
      try {
        const setNameData = await readSets();
        setSetName(setNameData);
      } catch (error) {
        console.error(error);
      }
    }
    getSetNames();
  }, []);

  return (
    <div>
      <SetName></SetName>
    </div>
  );
}
