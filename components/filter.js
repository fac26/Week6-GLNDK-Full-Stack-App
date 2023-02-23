import { useForm } from 'react-hook-form';

const Filter = (props) => {
  const { register, handleSubmit } = useForm();
  const { publisher, setPublisher } = props;

  return (
    <form
      onSubmit={handleSubmit((data) => {
        // console.log(props.comicsData);
        // console.log(data.publisher);
        // console.log(props.comicsData[0].publisher_name === data.publisher);
        // console.log('set filter:', data);
        setPublisher(data);
      })}
    >
      <select {...register('filter')}>
        <option value="all">All</option>
        <option value="Marvel Comics">Marvel Comics</option>
        <option value="DC Comics">DC Comics</option>
        <option value="Image Comics">Image Comics</option>
        <option value="Valiant Comics">Valiant Comics</option>
        <option value="Berger Books">Berger Books</option>
        <option value="Dark Horse Comics">Dark Horse Comics</option>
        <option value="DC Black Label">DC Black Label</option>
      </select>
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;
