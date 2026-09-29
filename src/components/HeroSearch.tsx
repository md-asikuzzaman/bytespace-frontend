import { Search } from "lucide-react";

const HeroSearch = () => {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search
          size={20}
          strokeWidth={1.8}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />

        <input
          type="search"
          placeholder="Course, topic, creator"
          aria-label="Search for courses"
          className="h-14 w-full rounded-full border border-border bg-surface pr-5 pl-14 text-sm text-foreground outline-none placeholder:text-muted focus:ring-2 focus:ring-primary "
        />
      </div>

      {/* Search Button */}
      <button
        type="button"
        className="h-14 rounded-full bg-secondary-400 px-8 font-medium text-gray-950 transition-all duration-200 hover:bg-secondary-500 cursor-pointer hover-animation"
      >
        Search
      </button>
    </div>
  );
};

export default HeroSearch;
