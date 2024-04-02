import { ACTIONS } from "./App"

// Defining and exporting the OperationButton component
export default function OperationButton({ dispatch, operation }) {
  // Rendering the button with the specified operation
  return (
    <button
      // Handling click event to dispatch CHOOSE_OPERATION action with payload
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {/* Displaying the operation as button label */}
      {operation}
    </button>
  )
}