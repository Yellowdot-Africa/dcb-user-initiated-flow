import { useSearchParams } from "react-router-dom";
import QueryInfo from "../Components/QueryInfo";


const LandingPage = () => {
  const [searchParams] = useSearchParams();

  // Extract query parameters with fallback values
  const ctx = searchParams.get("ctx") ?? "Guest1";
  const service = searchParams.get("service") ?? "our service";
  const mno = searchParams.get("mno") ?? "unknown provider";
  const country = searchParams.get("country") ?? "your country";

  return (
    <main className="min-h-screen flex items-center justify-center">
      <QueryInfo ctx={ctx} service={service} mno={mno} country={country} />
    </main>
  );
};

export default LandingPage;
