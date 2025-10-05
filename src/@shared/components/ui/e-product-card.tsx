import { EProductCardProps } from "../types/product-card";
import { EBadge } from "./e-badge";

export const EProductCard: React.FC<EProductCardProps> = ({
  imageSrc,
  imageAlt = "",
  badge,
  title,
  category,
  description,
  tags = [],
  href,
  className = "",
}) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={[
        "block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm",
        "hover:shadow-md transition-shadow",
        className,
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
       
        <EBadge label="Most Popular" className="absolute top-2 right-2 shadow" />
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-[18px] font-semibold leading-6 text-gray-900">
          {title}
        </h3>

        {category && (
          <button
            type="button"
            onClick={category.onClick}
            className="mt-1 text-sm text-brand hover:underline"
          >
            {category.label}
          </button>
        )}

        {description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={t.onClick}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-800 hover:bg-gray-100"
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};