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
      entry.ctx.toLowerCase() === inputCtx &&
      entry.service.toLowerCase() === inputService &&
      entry.mno.toLowerCase() === inputMno &&
      entry.country.toLowerCase() === inputCountry
  );

  useEffect(() => {
    if (!matchedEntry || matchedEntry.mno !== "mtn") {
      navigate("/NotFound");
    }
  }, [matchedEntry, navigate]);

  if (!matchedEntry || matchedEntry.mno !== "mtn") return null;

  return (
    <div className="min-h-screen w-full bg-yellow-500 rounded shadow p-6 sm:p-12 md:p-16 flex items-start justify-center">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 mt-4 sm:mt-8 text-left w-full sm:w-11/12 lg:w-4/5">

        <div className="w-32 sm:w-40 md:w-48 flex justify-center sm:justify-start">
          <img
            src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/mtn-logo.svg"
            alt="MTN logo"
            className="w-full h-auto object-contain"
          />
        </div>


        <div className="flex-1 min-w-[250px]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-wide">
            Welcome to <span className="text-white italic underline">Mobile Network Operator</span>,&nbsp;
            <span className="text-blue-800 font-black uppercase">"{matchedEntry.mno.toUpperCase()}"</span>!
          </h2>
          <p className="text-base sm:text-lg text-gray-900 mt-4">
            To <span className="font-semibold italic text-blue-800">subscribe</span>,&nbsp;
            <a
              href="tel:*123*4#"
              className="text-blue-700 font-bold underline hover:text-blue-900 transition-colors duration-200"
            >
              click here
            </a>
            , or dial <span className="font-semibold text-black">*123*4#</span> on your phone. 📞
          </p>
        </div>

      </div>
    </div>
  );
};

export default QueryInfo;
