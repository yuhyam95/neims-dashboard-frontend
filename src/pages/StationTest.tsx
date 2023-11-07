
import { useState } from "react";
import useStations from "../hooks/useStation";
import stationService, { Station } from "../services/station-service";

const StationList = () => {
  const { stations, error, isLoading, setStations, setError } = useStations();
  const [station, setSelectedStation] = useState('')

  const deleteStation = (stationId: any) => {
    const originalStations = [...stations];
    setStations(stations.filter((u) => u._id !== station._id));

    stationService.delete(stationId).catch((err) => {
      setError(err.message);
      setStations(originalStations);
    });
  };

  const addStation = () => {
    const originalStations = [...stations];
    const newStation = { name: "Test Station", type: "Territorial Office", total: 50678, category: [], change: 'decrease', productList: [], beneficiaries: [], areaofcoverage: [] };
    setStations([newStation, ...stations]);

    stationService
      .create(newStation)
      .then(({ data: savedStation }) => setStations([savedStation, ...stations]))
      .catch((err) => {
        setError(err.message);
        setStations(originalStations);
      });
  };

  const getById = (stationId: any) => {
  stationService.getById(stationId)
    .then((response) => {
      console.log("Station:", response.data);
    })
    .catch((error) => {
      console.error("Error getting station:", error);
    });
  }

  const updateStation = (station: Station) => {
    const originalStations = [...stations];
    const updatedStation = { ...station, name: station.name + "!" };
    setStations(stations.map((u) => (u._id === station._id ? updatedStation : u)));

    stationService.update(updatedStation).catch((err) => {
      setError(err.message);
      setStations(originalStations);
    });
  };


  // const updateStation = (station: Station) => {
  //   const originalStations = [...stations];
  //   const updatedStation = { ...station, name: station.name + "!" };
  
  //   // Rename '_id' to 'id' in the updatedStation object
  //   const updatedStationWithId = { ...updatedStation, id: updatedStation._id };
  
  //   setStations(stations.map((u) => (u._id === station._id ? updatedStationWithId : u));
  
  //   stationService.update(updatedStationWithId).catch((err) => {
  //     setError(err.message);
  //     setStations(originalStations);
  //   });
  // };
  


  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addStation}>
        Add
      </button>
      <ul className="list-group">
        {stations.map((station) => (
          <li
            key={station._id}
            className="list-group-item d-flex justify-content-between"
          >
            {station.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateStation(station)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteStation(station._id)}
              >
                Delete
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => getById(station._id)}
              >
                ID
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StationList;