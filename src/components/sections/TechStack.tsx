import TechCard from '../ui/TechCard';
import { techCategories } from '../../lib/techStackData';

export default function TechStack() {
  return (
    <div className="container-wide">
      <header className="section-header stack-sm">
        <h2 id="techstack-heading">Tech stack</h2>
      </header>

      <div className="section-content">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((category) => (
            <TechCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
