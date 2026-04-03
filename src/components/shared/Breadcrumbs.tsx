import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" className="section-container pt-24 md:pt-32 pb-0">
    <ol className="flex items-center gap-1.5 text-[11px] text-muted-foreground/60 font-body">
      <li>
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
      </li>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3 h-3" />
          {item.href && i < items.length - 1 ? (
            <Link to={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-muted-foreground">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
