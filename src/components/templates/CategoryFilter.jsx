import clsx from 'clsx'
import { CATEGORIES } from '../../utils/constants.js'

export default function CategoryFilter({ active, onSelect, categories }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={clsx(
            'px-3 py-1.5 text-xs font-medium rounded-full border transition-all',
            active === cat
              ? 'bg-ink text-white border-ink shadow-sm'
              : 'bg-white text-gray-600 border-mist hover:border-gray-400'
          )}
        >
          {CATEGORIES[cat]?.icon} {CATEGORIES[cat]?.label || cat}
        </button>
      ))}
    </div>
  )
}
