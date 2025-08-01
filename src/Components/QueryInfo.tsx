import queryData from "../utils/queryData.json";

type QueryInfoProps = {
  ctx: string;
  service: string;
  mno: string;
  country: string;
};

const QueryInfo = ({ ctx, service, mno, country }: QueryInfoProps) => {

  // Match all query parameters from JSON
  const matchedEntry = queryData.find(
    (entry) =>
      entry.ctx.toLowerCase() === ctx.toLowerCase() &&
      entry.service.toLowerCase() === service.toLowerCase() &&
      entry.mno.toLowerCase() === mno.toLowerCase() &&
      entry.country.toLowerCase() === country.toLowerCase()
  );

  return (
    <>
      {matchedEntry && matchedEntry?.mno === "mtn" && (
        <div className="w-4/5 max-w-7xl mx-auto bg-white rounded shadow p-8 mt-6 bg-yellow-500">
          <div className="flex items-start mb-4 bg-yellow-500">

            <div className="flex-shrink-0 w-20 flex justify-start">
              <img
                src="https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/mtn-logo.svg"
                alt="React logo"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="pl-8 text-right max-w-xs">
              <h2 className="text-lg font-semibold text-gray-800">MTN</h2>
              <p className="text-sm text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
          </div>
        </div>)}
    </>
  );
};

export default QueryInfo;
