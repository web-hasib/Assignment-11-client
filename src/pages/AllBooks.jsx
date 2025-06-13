import React, { useState } from "react";
import { useLoaderData } from "react-router";
import TopBookCard from "../components/TopBookCard";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const AllBooks = () => {
  const initialBooks = useLoaderData();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  const categories = ["All", ...new Set(initialBooks.map((b) => b.book_category))];
  // const currentCategory = categories[activeTabIndex];

  const getBooksByCategory = (category) => {
    const books = category === "All"
      ? initialBooks
      : initialBooks.filter((book) => book.book_category === category);

    return books.filter((book) =>
      book.book_title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <Slide direction="right">
      <Helmet>
        <title>Bookshelf || all</title>
      </Helmet>

      <div className="py-5 max-w-6xl mx-auto">
        {/* Search */}
        <div className="text-center mb-6">
          <input
            type="text"
            placeholder="write book title..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-primary text-secondary-content rounded-3xl border-dashed w-full  max-w-md"
          />
        </div>

        <Tabs selectedIndex={activeTabIndex} onSelect={(index) => setActiveTabIndex(index)}>
          <TabList className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((cat) => (
              <Tab
                key={cat}
                className="px-4 py-2 rounded-md bg-indigo-100 cursor-pointer text-accent-content hover:bg-indigo-200"
                selectedClassName="bg-indigo-500 text-white primary text-xl font-semibold shadow"
              >
                {cat}
              </Tab>
            ))}
          </TabList>

          {categories.map((category) => (
            <TabPanel key={category}>
              <h2 className="text-xl font-semibold text-center text-gray-600 mb-4">
                Showing {getBooksByCategory(category).length} books in{" "}
                <span className="text-indigo-500 primary">{category}</span> category
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
                {getBooksByCategory(category).map((book) => (
                  <TopBookCard key={book._id} book={book} />
                ))}
              </div>
            </TabPanel>
          ))}




        </Tabs>
      </div>
    </Slide>
  );
};

export default AllBooks;
