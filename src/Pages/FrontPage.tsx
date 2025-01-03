import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    async function getSetNames() {
      try {
        const setNameData = await readSets();
        setSets(
          setNameData.sets
            .slice()
            .reverse()
            .filter((set: SetProps) => set.type === "expansion")
            .sort(
              (a: SetProps, b: SetProps) =>
                new Date(b.releaseDate).getTime() -
                new Date(a.releaseDate).getTime()
            )
            .slice(1)
        );
      } catch (error) {
        console.error(error);
      }
    }
    getSetNames();
  }, []);

  return (
    <div className="flex justify-center">
      <ul className="w-11/12 cursor-pointer">
        {sets?.map((set, index) => (
          <li
            className={`flex rounded justify-center hover:outline px-8 my-2 ${
              index % 2 === 0 ? "bg-blue-100" : "bg-gray-200"
            }`}
            key={index}
            onClick={() =>
              navigate(`/set/${set.code}`, { state: { name: set.name } })
            }
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:text-left text-center">
              <div className="pr-1">{`(${set.code}) -`}</div>
              <div className="text-lg">{set.name}</div>
              <div className="hidden sm:block pl-2 text-sm text-gray-500">
                release date:{set.releaseDate}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
