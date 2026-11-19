const features = [
  {
    title: 'Free Storage',
    icon: <path d="M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9a4 4 0 0 1 0 8h-1M12 11v8m0 0-3-3m3 3 3-3" />,
  },
  {
    title: 'User More',
    icon: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 20a7 7 0 0 1 14 0" />,
  },
  {
    title: 'Reply Ready',
    icon: <path d="M20 12a8 8 0 1 1-3-6.2M20 3v5h-5M10 9l5 3-5 3Z" />,
  },
  {
    title: 'Easy Layout',
    icon: <path d="M4 5h16v14H4ZM4 9h16M7 7h.01M10 7h.01M7 13h6M7 16h4" />,
  },
]

function Features() {
  return (
    <section className="relative -mt-12 lg:-mt-20">
      <div className="mx-auto grid w-full max-w-[1320px] gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center rounded-[20px] bg-white px-4 py-8 shadow-[0_5px_25px_rgba(0,0,0,0.08)] "
          >
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-lugx-blue lg:h-[90px] lg:w-[90px] transition-all duration-300 hover:bg-lugx-red">
              <svg viewBox="0 0 24 24" className="h-9 w-9 lg:h-11 lg:w-11" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round transition-all duration-300 hover:bg-lugx-red">
                {item.icon}
              </svg>
            </div>
            <h4 className="mt-4 text-[15px] font-semibold tracking-wide uppercase">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
