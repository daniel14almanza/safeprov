import React, { useState, useEffect } from "react";
import { screening } from "../services/http";

const ScreeningModal = ({ isOpen, onClose, provider }) => {
  const [source, setSource] = useState("offshore");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 5; // how many rows per page

  useEffect(() => {
    if (isOpen && provider?.legalName) {
      fetchScreening(provider.legalName, source);
    }
  }, [isOpen, provider, source]);

  const fetchScreening = async (name, source) => {
    console.log("Fetching screening for:", name, "with source:", source);
    setLoading(true);
    setResult(null);
    try {
      const data = await screening(name, source);
      console.log("Screening API result:", data);
      setResult(data);
      setPage(1); // reset to first page on new fetch
    } catch (err) {
      console.error("Screening API error:", err);
      setResult({ error: "Failed to fetch screening data" });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  // Pagination slice
  const paginatedResults = result?.results?.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const totalPages = result?.results
    ? Math.ceil(result.results.length / pageSize)
    : 1;

  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-bg-200 text-gray-100 rounded-lg shadow-lg w-[700px] max-h-[90vh] overflow-hidden flex flex-col p-6">

        {/* Provider Name + Hits */}
        <h2 className="text-lg font-bold mb-2">
          {provider.legalName}{" "}
          <span className="text-gray-400">
            ({result?.hits ?? 0} hits)
          </span>
        </h2>

        {/* Dropdown */}
        <label className="block mb-2">Select Source:</label>
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full bg-bg-300 text-gray-100 p-2 rounded mb-4"
        >
          <option value="offshore">Offshore</option>
          <option value="worldbank">World Bank</option>
          <option value="ofac">OFAC</option>
        </select>

        {/* Results */}
        <div className="flex-1 overflow-auto">
          {loading && <p>Loading...</p>}

          {!loading && result?.results?.length > 0 && (
            <table className="w-full table-auto border-collapse text-xs">
              <thead className="bg-bg-300 text-gray-300 sticky top-0">
                <tr>
                  {Object.keys(result.results[0]).map((key) => (
                    <th key={key} className="px-3 py-2 text-left">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-bg-300">
                {paginatedResults.map((item, idx) => (
                  <tr key={idx} className="hover:bg-bg-300">
                    {Object.values(item).map((val, i) => (
                      <td key={i} className="px-3 py-2">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {!loading && result?.results?.length === 0 && (
            <p>No results found.</p>
          )}

          {!loading && result?.error && (
            <p className="text-red-400">{result.error}</p>
          )}
        </div>

        {/* Pagination */}
        {result?.results?.length > pageSize && (
          <div className="flex justify-between items-center mt-4 text-sm">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-2 py-1 bg-bg-300 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-2 py-1 bg-bg-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-primary-200 text-bg-200 px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreeningModal;
