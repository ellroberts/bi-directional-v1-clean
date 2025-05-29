import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import AddonTableRow from "./AddonTableRow";

export default function ItemGroup({ group, selectedCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b pb-4 mb-6">
      <div
  className="flex justify-between items-start cursor-pointer"
  onClick={() => setIsOpen(!isOpen)}
>
  {/* LEFT SIDE: Title and options available stacked */}
  <div>
    <div className="flex items-center gap-2">
      {isOpen ? (
        <FaChevronDown className="text-sm" />
      ) : (
        <FaChevronRight className="text-sm" />
      )}
      <div className="font-semibold">{group.name}</div>
    </div>
    <div className="text-sm text-gray-500 mt-1 ml-5">
      {group.options.length} options available
    </div>
  </div>

  {/* RIGHT SIDE: selected count (unchanged) */}
  {selectedCount > 0 && (
    <div className="text-sm font-semibold text-black ml-4">
      {selectedCount} selected
    </div>
  )}
</div>


      {isOpen && group.options.length > 0 && (
        <div className="pt-4 w-full flex justify-center bg-blue-100">
          <div className="w-full max-w-[1000px] px-6 border border-gray-200 rounded-md shadow-sm">
            <div className="grid grid-cols-[60px_120px_120px_1fr_80px_80px] gap-4 text-sm font-semibold text-gray-700 border-b py-2">
              <div>Option</div>
              <div>Term</div>
              <div>Billing</div>
              <div>Licence</div>
              <div className="text-right">Price</div>
              <div></div>
            </div>
            {group.options.map((opt, idx) => (
              <AddonTableRow
                key={opt.id}
                index={idx}
                groupId={group.id}
                option={opt}
                isLast={idx === group.options.length - 1}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
