import { Search } from "lucide-react";
import { Link } from "react-router";
import type {SearchResult} from "../../Types/content"

type SearchBoxProps = {
  searchQuery: string;
  searchResults: SearchResult[];
  onSearchChange: (value: string) => void;
  onResultClick: () => void;
  mobile?: boolean;
};
const searchInputBaseClass ="rounded-xl border-0 bg-white px-4 py-3 text-primary outline-none";

const SearchBox = ({ searchQuery, searchResults, onSearchChange, onResultClick,  mobile = false,}: SearchBoxProps) => {
  const input = (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="جستجو..."
      className={mobile ? `${searchInputBaseClass} w-full py-2` : `${searchInputBaseClass} w-56 shadow-lg`}
    />
  );

  const results = searchQuery.trim() && (
    <div className="mt-2 overflow-hidden rounded-2xl bg-primary/95 p-2 shadow-xl">
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Link key={`${result.type}-${result.id}`} to={result.path} onClick={onResultClick} className="block rounded-xl px-4 py-2 text-sm text-gray-200 transition hover:bg-secondary hover:text-primary">
            {result.label}
          </Link>
        ))
      ) : (
        <p className="px-4 py-3 text-sm text-gray-300">نتیجه‌ای پیدا نشد.</p>
      )}
    </div>
  );

  if (mobile) {
    return (
      <div>
        <div className="flex items-center gap-2">
          <Search size={20} className="text-white" />
          {input}
        </div>
        {results}
      </div>
    );
  }

  return (
    <div className="absolute left-0 top-full mt-3 w-56">
      {input}
      {results}
    </div>
  );
};

export default SearchBox;