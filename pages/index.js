import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [digimonData, setDigimonData] = useState({});
  const [digimonList, setDigimonList] = useState([]);
  const [error, setError] = useState("");

  // const url = "https://digimon-api.vercel.app/api/digimon";
  const url = "http://localhost:3000/api/digimondata";
  const getDigimon = async () => {
    fetch(url)
      .then(function (response) {
        if (response.status !== 200) {
          setError(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        // Examine the text in the response
        response.json().then(function (data) {
          // console.log("response success", data[0]);
          setDigimonData(data[0]);
          // console.log("digimon data : ", digimonData);
          setDigimonList(data);
          // console.log("digimon list : ", digimonList);
          // setDigimonData(data);
          // setDigimonList(data.results);
        });
      })
      .catch(function (err) {
        setError("Fetch Error :-S", err);
      });
  };

  useEffect(() => {
    getDigimon();
  }, []);

  const TestFunction = (a) => {
    console.log("test", a);
  };
  // Arrow Function

  // function TestFunction() {
  //   console.log("test");
  // }
  // Normal Function

  const Komponen = () => {
    return <p>Test</p>;
  };

  return (
    <div className={styles.container}>
      {/* {console.log("digimon data : ", digimonData)}
      {console.log("digimon list : ", digimonList)} */}
      <Head>
        <title>Digimon Master</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="description" content="Digimon List" />
        <meta
          name="keywords"
          content="Digimon, next js, responsive design, api"
        />
        <meta name="author" content="Idham" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Digimon Master</h1>

        <div>
          {/* {error != "" ? (
            <p>{error}</p>
          ) : (
            <div className={styles.digimonCard}>
              <p>{digimonData.name}</p>
              <img src={digimonData.img} />
              <p>{digimonData.level}</p>
            </div>
          )} */}
          {/* Untuk Print satu data */}

          {digimonList.length === 0 ? (
            <p>{error}</p>
          ) : (
            digimonList.map((obj, index) => {
              // console.log(index);
              return (
                <div key={index} className={styles.digimonCard}>
                  <p>{obj.name}</p>
                  <img className={styles.digimonImg} src={obj.img} />
                  <p>{obj.level}</p>
                </div>
              );
            })
          )}
        </div>
        {/* <button onClick={() => getDigimon()}>Test</button> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/idham-muhammad-8b92b2150/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright Idham ©2020
        </a>
      </footer>
    </div>
  );
}
