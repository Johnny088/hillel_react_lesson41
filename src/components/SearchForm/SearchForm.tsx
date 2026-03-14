export const SearchForm = () => {
  const formHandler = (formData: FormData) => {
    const varSearch = formData.get('search') as string;
  };
  return (
    <form action={formHandler}>
      <label htmlFor="search"></label>
      <input id="search" name="search" type="text" />
      <button>Search</button>
    </form>
  );
};
