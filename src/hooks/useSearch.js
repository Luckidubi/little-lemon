import { useMenuContext } from "../context/MenuContext";

const useSearch = ({ search }) => {
  const { menu } = useMenuContext();
  const searchMenu = () => {
    const filteredMenu = menu.filter((item) =>
      search === ""
        ? item
        : item.title.toLowerCase().includes(search.toLowerCase())
    );

    return filteredMenu;
  };

  return { searchMenu };
};

export default useSearch;
