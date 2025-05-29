import React from "react";
import { usePlan } from "./PlanContext";

export default function AddonTableRow({ option, index, groupId }) {
  const { selected, addOrUpdate, remove } = usePlan();
  const current = selected[groupId]?.[option.id];
  const qty = current?.qty || 0;

  const updateQty = (newQty) => {
    if (newQty > 0) {
      addOrUpdate(groupId, option.id, { ...option, qty: newQty });
    } else {
      remove(groupId, option.id);
    }
  };

  return (
    <div className="grid grid-cols-[60px_120px_120px_1fr_80px_80px] gap-4 items-center py-3 border-b">
      <div>{index + 1}</div>
      <div>{option.term}</div>
      <div>{option.billing}</div>
      <div>
        <div className="flex items-center rounded-md border border-black overflow-hidden w-fit">
          <button
            onClick={() => updateQty(Math.max(0, qty - 1))}
            className="px-3 py-2 text-lg text-gray-500"
          >
            −
          </button>
          <div className="px-4 py-2 text-lg border-x border-black font-medium">
            {qty}
          </div>
          <button
            onClick={() => updateQty(qty + 1)}
            className="px-3 py-2 text-lg text-black"
          >
            +
          </button>
        </div>
        {option.min && (
          <div className="text-xs text-gray-500 mt-1">Min {option.min}</div>
        )}
      </div>
      <div className="text-right">£{option.price}</div>
      <div>
        {current ? (
          <button
            className="w-full flex items-center justify-center text-sm px-4 py-2.5 rounded-md border border-gray-300 bg-white"
            onClick={() => updateQty(0)}
          >
            <span className="text-red-500">🗑</span>
          </button>
        ) : (
          <button
            className="w-full text-sm text-white px-4 py-2.5 rounded-md"
            style={{ backgroundColor: '#A34796' }}
            onClick={() => updateQty(option.min || 1)}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
