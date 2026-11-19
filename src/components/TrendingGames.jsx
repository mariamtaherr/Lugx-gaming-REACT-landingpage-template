const games = [
  { name: 'Assasin Creed', category: 'Action', oldPrice: '$28', price: '$20', image: 'trending-01.jpg' },
  { name: 'Assasin Creed', category: 'Action', oldPrice: '', price: '$44', image: 'trending-02.jpg' },
  { name: 'Assasin Creed', category: 'Action', oldPrice: '$64', price: '$44', image: 'trending-03.jpg' },
  { name: 'Assasin Creed', category: 'Action', oldPrice: '', price: '$32', image: 'trending-04.jpg' },
]

function TrendingGames() {
  return (
    <section id="trending" className="mx-auto w-full max-w-[1320px] px-4 pt-20 lg:pt-28">
      <div className="mb-10 flex items-end justify-between lg:mb-14">
        <div>
          <h6 className="text-xs font-bold tracking-wide text-lugx-red uppercase">Trending</h6>
          <h2 className="mt-2 text-[28px] font-semibold sm:text-[34px]">Trending Games</h2>
        </div>
        <button
          onClick={() => alert('Showing all trending games')}
          className="rounded-full bg-lugx-red px-6 py-3 text-xs font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-lugx-blue sm:px-8"
        >
          View All
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {games.map((game, index) => (
          <div key={index} className="group overflow-hidden rounded-3xl bg-[#eee]">
            <div className="relative">
              <img src={'/images/' + game.image} alt={game.name} className="h-[200px] w-full rounded-3xl object-cover sm:h-[226px]" />
              <div className="absolute top-3 right-3 rounded-lg bg-lugx-blue px-2.5 py-1 text-center text-white">
                {game.oldPrice !== '' && <div className="text-[11px] leading-none line-through opacity-80">{game.oldPrice}</div>}
                <div className="text-sm font-bold">{game.price}</div>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <span className="block text-[13px] text-lugx-gray">{game.category}</span>
                <h4 className="text-[15px] font-semibold transition-colors duration-300 group-hover:text-lugx-blue">{game.name}</h4>
              </div>
              <button
                onClick={() => alert(game.name + ' added to cart')}
                aria-label="Add to cart"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-lugx-red transition-all duration-300 group-hover:bg-lugx-blue"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="white">
                  <path d="M6 8h12l1 12H5L6 8Zm3 0V7a3 3 0 0 1 6 0v1h-1.8V7a1.2 1.2 0 0 0-2.4 0v1H9Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrendingGames
