import "./Dashboard.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axiosInstance from "../../config/axios.config";
import { environment } from "../../environments/environment";
import { handleError } from "../utils/CommonFn";

const Dashboard = () => {
  // const [selectedOption, setSelectedOption]: any = React.useState();
  // const [top100Films, setTop100Films]: any = React.useState([]);

  // React.useEffect(() => {
  //   axiosInstance
  //     .get(`${environment.baseApiURL}auth/v1/test`)
  //     .then((result: any) => {
  //       if (result.data.code === 200) {
  //         setTop100Films(result.data.data);
  //         console.log(result.data.data);
  //         // return result.data.data;
  //       } else if (result.data.code === 206) {
  //         // return result.data.data;
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // return err;
  //     });
  // }, []);

  // React.useEffect(() => {
  //   axiosInstance
  //     .get(`${environment.baseApiURL}auth/v1/test1`)
  //     .then((result: any) => {
  //       if (result.data.code === 200) {
  //         setTop100Films(result.data.data);
  //         console.log(result.data.data);
  //         // return result.data.data;
  //       } else if (result.data.code === 206) {
  //         // return result.data.data;
  //       }
  //     })
  //     .catch((err) => {
  //       handleError(err);
  //       console.log(err);
  //       // return err;
  //     });
  // }, []);

  // React.useEffect(() => {
  //   const id = "3FCC371E-F1F4-43BC-86B5-006BE4AD0541";
  //   const c = top100Films.find((val: any) => {
  //     return val.SessionGuID == id;
  //   });
  //   setSelectedOption(c);
  // }, [top100Films]);
  // console.log(selectedOption);

  // const handVal = (val: any) => {
  //   console.log(val);
  // };

  // const handleDefault = () => {
  //   const id = 3;
  //   const c = top100Films.find((val: any) => {
  //     return val.RoleID == id;
  //   });
  //   return setSelectedOption(c);
  // };

  return (
    <>
      <div className="common-top">
        <h1>This is from Dashboard</h1>
      </div>
      {/* {selectedOption && (
        <Autocomplete
          options={top100Films}
          getOptionLabel={(option: any) => option.EndDate}
          defaultValue={selectedOption}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Favorites"
            />
          )}
          onChange={(event, value) => {
            handVal(value);
          }}
        />
      )} */}

      {/* {inputValue} */}
      {/* <Select
        defaultValue={selectedOption}
        onChange={handVal}
        options={options}
        // getOptionLabel={options.label}
        // getOptionValue={options.value}
      /> */}
    </>
  );
};

export default Dashboard;
