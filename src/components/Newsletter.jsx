import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubscribe(event) {
    event.preventDefault()
    if (email === '') {
      alert('Please enter your email')
    } else {
      alert('Thanks for subscribing, ' + email)
      setEmail('')
    }
  }

  return (
    <div id="contact" className="relative rounded-3xl bg-[#f6f6f6] px-6 py-10 sm:px-12 lg:min-h-[400px] lg:px-20 lg:py-0 lg:pt-[88px]">
      <h6 className="text-xs font-bold tracking-wide text-lugx-red uppercase">Newsletter</h6>
      <h2 className="mt-5 text-[26px] leading-[1.25] font-bold sm:text-[32px] lg:text-[36px]">
        Get Up To $100 Off Just Buy <span className="text-lugx-blue">Subscribe</span> Newsletter!
      </h2>
      <form onSubmit={handleSubscribe} className="relative mt-8 max-w-[420px]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email..."
          className="h-12 w-full rounded-full bg-white pr-40 pl-6 text-[13px] outline-none placeholder:text-lugx-gray"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-12 rounded-full bg-lugx-red px-5 text-xs font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-lugx-blue"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  )
}

export default Newsletter
