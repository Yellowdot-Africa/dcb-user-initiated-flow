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
  const navigate = useNavigate();

  const inputCtx = ctx.toLowerCase();
  const inputService = service.toLowerCase();
  const inputMno = mno.toLowerCase();
  const inputCountry = country.toLowerCase();

  const matchedEntry = queryData.find(
    (entry) =>
      entry.ctx.trim().toLowerCase() === inputCtx &&
      entry.service.trim().toLowerCase() === inputService &&
      entry.mno.trim().toLowerCase() === inputMno &&
      entry.country.trim().toLowerCase() === inputCountry
  );

  // Optional: log or handle unmatched cases, but don't return or navigate
  useEffect(() => {
    if (!matchedEntry) {
      navigate("/NotFound");
    }
  }, [matchedEntry]);

  return (
    <>
      {matchedEntry?.mno === "mtn" && (
        <div className="min-h-screen w-full bg-yellow-500 rounded shadow p-4 sm:p-8 md:p-16 flex items-start justify-center font-sans">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 mt-6 sm:mt-10 text-left w-full sm:w-11/12 lg:w-4/5">
            <div className="w-28 sm:w-36 md:w-44 flex justify-center sm:justify-start">
              <img
                src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/mtn-logo.svg"
                alt="MTN logo"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex-1 min-w-[250px] mt-2 sm:mt-0 space-y-6">
              <h2 className="text-2xl sm:text-3xl text-black font-bold leading-snug">
                Welcome to <span className="italic">Yellow Dot Games</span>!
              </h2>

              <h2 className="text-2xl sm:text-3xl text-black font-bold leading-snug">
                To <span className="italic text-blue-800">subscribe,</span>&nbsp;
                <a
                  href="tel:*123*4#"
                  className="text-blue-700 underline hover:text-blue-900 transition-colors duration-200"
                >
                  click here
                </a>
                &nbsp;or dial{" "}
                <span className="text-black font-medium">
                  {matchedEntry.ussd}
                </span>{" "}
                on your phone.
              </h2>
            </div>
          </div>
        </div>
      )}


      {matchedEntry?.mno === "telkom" && (
        <div className="min-h-screen w-full bg-gray-160 rounded shadow p-4 sm:p-8 md:p-16 flex items-start justify-center font-sans">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 mt-6 sm:mt-10 text-left w-full sm:w-11/12 lg:w-4/5">
            <div className="w-28 sm:w-36 md:w-44 flex justify-center sm:justify-start">
              <img
                src="https://www.telkom.co.za/assets/logo/telkom-logo.svg"
                alt="Telkom logo"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex-1 min-w-[250px] mt-2 sm:mt-0 space-y-6">
              <h2 className="text-2xl sm:text-3xl text-black font-bold leading-snug">
                Welcome to <span className="italic">Yellow Dot Games</span>!
              </h2>

              <h2 className="text-2xl sm:text-3xl text-black font-bold leading-snug">
                To <span className="italic text-blue-800">subscribe,</span>&nbsp;
                <a
                  href="tel:*123*4#"
                  className="text-blue-700 underline hover:text-blue-900 transition-colors duration-200"
                >
                  click here
                </a>
                &nbsp;or dial{" "}
                <span className="text-black font-medium">
                  {matchedEntry.ussd}
                </span>{" "}
                on your phone.
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QueryInfo;
