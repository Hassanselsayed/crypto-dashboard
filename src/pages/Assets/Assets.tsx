import { useState, type ChangeEvent } from "react";
import Input from "../../components/Input/Input";

export default function Assets() {
  const [searchInput, setSeachInput] = useState<string>("");

  return (
    <div className="assets">
      {/* input search */}
      <Input
        type="search"
        name="search"
        value={searchInput}
        placeholder="Search by name or symbol..."
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSeachInput(e.target.value)
        }
      />
      <p>{searchInput}</p>

      {/* heading */}

      {/* filter-sort row */}
      {/* category filter */}
      {/* sort */}

      {/* dashboard */}
    </div>
  );
}
