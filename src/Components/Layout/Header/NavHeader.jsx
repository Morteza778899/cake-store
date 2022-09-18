import { useState } from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavList from "./NavList";

const Div = styled.div`
  background-color: #202c45;
  h6 {
    margin: 0;
    color: white;
    font-weight: 900;
    letter-spacing: ${(props) => (props.open ? "2px" : "0")};
    transition: 0.5s all;
  }
  svg {
    margin-inline: 5px;
  }
  nav {
    ul {
      direction: rtl;
      color: white;
      li {
        cursor: pointer;
        width: max-content;
        padding: 5px;
        padding-inline: 10px;
        border-radius: 30px;
        font-size: 15px;
        color: white;
        text-decoration: none;
        @media (hover: hover) {
          //این بلاک مدیا برای این است که خاصیت هاور برای دستگاه های لمسی نباشد تا مشکلاتی بوجود نیاورد
          &:hover {
            background-color: white;
            color: #202c45;
          }
        }
        &.active {
          background-color: white;
          color: #202c45;
        }
        transition: all 0.5s;
        a {
          color: unset;
          text-decoration: unset;
        }
      }
    }
  }
`;

const NavHeader = ({ location }) => {
  const [open, setOpen] = useState(false);
  const smWidth = useMediaQuery("(min-width:600px)");

  const openHandler = (bool) => {
    setOpen(bool);
  };

  return (
    <Box sx={{ position: 'sticky', top: -1, zIndex: 1000 }}>
      <Div open={open}>
        {smWidth ? (
          <Box sx={{ py: 2.5 }}>
            <NavList
              openHandler={openHandler}
              location={location}
            />
          </Box>
        ) : (
          <Accordion expanded={open} square={true} sx={{ bgcolor: "#202c45" }}>
            <AccordionSummary
              sx={{ width: "fit-content", mx: "auto" }}
              onClick={() => setOpen(!open)}
              expandIcon={
                open ? (
                  <CloseIcon sx={{ color: "white", mx: 6 }} />
                ) : (
                  <MenuIcon sx={{ color: "white", mx: 6 }} />
                )
              }
            >
              <h6>دسترسی سریع</h6>
            </AccordionSummary>
            <AccordionDetails>
              <NavList
                openHandler={openHandler}
                location={location}
              />
            </AccordionDetails>
          </Accordion>
        )}
      </Div>
    </Box>
  );
};
export default NavHeader;
