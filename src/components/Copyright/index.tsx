import { Box, Link, Typography } from "@material-ui/core";
import { currentDate } from "../../services/constants";

function Copyright() {
  return (
    <Box pt={4}>
      <Typography variant="body2" color="textPrimary" align="center" className="copy">
        <Link color="inherit"  href="https://github.com/jenniferreis/">
        Copyright © Jennifer Reis
        </Link>
        {" - "}
        {currentDate.getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default Copyright;
