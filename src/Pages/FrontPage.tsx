import { useEffect, useState } from "react";
import { readSets } from "../api";

export type SetProps = {
  set: string;
  sets: string;
  name: string;
  code: string;
  releaseDate: string;
  type: string;
};

export default function FrontPage() {
  const [sets, setSets] = useState<SetProps[]>();

  useEffect(() => {
    async function getSetNames() {
      try {
        const setNameData = await readSets();
        setSets(
          setNameData.sets
            .slice()
            .reverse()
            .filter((set: SetProps) => set.type === "expansion")
        );
      } catch (error) {
        console.error(error);
      }
    }
    getSetNames();
    console.log(setSets);
  }, []);

  return (
    <div>
      <ul>
        {sets?.map((set, index) => (
          <li
            className="flex rounded-lg justify-center bg-slate-300 mx-3 my-2"
            key={index}
          >
            <div>{`(${set.code})`}</div>
            <div>{`${set.name}`}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
