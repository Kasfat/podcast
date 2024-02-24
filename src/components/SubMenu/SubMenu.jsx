import React from "react";
import Button from "../Button/Button";

const SubMenu = () => {
  return (
    <div className=" grid gap-6 mt-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-7 ">
      <Button color='light'>For You</Button>
      <Button color='light'>Popular</Button>
      <Button color='light'>Trend</Button>
      <Button color='dark'>Pop</Button>
      <Button color='dark'>Edm</Button>
      <Button color='dark'>Rock</Button>
      <Button color='dark'>More</Button>
    </div>
  );
};

export default SubMenu;
