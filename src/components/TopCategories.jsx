const categories = [
  { name: 'Action', image: 'categories-01.jpg' },
  { name: 'Action', image: 'categories-02.jpg' },
  { name: 'Action', image: 'categories-03.jpg' },
  { name: 'Action', image: 'categories-04.jpg' },
  { name: 'Action', image: 'categories-05.jpg' },
]

function TopCategories() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 lg:pt-28">
      <div className="mb-10 text-center lg:mb-14">
        <h6 className="text-xs font-bold tracking-wide text-lugx-red uppercase">Categories</h6>
        <h2 className="mt-2 text-[28px] font-semibold sm:text-[34px]">Top Categories</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => alert('Showing ' + item.name + ' games')}
            className="group overflow-hidden rounded-3xl bg-lugx-blue text-center"
          >
            <h4 className="py-3 text-[15px] font-semibold text-white">{item.name}</h4>
            <div className="overflow-hidden rounded-3xl">
              <img src={`${import.meta.env.BASE_URL}images/${item.image}`} alt={item.name} className="aspect-[1/1] w-full object-cover" />
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default TopCategories
