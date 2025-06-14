import Link from "next/link";

const Footer = () => {
  const footerData = [
    {
      title: "Visit Us",
      links: [
        { name: "Dilpasand, Whitechapel, London", href: "#" },
        {
          name: "Nearest Stations: Aldgate East, Whitechapel, Liverpool Street",
          href: "#",
        },
        { name: "Open Daily: Midday – 11:30 PM", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "+44 20 7247 0285", href: "tel:+442072470285" },
        { name: "+44 73 6865 7788", href: "tel:+447368657788" },
        { name: "info@dilpasand.co.uk", href: "mailto:info@dilpasand.co.uk" },
        { name: "Reservation", href: "/reservation" },
        { name: "Catering", href: "/catering" },
      ],
    },
    {
      title: "Group Bookings",
      links: [
        {
          name: "For private dining and customized packages, call us directly.",
          href: "tel:+442072470285",
        },
      ],
    },
    {
      title: "Follow Us",
      links: [
        {
          name: "TikTok: @dilpasand_london",
          href: "https://www.tiktok.com/@dilpasand_london",
        },
      ],
    },
  ];
  return (
    <footer className="bg-custom-primary px-4 py-12 text-white sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Visit Us - Wider Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-semibold uppercase tracking-wider text-yellow-400">
                Visit Us
              </h4>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontSize: "18px" }}
                >
                  Dilpasand, Whitechapel, London
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontSize: "18px" }}
                >
                  Nearest Stations: Aldgate East, Whitechapel, Liverpool Street
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontSize: "18px" }}
                >
                  Open Daily: Midday – 11:30 PM
                </p>
              </div>
              {/* Optional: Add a map embed here */}
            </div>
          </div>

          {/* Other Sections */}
          {footerData.slice(1).map((section, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h4 className="text-lg font-semibold uppercase tracking-wider text-yellow-400">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-yellow-300 hover:underline text-[16px]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p style={{ fontSize: "18px" }}>{link.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-gray-400" style={{ fontSize: "18px" }}>
            © 2025 Dilpasand. All rights reserved
          </p>

          {/* Optional: Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/dilpasandrestaurant/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-yellow-300"
              aria-label="Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@dilpasand_london"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-yellow-300"
              aria-label="TikTok"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
