"use client";

import { useEffect, useState } from "react";

import {
  getHistory,
  deleteAnalysis,
} from "@/services/history.service";

import HistoryCard
from "@/components/history/HistoryCard";

import HistorySkeleton
from "@/components/history/HistorySkeleton";

import EmptyHistory
from "@/components/history/EmptyHistory";

export default function HistoryPage() {

  const [history,
    setHistory] =
    useState<any[]>([]);

  const [loading,
    setLoading] =
    useState(true);

  async function loadHistory() {

    try {

      const response =
        await getHistory();

      setHistory(
        response.results
      );

    } finally {

      setLoading(false);

    }
  }

  async function handleDelete(
    id: string
  ) {

    await deleteAnalysis(id);

    setHistory(
      (prev) =>
        prev.filter(
          (item) =>
            item._id !== id
        )
    );
  }

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <main className="min-h-screen p-10">

      <h1 className="mb-8 text-4xl font-bold">
        Analysis History
      </h1>

      {loading ? (

        <div className="grid gap-4">

          {[...Array(5)].map(
            (_, index) => (
              <HistorySkeleton
                key={index}
              />
            )
          )}

        </div>

      ) : history.length === 0 ? (

        <EmptyHistory />

      ) : (

        <div className="grid gap-4">

          {history.map(
            (item) => (
              <HistoryCard
                key={item._id}
                item={item}
                onDelete={
                  handleDelete
                }
              />
            )
          )}

        </div>

      )}

    </main>
  );
}