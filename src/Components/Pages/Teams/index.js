import { Box, Flex, Heading, Button,Td, Tr, TableContainer,Table,Tbody } from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";
import Teams_Datas from "../../../Datas/Teams_Data.json";
import Modal_Page from "./Modal_Page";
import { useState } from "react";

export default function Teams() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAlumniData, setSelectedAlumniData] = useState(null);

  return (
    <Box px={{ lg: "5rem", xl: "5rem" }} py={{ lg: "3rem", xl: "3rem" }}>
      {/* ------------------------For Current Members------------------------------ */}
      <Flex direction={{ base: "column", md: "column", lg: "row", xl: "row" }}>
        <Box
          width={{ base: "100%", md: "30%", lg: "30%", xl: "30%" }}
          pt="3rem"
        >
          <Heading size="xl" pl="1rem">
            Current Team
          </Heading>
        </Box>
        <Box width={{ base: "100%", md: "70%", lg: "70%", xl: "70%" }}>
          {Teams_Datas.filter((data) => data.status === "current").map(
            (data, index) => (
              <ProfileCard key={index} data={data} />
            )
          )}
        </Box>
      </Flex>

      {/* ------------------------For Alumni------------------------------ */}
      <Flex direction={{ base: "column", md: "column", lg: "row", xl: "row" }}>
        <Box
          width={{ base: "100%", md: "30%", lg: "30%", xl: "30%" }}
          pt="3rem"
        >
          <Heading size="xl" pl="1rem" pb="3rem">
            Alumni
          </Heading>
        </Box>
        <Box
          width={{ base: "100%", md: "70%", lg: "70%", xl: "70%" }}
          p={{ base: "1rem", lg: "8rem" }}
        >
          <TableContainer>
          <Table variant="simple">
          <Tbody>
          {Teams_Datas.filter((data) => data.status === "Alumni").map(
            (data, index) => (
              <Tr key={index}>
                <Td>
                <Heading fontSize="lg" key={index}>
                  {data.name}
                </Heading>
                </Td>
                <Td>
                <Button
                  onClick={() => {
                    setSelectedAlumniData(data); // Set the selected alumni data
                    setIsModalOpen(true);
                  }} // Set state to open the modal
                  variant="link"
                  size="sm"
                  color="teal"
                  pt="1rem"
                >
                  Know More
                </Button>
                </Td>
                </Tr>
            )
          )}
           </Tbody>
        </Table>
      </TableContainer>
          {/* --------------------------For Modal -----------------------------------------*/}

          {/* Modal for Full Details of Alumni */}
          {isModalOpen && (
            // eslint-disable-next-line react/jsx-pascal-case
            <Modal_Page
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              data={selectedAlumniData}
            />
          )}
        </Box>
      </Flex>
    </Box>
  );
}
