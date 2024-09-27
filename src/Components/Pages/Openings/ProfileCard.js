import { Card,CardBody,Image,Text, Heading,Stack, CardFooter,VStack} from '@chakra-ui/react';
import { useState } from 'react';

function ProfileCard({ link }) {

  const [isHovered, setIsHovered] = useState(false);

  const truncateText = (text) => {
    if (text.length > 18) {
      return text.substring(0, 14) + '..';
    }
    return text;
  };

  return (
    <Card
    minH="20rem"
    minW="15rem"
    maxW="16rem"
    maxH="21rem"
    direction={{ base: 'column', sm: 'row' }}
    overflow="hidden"
    border="none"
    variant="outline"
    backgroundColor="transparent"
  >
    <Stack spacing={0}>
      <CardBody padding={0} overflow="hidden">
        <Image
          width="100%"
          objectFit="cover"
          src={link.profilePicture? link.profilePicture: 'https://www.shutterstock.com/image-vector/unknown-person-hidden-covered-masked-260nw-1552977773.jpg'}
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          alt="Profile Image"
        />
      </CardBody>
      <CardFooter px="0.5rem">
          <VStack alignItems="left" spacing={0}>
          <Heading fontSize="1.5rem" fontWeight={550}>{truncateText(link.name)}</Heading>
          <Text fontSize="1rem"  fontWeight={50}>{truncateText(link.department)}</Text>
        </VStack>
      </CardFooter>
    </Stack>
    </Card>
  );
}

export default ProfileCard;
