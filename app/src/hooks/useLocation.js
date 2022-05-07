import { useState } from "react";

const useLocation = () => {
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    try {
      setLoading(true);
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation(
            `${position.coords.latitude}, ${position.coords.longitude}`
          );
        });
      } else {
        setError("Location is not available");
        setLocation("");
      }
    } catch (e) {
      console.log(e);
      setLocation("");
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    location,
    loading,
    getLocation,
  };
};

export default useLocation;
