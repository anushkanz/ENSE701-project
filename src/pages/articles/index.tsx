import { GetStaticProps, NextPage } from "next";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Link from "next/link";
import { useRouter } from "next/router";

// Define the Article type
type Article = {
  _id: string;
  title: string;
  authors: string;
  source: string;
  status: string;
};

const DataFetcher: NextPage = () => {
  const router = useRouter();
  
  // State for data with proper type
  const [data, setData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for the token in cookies
    if (Cookies.get("token") === '') {
      router.push('/');
    }
  }, [router]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (Cookies.get('token')) {
      console.log(Cookies.get('token'));
      try {
        const response = await fetch('http://localhost:8082/api/articles', {
          method: 'GET',
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const fetchedData: Article[] = await response.json();
        setData(fetchedData);

        const cookieType = Cookies.get('type') ?? ''; // Handle undefined cookies
        setType(cookieType);

        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Set error message
        } else {
          setError('An unexpected error occurred'); // Fallback error message
        }
        setLoading(false);
      }
    }
  };

  return (
    <div className="space-y-12">
      <div className="pb-12">
        {loading ? (
          <div className="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
            {/* Loading Spinner */}
          </div>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="flex space-x-2 space-y-2 flex-wrap justify-left items-baseline">
                <h3 className="my-4 text-2xl font-semibold text-gray-700">Dashboard</h3>
                <a href="/articles/new" className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">New Articles</a>
                <a href="/articles/search" className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">Search Articles</a>
                <a href="/logout" className="rounded-lg px-4 py-2 bg-red-700 text-green-100 hover:bg-red-800 duration-300">Logout</a>
              </div>

              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Authors
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Source
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item) => (
                        <tr key={item._id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">{item.title}</p>
                                <p className="text-gray-600 whitespace-no-wrap">{item._id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.authors}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.source}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {item.status === '1' ?
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative">Active</span>
                              </span> :
                              <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                <span className="relative">Not Active</span>
                              </span>
                            }
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                            {type === '1' ? (
                              <Link href={{ pathname: 'articles/view/[id]', query: { id: item._id } }}>
                                View
                              </Link>
                            ) : (
                              <Link href={{ pathname: 'articles/status/[id]', query: { id: item._id } }}>
                                Change Status
                              </Link>
                            )}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                            {type !== '1' ? (
                              <Link href={{ pathname: 'articles/edit/[id]', query: { id: item._id } }}>
                                Edit
                              </Link>
                            ) : (<></>)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataFetcher;
