type Tag = { id: string; label: string; onClick?: () => void };

export interface EProductCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  category?: { label: string; onClick?: () => void };
  description?: string;
  tags?: Tag[];
  href?: string;  
  className?: string;
}
