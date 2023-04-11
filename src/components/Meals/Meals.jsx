import { Fragment } from "react";

import MealsSummary from "components/Meals/MealsSummary";
import AvailableMeals from "components/Meals/AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
