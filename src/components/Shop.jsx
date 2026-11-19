import Newsletter from './Newsletter'

function Shop() {
  return (
    <section id="shop" className="mx-auto w-full max-w-[1320px] px-4 pt-20 lg:pt-28">
      <div className="relative grid items-end gap-6 lg:min-h-[586px] lg:grid-cols-[1fr_1fr] lg:gap-[19%]">
        <img
          src="/images/shop-banner.jpg"
          alt="Pre-order"
          className="hidden h-[482px] w-[42%] rounded-3xl object-cover lg:absolute lg:top-0 lg:left-[28.7%] lg:block"
        />

        <div className="relative rounded-3xl bg-[#f6f6f6] px-6 py-10 sm:px-12 lg:min-h-[506px] lg:px-20 lg:py-0 lg:pt-[88px]">
          <h6 className="text-xs font-bold tracking-wide text-lugx-red uppercase">Our Shop</h6>
          <h2 className="mt-5 text-[26px] leading-[1.25] font-bold sm:text-[32px] lg:text-[36px]">
            Go Pre-Order Buy &amp; Get Best <span className="text-lugx-blue">Prices</span> For You!
          </h2>
          <p className="mt-8 max-w-[360px] text-sm leading-6 font-semibold">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.
          </p>
          <button
            onClick={() => alert('Opening the shop')}
            className="mt-8 rounded-full bg-lugx-red px-7 py-3 text-xs font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-lugx-blue"
          >
            Shop Now
          </button>
        </div>

        <Newsletter />
      </div>
    </section>
  )
}


export default Shop
