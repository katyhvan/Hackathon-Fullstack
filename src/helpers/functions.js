import { coursesContext } from "../contesxts/CoursesContextProvider";

export function getCountOfCoursesInCart() {
  const shop = JSON.parse(localStorage.getItem("shop"));
  return shop ? shop.courses.length : 0;
}

export const calcSubPrice = (course) => +course.count * course.item.price;

export const calcTotalPrice = (courses) => {
  return courses.reduce((prev, curr) => {
    return (prev += curr.subPrice);
  }, 0);
};
