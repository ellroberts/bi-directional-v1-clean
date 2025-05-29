import React from "react";
import { usePlan } from "./PlanContext";
import { FaTrash } from "react-icons/fa";

export default function RightPanel() {
  const { selected, remove, addOrUpdate } = usePlan();

  return (
    <div>
      <h2 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem" }}>Title</h2>
      {Object.entries(selected).map(([groupId, options]) =>
        Object.entries(options).map(([optionId, opt]) => (
          <div
            key={optionId}
            style={{
              marginBottom: "1.5rem",
              borderBottom: "1px solid #ddd",
              paddingBottom: "1rem"
            }}
          >
            <h3
              style={{
                fontWeight: "600",
                fontSize: "0.875rem",
                marginBottom: "0.25rem"
              }}
            >
              {opt.name || groupId}
            </h3>

            <div style={{ fontSize: "0.875rem", color: "#000" }}>
              Option {optionId} £{opt.price}
            </div>

            <div
              style={{
                fontSize: "0.875rem",
                color: "#6B7280",
                marginBottom: "0.25rem"
              }}
            >
              {opt.term} / {opt.billing}
            </div>

            {/* License Control */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "32px",
                  border: "1px solid #000",
                  borderRadius: "4px",
                  overflow: "hidden"
                }}
              >
                <button
                  onClick={() =>
                    addOrUpdate(groupId, optionId, {
                      ...opt,
                      qty: Math.max(0, opt.qty - 1)
                    })
                  }
                  style={{
                    padding: "0 10px",
                    fontSize: "14px",
                    height: "100%",
                    borderRight: "1px solid #000",
                    backgroundColor: "white",
                    cursor: "pointer"
                  }}
                >
                  −
                </button>
                <input
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  value={opt.qty}
  onChange={(e) =>
    addOrUpdate(groupId, optionId, {
      ...opt,
      qty: Math.max(0, parseInt(e.target.value) || 0),
    })
  }
  style={{
    width: "48px",
    height: "100%",
    textAlign: "center",
    border: "none",
    outline: "none",
    fontSize: "14px",
    backgroundColor: "white"
  }}
/>
                <button
                  onClick={() =>
                    addOrUpdate(groupId, optionId, {
                      ...opt,
                      qty: opt.qty + 1
                    })
                  }
                  style={{
                    padding: "0 10px",
                    fontSize: "14px",
                    height: "100%",
                    borderLeft: "1px solid #000",
                    backgroundColor: "white",
                    cursor: "pointer"
                  }}
                >
                  +
                </button>
              </div>

              {/* Min 10 */}
              {opt.qty >= 10 && (
                <span style={{ fontSize: "12px", color: "#6B7280" }}>Min 10</span>
              )}

              {/* Trash button */}
              <button
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
                onClick={() => remove(groupId, optionId)}
                title="Remove"
              >
                <FaTrash style={{ color: "#EF4444", fontSize: "0.875rem" }} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
