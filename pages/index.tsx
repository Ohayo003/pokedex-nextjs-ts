import { useEffect, useState } from "react";
import Router from "next/router";
import NavigatButton from "components/Home/NavigationButton";
import { Box } from "@chakra-ui/react";
import LoadingSpinner from "components/LoadingSpinner";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handelChangeRoute = () => {
      console.log("changing route...");
      setLoading(true);
    };
    const handleChangeRouteComplete = () => {
      console.log("changing route Complete...");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", handelChangeRoute);
    Router.events.on("routeChangeComplete", handleChangeRouteComplete);

    return () => {
      Router.events.off("routeChangeStart", handelChangeRoute);
      Router.events.off("routeChangeComplete", handleChangeRouteComplete);
    };
  }, []);

  return (
    <Box height="100vh" display="flex" justifyContent="center">
      {loading ? <LoadingSpinner /> : <NavigatButton />}
    </Box>
  );
};

export default Home;
