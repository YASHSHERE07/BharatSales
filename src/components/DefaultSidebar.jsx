import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export function CategorySidebar({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Categories
        </Typography>
      </div>
      <List>
        <ListItem button onClick={() => onSelectCategory("all")}>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          All Products
        </ListItem>
        {categories.map((category) => (
          <ListItem
            key={category}
            button
            onClick={() => onSelectCategory(category)}
          >
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </ListItem>
        ))}
      </List>
    </>
  );
}
