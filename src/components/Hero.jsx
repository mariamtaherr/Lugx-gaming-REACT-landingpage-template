import { useState } from 'react'

function Hero() {
  const [searchText, setSearchText] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    if (searchText === '') {
      alert('Please type something to search')
    } else {
      alert('Searching for: ' + searchText)
    }
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-b-[60px] bg-gradient-to-r from-lugx-blue to-[#0f87e8] pt-[200px] pb-32 md:rounded-b-[100px] lg:rounded-b-[150px] lg:pt-[130px] lg:pb-56"
    >
      <div className="absolute -top-20 right-1/3 h-[130%] w-40 rotate-[35deg] bg-white/5"></div>
      <div className="absolute -top-20 right-[12%] h-[130%] w-72 rotate-[35deg] bg-white/5"></div>

      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-12 pt-10 px-4 lg:grid-cols-2">
        <div>
          <h6 className="text-sm font-semibold tracking-wide text-white uppercase">Welcome to LUGX</h6>
          <h2 className="mt-3 text-[34px] leading-tight font-bold text-white uppercase sm:text-[44px] lg:text-[52px]">
            Best{' '}
            <span className="relative inline-block">
              Gaming
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" height="10">
                <path d="M2 8 Q50 0 100 6 T198 4" stroke="#e1516b" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{' '}
            Site Ever!
          </h2>
          <p className="mt-6 max-w-[520px] text-sm leading-7 text-white">
            LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and
            use this layout for commercial purposes. Please tell your friends about TemplateMo.
          </p>

          <form onSubmit={handleSearch} className="relative mt-10 max-w-[420px]">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Type Something"
              className="h-12 w-full rounded-full bg-white pr-36 pl-6 text-[13px] text-lugx-dark outline-none placeholder:text-lugx-gray"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 h-12 rounded-full bg-lugx-red px-6 text-xs font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-lugx-blue"
            >
              Search Now
            </button>
          </form>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[380px] lg:max-w-[400px]">
            <img src="/images/banner-image.jpg" alt="Banner game" className="w-full rounded-3xl bg-white object-cover" />
            <span className="absolute top-3 right-3 rounded-lg bg-lugx-blue px-3 py-1.5 text-sm font-bold text-white">$22</span>
            <span className="absolute -bottom-6 left-2 lg:-left-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-lugx-red text-lg font-bold text-white sm:h-[84px] sm:w-[84px] sm:text-xl">
              -40%
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
