const games = [
  { name: 'Assasin Creed', category: 'Adventure', image: 'top-game-01.jpg' },
  { name: 'Assasin Creed', category: 'Adventure', image: 'top-game-02.jpg' },
  { name: 'Assasin Creed', category: 'Adventure', image: 'top-game-03.jpg' },
  { name: 'Assasin Creed', category: 'Adventure', image: 'top-game-04.jpg' },
  { name: 'Assasin Creed', category: 'Adventure', image: 'top-game-05.jpg' },
  { name: 'Assasin Creed', category: 'Adventure', image: 'top-game-06.jpg' },
]

function MostPlayed() {
  return (
    <section
      id="details"
      className="mt-20 rounded-[40px] bg-[#f6f6f6] py-16 md:rounded-[100px] lg:mt-28 lg:rounded-[150px] lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1320px] px-4">
        <div className="mb-10 flex items-end justify-between lg:mb-14">
          <div>
            <h6 className="text-xs font-bold tracking-wide text-lugx-red uppercase">Top Games</h6>
            <h2 className="mt-2 text-[28px] font-semibold sm:text-[34px]">Most Played</h2>
          </div>
          <button
            onClick={() => alert('Showing all popular games')}
            className="rounded-full bg-lugx-red px-6 py-3 text-xs font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-lugx-blue sm:px-8"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {games.map((game, index) => (
            <div key={index} className="group rounded-3xl bg-white pb-4 text-center">
              <img src={`${import.meta.env.BASE_URL}images/${game.image}`} alt={game.name} className="aspect-square w-full rounded-3xl object-cover" />
              <span className="mt-3 block text-[13px] text-lugx-gray">{game.category}</span>
              <h4 className="mt-0.5 text-[15px] font-semibold transition-colors duration-300 group-hover:text-lugx-blue">{game.name}</h4>
              <button
                onClick={() => alert('Exploring ' + game.name)}
                className="mt-3 rounded-full bg-lugx-red px-5 py-2 text-[11px] font-bold tracking-wide text-white uppercase transition-all duration-300 group-hover:bg-lugx-blue"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MostPlayed
