import { useEffect, useState } from "react";
import { getDentists } from "../services/api";
import DentistCard from "../components/DentistCard";
import BookingModal from "../components/BookingModal";
import SkeletonCard from "../components/SkeletonCard";

export default function Home() {
  const [dentists, setDentists] = useState([]);
  const [selectedDentist, setSelectedDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await getDentists();
        setDentists(data);
      }
      finally{
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  const filteredDentists = dentists.filter((d) =>
    `${d.name} ${d.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDentists = filteredDentists.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search by name or location..."
        className="border p-2 rounded mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array(6)
              .fill()
              .map((_, i) => <SkeletonCard key={i} />)
          : paginatedDentists.map((d) => (
              <DentistCard
                key={d._id}
                dentist={d}
                onBook={setSelectedDentist}
              />
            ))
        }

        {selectedDentist && (
          <BookingModal
            dentist={selectedDentist}
            onClose={() => setSelectedDentist(null)}
          />
        )}
      </div>

      <div className="flex justify-center fixed bottom-2 right-5 gap-2">
        {[...Array(Math.ceil(filteredDentists.length / itemsPerPage))].map(
          (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}