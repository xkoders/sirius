export const Checkbox = ({
  label,
  checked,
  onChange,
}: {
  label?: string
  checked?: boolean
  onChange: () => void
}) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      {/* Checkbox input */}
      <input
        type="checkbox"
        title={label || ''}
        className="w-5 h-5  outline-none border-2 border-gray-400 rounded-sm cursor-pointer checked:bg-blue-500"
        checked={checked}
        onChange={onChange}
      />
    </label>
  )
}
