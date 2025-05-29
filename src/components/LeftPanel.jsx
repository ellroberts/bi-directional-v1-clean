import React from "react";
import { usePlan } from "./PlanContext";
import AddonTableRow from "./AddonTableRow";

const data = [
  {
    name: "MS365 Business Basic",
    id: "ms365",
    options: [
      { id: "1", term: "Monthly", billing: "Monthly", price: 7, min: 10 },
      { id: "2", term: "Monthly", billing: "Annual", price: 7, min: 0 },
      { id: "3", term: "Annual", billing: "Annual", price: 7, min: 0 },
    ],
  },
  {
    name: "Something else",
    id: "other-1",
    options: [],
  },
  {
    name: "Something else",
    id: "other-2",
    options: [],
  },
];

export default function LeftPanel() {
  const { selected } = usePlan();

  return (
    <div>
      {data.map((group) => {
        const selectedCount = selected[group.id]
          ? Object.keys(selected[group.id]).length
          : 0;

        return (
          <div key={group.id} className="border-b pb-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="font-semibold">{group.name}</div>
                <div className="text-sm text-gray-500">
                  {group.options.length} options available
                </div>
              </div>
              {selectedCount > 0 && (
                <div className="text-sm font-semibold text-black">
                  {selectedCount} selected
                </div>
              )}
            </div>

            {/* Table headers */}
            {group.options.length > 0 && (
              <div className="grid grid-cols-[60px_120px_120px_1fr_80px_80px] gap-4 text-sm font-semibold text-gray-700 border-b py-2">
                <div>Option</div>
                <div>Term</div>
                <div>Billing</div>
                <div>Licence</div>
                <div className="text-right">Price</div>
                <div></div>
              </div>
            )}

            {/* Table rows */}
            {group.options.map((opt, idx) => (
              <AddonTableRow
                key={opt.id}
                index={idx}
                groupId={group.id}
                option={opt}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
