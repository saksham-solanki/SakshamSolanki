"use client"

export function CategoryNav({ categories }: { categories: { id: string; label: string }[] }) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 100
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    } else {
      // Fallback: use native hash navigation
      window.location.hash = id
    }
  }

  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => handleClick(cat.id)}
          className="px-4 py-2 text-sm font-medium rounded-btn border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors cursor-pointer"
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
