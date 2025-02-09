import React from 'react';
import { getServerSideProps } from "./lib/fetch_db";

export default function Home() {
  const data = getServerSideProps();

  return (
    <main className="py-20 px-2 text-center bg-white">
      <h1 className="text-4xl mb-4 text-left">최근 10개의 뉴스를 가져왔어요</h1>
      {data.then((response) =>
        response.props.data.map((item, index) => {
          const news_link = "/detail/" + item.id;
          if (index >= 10) return null;
          return (
            <a href={news_link} key={index}>
              <section className="flex items-center justify-between m-2 border p-3 hover:bg-slate-100 hover:text-orange-500 rounded">
                <h1 className="text-lg">{item.title}</h1>
                <p>{item.company}</p>
              </section>
            </a>
          );
        })
      )}
    </main>
  );
}
