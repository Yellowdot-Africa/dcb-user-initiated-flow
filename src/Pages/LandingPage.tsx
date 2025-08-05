import { useSearchParams } from "react-router-dom";
import QueryInfo from "../components/QueryInfo";

const LandingPage = () => {
  const [searchParams] = useSearchParams();

  const ctx = searchParams.get("ctx") ?? "Guest";
  const service = searchParams.get("service") ?? "our service";
  const mno = searchParams.get("mno") ?? "unknown provider";
  const country = searchParams.get("country") ?? "your country";

  const queryInfoProps = { ctx, service, mno, country };

  return (
    <>
      <QueryInfo {...queryInfoProps} />
    </>
  );
};

export default LandingPage;
