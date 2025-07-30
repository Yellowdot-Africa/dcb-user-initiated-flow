type QueryInfoProps = {
  ctx: string;
  service: string;
  mno: string;
  country: string;
};

const QueryInfo = ({ ctx, service, mno, country }: QueryInfoProps) => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Hello Yd !
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-indigo-100 text-indigo-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b">Prop Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b">Value</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">ctx</td>
              <td className="px-6 py-4 border-b">{ctx}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">service</td>
              <td className="px-6 py-4 border-b">{service}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">mno</td>
              <td className="px-6 py-4 border-b">{mno}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">country</td>
              <td className="px-6 py-4 border-b">{country}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default QueryInfo;
