import { useEffect } from 'react';
import { useScholarshipStore } from './state/scholarshipStore';

function App() {
  const { data, loading, error, fetchData } = useScholarshipStore();

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found.</p>;

  const {
    name,
    description,
    location,
    total_value,
    tuition,
    stipend_per_year,
  } = data;

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{name}</h1>
      <p>{description[0]?.data}</p>

      <section>
        <h3>Location:</h3>
        <p>{location.name}</p>

        <h3>Scholarship Value:</h3>
        <p>€{total_value.toLocaleString()}</p>

        <h3>Tuition:</h3>
        <p>€{tuition.toLocaleString()}</p>

        <h3>Stipend (per year):</h3>
        <p>€{stipend_per_year.toLocaleString()}</p>
      </section>
    </main>
  );
}

export default App;
