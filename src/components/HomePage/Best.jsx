import { useEffect, useState } from "react";
import { fetchTopContributors, fetchPopularTags } from "../../config/functions";

export function Best() {
  const [contributors, setContributors] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchTopContributors().then(setContributors);
    fetchPopularTags().then(setTags);
  }, []);

  return (
    <div className="p-4 lg:mt-20 text-center flex flex-col md:flex-row lg:flex-col gap-4 lg:gap-8 justify-around w-full">
        <div className="mb-6 lg:border-b-2 lg:border-double pb-4">
            <h3 className="text-xl font-bold mb-6 px-8">Meilleurs contributeurs</h3>
            <ol className="mb-4 list-decimal list-inside bold-marker">
                {contributors.map(user => (
                <li className="my-4 text-[var(--dark)]" key={user.id}>{user.username}</li>
                ))}
            </ol>
        </div>
        <div className="mb-6 lg:border-b-2 lg:border-double pb-4">
            <h3 className="text-xl font-bold mb-6 px-8">Tags les plus populaires</h3>
            <ol className="mb-4 list-decimal list-inside bold-marker">
                {tags.map((tagObj, i) => (
                <li className="my-4 text-[var(--dark)]" key={i}>{tagObj.tag}</li>
                ))}
            </ol>
        </div>
    </div>
  );
}
