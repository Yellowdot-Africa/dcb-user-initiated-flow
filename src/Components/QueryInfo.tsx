import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import queryData from "../utils/queryData.json";

type QueryInfoProps = {
  ctx: string;
  service: string;
  mno: string;
  country: string;
};

const QueryInfo = (props: QueryInfoProps) => {
  const { ctx, service, mno, country } = props;
  const navigate = useNavigate(); // 👈 You MUST define this

  // Convert inputs to lowercase once
  const inputCtx = ctx.toLowerCase();
  const inputService = service.toLowerCase();
  const inputMno = mno.toLowerCase();
  const inputCountry = country.toLowerCase();

  // Match all query parameters from JSON
  const matchedEntry = queryData.find(
    (entry) =>
      entry.ctx.toLowerCase() === inputCtx &&
      entry.service.toLowerCase() === inputService &&
      entry.mno.toLowerCase() === inputMno &&
      entry.country.toLowerCase() === inputCountry
  );

  // Redirect if not matched or not MTN
  useEffect(() => {
    if (!matchedEntry || matchedEntry.mno !== "mtn") {
      navigate("/NotFound"); // 🔁 Adjust route as needed
    }
  }, [matchedEntry, navigate]);

  if (!matchedEntry || matchedEntry.mno !== "mtn") return null;

  return (
    <div className="w-4/5 max-w-7xl mx-auto bg-yellow-500 rounded shadow p-8 mt-6">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 w-20 flex justify-start">
          <img
            src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/mtn-logo.svg"
            alt="MTN logo"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="pl-8 text-left max-w-xs whitespace-nowrap">
          <h2 className="text-lg font-semibold text-black">
            Welcome to Mobile Network Operator, MTN
          </h2>
          <p className="text-sm text-gray-800">
            To subscribe,{" "}
            <a href="tel:+1234567890" className="text-blue-700 underline font-medium">
              click here
            </a>{" "}
            or dial <span className="font-semibold text-black">+1234567890</span> on your phone.
          </p>
        </div>

      </div>
    </div>
  );
};

export default QueryInfo;
