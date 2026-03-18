import { useId } from 'react';
interface Props {
  searchQuery: (item: string) => void;
}
export const SearchForm = ({ searchQuery }: Props) => {
  const id = useId();
  const formHandler = (formData: FormData) => {
    const newQuery = formData.get('search') as string;
    if (newQuery.trim() !== '') {
      searchQuery(newQuery);
    }
  };
  return (
    <form action={formHandler}>
      <label htmlFor={`search-${id}`}></label>
      <input id={`search-${id}`} name="search" type="text" />
      <button>Search</button>
    </form>
  );
};
