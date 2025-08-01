import { useSearchParams } from "react-router-dom";
import QueryInfo from "../Components/QueryInfo";
import Header from "../Components/Header";

const LandingPage = () => {
  const [searchParams] = useSearchParams();

  // Extract query parameters with fallback values
  const ctx = searchParams.get("ctx") ?? "Guest";
  const service = searchParams.get("service") ?? "our service";
  const mno = searchParams.get("mno") ?? "unknown provider";
  const country = searchParams.get("country") ?? "your country";

  return (
    <>
      <Header />
      <main>
        <QueryInfo ctx={ctx} service={service} mno={mno} country={country} />
      </main>
    </>

  );
};

export default LandingPage;
