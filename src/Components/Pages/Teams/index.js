import { Box, Flex, Heading } from "@chakra-ui/react"
import ProfileCard from "./ProfileCard";
import Teams_Datas from"../../../Datas/Teams_Data.json"

export default function Teams(){
  return (
    <Box px={{lg:"5rem",xl:"5rem"}} py={{lg:"3rem",xl:"3rem"}}>
      <Flex direction={{base:"column", md:"column", lg:"row", xl:"row"}}>
        <Box width={{base:"100%", md:"30%", lg:"30%", xl:"30%"}} pt="3rem">
          <Heading size="xl" pl="1rem">Current Team</Heading>
        </Box>
        <Box width={{base:"100%", md:"70%", lg:"70%", xl:"70%"}}>
        {Teams_Datas.map((data, index) => (
          <ProfileCard key={index} data={data} />
        ))}
        </Box>
      </Flex>
    </Box>
  )
}