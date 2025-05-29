import React, { useState } from "react";
import OptionRow from "./OptionRow";

export default function ItemGroup({ group, selectedCount }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center font-medium"
      >
        <span>{group.name}</span>
        <span className="text-sm text-gray-500">
          {selectedCount > 0 ? `${selectedCount} selected` : `${group.options.length} options available`}
        </span>
      </button>
      {open && (
        <div className="mt-3 pl-2">
          {group.options.map((opt) => (
            <OptionRow key={opt.id} groupId={group.id} option={opt} />
          ))}
        </div>
      )}
    </div>
  );
}
