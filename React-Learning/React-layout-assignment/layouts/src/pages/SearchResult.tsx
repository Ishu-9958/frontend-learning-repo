import { SearchResultList } from "../components/SearchResultComponent/SearchResultList";
import { SearchResultNav } from "../components/SearchResultComponent/SearchResultNav"


export const SearchResult = () => {
  return (
    <div className="flex flex-col h-full">
      <SearchResultNav/>
      <div className="flex-1 overflow-auto px-6 py-4">
        <div className="max-w-2xl ml-32">
          <div className="h-4 w-48 bg-neutral-200 rounded mb-6"></div>

          <SearchResultList/>
          <SearchResultList/>
          <SearchResultList/>
          <SearchResultList/>
          <SearchResultList/>
        </div>
      </div>
    </div>
  );
};
