import React, { useState } from "react";
import OptionRow from "./OptionRow";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function ItemGroup({ group, selectedCount }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-start text-left"
      >
        <div className="flex gap-2">
          <div className="pt-1">
            {open ? (
              <FaChevronDown className="text-gray-500" />
            ) : (
              <FaChevronRight className="text-gray-500" />
            )}
          </div>
          <div>
            <div className="font-medium">{group.name}</div>
            <div className="text-sm text-gray-500">{`${group.options.length} options available`}</div>
          </div>
        </div>
        {selectedCount > 0 && (
          <span className="text-sm font-semibold text-black pt-1">{`${selectedCount} selected`}</span>
        )}
      </button>

      {open && (
        <div className="mt-3 pl-7">
          {group.options.map((opt) => (
            <OptionRow key={opt.id} groupId={group.id} option={opt} />
          ))}
        </div>
      )}
    </div>
  );
}
