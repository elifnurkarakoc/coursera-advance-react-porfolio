import { Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <div>
      <Image src={imageSrc} />
      <HStack>
        <Heading>{title}</Heading>
      </HStack>
      <Text>{description}</Text>
    </div>
  );
};

export default Card;
