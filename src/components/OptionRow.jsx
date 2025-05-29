import React, { useState, useEffect } from "react";
import { usePlan } from "./PlanContext";

export default function OptionRow({ groupId, option }) {
  const { selected, addOrUpdate, remove } = usePlan();
  const current = selected[groupId]?.[option.id];
  const [qty, setQty] = useState(current?.qty || 0);

  useEffect(() => {
    if (qty > 0) {
      addOrUpdate(groupId, option.id, { ...option, qty });
    }
  }, [qty]);

  const handleRemove = () => {
    remove(groupId, option.id);
    setQty(0);
  };

  return (
    <div className="flex items-center gap-2 my-2">
      <div className="flex gap-2 items-center border px-2 py-1 rounded">
        <button onClick={() => setQty(Math.max(0, qty - 1))}>−</button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>
      <span>£{option.price}</span>
      {qty >= (option.min || 1) ? (
        <button className="ml-auto text-sm text-white bg-purple-500 px-2 py-1 rounded" onClick={handleRemove}>
          Remove
        </button>
      ) : (
        <button className="ml-auto text-sm text-white bg-purple-500 px-2 py-1 rounded" onClick={() => setQty(option.min || 1)}>
          Add
        </button>
      )}
    </div>
  );
}
