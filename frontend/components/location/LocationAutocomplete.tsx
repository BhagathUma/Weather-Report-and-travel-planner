"use client";

import {
  useEffect,
  useState,
} from "react";

import { Search } from "lucide-react";

import { useDebounce }
from "@/hooks/useDebounce";

import { searchLocations }
from "@/services/location.service";

import {
  LocationOption
} from "@/types/weather-form";

interface Props {
  selected?: LocationOption;

  onSelect: (
    location: LocationOption
  ) => void;
}

export default function LocationAutocomplete({
  selected,
  onSelect,
}: Props) {

  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState<LocationOption[]>([]);

  const [loading, setLoading] =
    useState(false);

  const debouncedQuery =
    useDebounce(query, 400);

  useEffect(() => {

    async function fetchLocations() {

      if (
        debouncedQuery.length < 2
      ) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);

        const data =
          await searchLocations(
            debouncedQuery
          );

        setResults(data);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchLocations();

  }, [debouncedQuery]);

  return (
    <div className="relative">

      <div
        className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        py-3
      "
      >
        <Search size={18} />

        <input
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Search city, town, landmark..."
          className="
            w-full
            bg-transparent
            outline-none
          "
        />
      </div>

      {loading && (
        <div className="mt-2 text-sm text-slate-400">
          Searching...
        </div>
      )}

      {results.length > 0 && (
        <div
          className="
          absolute
          z-50
          mt-2
          w-full
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-slate-900
        "
        >

          {results.map(
            (location) => (
              <button
                key={location.id}
                onClick={() => {
                  onSelect(location);
                  setQuery(
                    location.name
                  );
                  setResults([]);
                }}
                className="
                  block
                  w-full
                  px-4
                  py-3
                  text-left
                  hover:bg-white/5
                "
              >
                <div>
                  {location.name}
                </div>

                <div
                  className="
                    text-xs
                    text-slate-400
                  "
                >
                  {location.region},{" "}
                  {location.country}
                </div>
              </button>
            )
          )}

        </div>
      )}

      {selected && (
        <div
          className="
          mt-3
          text-sm
          text-cyan-400
        "
        >
          Selected:
          {" "}
          {selected.name}
        </div>
      )}
    </div>
  );
}