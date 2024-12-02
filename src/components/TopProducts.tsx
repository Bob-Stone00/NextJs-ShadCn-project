import React from "react";

interface Product {
  id: number;
  name: string;
  popularity: number;
  sales: number;
  popularityColor: string;
  salesColor: string;
  borderC: string;
  progressBarBackground: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Home Decor Range",
    popularity: 45,
    sales: 45,
    popularityColor: "bg-blue-500",
    salesColor: "text-blue-500",
    borderC: "border-blue-500",
    progressBarBackground: "bg-blue-100",
  },
  {
    id: 2,
    name: "Disney Princess Pink Bag 18'",
    popularity: 29,
    sales: 29,
    popularityColor: "bg-green-500",
    salesColor: "text-green-500",
    borderC: "border-green-500",
    progressBarBackground: "bg-green-100",
  },
  {
    id: 3,
    name: "Bathroom Essentials",
    popularity: 18,
    sales: 18,
    popularityColor: "bg-purple-500",
    salesColor: "text-purple-500",
    borderC: "border-purple-500",
    progressBarBackground: "bg-purple-100",
  },
  {
    id: 4,
    name: "Apple Smartwatches",
    popularity: 25,
    sales: 25,
    popularityColor: "bg-orange-500",
    salesColor: "text-orange-500",
    borderC: "border-orange-500",
    progressBarBackground: "bg-orange-100",
  },
];

const TopProducts: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md h-[320px]">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Products</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 text-sm">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Popularity</th>
              <th className="py-2 px-4">Sales</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="py-2 px-4 text-gray-600 text-xs">
                  {product.id.toString().padStart(2, "0")}
                </td>
                <td className="py-2 px-4 font-medium text-xs text-gray-600">
                  {product.name}
                </td>
                <td className="py-2 px-4">
                  <div
                    className={`relative w-full ${product.progressBarBackground} rounded-full h-2.5`}
                  >
                    <div
                      className={`absolute ${product.popularityColor} h-2.5 rounded-full `}
                      style={{ width: `${product.popularity}%` }}
                    ></div>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`font-medium text-xs ${product.salesColor} ${product.borderC} border-2 p-[4px] rounded-lg`}
                  >
                    {product.sales}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
