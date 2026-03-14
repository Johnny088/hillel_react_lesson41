interface Props {
  searchQuery: (item: string) => void;
}
export const SearchForm = ({ searchQuery }: Props) => {
  const formHandler = (formData: FormData) => {
    const newQuery = formData.get('search') as string;
    searchQuery(newQuery);
  };
  return (
    <form action={formHandler}>
      <label htmlFor="search"></label>
      <input id="search" name="search" type="text" />
      <button>Search</button>
    </form>
  );
};
