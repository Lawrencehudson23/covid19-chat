import React, { useState, useEffect } from "react";
import { Table } from "@material-ui/core";
import axios from "axios";
// import { makeStyles } from '@material-ui/core/styles';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function CountryList() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "3a01be6e25msh75a6c8a146c41d5p18acf7jsn5846c5ec8a46"
      }
    })
      .then(res => {
        console.log(res.data.countries_stat);
        setState(res.data.countries_stat);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <span role="img" aria-label="emoji">
                  💠
                </span>
                Country
              </TableCell>
              <TableCell align="right">
                <span role="img" aria-label="emoji">
                  ⚠️
                </span>
                New Cases
              </TableCell>
              <TableCell align="right">
                <span role="img" aria-label="emoji">
                  🤧
                </span>
                Active Cases
              </TableCell>
              <TableCell align="right">
                <span role="img" aria-label="emoji">
                  🤒
                </span>
                Critical
              </TableCell>
              <TableCell align="right">
                <span role="img" aria-label="emoji">
                  💪
                </span>
                Recovered
              </TableCell>
              <TableCell align="right">
                <span role="img" aria-label="emoji">
                  😵
                </span>
                New Deaths
              </TableCell>
              <TableCell align="right">
                <span role="img" aria-label="emoji">
                  😱
                </span>
                Total Cases
              </TableCell>
              <TableCell align="right">
                <span role="img" aria-label="emoji">
                  ☠️
                </span>
                Total Deaths
              </TableCell>
              <TableCell align="right">
                <span role="img" aria-label="emoji">
                  😷
                </span>
                Cases/1m
              </TableCell>
              {/* <TableCell align="right">
                <span role="img" aria-label="emoji">
                  💀
                </span>
                Fatality Rate
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((a, i) => (
              <TableRow key={i}>
                <TableCell
                  style={{ fontWeight: "bold" }}
                  component="th"
                  scope="row"
                >
                  {a.country_name}
                </TableCell>
                <TableCell
                  style={{ color: "red", fontWeight: "bold" }}
                  align="right"
                >
                  {a.new_cases}
                </TableCell>
                <TableCell style={{ color: "red" }} align="right">
                  {a.active_cases}
                </TableCell>
                <TableCell style={{ color: "red" }} align="right">
                  {a.serious_critical}
                </TableCell>
                <TableCell
                  style={{ color: "green", fontWeight: "bold" }}
                  align="right"
                >
                  {a.total_recovered}
                </TableCell>
                <TableCell
                  style={{ color: "red", fontWeight: "bold" }}
                  align="right"
                >
                  {a.new_deaths}
                </TableCell>
                <TableCell align="right">{a.cases}</TableCell>
                <TableCell
                  style={{ color: "red", fontWeight: "bold" }}
                  align="right"
                >
                  {a.deaths}
                </TableCell>
                <TableCell
                  style={{ color: "red", fontWeight: "bold" }}
                  align="right"
                >
                  {a.total_cases_per_1m_population}
                </TableCell>
                {/* <TableCell align="right">
                  {Math.floor((a.deaths / a.cases) * 10000) / 100}%
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
