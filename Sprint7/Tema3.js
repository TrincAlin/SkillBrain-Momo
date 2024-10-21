// 3.Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii
function weekDay(dayNumber) {
  let day;
  switch (dayNumber) {
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marți";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sâmbătă";
      break;
    case 7:
      day = "Duminică";
      break;
    default:
      day = "Zi invalidă";
      break;
  }
  return day;
}

console.log(weekDay(3))