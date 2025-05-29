import React from "react";
import { usePlan } from "./PlanContext";

export default function RightPanel() {
  const { selected, remove, addOrUpdate } = usePlan();

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Title</h2>
      {Object.entries(selected).map(([groupId, options]) =>
        Object.entries(options).map(([optionId, opt]) => (
          <div key={optionId} className="mb-6 border-b pb-4">
            <h3 className="font-semibold text-sm mb-1">{opt.name || groupId}</h3>
            <div className="text-sm text-gray-700">{`Option ${optionId} £${opt.price}`}</div>
            <div className="text-sm text-gray-500 mb-1">{`${opt.term} / ${opt.billing}`}</div>
            <div className="flex items-center gap-2">
              <button onClick={() => addOrUpdate(groupId, optionId, { ...opt, qty: Math.max(0, opt.qty - 1) })}>−</button>
              <span>{opt.qty}</span>
              <button onClick={() => addOrUpdate(groupId, optionId, { ...opt, qty: opt.qty + 1 })}>+</button>
              <button
                className="ml-auto text-sm text-white bg-purple-500 px-3 py-1 rounded"
                onClick={() => remove(groupId, optionId)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
