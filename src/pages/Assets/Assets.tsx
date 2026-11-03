import { useState, type ChangeEvent } from "react";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import "./Assets.scss";

const CATEGORIES_OPTIONS = [
  { label: "All Categories", value: "" },
  { label: "Category 1", value: "1" },
  { label: "Category 2", value: "2" },
  { label: "Category 3", value: "3" },
];

const SORT_OPTIONS = [
  { label: "Market Cap", value: "market-cap" },
  { label: "Price", value: "price" },
  { label: "24h Change", value: "24h-change" },
];

export default function Assets() {
  const [searchInput, setSeachInput] = useState<string>("");
  const [categoriesSelectedValue, setCategoriesSelectedValue] =
    useState<string>("");
  const [sortSelectedValue, setSortSelectedValue] =
    useState<string>("market-cap");

  return (
    <div className="assets">
      {/* heading */}
      <h1 className="assets__heading">Crypto Assets</h1>

      {/* input search */}
      <Input
        className="assets__input"
        type="search"
        name="search"
        value={searchInput}
        placeholder="Search by name or symbol..."
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSeachInput(e.target.value)
        }
      />
      {searchInput && <p>{searchInput}</p>}

      {/* filter-sort row */}
      <div className="assets__selects">
        {/* category filter */}
        <Select
          className="assets__select"
          name="categories"
          selectedValue={categoriesSelectedValue}
          options={CATEGORIES_OPTIONS}
          handleChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setCategoriesSelectedValue(e.target.value)
          }
        />
        {/* sort */}
        <Select
          className="assets__select"
          name="sort"
          selectedValue={sortSelectedValue}
          options={SORT_OPTIONS}
          handleChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSortSelectedValue(e.target.value)
          }
        />
      </div>

      {/* dashboard */}
    </div>
  );
}
