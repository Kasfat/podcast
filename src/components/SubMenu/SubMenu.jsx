import React from "react";
import Button from "../Button/Button";

const SubMenu = () => {
  return (
    <div className=" grid gap-6 mt-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-7 ">
      <Button>For You</Button>
      <Button>Popular</Button>
      <Button>Trend</Button>
      <Button>Pop</Button>
      <Button>Edm</Button>
      <Button>Rock</Button>
      <Button>More</Button>
    </div>
  );
};

export default SubMenu;
