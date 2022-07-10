import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";

export default function VersionsTable(props) {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          {["Name", "Apache Id", "Roles"].map(header => (
            <TableCell className="font-bold" sx={{ border: 0 }} key={header}>
              <Translate>{header}</Translate>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row, index) => (
          <TableRow key={index}>
            <TableCell sx={{ border: 0 }}>{row.name}</TableCell>
            <TableCell sx={{ border: 0 }}>{row.apacheId}</TableCell>
            <TableCell sx={{ border: 0 }}>{row.roles}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
