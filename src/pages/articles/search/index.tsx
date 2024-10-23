import React, { FormEvent, useState } from 'react';
import Cookies from 'js-cookie';
import Link from "next/link";
import axios from "axios";

// Define the expected shape of the article data
interface Article {
  _id: string;
  title: string;
  authors: string;
  source: string;
  status: string;
}

const SearchFetcher = () => {
    const [title, setTitle] = useState<string>(""); // Type string for title
    const [data, setData] = useState<Article[]>([]); // Explicitly type the data as an array of Article objects
    const [loading, setLoading] = useState<boolean>(false); // Type boolean for loading state
    const [submitting, setSubmitting] = useState<boolean>(false); // Type boolean for submitting state
    const [error, setError] = useState<string | null>(null); // Type string or null for error state
    
    // Correct the type of event to FormEvent
    const submitSearchArticle = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        if (Cookies.get('token')) {
            try {
                const response = await axios.post(`https://ense701-project-backend.onrender.com/api/articles/search`, {
                    title: title.trim()
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                // Ensure the response data matches the expected shape
                setData(response.data as Article[]); // Type cast the response data to an array of Article objects
                setSubmitting(true);
            } catch (error) {
                setError('An error occurred while fetching articles.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="pb-12">
                <div className="flex space-x-2 space-y-2 flex-wrap justify-left items-baseline">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Search</h3>
                    <a href="/articles/new" className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">New Articles</a>
                    <a href="/articles" className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">Articles</a>
                    <a href="/logout" className="rounded-lg px-4 py-2 bg-red-700 text-green-100 hover:bg-red-800 duration-300">Logout</a>
                </div> 
                <form onSubmit={submitSearchArticle}>
                    <div className="mb-5"> 
                        <label htmlFor="title">Search:</label>
                        <input
                            className="border border-gray-300 shadow p-3 w-full rounded mb-"
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                    </div>   
                    <div className="mb-2">   
                        <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg" type="submit">Submit</button>
                    </div>  
                </form>
                         
                {loading && (
                    <div className="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
                        <div className="absolute z-10 -ml-2 h-8 w-8 animate-bounce">
                            {/* Loading spinner */}
                        </div>
                    </div>
                )}
                {error && <p>Error: {error}</p>}
                {submitting && !loading && data.length > 0 && (
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
                              {data.map((item) => (
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
                                    {item.status === '1' ? (
                                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative">Active</span>
                                      </span>
                                    ) : (
                                      <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span className="relative">Not Active</span>
                                      </span>
                                    )}
                                  </td>
                                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                    <Link href={{ pathname: 'articles/view/[id]', query: { id: item._id } }}>
                                      View
                                    </Link>
                                  </td>
                                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                    <Link href={{ pathname: 'articles/edit/[id]', query: { id: item._id } }}>
                                      Edit
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                    </div>
                )}
                {submitting && !loading && data.length === 0 && (
                    <p>No results found for "{title}".</p>
                )}
            </div>
        </div>
    );
};

export default SearchFetcher;
