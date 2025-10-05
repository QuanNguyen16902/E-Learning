type Tag = { id: string; label: string; onClick?: () => void };

export interface EProductCardProps {
  imageSrc: string;
  imageAlt?: string;
  badge?: string;                 // ví dụ: "Most Popular"
  title: string;
  category?: { label: string; onClick?: () => void };
  description?: string;
  tags?: Tag[];
  href?: string;                  // nếu muốn click toàn thẻ
  className?: string;
}
