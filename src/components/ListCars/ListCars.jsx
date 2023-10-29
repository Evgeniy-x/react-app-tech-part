import './ListCars.scss';
import ItemCar from '../ItemCar/ItemCar';

export default ListCars = ({ cars }) => (
  <ul className="list-cars">
    {cars?.map(car => (
      <ItemCar car={car} key={car.id} />
    ))}
  </ul>
);
