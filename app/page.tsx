export default function Home() {
  return (
    <main className="md:h-screen flex mx-6 mt-10 mb-10 md:mb-0 md:mt-0 md:items-center md:mx-12 lg:mx-36 2xl:mx-80">
      <div className="w-screen flex flex-col md:flex-row md:justify-between">
        <div className="md:hidden mt-2 mb-8">——</div>
        <div>
          <h1 className="mb-2">&#128075; I&apos;m Juan</h1>
          <p className="mb-2">
            I enjoy working on Ruby on Rails, but I&apos;m fluent in ReactJS, NodeJS, Python...
          </p>
          <p className="mb-2">
            Former co-founder of <a className="font-medium text-blue-600 underline hover:no-underline" href="https://nominal.mx/" target="_blank">nominal.mx</a>, an invoicing platform
          </p>
          <p className="mb-2">
            Former co-founder of <a className="font-medium text-blue-600 underline hover:no-underline" href="https://yellow.me/" target="_blank">Yellowme</a>, a product development company
          </p>
          <div className="flex pt-4 sm:mt-0">
            <a href="https://twitter.com/juankuquintana" target="_blank" className="text-gray-500 hover:text-gray-900">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="https://github.com/juankuquintana" target="_blank" className="text-gray-500 hover:text-gray-900 ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            {/* <a href="https://www.linkedin.com/in/juankuquintana/" target="_blank" className="text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a> */}
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="mb-10 md:mb-15">
            <h3 className="font-bold mb-2">Building</h3>
            <p className="mb-2">
              <a className="font-medium text-blue-600 underline hover:no-underline" href="https://remotely.mx" target="_blank">remotely.mx</a>, a remote jobs board for 🇲🇽
            </p>
            <p className="mb-2">
              <a className="font-medium text-blue-600 underline hover:no-underline" href="https://picks.games" target="_blank">picks.games</a>, a sports pools web app
            </p>
            <p className="mb-2">
              Bringing back <a className="font-medium text-blue-600 underline hover:no-underline" href="https://nominal.mx" target="_blank">nominal.mx</a>
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Latest reads</h3>
            <p className="mb-2">
              <a className="font-medium text-blue-600 underline hover:no-underline" href="https://randsinrepose.com/archives/stables-and-volatiles/" target="_blank">Stables and volatiles</a> from <a className="font-medium text-blue-400 hover:no-underline" href="https://randsinrepose.com/" target="_blank">randsinrepose.com</a>
            </p>
            <p className="mb-2">
              <a className="font-medium text-blue-600 underline hover:no-underline" href="https://signalvnoise.com/posts/1430-hire-managers-of-one" target="_blank">Managers of one</a> from <a className="font-medium text-blue-400 hover:no-underline" href="https://signalvnoise.com/" target="_blank">signalvnoise.com</a>
            </p>
            <p className="mb-2">
              <a className="font-medium text-blue-600 underline hover:no-underline" href="https://hamvocke.com/blog/better-off-without-pull-requests/" target="_blank">Better without PR&apos;s</a> from <a className="font-medium text-blue-400 hover:no-underline" href="https://hamvocke.com/" target="_blank">hamvocke.com</a>
            </p>
            <p className="mb-2">
              <a className="font-medium text-blue-600 underline hover:no-underline" href="https://hamvocke.com/blog/path-to-production/" target="_blank">Path to production</a> from <a className="font-medium text-blue-400 hover:no-underline" href="https://hamvocke.com/" target="_blank">hamvocke.com</a>
            </p>
            <p className="mb-2">
              <a className="font-medium text-blue-600 underline hover:no-underline" href="https://www.paulgraham.com/aord.html" target="_blank">Default alive or dead?</a> from <a className="font-medium text-blue-400 hover:no-underline" href="https://www.paulgraham.com" target="_blank">paulgraham.com</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
