import {useId} from "react";

type CheckboxProps = {
    label: string
}

export const Checkbox = ({label}:CheckboxProps) => {
    const id = useId()
  return (
      <div key={id} className="flex items-center">
          <input
              id={id}
              name={id}
              type="checkbox"
              className="h-4 w-4 rounded-lg border-gray-200 text-indigo-600 dark:border-gray-300 focus:ring-indigo-500"
          />
          <label
              htmlFor={id}
              className="ml-3 text-sm text-gray-600"
          >
              {label}
          </label>
      </div>
  )
}
