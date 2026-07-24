import Link from "next/link"

const NOT_FOUND_CONTENT = {
  code: "404",
  label: "Page Not Found",
  title: "This page went off the grid.",
  description:
    "The page you're looking for doesn't exist or may have been moved. Let's get you back on track.",
  cta: { text: "Go Home", href: "/" },
}

const NotFound = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4">
      <p className="text-custom-accent font-mono mb-4">{NOT_FOUND_CONTENT.label}</p>

      <h1 className="text-7xl md:text-9xl font-bold text-custom-foreground mb-6 tracking-tight">
        {NOT_FOUND_CONTENT.code}
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-custom-foreground mb-4">
        {NOT_FOUND_CONTENT.title}
      </h2>

      <p className="text-lg text-custom-secondary mb-8 leading-relaxed max-w-md mx-auto">
        {NOT_FOUND_CONTENT.description}
      </p>

      <Link
        href={NOT_FOUND_CONTENT.cta.href}
        className="text-sm inline-block border border-accent text-custom-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors font-mono">
        {NOT_FOUND_CONTENT.cta.text}
      </Link>
    </section>
  )
}

export default NotFound
