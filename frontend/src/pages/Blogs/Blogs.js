import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Blogs = () => {
  return (
    <>
      <Header></Header>
      <section className="text-center">
        <div className="h-80 grid place-content-center bg-indigo-500">
          <h1 className="text-4xl font-medium font-poppins text-white">
            “Blog Section”
          </h1>
        </div>
        <div className="my-8">
          <article className="max-w-4xl mx-auto px-6 my-8">
            <h2 className="text-3xl font-bold mb-8">
              {" "}
              Difference Between JavaScript & NodeJS
            </h2>     
              <table class="table-fixed mx-auto text-center border-collapse border">
                <thead>
                  <tr>
                    <th className="w-80 py-2 border bg-indigo-100">
                      JavaScript
                    </th>
                    <th className="w-80 py-2 border bg-indigo-100">NodeJs</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="border p-2">
                      JavaScript Is A Programming Language
                    </td>
                    <td className="border p-2">
                      NodeJS is a javascript runtime
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">
                      Javascript runs only in web browser
                    </td>
                    <td className="border p-2">
                      NodeJS takes javascript out of the browser to run in
                      server and other machines
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">
                      JavaScript Is Used For Form Validation, Interactive
                      Behaviors in web pages
                    </td>
                    <td className="border p-2">
                      NodeJS is used for write server-side code in javascript,
                      creating backend for websites.
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">
                      Almost Every Browser has javascript engine to run
                      javascript code into the browser. chrome's v8 engine and
                      firefox's spidermonkey are the most popular javascript
                      engine
                    </td>
                    <td className="border p-2">
                      NodeJS runs with the chrome's v8 engine. it doesnt work in
                      any engine
                    </td>
                  </tr>
                </tbody>
              </table>
          </article>
          <article className="max-w-4xl mx-auto px-6 my-8">
            <h2 className="text-3xl font-bold mb-8">
              When should you use NodeJS and when should you use Mongodb
            </h2>
           <div>
           <p className="text-justify">
             <strong>NODEJS:</strong> NodeJS is a javascript runtime which runs javascript codes outside of the browser. At First JavaScript Was only able to run in the browser. Nodejs made it possible to run it outside of the browser. We can now write javascript for backend development by the help of nodejs. Thats Why It is called a runtime and it is not a programming language. We Should Use nodejs when we want to develope backend for a website or app.
            </p>
            <br />
           <p className="text-justify">
             <strong>MONGODB:</strong> MongoDB is a database. It is a nosql database. It gives us chance to efficiently store documents in a database and to perform operations like data updates, delete, add, read or search. If a application need to store data in a simple and efficient way then we can use mongodb. this is the use case of mongodb. 
            </p>
           </div>
          </article>
          <article className="max-w-4xl mx-auto px-6 my-8">
            <h2 className="text-3xl font-bold mb-8">
              {" "}
              Differences between sql and nosql databases
            </h2>
            <table class="table-fixed mx-auto text-center border-collapse border">
                <thead>
                  <tr>
                    <th className="w-80 py-2 border bg-indigo-100">
                    SQL
                    </th>
                    <th className="w-80 py-2 border bg-indigo-100">NoSQL</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="border p-2">
                    Sql are relational databases
                    </td>
                    <td className="border p-2">
                    Non-Relational database
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">
                    Structured data Contains tables/columns
                    </td>
                    <td className="border p-2">
                    Have dynamic schemas for unstructured data.
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">
                    Table-based
                    </td>
                    <td className="border p-2">
                    Document, key-value, graph, or wide-column stores
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">
                        example:
                    Oracle, MySQL, Microsoft SQL Server, and PostgreSQL
                    </td>
                    <td className="border p-2">
                        example:
                    MongoDB and CouchDB, Redis , DynamoDB,  Cassandra , HBase,  Neo4j , Amazon Neptune
                    </td>
                  </tr>
                </tbody>
              </table>
          </article>
          <article className="max-w-4xl mx-auto px-6 my-8">
            <h2 className="text-3xl font-bold mb-8">
              What is the purpose of JWT and how does it work
            </h2>
            <p className="text-justify">
            The Purpose Of jwt is to identify wether the user accessing a website data is someone who is authorized. If a user isnt authorized then it will be a great disaster for a website if he found any valuable data. jwt add extra layer to user authentication. so that only valid user can have the access to read and write data. jwt stand for json web token. when a user login jwt generate a token which is sent to client. the token is then stored in local storage or browser cookies. the token has 3 part. Header , payload and signature. Header store the algorithm which is used to decode the token. payload is the data that is stored in the token. Finally the signature which is how the server verifies the token.
            </p>
          </article>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Blogs;
