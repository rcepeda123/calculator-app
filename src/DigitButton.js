import { ACTIONS } from "./App"

// Defining and exporting the DigitButton component
export default function DigitButton({ dispatch, digit }) {
  // Rendering the button with the specified digit
  return (
    <button
      // Handling click event to dispatch ADD_DIGIT action with payload
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {/* Displaying the digit as button label */}
      {digit}
    </button>
  )
}