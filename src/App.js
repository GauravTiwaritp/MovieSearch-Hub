import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchdataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfguration, getGenres } from "./Features/home/homeSlice";
import Header1 from "./components/header/Header1";
import Footer1 from "./components/footer/Footer1";
import { Home, Details, Explore, SearchResult, WrongRoute } from "./pages";
function App() {
  //console.log(process.env.TMDB_API_KEY);
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchdataFromApi("/configuration").then((res) => {
      // console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfguration(url));
      genresCall();
    });
  }, []);
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints.forEach((url) => {
      promises.push(fetchdataFromApi(`/genre/${url}/list`));
      return;
    });
    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => {
        allGenres[item.id] = item;
      });
    });
    dispatch(getGenres(allGenres));
  };
  return (
    <BrowserRouter>
      <Header1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<WrongRoute />} />
      </Routes>
      <Footer1 />
    </BrowserRouter>
  );
}

export default App;
