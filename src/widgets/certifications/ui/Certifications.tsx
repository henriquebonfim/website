import { CERTIFICATIONS, type Certification } from '@/entities/certification';
import { SectionAlienCaption } from '@/shared/ui';
import { msg } from '@lingui/core/macro';
import { Trans, useLingui } from '@lingui/react/macro';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';

type TypeCategoryFilter = 'All' | Certification['typeCategory'];
type VendorFilter = 'All' | string;

export const Certifications = () => {
  const { i18n } = useLingui();
  const typeCategoryOrder: Certification['typeCategory'][] = [
    'Certification',
    'Experience',
    'Learning',
    'Validation',
  ];
  const typeCategoryLabels: Record<Certification['typeCategory'], string> = {
    Certification: i18n._(msg`Certification`),
    Experience: i18n._(msg`Experience`),
    Learning: i18n._(msg`Learning`),
    Validation: i18n._(msg`Validation`),
  };

  const certificationsWithTypeCategory = useMemo(
    () =>
      CERTIFICATIONS.map((certification) => ({
        ...certification,
        typeCategory: certification.typeCategory,
      })),
    []
  );

  const typeCategoryOptions = useMemo(() => {
    const availableTypeCategories = typeCategoryOrder.filter((typeCategory) =>
      certificationsWithTypeCategory.some(
        (certification) => certification.typeCategory === typeCategory
      )
    );

    const output = [
      { label: 'All', value: 'All' },
      ...availableTypeCategories.map((typeCategory) => ({
        label: typeCategoryLabels[typeCategory],
        value: typeCategory,
      })),
    ];

    return output;
  }, [certificationsWithTypeCategory]);

  const [typeCategoryFilter, setTypeCategoryFilter] = useState<TypeCategoryFilter>(
    typeCategoryOrder[0]
  );
  const [vendorFilter, setVendorFilter] = useState<VendorFilter>('All');

  const typeCategoryFiltered = useMemo(
    () =>
      typeCategoryFilter === 'All'
        ? certificationsWithTypeCategory
        : certificationsWithTypeCategory.filter(
            (certification) => certification.typeCategory === typeCategoryFilter
          ),
    [certificationsWithTypeCategory, typeCategoryFilter]
  );

  const vendorOptions = useMemo(() => {
    const vendors = Array.from(
      new Set(typeCategoryFiltered.map((certification) => certification.issuer))
    ).sort((left, right) => left.localeCompare(right));

    return ['All', ...vendors] as VendorFilter[];
  }, [typeCategoryFiltered]);

  const filtered = useMemo(
    () =>
      vendorFilter === 'All'
        ? typeCategoryFiltered
        : typeCategoryFiltered.filter((certification) => certification.issuer === vendorFilter),
    [typeCategoryFiltered, vendorFilter]
  );

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative py-24 md:py-32 certifications-scene"
    >
      <div className="container">
        <div className="mb-10">
          <SectionAlienCaption label="certifications" className="mb-3" />
          <h2
            id="certifications-heading"
            className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase"
          >
            <Trans>credentials and skills</Trans>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            <Trans>Verified across cloud, platform, security, and AI.</Trans>
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <Trans>Type category</Trans>
          </p>
          <div className="flex flex-wrap gap-2">
            {typeCategoryOptions.map(({ label, value: typeCategory }) => {
              const active = typeCategoryFilter === typeCategory;
              const count =
                typeCategory === 'All'
                  ? certificationsWithTypeCategory.length
                  : certificationsWithTypeCategory.filter(
                      (certification) => certification.typeCategory === typeCategory
                    ).length;

              return (
                <button
                  key={typeCategory}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setTypeCategoryFilter(typeCategory);
                    setVendorFilter('All');
                  }}
                  className={`relative inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                    active
                      ? 'border-primary/60 bg-primary/15 text-foreground'
                      : 'border-border text-muted-foreground hover:text-foreground hover:border-border'
                  }`}
                >
                  <span>{label}</span>
                  <span className="text-[10px] opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-8">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <Trans>Vendor</Trans>
          </p>
          <div className="flex flex-wrap gap-2">
            {vendorOptions.map((vendor) => {
              const active = vendorFilter === vendor;
              const count =
                vendor === 'All'
                  ? typeCategoryFiltered.length
                  : typeCategoryFiltered.filter((certification) => certification.issuer === vendor)
                      .length;

              return (
                <button
                  key={vendor}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setVendorFilter(vendor)}
                  className={`relative inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                    active
                      ? 'border-primary/60 bg-primary/15 text-foreground'
                      : 'border-border text-muted-foreground hover:text-foreground hover:border-border'
                  }`}
                >
                  <span>{vendor}</span>
                  <span className="text-[10px] opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.article
                layout
                key={c.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-xl border border-border bg-card/60 backdrop-blur-md p-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-row items-start content-center justify-start gap-5">
                  <div className="shrink-0 grid place-items-center rounded-lg text-primary-glow ">
                    {c.imageUrl ? (
                      <a href={c.badgeUrl} target="_blank" rel="noopener noreferrer">
                        <img
                          src={c.imageUrl}
                          alt={c.name}
                          className="h-24 w-24 object-contain bg-transparent"
                        />
                      </a>
                    ) : (
                      <Award className="h-5 w-5" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <a href={c.badgeUrl} target="_blank" rel="noopener noreferrer">
                      <h3 className="font-mono text-[13px] font-semibold leading-snug text-foreground group-hover:text-primary-glow transition-colors">
                        {c.name}
                      </h3>
                    </a>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {c.issuer} ·{' '}
                      <time dateTime={c.issuedAt} className="font-mono">
                        {c.year}
                      </time>
                      {c.expiresAt ? (
                        <>
                          {' '}
                          · expires{' '}
                          <time dateTime={c.expiresAt} className="font-mono">
                            {new Date(c.expiresAt).getFullYear()}
                          </time>
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>
                {c.skills.length ? (
                  <details className="mt-3 group/details">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg border border-border/70 bg-secondary/20 px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-border [&::-webkit-details-marker]:hidden">
                      <span>
                        <Trans>Show skills</Trans>
                      </span>
                      <ChevronDown className="h-4 w-4 transition-transform group-open/details:rotate-180" />
                    </summary>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {c.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border/70 bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </details>
                ) : null}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
