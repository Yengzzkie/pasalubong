import { useContext } from "react";
import { SearchResultContext } from "../utils/context";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { CustomSpinner } from "../components/Spinner";

export default function AnimeResult() {
  const { searchResult, loading } = useContext(SearchResultContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full h-full mt-4"> 
      {loading ? (
        <CustomSpinner />
      ) : searchResult.length !== 0 ? (
        searchResult.map((result) => (
          <Link key={result.id} to={result.id === "21" ? "/watch/onepiece" : `/watch/${result.id}/${result.title}`}>
            <Card
              className="bg-[#242424] text-white max-w-sm border-none h-full card"
              imgAlt={result.title.english}
              renderImage={() => <img width={500} height={500} src={result.image} alt="image 1" />}
            >
              <p className="text-md lg:text-lg font-semibold tracking-tight text-white ">
                {result.title}
              </p>
              <p className="font-normal text-[#ccc] text-sm truncate">
                {result.description}
              </p>
            </Card>
          </Link>
        ))
      ) : (
        <div className="col-span-full flex items-center justify-center h-96">
          <h1 className="text-4xl text-center">There is no anime that goes by that title.</h1>
        </div>
      )}
    </div>
  );
}
