"use client";

import { useEffect,
         useState } from "react";

import { useParams }
from "next/navigation";

const API_URL =
 process.env.NEXT_PUBLIC_BACKEND_URL;

export default function AnalysisPage() {

  const { id } =
    useParams();

  const [analysis,
    setAnalysis] =
    useState<any>(null);

  useEffect(() => {

    async function load() {

      const response =
        await fetch(
          `${API_URL}/api/weather/${id}`
        );

      const data =
        await response.json();

      setAnalysis(
        data.analysis
      );
    }

    load();

  }, [id]);

  if (!analysis)
    return (
      <div className="p-10">
        Loading...
      </div>
    );

  return (
    <main className="p-10">

      <pre>
        {JSON.stringify(
          analysis,
          null,
          2
        )}
      </pre>

    </main>
  );
}