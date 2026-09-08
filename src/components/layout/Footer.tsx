import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { SocialIcon } from "@/components/common/SocialIcon";
import { footerBrand, footerColumns, socials } from "@/data/footerLinks";

const SOCIAL_BOX =
  "inline-flex size-11 items-center justify-center rounded-control border border-line text-muted";
const LINK_BOX = "inline-flex min-h-6 items-center text-[14.5px]";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2 pt-band pb-10">
      <Container>
        <div className="grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 max-split:grid-cols-1">
          <div>
            <Logo />

            <p className="mt-5 max-w-[320px] text-body text-muted">
              {footerBrand.blurb}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {socials.map((social) => (
                <li key={social.key}>
                  {social.href ? (
                    <a
                      href={social.href}
                      className={`${SOCIAL_BOX} transition-colors duration-200 hover:border-accent-40 hover:text-ink`}
                    >
                      <SocialIcon name={social.key} />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ) : (
                    <span aria-hidden="true" className={SOCIAL_BOX}>
                      <SocialIcon name={social.key} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-8">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <p className="font-heading text-eyebrow uppercase text-ink">
                  {column.title}
                </p>

                <ul className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <a
                          href={link.href}
                          className={`${LINK_BOX} text-muted transition-colors duration-200 hover:text-ink`}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <span className={`${LINK_BOX} text-muted`}>
                          {link.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <p className="mt-14 border-t border-line pt-8 text-[13.5px] text-muted">
          {footerBrand.copyright}
        </p>
      </Container>
    </footer>
  );
}
