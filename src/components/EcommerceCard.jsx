// components/EcommerceCard.jsx
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation

export function EcommerceCard({ product }) {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle when the View Product button is clicked
  const handleViewProduct = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card className="w-full my-10  hover:scale-105 hover:shadow-none">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain w-96"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {product.title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${product.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {product.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={handleViewProduct}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          View Product
        </Button>
      </CardFooter>
    </Card>
  );
}
