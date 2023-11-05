export default function Home() {
  return (
    <main className="md:h-screen flex mx-6 mt-20 md:mt-0 md:items-center md:mx-24">
        <div className="w-screen flex flex-col md:flex-row md:justify-between">
          <div>
            <h1 className="mb-2">&#128075; I&apos;m Juan</h1>
            <p className="mb-2">
              First, I started as a software engineer at <a className="font-medium text-blue-600 underline hover:no-underline" href="https://www.nicmexico.mx/" target="_blank">nic.mx</a>
            </p>
            <p className="mb-2">
              Then, founded <span className="font-semibold text-gray-900">Nominal</span>, a <a className="font-medium text-blue-600 underline hover:no-underline" href="https://rubyonrails.org/" target="_blank">Ruby on Rails</a> SaaS invoicing platform
            </p>
            <p className="mb-2">
              Later, I joined <a className="font-medium text-blue-600 underline hover:no-underline" href="https://yellow.me/" target="_blank">Yellowme</a> as partner, a digital product agency
            </p>
            <p>
              Now, I&apos;m a software engineer at <a className="font-medium text-blue-600 underline hover:no-underline" href="https://dnsimple.com/" target="_blank">DNSimple</a>
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="mb-10 md:mb-20">
              <h3 className="font-bold mb-2">Working on</h3>
              <p className="mb-2">
                <a className="font-medium text-blue-600 underline hover:no-underline" href="https://workremote.mx" target="_blank">workremote.mx</a>, curated remote jobs for mexicans built with <a className="font-medium text-blue-400 hover:no-underline" href="https://www.phoenixframework.org/" target="_blank">Phoenix Framework</a>
              </p>
              <p className="mb-2">
                And of course, <a className="font-medium text-blue-600 underline hover:no-underline" href="https://tldr.mx">tldr.mx</a>, a minimalistic website built with <a className="font-medium text-blue-400 hover:no-underline" href="https://nextjs.org/" target="_blank">NextJS</a>
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Latest links</h3>
              Read about <a className="font-medium text-blue-600 underline hover:no-underline" href="https://randsinrepose.com/archives/stables-and-volatiles/" target="_blank">stables and volatiles</a> taken from <a className="font-medium text-blue-400 hover:no-underline" href="https://randsinrepose.com/" target="_blank">randsinrepose.com</a>
            </div>
          </div>
      </div>
    </main>
  )
}
