import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { fetchPokemon, selectState } from "../redux/pokemonSlice";

import { useSelector, useDispatch } from "react-redux";
import { Layout } from "../components/layout";
import PokemonCard from "../components/pokemonCard/PokemonCard";
import { Formik, Form } from "formik";
import { Pagination } from "../components/pagination";

const HomePage = () => {
  let data = useSelector(selectState);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const pokemonPerPage = 5;
  const [pageNumber, setPageNumber] = useState(0);
  const pageVisited = pageNumber * pokemonPerPage;
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      dispatch(fetchPokemon());
      setPageCount(Math.ceil(data.length / pokemonPerPage));
    }
    return () => (isSubscribed = false);
  }, []);
  console.log(data);
  const onSubmit = (values) => {
    setPageNumber(0);
    setSearch(values.search);
    console.log(data);
  };

  const handleReset = async (values) => {
    setSearch("");
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayPokemons = (
    <Row className="my-6 p-3">
      {data.length &&
        data
          .filter((d) =>
            d.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .slice(pageVisited, pageVisited + pokemonPerPage)
          .map((d) => (
            <Col key={d.url} sm={6} md={4} lg={3} xl={2}>
              <PokemonCard
                name={d.name}
                image={d.image}
                isFavourite={d.favourite}
              />
            </Col>
          ))}
    </Row>
  );
  return (
    <Layout title="Home">
      <div>
        <h1>POKEMON APP </h1>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            search: search || "",
          }}
          enableReinitialize={true}
        >
          {({ handleChange }) => (
            <Form
              style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center",
              }}
              className="d-flex input-group w-auto"
            >
              <input
                type="text"
                name="search"
                id="search"
                className="form-control"
                placeholder="Search by name..."
                onChange={handleChange("search")}
              />
              <button type="submit" color="dark">
                search
              </button>
              <button
                className="mx-2"
                type="reset"
                value=""
                color="info"
                onClick={() => handleReset()}
              >
                reset
              </button>
            </Form>
          )}
        </Formik>
        {displayPokemons}
      </div>
      {data.length && (
        <Pagination pageCount={pageCount} changePage={changePage} />
      )}
    </Layout>
  );
};

export default HomePage;
