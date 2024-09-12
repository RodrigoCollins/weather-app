import { ResultDetail } from "@/components/home/ResultDetail";
import { SearchForm } from "@/components/form";
import { useSearchCity } from "@/hooks";

const Home: React.FC = () => {
  const { results, isLoading, error, searchCity } = useSearchCity();

  return (
    <>
      <SearchForm isLoading={isLoading} onSearch={searchCity} />
      <ResultDetail data={results} error={error} isLoading={isLoading} />
    </>
  );
};

export default Home;
